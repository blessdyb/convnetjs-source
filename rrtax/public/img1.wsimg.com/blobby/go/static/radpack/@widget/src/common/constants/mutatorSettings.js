import { FILL, FIT, INSET, BLUR } from "./headerTreatments";

export const HEADER_DEFAULT = {
  useSecondBackground: false,
  useSubtagline: true,
  useWelcomeLine: false,
  useAddress: false,
  useCropBackground: false,
  useBigLogo: false,
  useSocialLinks: false,
  useTextBackground: false,
  coverImagePivot: {
    isSectionControl: true,
    sectionControlLabel: "cover",
    showOnTop: true,
    showThumbnail: true,
  },
  headerTreatmentsConfig: {
    headerTreatments: [FILL, FIT, INSET, BLUR],
    defaultHeaderTreatment: FILL,
  },
  usePhone: true,
  phoneOnSecondaryPage: false,
  showOverlayOpacityControls: false,
  hasNavBackgroundToggle: false,
  secondBackgroundArguments: {},
  socialLinksOnSecondaryPage: true,
  useMediaTypeSelector: false,
  showVideosTab: true,
  useSlideshow: false,
  useForegroundImage: false,
  disablePaintjobs: false,
  hasLogoAlign: false,
  hasLogoBackground: true,
  showAddressDefault: false,
  useVideoEmbed: true,
  renderParallaxToggle: true,
};

export const WIDGET_DEFAULT = {
  enableCircularImage: false,
};
