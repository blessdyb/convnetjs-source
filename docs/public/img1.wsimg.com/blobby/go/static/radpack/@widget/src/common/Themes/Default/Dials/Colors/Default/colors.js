import { first } from "lodash";
import { UX2, constants } from "@wsb/guac-widget-core";
import * as utils from "../utils";
import { BLACK_COLOR, WHITE_COLOR } from "../constants/colors";
import { getFontSizeByDevice } from "../../Fonts/Default/fontSize";
import { getNearestAccessibleColors } from "../../../../../utils/accessibility";

const { Color, accessibility } = UX2.utils;
const { PRIMARY } = constants.categoryTypes;
const { DEFAULT_WEBSITE_FONT_SCALES } = constants.fontScales;
const { OVERLAY } = constants.sectionTypes;
const { AA } = constants.accessibility.CONFORMANCE_LEVEL;

function minimumContrastRatio() {
  const { fontSize, fontFamily, fontScale, forceBreakpoint } = this.base;
  const scaledFontSize =
    getFontSizeByDevice.call(this, fontSize, forceBreakpoint) *
    DEFAULT_WEBSITE_FONT_SCALES[fontScale];
  const mappedFontWeight = utils.getProp(
    this,
    "fontDial",
    `${fontFamily}.weight`
  );
  return accessibility.textContrastThresholds(scaledFontSize, mappedFontWeight)[
    AA
  ];
}

function accessible(color) {
  const background = utils.getDial(this, "background");
  const contrastRatioThreshold = minimumContrastRatio.call(this);

  if (Color.contrastRatio(color, background) < contrastRatioThreshold) {
    const nearestAccessible = first(
      getNearestAccessibleColors(contrastRatioThreshold, background, color)
    );
    if (nearestAccessible) return nearestAccessible;
  }
  return color;
}

function colorSection() {
  const [background, multiplier] = utils.getDial(this, [
    "background",
    "multiplier",
  ]);
  return background.setAlpha(100).contrast(60 * multiplier);
}

function colorBackground() {
  return utils.getDial(this, "background");
}

function colorPrimary() {
  const [primary, background, multiplier] = utils.getDial(this, [
    "primary",
    "background",
    "multiplier",
  ]);
  return primary.contrastWith(background, 40 * multiplier, true);
}

function colorPrimaryOverlay() {
  const [primary, background] = utils.getDial(this, ["primary", "background"]);
  const newAlpha =
    background.alpha === 100 ? 90 : background.alpha === 90 ? 50 : 30;
  return primary.setAlpha(newAlpha);
}

function colorAccent() {
  const [accent, background, multiplier] = utils.getDial(this, [
    "accent",
    "background",
    "multiplier",
  ]);
  return accent.contrastWith(background, 40 * multiplier, true);
}

function colorNeutral() {
  const [neutral, background, multiplier] = utils.getDial(this, [
    "neutral",
    "background",
    "multiplier",
  ]);
  return neutral.contrastWith(background, 40 * multiplier, true);
}

function colorError() {
  const [background, multiplier, error] = utils.getDial(this, [
    "background",
    "multiplier",
    "error",
  ]);
  return error.contrastWith(background, 50 * multiplier, true);
}

function colorHighContrast() {
  const [background, multiplier] = utils.getDial(this, [
    "background",
    "multiplier",
  ]);
  return background.setAlpha(100).contrast(90 * multiplier);
}

function colorLowContrast() {
  const [background, multiplier] = utils.getDial(this, [
    "background",
    "multiplier",
  ]);
  return background.setAlpha(100).contrast(62 * multiplier);
}

function colorUltraLowContrast() {
  const [background, multiplier] = utils.getDial(this, [
    "background",
    "multiplier",
  ]);
  return background.setAlpha(100).contrast(20 * multiplier);
}

function colorHighlight() {
  const [background, multiplier, highlight, primary] = utils.getDial(this, [
    "background",
    "multiplier",
    "highlight",
    "primary",
  ]);
  const { category, section } = this.base;
  return category === PRIMARY || section === OVERLAY
    ? highlight.contrastWith(background, 50 * multiplier, true)
    : accessible.call(this, primary);
}

