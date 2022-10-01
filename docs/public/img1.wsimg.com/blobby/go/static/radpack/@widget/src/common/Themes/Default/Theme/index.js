import { UX2, constants } from "@wsb/guac-widget-core";
import register from "../../../register";
import fonts from "../Dials/Fonts/Default";
import * as Components from "../Components";
import * as Groups from "../Groups";
import * as Elements from "../Elements";
import colors from "../Dials/Colors/Default";
import { ACCENT } from "../../../constants/overlayTypes";
import { OVERLAY_OPACITY_DEFAULTS, BUTTON_ICON_SIZE } from "../../../constants";
import {
  HEADER_DEFAULT,
  WIDGET_DEFAULT,
} from "../../../constants/mutatorSettings";
import { merge, omit, uniq } from "lodash";
import {
  resolveValue,
  mergeTypographyOverrides,
  resolveStateLookup,
  composeStateStyles,
} from "../../../utils/typography";

// These defaults must match the primary button defaults for the theme
const INVALID_BUTTON_DEFAULTS = {
  secondary: ["shape"],
  spotlight: ["shape", "decoration", "shadow"],
  external: ["shape"],
};

const TYPOGRAPHY_STATES = [
  "Active",
  "Featured",
  "Disabled",
  "Alert",
  "Expired",
];

const typographyShared1 = {
  style: {
    font: "primary",
    color: "highContrast",
    fontSize: "xlarge",
    fontWeight: "normal",
    letterSpacing: "normal",
    textTransform: "none",
  },
};

