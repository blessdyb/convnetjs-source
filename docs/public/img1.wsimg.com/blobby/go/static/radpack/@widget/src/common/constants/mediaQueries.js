import { constants } from "@wsb/guac-widget-core";

const { XS_MAX, SM_MIN, SM_MAX, MD_MIN, MD_MAX, LG_MIN, LG_MAX, XL_MIN } =
  constants.breakpoints;

const XXS_MAX = 450;
const XS_MIN = 451;
const XL_MAX = 1920;
const XXL_MIN = 1921;

export const ranges = [
  { max: XXS_MAX, isMobile: true, breakpoint: "@xs-only" },
  { min: XS_MIN, max: XS_MAX, isMobile: true, breakpoint: "@xs-only" },
  { min: SM_MIN, max: SM_MAX, isTablet: true, breakpoint: "@sm-only" },
  { min: MD_MIN, max: MD_MAX, breakpoint: "@md-only" },
  { min: LG_MIN, max: LG_MAX, breakpoint: "@lg-only" },
  { min: XL_MIN, max: XL_MAX, breakpoint: "@xl" },
  { min: XXL_MIN, breakpoint: "@xl" },
];

export const densities = [1, 2, 3];