function colorHighlightHover() {
  const [background, multiplier, highlight, primary] = utils.getDial(this, [
    "background",
    "multiplier",
    "highlight",
    "primary",
  ]);
  const { section } = this.base;
  if (section === OVERLAY) {
    return primary.contrastWith(background, 40 * multiplier, true);
  }
  let highlightHover = highlight.contrastWith(
    background,
    70 * multiplier,
    true
  );
  highlightHover =
    highlightHover.lightness > 90 ? highlightHover.darken(20) : highlightHover;
  highlightHover =
    highlightHover.lightness < 10 ? highlightHover.lighten(20) : highlightHover;
  return highlightHover;
}

function colorHighlightActive() {
  const [background, multiplier, highlight] = utils.getDial(this, [
    "background",
    "multiplier",
    "highlight",
  ]);
  return highlight.contrastWith(background, 80 * multiplier, true);
}

function colorHighlightDisabled() {
  return utils.getColor(this, "highlight").setAlpha(70);
}

function colorAction() {
  const backgroundColorAction = utils.getBackgroundColor(this, "action");
  const multiplier = utils.getDial(this, "multiplier");
  return backgroundColorAction.contrast(80 * multiplier);
}

function colorActionHover() {
  return utils.getColor(this, "action");
}

function colorActionActive() {
  return utils.getColor(this, "action");
}

function colorActionDisabled() {
  return utils.getColor(this, "action").setAlpha(70);
}

function colorActionContrast() {
  const backgroundColorActionContrast = utils.getBackgroundColor(
    this,
    "actionContrast"
  );
  const multiplier = utils.getDial(this, "multiplier");
  return backgroundColorActionContrast.contrast(100 * multiplier);
}

function colorActionContrastHover() {
  return utils.getColor(this, "actionContrast");
}

function colorActionContrastActive() {
  return utils.getColor(this, "actionContrast");
}

function colorActionContrastDisabled() {
  return utils.getColor(this, "actionContrast").setAlpha(70);
}

function colorInput() {
  const backgroundColorInput = utils.getBackgroundColor(this, "input");
  const multiplier = utils.getDial(this, "multiplier");
  return backgroundColorInput.setAlpha(100).contrast(70 * multiplier);
}

function colorInputHover() {
  return utils.getColor(this, "input");
}

function colorInputActive() {
  return utils.getColor(this, "input");
}

function colorInputDisabled() {
  return utils.getColor(this, "input").setAlpha(70);
}

function colorInputPlaceholder() {
  return utils.getColor(this, "inputDisabled");
}

function colorInputHighlight() {
  const backgroundColorInput = utils.getBackgroundColor(this, "input");
  const multiplier = utils.getDial(this, "multiplier");
  return utils
    .getColor(this, "highlight")
    .contrastWith(backgroundColorInput, 30 * multiplier, true);
}

function colorLightnessSimilarity(color1, color2, lightnessThreshold = 55) {
  if (!(color1 || color2)) return false;
  return Math.abs(color1.lightness - color2.lightness) <= lightnessThreshold;
}

function colorBrandLividContrast() {
  const colorLivid = utils.getBackgroundColor(this, "brandLivid");
  return colorLivid.lightness > 50 ? BLACK_COLOR : WHITE_COLOR;
}

export {
  // Color
  colorSection,
  colorBackground,
  colorError,
  colorPrimary,
  colorAccent,
  colorNeutral,
  colorPrimaryOverlay,
  // Contrast
  colorHighContrast,
  colorLowContrast,
  colorUltraLowContrast,
  // Highlight
  colorHighlight,
  colorHighlightHover,
  colorHighlightActive,
  colorHighlightDisabled,
  // Action
  colorAction,
  colorActionHover,
  colorActionActive,
  colorActionDisabled,
  colorActionContrast,
  colorActionContrastHover,
  colorActionContrastActive,
  colorActionContrastDisabled,
  // Input
  colorInput,
  colorInputHover,
  colorInputActive,
  colorInputDisabled,
  colorInputPlaceholder,
  colorInputHighlight,
  // Color Comparison
  colorLightnessSimilarity,
  // Brand
  colorBrandLividContrast,
};