class Default extends UX2.Theme {
  constructor() {
    super();
    // register all of the UX2 components
    register();
    this.mappedValues = {
      ...this.mappedValues,
      // Generic Spacing
      spacingXxsmall: "4px",
      spacingXsmall: "8px",
      spacingSmall: "16px",
      spacingMedium: "24px",
      spacingLarge: "32px",
      spacingXlarge: "40px",
      spacingXlarger: "48px",
      spacingXxlarge: "56px",
      spacingXxlarger: "64px",
      spacingXxxlarge: "72px",
      // Borders
      borderNone: "0",
      borderXsmall: "1px",
      borderSmall: "2px",
      borderMedium: "4px",
      borderLarge: "6px",
      borderXlarge: "8px",
      // Font Sizes
      fontSizeLevel1: "xxxlarge",
      fontSizeLevel2: "xxlarge",
      fontSizeLevel3: "xlarge",
      fontSizeLevel4: "large",
      fontSizeLevel5: "medium",
      fontSizeLevel6: "small",
      // LineHeight Sizes
      lineHeightLevel1: "1.05",
      lineHeightLevel2: "1.125",
      lineHeightLevel3: "1.25",
      lineHeightLevel4: "1.25",
      lineHeightLevel5: "1.25",
      lineHeightLevel6: "1.25",
      // Generic Sizes
      iconSizeXsmall: 8,
      iconSizeSmall: 16,
      iconSizeMedium: 28,
      iconSizeLarge: 32,
      iconSizeXlarge: 48,
      iconSizeXxlarge: 72,
      iconSizeButton: `${BUTTON_ICON_SIZE}em`,
      // Speed
      transitionDurationMedium: ".3s",
      // BoxShadow
      boxShadowCard: "0 0 28px -3px #bbb",
      // Aliases - Map props to values
      borderRadius: (value) => this.mapPropValue("border", value),
      borderWidth: (value) => this.mapPropValue("border", value),
      borderBottomWidth: (value) => this.mapPropValue("border", value),
      borderTopWidth: (value) => this.mapPropValue("border", value),
      borderRightWidth: (value) => this.mapPropValue("border", value),
      borderLeftWidth: (value) => this.mapPropValue("border", value),
      padding: (value) => this.mapPropValue("spacing", value),
      // References the base theme's width value in core to apply maxWidth to smContainer | mdContainer | lgContainer
      maxWidth: (value) => this.mapPropValue("width", value),
      margin: (value) => this.mapPropValue("spacing", value),
      top: (value) => this.mapPropValue("spacing", value),
      left: (value) => this.mapPropValue("spacing", value),
      right: (value) => this.mapPropValue("spacing", value),
      bottom: (value) => this.mapPropValue("spacing", value),
      gap: (value) => this.mapPropValue("spacing", value),
      rowGap: (value) => this.mapPropValue("spacing", value),
      columnGap: (value) => this.mapPropValue("spacing", value),
      colorDialAccent: new UX2.utils.Color("rgb(22, 22, 22)"),
      themeFontMultipliers: {
        // Themes can specify multipliers for any font size and they will be applied to the corresponding default
        // e.g. 'medium': 1.1 to increase the medium font size by 10% for that theme
        // There is also a font size 'custom' that defaults to medium and can be used to add a custom size as needed per theme
      },
      ...colors,
      ...fonts,
      typographyMapping: {
        LogoAlpha: {
          ...typographyShared1,
        },
        HeadingAlpha: {
          style: {
            font: "primary",
            color: "highContrast",
            fontSize: "xxxlarge",
            fontWeight: "normal",
            letterSpacing: "normal",
            textTransform: "none",
            wordWrap: "break-word",
            overflowWrap: "break-word",
            lineHeight: 1.2,
          },
        },
        HeadingBeta: {
          style: {
            font: "primary",
            fontSize: "xxlarge",
            color: "highContrast",
            fontWeight: "normal",
            letterSpacing: "normal",
            textTransform: "none",
          },
        },
        HeadingGamma: {
          ...typographyShared1,
        },
        HeadingDelta: {
          style: {
            font: "alternate",
            color: "highContrast",
            fontSize: "large",
            fontWeight: "normal",
            letterSpacing: "normal",
            textTransform: "none",
          },
        },
        BodyAlpha: {
          style: {
            font: "alternate",
            color: "section",
            fontSize: "medium",
            fontWeight: "normal",
            letterSpacing: "normal",
            textTransform: "none",
          },
        },
        BodyBeta: {
          style: {
            font: "alternate",
            color: "section",
            fontSize: "large",
            fontWeight: "normal",
            letterSpacing: "normal",
            textTransform: "none",
          },
        },
        DetailsAlpha: {
          style: {
            font: "alternate",
            color: "lowContrast",
            fontSize: "small",
            fontWeight: "normal",
            letterSpacing: "normal",
            textTransform: "none",
          },
        },
        DetailsBeta: {
          style: {
            font: "alternate",
            color: "lowContrast",
            fontSize: "xsmall",
            fontWeight: "normal",
            letterSpacing: "normal",
            textTransform: "none",
          },
        },
        LinkAlpha: {
          style: {
            font: "alternate",
            color: "highlight",
            fontSize: "inherit",
            fontWeight: "inherit",
            letterSpacing: "inherit",
            textTransform: "inherit",
            ":hover": {
              color: "highlightHover",
            },
            ":active": {
              color: "highlightActive",
            },
          },
        },
        NavAlpha: {
          style: {
            font: "alternate",
            color: "highContrast",
            fontSize: "small",
            fontWeight: "normal",
            letterSpacing: "normal",
            textTransform: "none",
            ":hover": {
              color: "highlightHover",
            },
            ":active": {
              color: "highlight",
            },
          },
          active: {
            style: {
              fontWeight: "bold",
              color: "highlight",
              ":hover": {
                color: "highlightHover",
              },
            },
          },
        },
        SubNavAlpha: {
          style: {
            font: "alternate",
            color: "highContrast",
            fontSize: "small",
            fontWeight: "normal",
            letterSpacing: "normal",
            textTransform: "none",
            ":hover": {
              color: "highlightHover",
            },
            ":active": {
              color: "highlight",
            },
          },
          active: {
            style: {
              fontWeight: "bold",
              color: "highlight",
              ":hover": {
                color: "highlightHover",
              },
            },
          },
        },
        NavBeta: {
          style: {
            font: "alternate",
            color: "highContrast",
            fontSize: "large",
            fontWeight: "normal",
            letterSpacing: "normal",
            textTransform: "none",
            ":hover": {
              color: "highlightHover",
            },
            ":active": {
              color: "highlight",
            },
          },
        },
        SubNavBeta: {
          style: {
            font: "alternate",
            color: "section",
            fontSize: "medium",
            fontWeight: "normal",
            letterSpacing: "normal",
            textTransform: "none",
            ":hover": {
              color: "highlightHover",
            },
            ":active": {
              color: "highlight",
            },
          },
        },
        NavGamma: {
          style: {
            font: "alternate",
            color: "highContrast",
            fontSize: "medium",
            fontWeight: "normal",
            letterSpacing: "normal",
            textTransform: "inherit",
            ":hover": {
              color: "highlightHover",
            },
            ":active": {
              color: "highlightActive",
            },
          },
          active: {
            style: {
              color: "highlight",
              fontWeight: "bold",
            },
          },
        },
        SubNavGamma: (props) => {
          return merge(mergeTypographyOverrides.call(this, "NavGamma", props), {
            style: {
              color: "section",
            },
          });
        },
        ButtonAlpha: (props) => {
          const { size = "default" } = props;
          const sizes = {
            small: {
              fontSize: "xsmall",
            },
            default: {
              fontSize: "small",
            },
            large: {
              fontSize: "mlarge",
            },
          };
          return {
            style: {
              font: "alternate",
              fontWeight: "bold",
              letterSpacing: "normal",
              textTransform: "none",
              textShadow: "none",
              ...sizes[size],
            },
            disabled: {
              style: {},
            },
          };
        },
        InputAlpha: (props) => {
          return merge(
            mergeTypographyOverrides.call(this, "DetailsAlpha", props),
            {
              style: {
                color: "input",
                ["@xs-only"]: {
                  fontSize: "medium", // 16px
                },
              },
            }
          );
        },
        DataAlpha: {
          style: {
            font: "alternate",
            color: "actionContrast",
            fontSize: "xlarge",
            fontWeight: "bold",
            letterSpacing: "normal",
            textTransform: "none",
          },
        },
        // Typography States
        Featured: (props) => {
          const defaultStyle = {
            style: {
              color: "highContrast",
            },
          };
          return resolveStateLookup.call(this, "featured", props, defaultStyle);
        },
        Alert: (props) => {
          const defaultStyle = {
            style: {
              color: "error",
            },
          };
          return resolveStateLookup.call(this, "alert", props, defaultStyle);
        },
        Disabled: (props) => {
          const defaultStyle = {
            style: {
              color: "inputDisabled",
              [":hover"]: {
                color: "inputDisabled",
              },
            },
          };
          return resolveStateLookup.call(this, "disabled", props, defaultStyle);
        },
        Expired: (props) => {
          const defaultStyle = {
            style: {
              textDecoration: "line-through",
              color:
                this.base.section === "overlay" ? "section" : "inputDisabled",
            },
          };
          return resolveStateLookup.call(this, "expired", props, defaultStyle);
        },
        Active: (props) => {
          const defaultStyle = {
            style: {
              fontWeight: "bold",
            },
          };
          return resolveStateLookup.call(this, "active", props, defaultStyle);
        },
      },
      typography: (value) => {
        return (props = {}) => {
          const [typographyBaseType, typographyState = ""] = value.split("-"); // state is split off by -
          const stateStyles = composeStateStyles.call(
            this,
            typographyState,
            props
          );
          const typographyBase = mergeTypographyOverrides.call(
            this,
            typographyBaseType,
            props
          );
          const fullPath =
            typographyBaseType !== value
              ? mergeTypographyOverrides.call(this, value, props)
              : {};
          return merge(
            {},
            resolveValue.call(this, typographyBase, props) || {},
            stateStyles,
            fullPath
          );
        };
      },
    };
  }

