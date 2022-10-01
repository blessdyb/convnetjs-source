import { isString, lowerFirst, clamp } from "lodash";
import { constants } from "@wsb/guac-widget-core";
import BREAKPOINTS, {
  XSMALL as BP_XSMALL,
} from "../../../../../constants/font/breakpoints";
import { fontSizeByDevice } from "../utils/getSizesByDevice";

const {
  fontScales: { DEFAULT_WEBSITE_FONT_SCALES },
  fontSizes: {
    XSMALL,
    SMALL,
    MEDIUM,
    LARGE,
    XLARGE,
    XXLARGE,
    XXXLARGE,
    JUMBO,
    XJUMBO,
    CUSTOM,
  },
} = constants;

const MLARGE = "mlarge";

const FONT_SIZES_ARR = [
  XSMALL,
  SMALL,
  MEDIUM,
  MLARGE,
  LARGE,
  XLARGE,
  XXLARGE,
  XXXLARGE,
  JUMBO,
  XJUMBO,
  CUSTOM,
];

function getFontSizeByDevice(fontSizeId, deviceSize) {
  const hasDeviceSize = deviceSize && BREAKPOINTS.indexOf(deviceSize) >= 0;

  if (FONT_SIZES_ARR.indexOf(fontSizeId) < 0) {
    return fontSizeId;
  }

  const deviceMap = this.mappedValues.fontSizeMapping || fontSizeByDevice;
  const themeMedSize = deviceMap.xs.medium;
  const curDial = this.base.theme.mapPropValue(
    "fontDial",
    this.base.fontFamily
  );
  const dialSizeMultiplier = curDial
    ? (curDial.size || themeMedSize) / themeMedSize
    : 1;
  const themeSize = hasDeviceSize
    ? deviceMap[deviceSize][fontSizeId]
    : deviceMap.xs[fontSizeId];

  return Math.round(themeSize * dialSizeMultiplier);
}

function splitFontSizeAndDeviceSize(combSize) {
  if (!isString(combSize)) {
    return void 0;
  }
  const deviceSize = BREAKPOINTS.find((bp) => combSize.indexOf(bp) === 0);
  if (!deviceSize) {
    return void 0;
  }

  const newFontSize = lowerFirst(combSize.substr(deviceSize.length));

  if (FONT_SIZES_ARR.indexOf(newFontSize) === -1) {
    return void 0;
  }

  return { deviceSize, newFontSize };
}

function clampFontSize(size, deviceSize) {
  const deviceMap = this.mappedValues.fontSizeMapping || fontSizeByDevice;
  const scale = deviceMap[deviceSize];
  return scale ? clamp(size, scale.xsmall, scale.xjumbo) : size;
}

function fontSize(fontSizeId = "") {
  const newSizes = splitFontSizeAndDeviceSize(fontSizeId);
  const baseFontScale = this.base.fontScale;
  const ignoreFontScale = this.base.props.isLogo; // logo should not scale with the selected global font scale value
  let fontScale =
    typeof baseFontScale === "number"
      ? baseFontScale
      : (!ignoreFontScale && DEFAULT_WEBSITE_FONT_SCALES[baseFontScale]) ||
        DEFAULT_WEBSITE_FONT_SCALES.medium;
  const overrideScale = this.base.fontScaleMultiplier;

  if (overrideScale) {
    // This typography has a font scale override, so apply it while protecting against invalid values
    fontScale *= Number(overrideScale) || 1;
  }

  if (!newSizes) {
    if (FONT_SIZES_ARR.indexOf(fontSizeId) >= 0) {
      const size = getFontSizeByDevice.call(this, fontSizeId, BP_XSMALL);
      return clampFontSize.call(this, Math.round(size * fontScale), BP_XSMALL);
    }
    // This is most likely a explicit value like 10px or 1em
    return fontSizeId;
  }

  const size = getFontSizeByDevice.call(
    this,
    newSizes.newFontSize,
    newSizes.deviceSize
  );
  return clampFontSize.call(
    this,
    Math.round(size * fontScale),
    newSizes.deviceSize
  );
}

export { getFontSizeByDevice, splitFontSizeAndDeviceSize };
export default {
  fontSize,
};
