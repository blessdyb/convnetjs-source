import fontDials from "./fontDials";
import fontSize from "./fontSize";
import FONT_WEIGHTS from "../../../../../constants/font/weights";
import getWeightSizes from "../utils/getWeightSizes";

const DEFAULT_FONT_WEIGHT = 400;

function fontFamily(family) {
  const dial = this.mapPropValue("fontDial", family);
  return (dial && dial.family) || family;
}

function fontWeight(value) {
  if (FONT_WEIGHTS.indexOf(value) === -1) {
    return value;
  }

  const weight =
    this.mapPropValue(
      "fontDial",
      `${this.base.fontFamily || "primary"}.weight`
    ) || DEFAULT_FONT_WEIGHT;
  const weights = this.mapPropValue(
    "fontDial",
    `${this.base.fontFamily || "primary"}.weights`
  );

  return getWeightSizes(weight, weights)[value];
}

function hasFontSet(fonts = [], targetFont = "old-standard-tt") {
  return fonts.find((font) => font === targetFont);
}

export default {
  ...fontDials,
  ...fontSize,
  fontFamily,
  fontWeight,
  hasFontSet,
};