  static getDefaultBackgroundFilter() {
    return constants.imageFilters.NONE;
  }

  static getDefaultImageFilter() {
    return constants.imageFilters.NONE;
  }

  static getDefaultImageOverlayOpacity(widgetType, widgetPreset) {
    const defaultMap = OVERLAY_OPACITY_DEFAULTS;
    return defaultMap[widgetType] || defaultMap[widgetPreset] || 0;
  }

  static getDefaultImageOverlayType() {
    return ACCENT;
  }

  // Override to provide default prop values to widgets by type/preset
  // eslint-disable-next-line no-unused-vars
  static getWidgetDefaultProps(widgetType, widgetPreset) {
    return {
      alignmentOption: "center",
      ...(widgetType === "HEADER" && { logo: { logoAlign: "left" } }),
    };
  }

  // Override to provide default maniless mutator prop values to widgets by type/preset
  // eslint-disable-next-line no-unused-vars
  static getMutatorDefaultProps(widgetType, widgetPreset) {
    if (widgetType === "HEADER") {
      return HEADER_DEFAULT;
    }

    return WIDGET_DEFAULT;
  }

  // Override to filter propTypes that are not used by the theme
  static excludedProps = [
    "address",
    "welcomeLine",
    "background2",
    "foreground",
  ];

  /* Common utilities */
  getButtonDefaults() {
    const buttonType =
      this.base.kind === "Default" ? "primary" : this.base.kind.toLowerCase();
    const primaryDefaults = this.constructor.config
      ? this.constructor.config.buttons.primary
      : {};
    const buttonDefaults = omit(
      (this.constructor.config &&
        this.constructor.config.buttons[buttonType]) ||
        {},
      INVALID_BUTTON_DEFAULTS[buttonType]
    );
    return merge({}, primaryDefaults, buttonDefaults);
  }

  // Returns a list of all supported typographies for this theme
  getTypographyList() {
    return uniq(
      Object.keys(this.mappedValues.typographyMapping).concat(
        Object.keys(this.mappedValues.typographyOverrides || {})
      )
    )
      .filter((type) => !TYPOGRAPHY_STATES.includes(type))
      .sort();
  }

  /* Components */

  Grid() {
    return Components.Grid.apply(this, arguments);
  }

  GridCell() {
    return Components.GridCell.apply(this, arguments);
  }

  SplitLayout() {
    return Components.SplitLayout.apply(this, arguments);
  }

  Box() {
    return Components.Box.apply(this, arguments);
  }

  HorizontalBox() {
    return Components.HorizontalBox.apply(this, arguments);
  }

  VerticalBox() {
    return Components.VerticalBox.apply(this, arguments);
  }

  ContentWrap() {
    return Components.ContentWrap.apply(this, arguments);
  }

  ContentBasic() {
    return Components.ContentBasic.apply(this, arguments);
  }

  ContentCard() {
    return Components.ContentCard.apply(this, arguments);
  }

  ContentCards() {
    return Components.ContentCards.apply(this, arguments);
  }

  ProductCard() {
    return Components.ProductCard.apply(this, arguments);
  }

  HeadingPair() {
    return Components.HeadingPair.apply(this, arguments);
  }

  CardBanner() {
    return Components.CardBanner.apply(this, arguments);
  }

  Rating() {
    return Components.Rating.apply(this, arguments);
  }

  Background() {
    return Components.Background.apply(this, arguments);
  }

  BackgroundHalf() {
    return Components.BackgroundHalf.apply(this, arguments);
  }

  MediaObject() {
    return Components.MediaObject.apply(this, arguments);
  }

  Page() {
    return Components.Page.apply(this, arguments);
  }

  Widget() {
    return Components.Widget.apply(this, arguments);
  }

  WidgetBanner() {
    return Components.WidgetBanner.apply(this, arguments);
  }

  WidgetSplit() {
    return Components.WidgetSplit.apply(this, arguments);
  }

  HeaderBackground() {
    return Components.HeaderBackground.apply(this, arguments);
  }

  Modal() {
    return Components.Modal.apply(this, arguments);
  }

  ModalPopup() {
    return Components.ModalPopup.apply(this, arguments);
  }

  ModalBody() {
    return Components.ModalBody.apply(this, arguments);
  }

  ModalOverlay() {
    return Components.ModalOverlay.apply(this, arguments);
  }

