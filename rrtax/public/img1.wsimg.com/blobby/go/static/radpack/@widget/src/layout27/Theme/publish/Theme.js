import React from "react";
import { without } from "lodash";
import Default from "../../../common/Themes/Default/Theme";
import { UX2, constants } from "@wsb/guac-widget-core";
import * as utils from "../../../common/Themes/Default/Dials/Colors/utils";
import { minimalIconMapping } from "../../../common/Components/Internal/Header/utils/mapPropsToSocialProps";
import * as filledIcons from "../../../common/IconPacks/humanisticFilled";
import * as socialIconPack from "../../../common/IconPacks/SocialIcons/minimalSocialIconPack";
import { Blink } from "../../../common/loaders";
import { ABOUT1_IMAGE_WIDTH } from "../../../common/constants";
import { FILL, FIT, INSET } from "../../../common/constants/headerTreatments";
import { levelFilter } from "../../../common/utils/text";
import { CIRCLE_IMAGE_DIMENSION } from "../../../common/utils/image";
import themeConfig from "../themeConfig";

const { buttons } = constants;

// the following widgets keep a neutral background color regardless of paintjob
const neutralWidgets = [
  "about1",
  "about3",
  "about4",
  "about10",
  "content2",
  "content3",
  "content7",
];

// the following widgets have hard-coded accent overlay effects that block overlay color changes
const accentOverlayWidgets = ["rss1", "subscribe3"];

// the following widgets are usually 50/50 full-bleed widgets that are forced to have a fixed width
const fixedWidthWidgets = ["about5", "payment3", "contact4", "fundraising1"];

export const contentCardMediaStyles = { marginBottom: "30px !important" };

const typographyShared1 = {
  style: {
    font: "primary",
    color: "highContrast",
    fontSize: "xlarge",
    fontWeight: "normal",
    letterSpacing: "0.031em",
  },
};

class Theme27 extends Default {
  static config = themeConfig;

  static get displayName() {
    return "Theme27";
  }

  static excludedProps = without(Default.excludedProps, "welcomeLine");

  static getMutatorDefaultProps(widgetType, widgetPreset) {
    const defaultProps = super.getMutatorDefaultProps(widgetType, widgetPreset);

    return widgetType === "HEADER"
      ? {
          ...defaultProps,
          useWelcomeLine: true,
          phoneOnSecondaryPage: true,
          useSocialLinks: true,
          useCropBackground: true,
          hasLogoAlign: true,
          headerTreatmentsConfig: {
            headerTreatments: [FILL, FIT, INSET],
            defaultHeaderTreatment: INSET,
            imageTreatments: {
              [FILL]: "none",
              [FIT]: "none",
              [INSET]: "category-solid",
            },
          },
          renderParallaxToggle: false,
        }
      : defaultProps;
  }

  static getWidgetDefaultProps(widgetType, widgetPreset) {
    return {
      ...super.getWidgetDefaultProps(widgetType, widgetPreset),
      ...(widgetType === "HEADER" && { logoAlign: "center" }),
    };
  }

