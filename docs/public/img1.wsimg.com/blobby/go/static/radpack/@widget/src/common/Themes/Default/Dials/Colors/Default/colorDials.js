import { UX2, constants } from "@wsb/guac-widget-core";
import * as utils from "../utils";
import { ERROR_COLOR } from "../constants/colors";

const { Color } = UX2.utils;
const { categoryTypes: CATEGORY, sectionTypes: SECTION } = constants;

const BRIGHTNESS_THRESHOLD = 25; // the "value" in HSV color space

function colorDial(key) {
  const { colorDials = [] } = this.base;
  let color = false;
  colorDials.some((dial) => {
    const val =
      (dial.getMeta && dial.getMeta(key)) || (dial.meta && dial.meta[key]);
    if (val) {
      color = new Color(val);
    }
    return color;
  });
  if (!color) {
    throw new Error(`Unable to load color dial: '${key}'`);
  }
  return color;
}

function colorDialBackground() {
  const { category, section } = this.base;
  const color = this.mapPropValue("colorDial", category);

  if (category === CATEGORY.PRIMARY) {
    if (section === SECTION.ALT) {
      // if the original color is too dark, lighten it instead of darkening
      const [, , value] = color.toHsv();
      return value < BRIGHTNESS_THRESHOLD ? color.lighten(5) : color.darken(5);
    }
    if (section === SECTION.OVERLAY) {
      return color.setAlpha(50);
    }
    return color;
  }
  if (category === CATEGORY.ACCENT) {
    if (section === SECTION.ALT) {
      return color.darken(8);
    }
    if (section === SECTION.OVERLAY) {
      return color.setAlpha(50);
    }
    return color;
  }
  if (category === CATEGORY.NEUTRAL) {
    if (section === SECTION.ALT) {
      return color.darken(3);
    }
    if (section === SECTION.OVERLAY) {
      return color.setAlpha(50);
    }
    return color;
  }
  return color;
}

function colorDialHighlight() {
  const { category } = this.base;
  const primary = utils.getDial(this, CATEGORY.PRIMARY);
  if (category === CATEGORY.PRIMARY) {
    return primary.isDark()
      ? utils.getDial(this, CATEGORY.NEUTRAL)
      : utils.getDial(this, CATEGORY.ACCENT);
  }
  return primary;
}

function colorDialOutline() {
  const background = utils.getDial(this, "background");
  return background.lightness > 90 && background.alpha > 80;
}

function colorDialMultiplier() {
  const background = utils.getDial(this, "background");
  return (100 - background.alpha) / 50 + 1;
}

function colorDialError() {
  return ERROR_COLOR;
}

export {
  colorDial,
  colorDialBackground,
  colorDialHighlight,
  colorDialOutline,
  colorDialMultiplier,
  colorDialError,
};