  Intro() {
    return Components.Intro.apply(this, arguments);
  }

  ZeroStateOverlay() {
    return Components.ZeroStateOverlay.apply(this, arguments);
  }

  PlaceholderMessage() {
    return Components.PlaceholderMessage.apply(this, arguments);
  }

  Alert() {
    return Components.Alert.apply(this, arguments);
  }

  Drawer() {
    return Components.Drawer.apply(this, arguments);
  }

  InputGroup() {
    return Components.InputGroup.apply(this, arguments);
  }

  CommerceCardOverlay() {
    return Components.CommerceCardOverlay.apply(this, arguments);
  }

  CommerceCardPictureContainer() {
    return Components.CommerceCardPictureContainer.apply(this, arguments);
  }

  CommerceCardContent() {
    return Components.CommerceCardContent.apply(this, arguments);
  }

  CommerceCardPicture() {
    return Components.CommerceCardPicture.apply(this, arguments);
  }

  CommerceCardTitle() {
    return Components.CommerceCardTitle.apply(this, arguments);
  }

  CommerceCardRibbon() {
    return Components.CommerceCardRibbon.apply(this, arguments);
  }

  CommerceCardPriceDisplay() {
    return Components.CommerceCardPriceDisplay.apply(this, arguments);
  }

  CommerceCardColors() {
    return Components.CommerceCardColors.apply(this, arguments);
  }

  CommerceCardCarousel() {
    return Components.CommerceCardCarousel.apply(this, arguments);
  }

  CommerceCardItem() {
    return Components.CommerceCardItem.apply(this, arguments);
  }

  /* Groups */

  Group(props) {
    return this.merge({ tag: "div" }, props);
  }

  Layout(props) {
    return this.merge(props);
  }

  Nav() {
    return Groups.Nav.apply(this, arguments);
  }

  NavFooter() {
    return Groups.NavFooter.apply(this, arguments);
  }

  NavMenu(props) {
    return props;
  }

  NavMoreMenu(props) {
    return props;
  }

  NavLink() {
    return Groups.NavLink.apply(this, arguments);
  }

  NavListNested() {
    return Groups.NavListNested.apply(this, arguments);
  }

  NavLinkActive() {
    return Groups.NavLinkActive.apply(this, arguments);
  }

  NavLinkDropdown() {
    return Groups.NavLinkDropdown.apply(this, arguments);
  }

  NavLinkDropdownActive() {
    return Groups.NavLinkDropdownActive.apply(this, arguments);
  }

  NavMenuLink() {
    return Groups.NavMenuLink.apply(this, arguments);
  }

  NavMenuLinkActive() {
    return Groups.NavMenuLinkActive.apply(this, arguments);
  }

  NavMoreMenuLink() {
    return Groups.NavMoreMenuLink.apply(this, arguments);
  }

  NavMoreMenuLinkActive() {
    return Groups.NavMoreMenuLinkActive.apply(this, arguments);
  }

  NavMoreMenuLinkNested() {
    return Groups.NavMoreMenuLinkNested.apply(this, arguments);
  }

  NavMoreMenuLinkNestedActive() {
    return Groups.NavMoreMenuLinkNestedActive.apply(this, arguments);
  }

  MobileNavLink() {
    return Groups.MobileNavLink.apply(this, arguments);
  }

  MobileNavSubLink() {
    return Groups.MobileNavSubLink.apply(this, arguments);
  }

  NavFooterLink() {
    return Groups.NavFooterLink.apply(this, arguments);
  }

  NavFooterLinkActive() {
    return Groups.NavFooterLinkActive.apply(this, arguments);
  }

  Hero() {
    return Groups.Hero.apply(this, arguments);
  }

  HeroLink() {
    return Groups.HeroLink.apply(this, arguments);
  }

  HeroMedia() {
    return Groups.HeroMedia.apply(this, arguments);
  }

  HeroHeading() {
    return Groups.HeroHeading.apply(this, arguments);
  }

  Section() {
    return Groups.Section.apply(this, arguments);
  }

  SectionBanner() {
    return Groups.SectionBanner.apply(this, arguments);
  }

  SectionBannerHeading() {
    return Groups.SectionBannerHeading.apply(this, arguments);
  }

  SectionSplit() {
    return Groups.SectionSplit.apply(this, arguments);
  }

  Card() {
    return Groups.Card.apply(this, arguments);
  }

  Content(props) {
    return this.merge(props);
  }

  ContentCardHeading() {
    return Groups.ContentCardHeading.apply(this, arguments);
  }

  ContentCardButton() {
    return Groups.ContentCardButton.apply(this, arguments);
  }

  ContentCardText() {
    return Groups.ContentCardText.apply(this, arguments);
  }

  ContentCardWrapperImage() {
    return Groups.ContentCardWrapperImage.apply(this, arguments);
  }

  ContentCardImageThumbnail() {
    return Groups.ContentCardImageThumbnail.apply(this, arguments);
  }

  ContentOverlayCardHeading() {
    return Groups.ContentOverlayCardHeading.apply(this, arguments);
  }

  ContentOverlayCardButton() {
    return Groups.ContentOverlayCardButton.apply(this, arguments);
  }

  ContentOverlayCardText() {
    return Groups.ContentOverlayCardText.apply(this, arguments);
  }

  Blog() {
    return Groups.Blog.apply(this, arguments);
  }

  BlogContent() {
    return Groups.BlogContent.apply(this, arguments);
  }