  constructor() {
    super();
    /* eslint-disable id-length */
    this.mappedValues = {
      ...this.mappedValues,
      backgroundColorPrimaryLight() {
        const [primary] = utils.getDial(this, ["primary"]);
        return primary.setLightness(96).setAlpha(100);
      },
      backgroundColorSectionDefault: this.mappedValues.backgroundColorSection,
      backgroundColorSection() {
        const { category, section } = this.base;
        if (category === "neutral" && section === "alt") {
          return this.mappedValues.backgroundColorPrimaryLight.call(this);
        }
        return this.mappedValues.backgroundColorSectionDefault.call(this);
      },
      backgroundColorLightTransp() {
        return this.mappedValues.backgroundColorPrimaryLight
          .call(this)
          .setAlpha(80);
      },
      backgroundColorSectionTransp() {
        return this.mappedValues.backgroundColorSection.call(this).setAlpha(80);
      },
      backgroundColorSearchMobilePrimary() {
        const [primary] = utils.getDial(this, ["primary"]);
        return primary.darken(1).setAlpha(10);
      },
      colorPrimaryDefault: this.mappedValues.colorPrimary,
      colorPrimary() {
        const { category } = this.base;
        if (category === "primary") {
          return this.mappedValues.colorHighContrast.call(this);
        }
        return this.mappedValues.colorPrimaryDefault.call(this);
      },
      themeFontMultipliers: {
        xxlarge: 1.05,
      },
      typographyOverrides: {
        LogoAlpha: {
          ...typographyShared1,
        },
        HeadingAlpha: {
          style: {
            font: "primary",
            color: "highContrast",
            fontSize: "xxlarge",
            fontWeight: "normal",
            letterSpacing: "0.023em",
          },
        },
        HeadingBeta: {
          style: {
            font: "alternate",
            color: "highlight",
            fontSize: "medium",
            fontWeight: "normal",
            letterSpacing: "0.125em",
            textTransform: "uppercase",
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
            letterSpacing: "0.045em",
          },
        },
        HeadingEpsilon: {
          style: {
            font: "primary",
            color: "highlight",
            fontSize: "xlarge",
            fontWeight: "normal",
            letterSpacing: "0.031em",
          },
        },
        BodyGamma: {
          style: {
            font: "alternate",
            color: "highlight",
            fontSize: "large",
            fontWeight: "normal",
            letterSpacing: "normal",
          },
        },
        DetailsGamma: {
          style: {
            font: "alternate",
            color: "lowContrast",
            fontSize: "xsmall",
            fontWeight: "normal",
            letterSpacing: "0.083em",
            textTransform: "uppercase",
          },
        },
        NavAlpha: {
          style: {
            font: "alternate",
            color: "highContrast",
            fontSize: "small",
            fontWeight: "normal",
            letterSpacing: "0.214em",
            textTransform: "uppercase",
            [":hover"]: {
              color: "highlight",
            },
            [":active"]: {
              color: "highContrast",
            },
          },
          active: {
            style: {
              color: "highContrast",
              fontWeight: "normal",
              borderBottom: "1px solid",
              borderColor: "primary",
              paddingBottom: "xxsmall",
              [":hover"]: {
                color: "highlight",
              },
            },
          },
        },
        SubNavAlpha: {
          style: {
            font: "alternate",
            color: "section",
            fontSize: "small",
            fontWeight: "normal",
            letterSpacing: "normal",
            textTransform: "none",
            [":hover"]: {
              color: "highlight",
            },
            [":active"]: {
              color: "highlight",
            },
          },
          active: {
            style: {
              fontWeight: "normal",
            },
          },
        },
        NavBeta: {
          style: {
            font: "alternate",
            color: "highContrast",
            fontSize: "large",
            fontWeight: "normal",
            letterSpacing: "0.136em",
            textTransform: "uppercase",
            [":hover"]: {
              color: "highlight",
            },
            [":active"]: {
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
            [":hover"]: {
              color: "highlight",
            },
            [":active"]: {
              color: "highlight",
            },
          },
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
              fontSize: "medium",
            },
          };
          return {
            style: {
              font: "alternate",
              fontWeight: "bold",
              letterSpacing: "0.214em",
              textTransform: "uppercase",
              ...sizes[size],
            },
          };
        },
      },
    };
  }

  Widget(props) {
    const { widgetPreset } = this.base;
    if (fixedWidthWidgets.indexOf(widgetPreset) !== -1) {
      return super.Widget(
        this.merge(props, {
          style: {
            backgroundColor: "neutral",
            "> div": {
              position: "relative",
              overflow: "hidden",
              margin: "auto",
              paddingHorizontal: "medium",
              ["@sm"]: { maxWidth: "smContainer" },
              ["@md"]: { maxWidth: "mdContainer" },
              ["@lg"]: { maxWidth: "lgContainer" },
              ["@xl"]: { maxWidth: "xlContainer" },
            },
          },
        })
      );
    }
    return super.Widget(props);
  }

  Section({ children, skipDivider, ...props }) {
    const neutralWidgetStyles =
      neutralWidgets.indexOf(this.base.widgetPreset) !== -1
        ? { backgroundColor: "neutral" }
        : {};

    if (this.base.widgetType === "FOOTER" && !skipDivider) {
      children = (
        <React.Fragment>
          <UX2.Element.Divider style={{ paddingVertical: "medium" }} />
          {children}
        </React.Fragment>
      );
    }

    return super.Section(
      this.merge(props, {
        children,
        style: {
          "@xs-only": {
            paddingVertical: "large",
          },
          paddingVertical: "xlarge",
          ...neutralWidgetStyles,
        },
      })
    );
  }

  SectionSplit(props) {
    const { category } = this.base;
    return super.Section(
      this.merge(props, {
        style: {
          backgroundColor: category === "neutral" ? "primaryLight" : "section",
          paddingHorizontal: "medium",
          paddingVertical: "xxlarge",
          maxWidth: "100% !important",
          "@md": {
            paddingHorizontal: "xlarge",
          },
        },
      })
    );
  }

  Hero(props) {
    return super.Hero(
      this.merge(
        {
          style: {
            textAlign: "center",
            "@md": {
              maxWidth: "100%", // Overrides default maxWidth on Desktop
            },
          },
        },
        props
      )
    );
  }

  HeroLeft(props) {
    return this.Hero(
      this.merge(
        {
          style: {
            "@sm": {
              borderColor: "rgba(255, 255, 255, 0.5)",
              borderLeftStyle: "solid",
              borderLeftWidth: "1px",
              paddingLeft: "large",
            },
            border: "none",
            paddingLeft: "none",
          },
        },
        props
      )
    );
  }

  HeroRight(props) {
    return this.Hero(
      this.merge(
        {
          style: {
            "@sm": {
              borderColor: "rgba(255, 255, 255, 0.5)",
              borderRightStyle: "solid",
              borderRightWidth: "1px",
              paddingRight: "large",
            },
            border: "none",
            paddingRight: 0,
          },
        },
        props
      )
    );
  }

  HeroText(props) {
    return super.SubTagline(
      this.merge(props, {
        typography: "BodyAlpha",
        featured: false,
        style: {
          display: "inline-block",
          width: "100%",
          maxWidth: "750px",
          marginHorizontal: "auto",
          marginBottom: "small",
        },
      })
    );
  }

  Divider(props) {
    const footerDividerStyles =
      this.base.widgetType === "FOOTER" ? { display: "none" } : {};
    return super.Divider(this.merge(props, { style: footerDividerStyles }));
  }

  HR(props) {
    const footerDividerStyles =
      this.base.widgetType === "FOOTER"
        ? {
            borderColor: "transparent",
            marginBottom: 0,
          }
        : {};
    return super.HR(this.merge(props, { style: footerDividerStyles }));
  }

  Table(props) {
    return super.Table(
      this.merge(
        {
          style: {
            borderRadius: "medium",
          },
        },
        props
      )
    );
  }

  Input(props) {
    return super.Input(
      this.merge(
        {
          typography: "BodyAlpha",
          style: {
            paddingVertical: "small",
            paddingHorizontal: "xsmall",
            borderColor: "input",
            borderRadius: "none",
            borderStyle: "solid",
            borderWidth: "xsmall",
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
          },
        },
        props
      )
    );
  }

  InputTextArea(props) {
    return super.InputTextArea(
      this.merge(
        {
          style: {
            backgroundColor: "transparent",
            borderTopWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderRadius: 3,
            WebkitAppearance: "none !important",
          },
        },
        props
      )
    );
  }

  InputFloatLabel(props) {
    return super.InputFloatLabel(
      this.merge(
        {
          style: {
            backgroundColor: "transparent",
          },
        },
        props
      )
    );
  }

  InputFloatLabelLabel(props) {
    return super.InputFloatLabelLabel(
      this.merge(
        {
          typography: "BodyAlpha",
          style: {
            left: "xsmall",
          },
        },
        props
      )
    );
  }

  InputFloatLabelInput(props) {
    return super.InputFloatLabelInput(
      this.merge(
        {
          style: {
            paddingBottom: "xsmall",
          },
        },
        props
      )
    );
  }

  InputSelect(props) {
    return super.InputSelect(
      this.merge(
        {
          typography: "BodyAlpha",
          style: {
            borderWidth: "xsmall",
            borderRadius: "medium",
            borderStyle: "solid",
          },
        },
        props
      )
    );
  }

  InputSelectElement(props) {
    return super.InputSelectElement(
      this.merge(
        {
          style: {
            paddingVertical: "small",
            paddingHorizontal: "small",
          },
        },
        props
      )
    );
  }

  Button(props) {
    const { renderMode } = this.base;
    const {
      fill = this.getButtonDefaults().fill,
      shadow = this.getButtonDefaults().shadow,
    } = props;
    const noHoverState =
      renderMode && renderMode === constants.renderModes.EDIT;

    const animation =
      fill !== buttons.fills.OPEN
        ? {
            style: {
              transition: "all 0.3s",
            },
          }
        : {};

    const solidOverride =
      fill === buttons.fills.SOLID && shadow === buttons.shadows.NONE
        ? {
            style: {
              ...(!noHoverState && {
                [":hover"]: {
                  ["@md"]: {
                    boxShadow: "0 10px 10px -10px rgba(0, 0, 0, 0.5)",
                  },
                },
              }),
            },
          }
        : {};
    return super.Button(this.merge(solidOverride, animation, props));
  }

  Phone(props) {
    return super.Phone(
      this.merge(props, {
        typography: "BodyGamma",
        featured: false,
        style: {
          textAlign: "center",
        },
      })
    );
  }

  SupTagline(props) {
    return super.SupTagline(
      this.merge(
        {
          typography: "HeadingBeta",
          featured: false,
          style: {
            width: "100%",
            textAlign: "inherit",
            marginHorizontal: "auto",
            marginBottom: "small",
            position: "relative",
          },
        },
        props
      )
    );
  }

  /* Headings */

  Heading(props) {
    const { tag, level } = props;
    const typographyMapping = {
      2: "HeadingAlpha",
    };
    return super.Heading(
      this.merge(
        {
          typography: typographyMapping[levelFilter({ tag, level })],
        },
        props
      )
    );
  }

  Tagline(props) {
    return super.Tagline(
      this.merge(props, {
        typography: "HeadingAlpha",
        style: {
          marginHorizontal: "auto",
          width: "100%",
          marginBottom: "small",
          wordWrap: "break-word",
          overflowWrap: "break-word",
          position: "relative",
        },
      })
    );
  }

  HeroCenterHeading(props) {
    return this.HeroHeading(
      this.merge(
        {
          style: {
            borderBottomStyle: "solid",
            borderBottomWidth: "1px",
            borderColor: "rgba(255, 255, 255, 0.5)",
            paddingBottom: "small",
          },
        },
        props
      )
    );
  }

  LogoHeading(props) {
    const { style = {} } = props;
    const hasLogoFontSelected = style.font === "logo";
    const defaultLogoFontStyles = {
      borderWidth: "xsmall",
      borderStyle: "solid",
      borderColor: "highContrast",
    };
    return super.LogoHeading(
      this.merge(
        props,
        {
          style: {
            textAlign: "center",
            paddingVertical: "xsmall",
            paddingHorizontal: "small",
            lineHeight: 1,
            width: "fit-content",
            margin: "0 auto",
            ["@md"]: {
              overflowWrap: "break-word",
            },
            ...(hasLogoFontSelected ? {} : defaultLogoFontStyles),
          },
        },
        props
      )
    );
  }

  ContentBasic(props) {
    if (this.base.widgetPreset === "content7") {
      return super.ContentBasic(this.merge(props, { category: "neutral" }));
    }
    return super.ContentBasic(props);
  }

  SectionHeading(props) {
    const { category } = props;
    const { widgetPreset } = this.base;

    return super.SectionHeading(
      this.merge(props, {
        category:
          neutralWidgets.indexOf(widgetPreset) !== -1 ? "neutral" : category,
        style: {
          marginBottom: "medium",
          textAlign: "left",
          "@sm": {
            marginBottom: "large",
          },
        },
      })
    );
  }

  HeadingMajor(props) {
    return super.HeadingMajor(
      this.merge(
        {
          typography: "HeadingGamma",
        },
        props
      )
    );
  }

  DisplayHeading(props) {
    return super.DisplayHeading(
      this.merge(
        {
          typography: "HeadingEpsilon",
        },
        props
      )
    );
  }

  Intro(props) {
    return super.Intro(
      this.merge(
        {
          style: {
            marginBottom: "medium",
            ["@sm"]: {
              marginBottom: "large",
            },
          },
        },
        props
      )
    );
  }

  /* Icons */
  Icon(props) {
    let { icon } = props;
    icon = minimalIconMapping[icon] || icon;
    return super.Icon(
      this.merge(props, {
        icon,
        iconPack: { ...filledIcons, ...socialIconPack },
      })
    );
  }

  Loader(props) {
    return Blink.apply(this, [props]);
  }

  UtilitiesMenuIcon(props) {
    return super.UtilitiesMenuIcon(
      this.merge(
        {
          typography: false,
          style: {
            "@xs": {
              color: "primary",
            },
            "@md": {
              display: "initial",
              color: "primary",
              [":hover"]: { color: "highContrast" },
            },
          },
        },
        props
      )
    );
  }

  UtilitiesMenuLink(props) {
    return super.UtilitiesMenuLink(
      this.merge(
        {
          typography: false,
          style: {
            color: "primary",
          },
        },
        props
      )
    );
  }

  /* Search bar */
  FormSearch(props) {
    return super.FormSearch(
      this.merge(
        {
          style: {
            "@md": {
              width: "100%",
              marginLeft: "7px",
              marginRight: "medium",
            },
          },
        },
        props
      )
    );
  }

  InputSearch(props) {
    return super.InputSearch(
      this.merge(
        {
          style: {
            borderStyle: "solid",
            borderColor: "primary",
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottomWidth: "1px !important",
            borderRadius: 0,
            backgroundColor: "white",
            paddingHorizontal: "medium",
            ["::placeholder"]: {
              color: "primary",
            },
          },
        },
        props
      )
    );
  }

  CloseIcon(props) {
    return super.CloseIcon(
      this.merge(props, {
        style: {
          color: "primary",
          [":hover"]: {
            color: "highContrast",
          },
          ["@md"]: {
            color: "primary",
            [":hover"]: {
              color: "highContrast",
            },
          },
        },
      })
    );
  }

  /* Promo banner */
  PromoBanner(props) {
    const { category } = props;
    const categoryMap = {
      primary: "accent",
      accent: "primary",
      neutral: "primary",
    };
    return super.PromoBanner(
      this.merge(props, {
        categoryOverride: categoryMap[category] || category,
      })
    );
  }

  PromoBannerText(props) {
    return super.Text(
      this.merge(props, {
        typography: "HeadingBeta",
        style: {
          textAlign: "center",
          paddingHorizontal: "xlarge",
          "@xs-only": {
            paddingHorizontal: 0,
          },
        },
      })
    );
  }

  /* Nav */
  NavLinkActive(props) {
    const paddingOffset = this.parseSizedUnit(
      this.mapPropValue("padding", "-xxsmall")
    )[0];
    const marginBottom = paddingOffset - 1;
    return this.NavLink(
      this.merge(
        {
          active: true,
          style: {
            marginBottom,
          },
        },
        props
      )
    );
  }

  NavMoreMenuLinkActive(props) {
    return super.NavMoreMenuLinkActive(
      this.merge(
        {
          style: {
            marginBottom: "medium",
          },
        },
        props
      )
    );
  }

  Dropdown(props) {
    return super.Dropdown(
      this.merge(props, {
        style: {
          borderRadius: 0,
          boxShadow: "0 3px 6px 3px rgba(0, 0, 0, 0.16)",
        },
      })
    );
  }

  NavFooterLink(props) {
    return super.NavFooterLink(
      this.merge(
        {
          typography: "LinkAlpha",
        },
        props
      )
    );
  }

  /* Mobile nav menu */
  NavigationDrawerList(props) {
    return super.List(
      this.merge(
        {
          style: {
            paddingBottom: 0,
          },
        },
        props
      )
    );
  }

  NavigationDrawerListItem(props) {
    return super.NavigationDrawerListItem(
      this.merge(
        {
          style: {
            borderBottomWidth: 0,
          },
        },
        props
      )
    );
  }

  NavigationDrawerContainer(props) {
    return super.Container(
      this.merge(
        {
          style: {
            paddingHorizontal: "large",
          },
        },
        props
      )
    );
  }

  NavigationDrawerCloseIcon(props) {
    return super.CloseIcon(
      this.merge(
        {
          style: {
            color: "black",
          },
        },
        props
      )
    );
  }

  NavigationDrawerIcon(props) {
    const mobilePositioning = {
      top: "unset",
      transform: "unset",
    };

    return super.IconSearch(
      this.merge(
        {
          style: {
            ...(props.icon === "magGlass"
              ? {
                  color: "primary",
                }
              : {
                  "@xs-only": {
                    ...mobilePositioning,
                  },
                  "@sm-only": {
                    ...mobilePositioning,
                  },
                }),
          },
        },
        props
      )
    );
  }

  IconHamburger(props) {
    return super.IconHamburger(
      this.merge(
        {
          style: {
            "@xs": {
              color: "primary",
            },
          },
        },
        props
      )
    );
  }

  /* Card Banner */
  CardBanner(props) {
    const { category } = this.base;
    const { heading, headingProps = {}, action } = props;
    const styles = {
      container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column !important",
        "@md": {
          maxWidth: "500px",
          paddingVertical: "large",
        },
        "> div:nth-child(2)": {
          paddingLeft: "0 !important",
        },
      },
      headingStyles: {
        marginBottom: action ? "medium" : "0px",
        textAlign: "center",
      },
    };
    return super.Container(
      this.merge(props, {
        tag: UX2.Element.Container,
        group: "Card",
        groupType: "Banner",
        children: (
          <React.Fragment>
            {heading && (
              <UX2.Element.Heading.Major
                group="Group"
                typography="HeadingGamma"
                {...headingProps}
                style={styles.headingStyles}
                category={category}
                children={heading}
              />
            )}
            {action && (
              <UX2.Element.Block category={category} children={action} />
            )}
          </React.Fragment>
        ),
        style: styles.container,
      })
    );
  }

  CardBannerBlock(props) {
    const { widgetPreset } = this.base;
    return super.CardBannerBlock(
      this.merge(props, {
        style: {
          maxWidth: ["content5", "ordering1"].includes(widgetPreset)
            ? "100% !important"
            : "inherit",
        },
      })
    );
  }

  /* Overlay effects */
  SectionBanner(props) {
    const { section } = props;
    const { widgetPreset } = this.base;
    const widgetCategory = this.base.category;
    const oppositeSection = section === "default" ? "alt" : "default";
    return super.SectionBanner(
      this.merge(props, {
        ...(accentOverlayWidgets.indexOf(widgetPreset) === -1
          ? { category: widgetCategory }
          : {}),
        ...(widgetPreset === "social1"
          ? {
              section: widgetCategory === "neutral" ? oppositeSection : section,
            }
          : {}),
      })
    );
  }

  Content(props) {
    const { widgetPreset } = this.base;
    if (widgetPreset === "about4") {
      const { section } = props;
      const widgetCategory = this.base.category;
      return super.Content(
        this.merge(props, {
          section:
            widgetCategory === "neutral" && section === "default"
              ? "alt"
              : section,
          category: widgetCategory,
          style: {
            backgroundColor: "section",
          },
        })
      );
    }
    return super.Content(props);
  }

  /* Content cards */
  ContentCard(props) {
    const { widgetPreset, category } = this.base;
    const imageTopLayouts = ["about1", "about3", "about7", "about8", "about10"];
    const hasBackground = (props.text && props.text.children) || props.heading;
    return super.ContentCard(
      this.merge(props, {
        style: {
          backgroundColor: hasBackground
            ? category === "neutral"
              ? "primaryLight"
              : "section"
            : "transparent",
          paddingBottom: "large",
          paddingTop:
            imageTopLayouts.includes(widgetPreset) &&
            (props.image || props.video)
              ? 0
              : "large",
        },
      })
    );
  }

  ContentCardWrapperImage(props) {
    return super.ContentCardWrapperImage(
      this.merge(props, { style: contentCardMediaStyles })
    );
  }

  ContentCardImageThumbnail(props) {
    return super.ContentCardImageThumbnail(
      this.merge(
        {
          style: {
            height: "100%",
            width: "100%",
            borderRadius: "none",
          },
        },
        props
      )
    );
  }

  ContentCardHeading(props) {
    return super.ContentHeading(
      this.merge(props, {
        style: {
          width: "100%",
          paddingHorizontal: "large",
        },
      })
    );
  }

  ContentCardText(props) {
    return super.ContentCardText(
      this.merge(props, {
        style: {
          paddingHorizontal: "large",
        },
      })
    );
  }

  ContentCardButton(props) {
    return super.ContentCardButton(
      this.merge(props, {
        style: {
          width: "auto",
          marginHorizontal: "large",
          alignSelf: "auto",
        },
      })
    );
  }

  ContentText(props) {
    return super.ContentText(
      this.merge(
        {
          style: {
            "@xs-only": {
              "> p > ul": {
                marginHorizontal: 0,
                paddingLeft: "medium",
              },
            },
          },
        },
        props
      )
    );
  }

  /* Image overrides */
  Image(props) {
    const { widgetPreset } = this.base;
    let extraCircleStyles = {};
    if (props.imageData?.imageDimension === CIRCLE_IMAGE_DIMENSION) {
      extraCircleStyles = { padding: "small" };
    }
    const about1And10Common = {
      height: "auto",
      ["@md"]: {
        width: ABOUT1_IMAGE_WIDTH,
      },
      ["@lg"]: {
        width: "100%",
      },
      ...extraCircleStyles,
    };
    const imageOverrides = {
      about1: about1And10Common,
      about10: about1And10Common,
      content2: {
        ...extraCircleStyles,
      },
      content9: {
        ...extraCircleStyles,
      },
      about2: {
        ...extraCircleStyles,
      },
      about3: {
        ...extraCircleStyles,
      },
      about7: {
        ...extraCircleStyles,
      },
      about8: {
        ...extraCircleStyles,
      },
    };

    const fullImageStyles = imageOverrides[widgetPreset]
      ? imageOverrides[widgetPreset]
      : {};
    return super.Image(
      this.merge(props, {
        style: {
          borderRadius: "0px !important",
          ...fullImageStyles,
        },
        mobileGutterWidth: 24,
      })
    );
  }

  DividerHR(props) {
    return super.HR(
      this.merge(
        {
          style: {
            borderColor: "! #999",
          },
        },
        props
      )
    );
  }

  MediaObjectBackground(props) {
    return super.MediaObjectBackground(
      this.merge(
        {
          style: {
            borderRadius: "0",
          },
        },
        props
      )
    );
  }

  FooterText(props) {
    return super.FooterText(
      this.merge(
        {
          typography: "DetailsGamma",
        },
        props
      )
    );
  }

  FooterDetails(props) {
    return super.FooterDetails(
      this.merge(
        {
          typography: "DetailsGamma",
        },
        props
      )
    );
  }
}

export default Theme27;
