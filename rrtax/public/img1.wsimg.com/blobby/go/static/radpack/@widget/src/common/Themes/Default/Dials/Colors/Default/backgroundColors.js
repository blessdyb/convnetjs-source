/* eslint-disable id-length */
import { UX2 } from "@wsb/guac-widget-core";
import * as utils from "../utils";
import { LIVID_COLOR, WHITE_COLOR, BLACK_COLOR } from "../constants/colors";

const { Color } = UX2.utils;

function backgroundColorSection() {
  return utils.getDial(this, "background");
}

function backgroundColorSectionOverlay() {
  const background = utils.getDial(this, "background");
  const newAlpha =
    background.alpha === 100 ? 90 : background.alpha === 90 ? 50 : 30;
  return background.setAlpha(newAlpha);
}

function backgroundColorSectionOverlaySoft() {
  const background = utils.getDial(this, "background");
  return background.setAlpha(10);
}

function backgroundColorNeutral() {
  return utils.getDial(this, "neutral");
}

function backgroundColorAccent() {
  return utils.getDial(this, "accent");
}

function backgroundColorPrimary() {
  return utils.getDial(this, "primary");
}

function backgroundColorNeutralOverlay() {
  const [neutral, background] = utils.getDial(this, ["neutral", "background"]);
  const newAlpha =
    background.alpha === 100 ? 90 : background.alpha === 90 ? 50 : 30;
  return neutral.setAlpha(newAlpha);
}

function backgroundColorAccentOverlay() {
  const [background] = utils.getDial(this, ["background"]);
  const newAlpha =
    background.alpha === 100 ? 90 : background.alpha === 90 ? 50 : 30;
  return BLACK_COLOR.setAlpha(newAlpha);
}

function backgroundColorPrimaryOverlay() {
  const [primary, background] = utils.getDial(this, ["primary", "background"]);
  const newAlpha =
    background.alpha === 100 ? 90 : background.alpha === 90 ? 50 : 30;
  return primary.setAlpha(newAlpha);
}

function backgroundColorModalOverlay() {
  return BLACK_COLOR.setAlpha(60);
}

function backgroundColorAction() {
  const [highlight, background, multiplier] = utils.getDial(this, [
    "highlight",
    "background",
    "multiplier",
  ]);
  return highlight.contrastWith(background, 10 * multiplier);
}

function backgroundColorActionHover() {
  const [background, multiplier] = utils.getDial(this, [
    "background",
    "multiplier",
  ]);
  const colorAction = utils.getBackgroundColor(this, "action");
  return (
    colorAction.lightness > 10
      ? colorAction.lighten(10)
      : colorAction.darken(10)
  ).contrastWith(background, 15 * multiplier);
}

function backgroundColorActionActive() {
  const colorAction = utils.getBackgroundColor(this, "action");
  return colorAction.lightness > 10
    ? colorAction.darken(15)
    : colorAction.lighten(15);
}

function backgroundColorActionDisabled() {
  return utils.getBackgroundColor(this, "action").setAlpha(70);
}

function backgroundColorActionContrast() {
  const [background, multiplier] = utils.getDial(this, [
    "background",
    "multiplier",
  ]);
  return background.setAlpha(100).contrast(100 * multiplier);
}

function backgroundColorActionContrastHover() {
  const [background, multiplier] = utils.getDial(this, [
    "background",
    "multiplier",
  ]);
  return background.setAlpha(100).contrast(85 * multiplier);
}

function backgroundColorActionContrastActive() {
  return utils.getBackgroundColor(this, "actionContrast");
}

function backgroundColorActionContrastDisabled() {
  return utils.getBackgroundColor(this, "actionContrast").setAlpha(70);
}

function backgroundColorInput() {
  const [outline, background] = utils.getDial(this, ["outline", "background"]);
  return outline
    ? background.setAlpha(100).setLightness(100)
    : background.setAlpha(0);
}

function backgroundColorInputHover() {
  return utils.getBackgroundColor(this, "input");
}

function backgroundColorInputActive() {
  return utils.getBackgroundColor(this, "input");
}

function backgroundColorInputDisabled() {
  return utils.getBackgroundColor(this, "input").setAlpha(70);
}

function backgroundColorSectionContrast() {
  const [background, multiplier] = utils.getDial(this, [
    "background",
    "multiplier",
  ]);
  return background.setAlpha(100).contrast(90 * multiplier);
}

function backgroundColorSectionLowContrast() {
  const [background, multiplier] = utils.getDial(this, [
    "background",
    "multiplier",
  ]);
  return background.setAlpha(100).contrast(50 * multiplier);
}

function backgroundColorSectionUltraLowContrast() {
  const [background, multiplier] = utils.getDial(this, [
    "background",
    "multiplier",
  ]);
  return background.setAlpha(100).contrast(15 * multiplier);
}

function backgroundColorNavSolid() {
  // currently only used for NavBar background opacity
  return utils.getDial(this, "background").setAlpha(100);
}

function backgroundColorSearchMobileDark() {
  return new Color("rgb(255, 255, 255)").setAlpha(15);
}

function backgroundColorSearchMobileGray() {
  return new Color("rgb(0, 0, 0)").setAlpha(8);
}

function backgroundColorSearchMobileLight() {
  return new Color("rgb(245, 245, 245)").setAlpha(100);
}

function backgroundColorBrandLivid() {
  const background = utils.getDial(this, "background");
  const { alpha, lightness } = background;
  const alphaLightIndex = lightness + (100 - alpha);
  return alphaLightIndex >= 85 || alpha === 0 || lightness === 100
    ? LIVID_COLOR
    : WHITE_COLOR;
}

function backgroundColorBrandLividHover() {
  const colorLivid = utils.getBackgroundColor(this, "brandLivid");
  return colorLivid.lightness > 50
    ? colorLivid.darken(5)
    : colorLivid.lighten(5);
}

export {
  // Color
  backgroundColorSection,
  backgroundColorSectionOverlay,
  backgroundColorSectionOverlaySoft,
  backgroundColorSectionContrast,
  backgroundColorSectionLowContrast,
  backgroundColorSectionUltraLowContrast,
  backgroundColorNeutral,
  backgroundColorNeutralOverlay,
  backgroundColorAccentOverlay,
  backgroundColorPrimary,
  backgroundColorPrimaryOverlay,
  backgroundColorModalOverlay,
  backgroundColorAccent,
  // Action
  backgroundColorAction,
  backgroundColorActionHover,
  backgroundColorActionActive,
  backgroundColorActionDisabled,
  backgroundColorActionContrast,
  backgroundColorActionContrastHover,
  backgroundColorActionContrastActive,
  backgroundColorActionContrastDisabled,
  // Input
  backgroundColorInput,
  backgroundColorInputHover,
  backgroundColorInputActive,
  backgroundColorInputDisabled,
  // Nav
  backgroundColorNavSolid,
  // Search Mobile
  backgroundColorSearchMobileDark,
  backgroundColorSearchMobileGray,
  backgroundColorSearchMobileLight,
  // Brand
  backgroundColorBrandLivid,
  backgroundColorBrandLividHover,
};