  BlogMain() {
    return Groups.BlogMain.apply(this, arguments);
  }

  BlogAside() {
    return Groups.BlogAside.apply(this, arguments);
  }

  BlogAsideHeading() {
    return Groups.BlogAsideHeading.apply(this, arguments);
  }

  Carousel(props) {
    return this.merge({ tag: "div" }, props);
  }

  PromoBanner() {
    return Groups.PromoBanner.apply(this, arguments);
  }

  ProductAsset() {
    return Groups.ProductAsset.apply(this, arguments);
  }

  ProductBanner() {
    return Groups.ProductBanner.apply(this, arguments);
  }

  ProductLabel() {
    return Groups.ProductLabel.apply(this, arguments);
  }

  ProductName() {
    return Groups.ProductName.apply(this, arguments);
  }

  ProductPrices() {
    return Groups.ProductPrices.apply(this, arguments);
  }

  CommerceOverlay() {
    return Groups.CommerceOverlay.apply(this, arguments);
  }

  CommerceOverlayIcon() {
    return Groups.CommerceOverlayIcon.apply(this, arguments);
  }

  CommerceOverlayWrapper() {
    return Groups.CommerceOverlayWrapper.apply(this, arguments);
  }

  CommerceOverlayHeading() {
    return Groups.CommerceOverlayHeading.apply(this, arguments);
  }

  CommerceOverlayMoreLink() {
    return Groups.CommerceOverlayMoreLink.apply(this, arguments);
  }

  CommerceOverlayPrice() {
    return Groups.CommerceOverlayPrice.apply(this, arguments);
  }

  CommerceOverlayMajorWrapper() {
    return Groups.CommerceOverlayMajorWrapper.apply(this, arguments);
  }

  CommerceOverlayMajorMoreLink() {
    return Groups.CommerceOverlayMajorMoreLink.apply(this, arguments);
  }

  CommerceOverlayMediumWrapper() {
    return Groups.CommerceOverlayMediumWrapper.apply(this, arguments);
  }

  CommerceOverlayMobileHeading() {
    return Groups.CommerceOverlayMobileHeading.apply(this, arguments);
  }

  CommerceOverlayMobileMoreLink() {
    return Groups.CommerceOverlayMobileMoreLink.apply(this, arguments);
  }

  CommerceOverlayMobileText() {
    return Groups.CommerceOverlayMobileText.apply(this, arguments);
  }

  CommerceOverlayMobilePrice() {
    return Groups.CommerceOverlayMobilePrice.apply(this, arguments);
  }

  CommerceItem() {
    return Groups.CommerceItem.apply(this, arguments);
  }

  CommerceItemHeading() {
    return Groups.CommerceItemHeading.apply(this, arguments);
  }

  CommerceItemIcon() {
    return Groups.CommerceItemIcon.apply(this, arguments);
  }

  CommerceItemPrice() {
    return Groups.CommerceItemPrice.apply(this, arguments);
  }

  CommerceItemWrapper() {
    return Groups.CommerceItemWrapper.apply(this, arguments);
  }

  CommerceItemLabel() {
    return Groups.CommerceItemLabel.apply(this, arguments);
  }

  CommerceItemButton() {
    return Groups.CommerceItemButton.apply(this, arguments);
  }

  PromoBannerSeasonal() {
    return Groups.PromoBannerSeasonal.apply(this, arguments);
  }

  GoogleTranslate() {
    return Groups.GoogleTranslate.apply(this, arguments);
  }

  Featured() {
    return Groups.Featured.apply(this, arguments);
  }

  Membership() {
    return Groups.Membership.apply(this, arguments);
  }

  MembershipListItem(props) {
    return this.NavigationDrawerListItem(props);
  }

  MembershipLink(props) {
    return this.NavigationDrawerLink(props);
  }

  MembershipTextAction(props) {
    return this.MembershipLink(props);
  }

  Logo(props) {
    return props;
  }

  Menu(props) {
    return props;
  }

  SlideshowArrows() {
    return Groups.SlideshowArrows.apply(this, arguments);
  }

  SearchPopout() {
    return Groups.SearchPopout.apply(this, arguments);
  }

  SearchPopoutIconSearch() {
    return Groups.SearchPopoutIconSearch.apply(this, arguments);
  }

  SearchPopoutInputSearch() {
    return Groups.SearchPopoutInputSearch.apply(this, arguments);
  }

  Clock() {
    return Groups.Clock.apply(this, arguments);
  }

  ClockValue() {
    return Groups.ClockValue.apply(this, arguments);
  }

  /* Group Elements */

  SectionHeading() {
    return Groups.SectionHeading.apply(this, arguments);
  }

  SectionHeadingSub() {
    return Groups.SectionHeadingSub.apply(this, arguments);
  }

  SectionHeadingHR() {
    return Groups.SectionHeadingHR.apply(this, arguments);
  }

  SectionSplitHeading() {
    return Groups.SectionSplitHeading.apply(this, arguments);
  }

  BlogMainLinkArrow() {
    return Groups.BlogMainLinkArrow.apply(this, arguments);
  }

  BlogMainHeading() {
    return Groups.BlogMainHeading.apply(this, arguments);
  }

  BlogMainHeadingSub() {
    return Groups.BlogMainHeadingSub.apply(this, arguments);
  }

  ContentHeading() {
    return Groups.ContentHeading.apply(this, arguments);
  }

