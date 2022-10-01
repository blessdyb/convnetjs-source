import { constants } from "@wsb/guac-widget-core";
import { FILL, FIT, INSET } from "../../common/constants/headerTreatments";
import { COMMON_BUTTON_CONFIG } from "../../common/constants";

const { colorPackCategories, buttons } = constants;
const {
  LIGHT,
  LIGHT_ALT,
  LIGHT_COLORFUL,
  DARK,
  DARK_ALT,
  DARK_COLORFUL,
  COLORFUL,
} = constants.paintJobs;

const id = "layout27";
const imageTreatments = {
  [FILL]: "none",
  [FIT]: "none",
  [INSET]: "category-solid",
};
const headerTreatmentsConfig = {
  defaultHeaderTreatment: INSET,
  hasLegacy: false,
  imageTreatments,
};

export default {
  id,
  name: "bisque",
  packs: {
    color: "#CB4154",
    font: "playfair-display",
  },
  logo: {
    font: "primary",
  },
  packCategories: {
    color: colorPackCategories.NEUTRAL,
  },
  headerProperties: {
    alignmentOption: "center",
    defaultLogoAlign: "center",
  },
  headerTreatmentsConfig,
  paintJobs: [
    LIGHT,
    LIGHT_ALT,
    LIGHT_COLORFUL,
    COLORFUL,
    DARK_COLORFUL,
    DARK_ALT,
    DARK,
  ],
  defaultPaintJob: LIGHT,
  buttons: {
    primary: {
      fill: buttons.fills.SOLID,
      shape: buttons.shapes.SQUARE,
      decoration: buttons.decorations.NONE,
      shadow: buttons.shadows.NONE,
      color: buttons.colors.PRIMARY,
    },
    secondary: {
      fill: buttons.fills.SOLID,
      decoration: buttons.decorations.NONE,
      shadow: buttons.shadows.NONE,
      color: buttons.colors.PRIMARY,
    },
    ...COMMON_BUTTON_CONFIG,
  },
};
