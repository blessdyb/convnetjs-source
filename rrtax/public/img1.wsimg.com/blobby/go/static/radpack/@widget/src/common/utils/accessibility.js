import { UX2 } from "@wsb/guac-widget-core";

const { Color } = UX2.utils;

const cache = {};

// Euclidean distance squared
const hsvDistance = (hsv1, hsv2) =>
  Math.pow(hsv1.saturation - hsv2.saturation, 2) +
  Math.pow(hsv1.value - hsv2.value, 2);

// We use hsluv as our underlying color library.
// They use a different formula than W3C for calculating Contrast Ratio.
// In some edge cases, this can produce small differences where a color contrast
// meets accessibility standards according to hsluv, but not according to W3C.
// This error margin helps smooth out those differences in calculation.
// See https://github.com/hsluv/hsluv/blob/master/math/contrast.mac
const CONTRAST_ERROR_MARGIN = 0.02;

// given a starting y (initialValue), search up or down for curve threshold for the next x (saturation)
function findThreshold({
  threshold,
  backgroundRgb,
  hue,
  saturation,
  initialValue,
  isCurrentValueAccessible,
}) {
  for (let value = initialValue; value <= 100; value++) {
    const contrastRatio = Color.contrastRatio(
      backgroundRgb,
      Color.hsvToRgb(hue, saturation, value)
    );
    if (
      isCurrentValueAccessible &&
      contrastRatio < threshold + CONTRAST_ERROR_MARGIN
    )
      return value - 1;
    else if (
      !isCurrentValueAccessible &&
      contrastRatio >= threshold + CONTRAST_ERROR_MARGIN
    )
      return value;
  }
}

// An accessibility curve is mapped on a 2D plane of saturation vs value
// but can be represented as an array of values where the index is the saturation
// and each array value is the y-intercept value/brightness where we cross the threshold
function getAccessibilityCurve(threshold, background, foreground, hue) {
  const cacheKey = [threshold, background.toHex(), hue].join();
  if (!(cacheKey in cache)) {
    const curve = [];

    const backgroundRgb = background.toRgb(false, false);
    const foregroundRgb = foreground.toRgb(false, false);

    // solve for saturation = 0 to get an idea of the shape of the curve
    // or return early if no curve exists
    const initialValue = findThreshold({
      threshold,
      backgroundRgb,
      hue,
      saturation: 0,
      initialValue: 0,
      isCurrentValueAccessible:
        Color.contrastRatio(foregroundRgb, backgroundRgb) >=
        threshold + CONTRAST_ERROR_MARGIN,
    });
    if (typeof initialValue !== "number") return []; // couldn't find a value that meets the threshold

    curve.push(initialValue);
    for (let saturation = 1; saturation <= 100; saturation++) {
      const curveValue = findThreshold({
        threshold,
        backgroundRgb,
        hue,
        saturation,
        initialValue: curve[saturation - 1],
        isCurrentValueAccessible: background.isLight(),
      });
      if (!curveValue) break;
      curve.push(curveValue);
    }
    cache[cacheKey] = curve;
  }
  return cache[cacheKey];
}

export function getNearestAccessibleColors(
  contrastThreshold,
  background,
  foreground,
  count = 1
) {
  if (
    Color.contrastRatio(foreground, background) >=
    contrastThreshold + CONTRAST_ERROR_MARGIN
  )
    return [foreground]; // already accessible

  const [hue, saturation, value] = foreground.toHsv();
  const curve = getAccessibilityCurve(
    contrastThreshold,
    background,
    foreground,
    hue
  );
  const sortedDistances = curve
    .map((v, i) => {
      return {
        saturation: i,
        value: v,
        distance: hsvDistance(
          { saturation: i, value: v },
          { saturation, value }
        ),
      };
    })
    .sort((a, b) => a.distance - b.distance);
  return sortedDistances
    .slice(0, count)
    .map((color) => Color.fromHSV(hue, color.saturation, color.value));
}