  ContentText() {
    return Groups.ContentText.apply(this, arguments);
  }

  ContentBigContentBasic() {
    return Groups.ContentBigContentBasic.apply(this, arguments);
  }

  ContentBigHeading() {
    return Groups.ContentBigHeading.apply(this, arguments);
  }

  ContentBigText() {
    return Groups.ContentBigText.apply(this, arguments);
  }

  CardHeading() {
    return Groups.CardHeading.apply(this, arguments);
  }

  CardHeadingSub() {
    return Groups.CardHeadingSub.apply(this, arguments);
  }

  Map() {
    return Groups.Map.apply(this, arguments);
  }

  MapBanner() {
    return Groups.MapBanner.apply(this, arguments);
  }

  Form() {
    return Groups.Form.apply(this, arguments);
  }

  FormSearch() {
    return Groups.FormSearch.apply(this, arguments);
  }

  FormError() {
    return Groups.FormError.apply(this, arguments);
  }

  LogoHeading() {
    return Groups.LogoHeading.apply(this, arguments);
  }

  Media(props) {
    return this.merge(props);
  }

  MediaObjectBackground() {
    return Groups.MediaObjectBackground.apply(this, arguments);
  }

  MediaObjectHeading() {
    return Groups.MediaObjectHeading.apply(this, arguments);
  }

  MediaObjectHeadingSub() {
    return Groups.MediaObjectHeadingSub.apply(this, arguments);
  }

  NavigationDrawer() {
    return Groups.NavigationDrawer.apply(this, arguments);
  }

  DrawerPanel() {
    return Groups.DrawerPanel.apply(this, arguments);
  }

  DrawerPanelContainer() {
    return Groups.DrawerPanelContainer.apply(this, arguments);
  }

  DrawerPanelBackground() {
    return Groups.DrawerPanelBackground.apply(this, arguments);
  }

  DrawerPanelCloseIcon() {
    return Groups.DrawerPanelCloseIcon.apply(this, arguments);
  }

  DrawerPanelWrapper() {
    return Groups.DrawerPanelWrapper.apply(this, arguments);
  }

  Sidebar() {
    return Groups.Sidebar.apply(this, arguments);
  }

  SubMenu() {
    return Groups.SubMenu.apply(this, arguments);
  }

  SplitItem() {
    return Groups.SplitItem.apply(this, arguments);
  }

  SplitItemImage() {
    return Groups.SplitItemImage.apply(this, arguments);
  }

  SocialLinks() {
    return Groups.SocialLinks.apply(this, arguments);
  }

  HeaderMedia() {
    return Groups.HeaderMedia.apply(this, arguments);
  }

  PromoBannerText() {
    return Groups.PromoBannerText.apply(this, arguments);
  }

  PromoBannerContainer() {
    return Groups.PromoBannerContainer.apply(this, arguments);
  }

  FeaturedHeading() {
    return Groups.FeaturedHeading.apply(this, arguments);
  }

  FeaturedText() {
    return Groups.FeaturedText.apply(this, arguments);
  }

  ContactBar() {
    return Groups.ContactBar.apply(this, arguments);
  }

  ContactBarAddress() {
    return Groups.ContactBarAddress.apply(this, arguments);
  }

  ContactBarPipe() {
    return Groups.ContactBarPipe.apply(this, arguments);
  }

  ContactBarPhone() {
    return Groups.ContactBarPhone.apply(this, arguments);
  }

  NavVerticalHeading() {
    return Groups.NavVerticalHeading.apply(this, arguments);
  }

  NavVerticalList() {
    return Groups.NavVerticalList.apply(this, arguments);
  }

  NavVerticalListItem() {
    return Groups.NavVerticalListItem.apply(this, arguments);
  }

  NavHorizontalListItem() {
    return Groups.NavHorizontalListItem.apply(this, arguments);
  }

  NavVerticalLink() {
    return Groups.NavVerticalLink.apply(this, arguments);
  }

  NavVerticalLinkActive() {
    return Groups.NavVerticalLinkActive.apply(this, arguments);
  }

  NavHorizontalList() {
    return Groups.NavHorizontalList.apply(this, arguments);
  }

  NavHorizontalLink() {
    return Groups.NavHorizontalLink.apply(this, arguments);
  }

  NavHorizontalLinkActive() {
    return Groups.NavHorizontalLinkActive.apply(this, arguments);
  }

  NavigationDrawerLink() {
    return Groups.NavigationDrawerLink.apply(this, arguments);
  }

  NavigationDrawerLinkActive() {
    return Groups.NavigationDrawerLinkActive.apply(this, arguments);
  }

  NavigationDrawerSubLink() {
    return Groups.NavigationDrawerSubLink.apply(this, arguments);
  }

  NavigationDrawerSubLinkActive() {
    return Groups.NavigationDrawerSubLinkActive.apply(this, arguments);
  }

  NavigationDrawerList() {
    return Groups.NavigationDrawerList.apply(this, arguments);
  }

  NavigationDrawerListItem() {
    return Groups.NavigationDrawerListItem.apply(this, arguments);
  }

  NavigationDrawerInputSearch() {
    return Groups.NavigationDrawerInputSearch.apply(this, arguments);
  }

  SidebarContainer() {
    return Groups.SidebarContainer.apply(this, arguments);
  }

  SidebarList() {
    return Groups.SidebarList.apply(this, arguments);
  }

