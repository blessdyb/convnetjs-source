import * as utils from "../utils";
import { DARK_BORDER, LIGHT_BORDER } from "../constants/colors";

function borderColorLowContrast() {
  const [background, multiplier] = utils.getDial(this, [
    "background",
    "multiplier",
  ]);
  return background.setAlpha(100).contrast(50 * multiplier);
}

function borderColorHighContrast() {
  const [background, multiplier] = utils.getDial(this, [
    "background",
    "multiplier",
  ]);
  return background.setAlpha(100).contrast(90 * multiplier);
}

function borderColorUltraLowContrast() {
  const [background, multiplier] = utils.getDial(this, [
    "background",
    "multiplier",
  ]);
  return background.setAlpha(100).contrast(25 * multiplier);
}

function borderColorLowContrastOverlay() {
  const borderLowContrast = borderColorLowContrast.call(this);
  return borderLowContrast.setAlpha(borderLowContrast.alpha * 0.5);
}

function borderColorHighContrastOverlay() {
  const borderHighContrast = borderColorHighContrast.call(this);
  return borderHighContrast.setAlpha(borderHighContrast.alpha * 0.5);
}

function borderColorULowContrastOverlay() {
  const borderUltraLowContrast = borderColorUltraLowContrast.call(this);
  return borderUltraLowContrast.setAlpha(borderUltraLowContrast.alpha * 0.5);
}

function borderColorSection() {
  const background = utils.getDial(this, "background");
  if (background.alpha < 100) {
    return background.isLight() ? DARK_BORDER : LIGHT_BORDER;
  }
  return background.contrast(10 * utils.getDial(this, "multiplier"), true);
}

function borderColorPrimary() {
  const [primary, background, multiplier] = utils.getDial(this, [
    "primary",
    "background",
    "multiplier",
  ]);
  return primary.contrastWith(background, 40 * multiplier, true);
}

function borderColorAccent() {
  const [accent, background, multiplier] = utils.getDial(this, [
    "accent",
    "background",
    "multiplier",
  ]);
  return accent.contrastWith(background, 40 * multiplier, true);
}

function borderColorNeutral() {
  const [neutral, background, multiplier] = utils.getDial(this, [
    "neutral",
    "background",
    "multiplier",
  ]);
  return neutral.contrastWith(background, 40 * multiplier, true);
}

function borderColorInput() {
  const [outline, background] = utils.getDial(this, ["outline", "background"]);
  return outline
    ? utils
        .getBackgroundColor(this, "input")
        .contrastWith(background, 10 * utils.getDial(this, "multiplier"), true)
    : background.setAlpha(100).setLightness((background.isDark() && 100) || 0);
}

function borderColorInputDisabled() {
  return utils.getBorderColor(this, "input").setAlpha(70);
}

function borderColorInputError() {
  const [error, background, multiplier] = utils.getDial(this, [
    "error",
    "background",
    "multiplier",
  ]);
  return error.contrastWith(background.setAlpha(100), 20 * multiplier, true);
}

function borderColorHighlight() {
  const [background, multiplier, highlight] = utils.getDial(this, [
    "background",
    "multiplier",
    "highlight",
  ]);
  return highlight.contrastWith(background, 50 * multiplier, true);
}

function borderColorHighlightDisabled() {
  return utils.getBorderColor(this, "highlight").setAlpha(70);
}

function borderColorAction() {
  const backgroundColorAction = utils.getBackgroundColor(this, "action");
  const multiplier = utils.getDial(this, "multiplier");
  return backgroundColorAction.contrast(80 * multiplier);
}

function borderColorActionBg() {
  return utils.getBackgroundColor(this, "action");
}

function borderColorActionContrastBg() {
  return utils.getBackgroundColor(this, "actionContrast");
}

export {
  // Color
  borderColorLowContrast,
  borderColorHighContrast,
  borderColorUltraLowContrast,
  borderColorLowContrastOverlay,
  borderColorHighContrastOverlay,
  borderColorULowContrastOverlay,
  borderColorSection,
  borderColorPrimary,
  borderColorAccent,
  borderColorNeutral,
  // Input
  borderColorInput,
  borderColorInputDisabled,
  borderColorInputError,
  borderColorHighlight,
  borderColorHighlightDisabled,
  borderColorAction,
  borderColorActionBg,
  borderColorActionContrastBg,
};