  SubMenuList() {
    return Groups.SubMenuList.apply(this, arguments);
  }

  SubMenuListItem() {
    return Groups.SubMenuListItem.apply(this, arguments);
  }

  ClockBlock() {
    return Groups.ClockBlock.apply(this, arguments);
  }

  ClockLabel() {
    return Groups.ClockLabel.apply(this, arguments);
  }

  /* Action Elements - Forms, Buttons etc */

  Link() {
    return Elements.Link.apply(this, arguments);
  }

  LinkDropdown() {
    return Elements.LinkDropdown.apply(this, arguments);
  }

  LinkDropdownActive() {
    return Elements.LinkDropdownActive.apply(this, arguments);
  }

  LinkArrow() {
    return Elements.LinkArrow.apply(this, arguments);
  }

  SocialLinksLink() {
    return Elements.SocialLinksLink.apply(this, arguments);
  }

  LinkContent() {
    return Elements.LinkContent.apply(this, arguments);
  }

  Input() {
    return Elements.Input.apply(this, arguments);
  }

  InputSearch() {
    return Elements.InputSearch.apply(this, arguments);
  }

  InputFloatLabel() {
    return Elements.InputFloatLabel.apply(this, arguments);
  }

  InputFloatLabelInput() {
    return Elements.InputFloatLabelInput.apply(this, arguments);
  }

  InputFloatLabelLabel() {
    return Elements.InputFloatLabelLabel.apply(this, arguments);
  }

  InputTextArea() {
    return Elements.InputTextArea.apply(this, arguments);
  }

  Button() {
    return Elements.Button.apply(this, arguments);
  }

  ButtonPrimary() {
    return Elements.ButtonPrimary.apply(this, arguments);
  }

  ButtonSecondary() {
    return Elements.ButtonSecondary.apply(this, arguments);
  }

  ButtonSpotlight() {
    return Elements.ButtonSpotlight.apply(this, arguments);
  }

  ButtonFullWidth() {
    return Elements.ButtonFullWidth.apply(this, arguments);
  }

  ButtonExternal() {
    return Elements.ButtonExternal.apply(this, arguments);
  }

  ButtonNext() {
    return Elements.ButtonNext.apply(this, arguments);
  }

  ButtonPrevious() {
    return Elements.ButtonPrevious.apply(this, arguments);
  }

  CarouselButtonNext() {
    return Elements.CarouselButtonNext.apply(this, arguments);
  }

  CarouselButtonPrevious() {
    return Elements.CarouselButtonPrevious.apply(this, arguments);
  }

  SlideshowArrowsButtonNext() {
    return Elements.SlideshowArrowsButtonNext.apply(this, arguments);
  }

  SlideshowArrowsButtonPrevious() {
    return Elements.SlideshowArrowsButtonPrevious.apply(this, arguments);
  }

  InputCheckbox() {
    return Elements.InputCheckbox.apply(this, arguments);
  }

  InputRadio() {
    return Elements.InputRadio.apply(this, arguments);
  }

  InputSelect() {
    return Elements.InputSelect.apply(this, arguments);
  }

  InputSelectElement() {
    return Elements.InputSelectElement.apply(this, arguments);
  }

  InputSelectIcon() {
    return Elements.InputSelectIcon.apply(this, arguments);
  }

  Option() {
    return Elements.Option.apply(this, arguments);
  }

  Dropdown() {
    return Elements.Dropdown.apply(this, arguments);
  }

  Wrapper(props) {
    return this.merge(
      { tag: "div", style: { display: "inline-block" } },
      omit(props, ["videoHeight", "videoWidth"])
    );
  }

  LinkIcon() {
    return Elements.LinkIcon.apply(this, arguments);
  }

  Dot() {
    return Elements.Dot.apply(this, arguments);
  }

  DotActive() {
    return Elements.DotActive.apply(this, arguments);
  }

  /* Elements - List */

  List() {
    return Elements.List.apply(this, arguments);
  }

  ListItem() {
    return Elements.ListItem.apply(this, arguments);
  }

  ListItemInline() {
    return Elements.ListItemInline.apply(this, arguments);
  }

  /* Elements - Divider */

  HR() {
    return Elements.HR.apply(this, arguments);
  }

  MembershipHR() {
    return Elements.MembershipHR.apply(this, arguments);
  }

  Divider() {
    return Elements.Divider.apply(this, arguments);
  }

  Pipe() {
    return Elements.Pipe.apply(this, arguments);
  }

  /* Elements - Loader */

  Loader() {
    return Elements.Loader.apply(this, arguments);
  }

  /* Elements - Embed */

  Embed() {
    return Elements.Embed.apply(this, arguments);
  }

  EmbedContainer() {
    return Elements.EmbedContainer.apply(this, arguments);
  }

  EmbedVideo() {
    return Elements.EmbedVideo.apply(this, arguments);
  }

  /* Elements - Media */

  WrapperImage() {
    return Elements.WrapperImage.apply(this, arguments);
  }

  WrapperInsetEmbedVideo() {
    return Elements.WrapperInsetEmbedVideo.apply(this, arguments);
  }

  Image() {
    return Elements.Image.apply(this, arguments);
  }

  ImageThumbnail() {
    return Elements.ImageThumbnail.apply(this, arguments);
  }

  ImageLogo() {
    return Elements.ImageLogo.apply(this, arguments);
  }

  Video() {
    return Elements.Video.apply(this, arguments);
  }

  Picture() {
    return Components.Picture.apply(this, arguments);
  }

  SVG() {
    return Elements.SVG.apply(this, arguments);
  }

  Icon() {
    return Elements.Icon.apply(this, arguments);
  }

  IconHamburger() {
    return Elements.IconHamburger.apply(this, arguments);
  }

  IconSearch() {
    return Elements.IconSearch.apply(this, arguments);
  }

  IconSocial() {
    return Elements.IconSocial.apply(this, arguments);
  }

  Figure() {
    return Elements.Figure.apply(this, arguments);
  }

  FigCaption() {
    return Elements.FigCaption.apply(this, arguments);
  }

  CarouselFigCaption() {
    return Elements.CarouselFigCaption.apply(this, arguments);
  }

  CarouselFigCaptionOverlay() {
    return Elements.CarouselFigCaptionOverlay.apply(this, arguments);
  }

  /* Elements - Layout */

  Container() {
    return Elements.Container.apply(this, arguments);
  }

  ContainerFluid() {
    return Elements.ContainerFluid.apply(this, arguments);
  }

  ContainerSplit() {
    return Elements.ContainerSplit.apply(this, arguments);
  }

  Block() {
    return Elements.Block.apply(this, arguments);
  }

  Element() {
    return Elements.Element.apply(this, arguments);
  }

  /* Elements - Typography */

  Heading() {
    return Elements.Heading.apply(this, arguments);
  }

  HeadingMajor() {
    return Elements.HeadingMajor.apply(this, arguments);
  }

  HeadingMiddle() {
    return Elements.HeadingMiddle.apply(this, arguments);
  }

  HeadingMinor() {
    return Elements.HeadingMinor.apply(this, arguments);
  }

  HeadingProduct() {
    return Elements.HeadingProduct.apply(this, arguments);
  }

  Text() {
    return Elements.Text.apply(this, arguments);
  }

  TextMajor() {
    return Elements.TextMajor.apply(this, arguments);
  }

  TextAction() {
    return Elements.TextAction.apply(this, arguments);
  }

  Label() {
    return Elements.Label.apply(this, arguments);
  }

  LabelMinor() {
    return Elements.LabelMinor.apply(this, arguments);
  }

  CloseIcon() {
    return Elements.CloseIcon.apply(this, arguments);
  }

  CardBannerContainer() {
    return Elements.CardBannerContainer.apply(this, arguments);
  }

  CardBannerBlock() {
    return Elements.CardBannerBlock.apply(this, arguments);
  }

  CardBannerHeading() {
    return Elements.CardBannerHeading.apply(this, arguments);
  }

  CardBannerButton() {
    return Elements.CardBannerButton.apply(this, arguments);
  }

  Details() {
    return Elements.Details.apply(this, arguments);
  }

  DetailsMinor() {
    return Elements.DetailsMinor.apply(this, arguments);
  }

  DisplayHeading() {
    return Elements.DisplayHeading.apply(this, arguments);
  }

  DisplayHeadingSub() {
    return Elements.DisplayHeadingSub.apply(this, arguments);
  }

  FooterLink() {
    return Elements.FooterLink.apply(this, arguments);
  }

  FooterDetails() {
    return Elements.FooterDetails.apply(this, arguments);
  }

  FooterText() {
    return Elements.FooterText.apply(this, arguments);
  }

  MembershipHeading() {
    return Elements.MembershipHeading.apply(this, arguments);
  }

  MoreLink() {
    return Elements.MoreLink.apply(this, arguments);
  }

  MoreLinkExpand() {
    return Elements.MoreLinkExpand.apply(this, arguments);
  }

  MoreLinkForward() {
    return Elements.MoreLinkForward.apply(this, arguments);
  }

  MoreLinkBackward() {
    return Elements.MoreLinkBackward.apply(this, arguments);
  }

  MoreLinkMenu() {
    return Elements.MoreLinkMenu.apply(this, arguments);
  }

  Price() {
    return Elements.Price.apply(this, arguments);
  }

  PriceMajor() {
    return Elements.PriceMajor.apply(this, arguments);
  }

  Tagline() {
    return Elements.Tagline.apply(this, arguments);
  }

  SubTagline() {
    return Elements.SubTagline.apply(this, arguments);
  }

  SupTagline() {
    return Elements.SupTagline.apply(this, arguments);
  }

  Error() {
    return Elements.Error.apply(this, arguments);
  }

  Address() {
    return Elements.Address.apply(this, arguments);
  }

  // Header
  UtilitiesMenu() {
    return Groups.UtilitiesMenu.apply(this, arguments);
  }

  UtilitiesMenuIcon() {
    return Elements.UtilitiesMenuIcon.apply(this, arguments);
  }

  UtilitiesMenuLink() {
    return Elements.UtilitiesMenuLink.apply(this, arguments);
  }

  Phone() {
    return Elements.Phone.apply(this, arguments);
  }

  /* Elements - Table */
  Table() {
    return Elements.Table.apply(this, arguments);
  }

  TableHeader() {
    return Elements.TableHeader.apply(this, arguments);
  }

  TableRow() {
    return Elements.TableRow.apply(this, arguments);
  }

  TableCell() {
    return Elements.TableCell.apply(this, arguments);
  }

  /* Client/Non-Bootstrap Only */
  Header() {
    throw Error("Header is not available");
  }
}

export default Default;
