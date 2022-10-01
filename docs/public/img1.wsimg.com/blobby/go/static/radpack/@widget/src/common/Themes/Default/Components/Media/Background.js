import React from "react";
import { UX2, constants } from "@wsb/guac-widget-core";
import {
  CATEGORY,
  PRIMARY,
  NEUTRAL,
  ACCENT,
  NONE,
  LIGHT_DARK,
} from "../../../../constants/overlayTypes";
import {
  resolveImageSource,
  addImageApiArgs,
  isInternalUrl,
} from "../../../../utils/image";
import { DEFAULT_OVERLAY_TEXT_SHADOW } from "../../../../constants";
import { omit } from "lodash";
import { ranges, densities } from "../../../../constants/mediaQueries";
import dataAids from "../../../../Components/Internal/Header/constants/dataAids";

const BLUR_RADIUS = 90;

const { HEADER } = constants.widgetTypes;

const { PUBLISH } = constants.renderModes;

function escapeQuotes(str) {
  return str.replace(/"/g, '\\"');
}

function buildMediaQuery({ min, max, density }) {
  const sizeQuery = [
    min ? `(min-width: ${min}px)` : "",
    max ? `(max-width: ${max}px)` : "",
  ]
    .filter(Boolean)
    .join(" and ");
  return density !== 1
    ? `@media ${sizeQuery} and (-webkit-min-device-pixel-ratio: ${density}), ${sizeQuery} and (min-resolution: ${
        density * 96
      }dpi)`
    : `@media ${sizeQuery}`;
}

function buildMediaQueries(
  backgroundImage,
  {
    generateGradient,
    desktopWidth,
    mobileWidth,
    blur,
    disableOverlayMobile,
    isPublish,
  }
) {
  return ranges.reduce((acc, curr) => {
    // some cases where we do not need to increase quality such as a blur background
    (blur ? [1] : densities).forEach((density) => {
      const widthMultiplier = curr.isMobile ? mobileWidth : desktopWidth;
      const gradientCSS =
        generateGradient &&
        generateGradient(
          curr.isMobile || curr.isTablet ? !disableOverlayMobile : true
        );
      const backgroundImageCSS = [
        gradientCSS,
        `url("${escapeQuotes(
          addImageApiArgs(backgroundImage, {
            rs: curr.max
              ? `w:${widthMultiplier * curr.max * density},m`
              : "w:100%25",
          })
        )}")`,
      ]
        .filter(Boolean)
        .join(", ");
      acc[isPublish ? buildMediaQuery({ ...curr, density }) : curr.breakpoint] =
        {
          backgroundImage: backgroundImageCSS,
        };
    });
    return acc;
  }, {});
}

export function Background({
  style,
  backgroundImage,
  backgroundPosition,
  backgroundSize,
  imageData = {},
  imageData2 = {},
  backgroundImage2,
  backgroundSize2,
  children,
  mobileWidth = 1,
  desktopWidth = 1,
  blur,
  disableOverlayMobile,
  lazyLoad = true,
  ...props
}) {
  const { widgetType, widgetPreset, context, category, renderMode, order } =
    this.base;
  const { parallaxEnabled, position } = imageData;
  const isPublish = renderMode === PUBLISH;
  const nodeProps = omit(props, [
    "title",
    "treatment",
    "overlayAlpha",
    "overlay",
    "mobileWidthMultiplier",
    "desktopWidthMultiplier",
    "style",
  ]);
  const mutatorConfiguration = this.constructor.getMutatorDefaultProps(
    widgetType,
    widgetPreset
  );
  const hasOpacitySlider = mutatorConfiguration.showOverlayOpacityControls;
  const defaultFilter = this.constructor.getDefaultBackgroundFilter(
    widgetType,
    widgetPreset
  );
  let _wrapperStyle = {
    ...(widgetType !== HEADER && { textShadow: DEFAULT_OVERLAY_TEXT_SHADOW }),
    ...style,
  };
  const parallaxStyle = {
    "@md": { backgroundAttachment: "fixed" },
    "@xs": { backgroundAttachment: "unset" },
  };
  const _bgStyle = {
    backgroundPosition: parallaxEnabled
      ? "center"
      : position || backgroundPosition || "center",
    backgroundSize: backgroundSize || "cover",
    backgroundBlendMode: "normal",
    backgroundRepeat: "no-repeat",
    textShadow: "none",
    ...(parallaxEnabled && isPublish && parallaxStyle),
  };

  let backgroundElement, gradient, generateGradient;

  const resolvedSrc =
    backgroundImage ||
    imageData.backgroundImage ||
    resolveImageSource({
      filter: defaultFilter,
      additionalUrlParams: [blur && `fx-bl=s:${BLUR_RADIUS}`],
      ...imageData,
    });
  // generate overlay layer
  const overlay =
    props.overlay ||
    this.constructor.getDefaultImageOverlayType(widgetType, widgetPreset);
  if (overlay !== NONE) {
    const getOverlayColor = () => {
      if (overlay === LIGHT_DARK) {
        if (category !== "primary") return "sectionOverlay";
        const primaryColor = UX2.utils
          .getTheme(context, { category: "primary", section: "default" })
          .mapPropValue("backgroundColor", "section");
        return primaryColor.isLight() ? "neutralOverlay" : "accentOverlay";
      }
      const overlayMap = {
        [CATEGORY]: "sectionOverlay",
        [PRIMARY]: "primaryOverlay",
        [NEUTRAL]: "neutralOverlay",
        [ACCENT]: "accentOverlay",
      };
      return overlayMap[overlay];
    };
    const overlayColor = UX2.utils
      .getTheme(context, { category, section: "overlay" })
      .mapPropValue("backgroundColor", getOverlayColor());

    const overlayAlpha = imageData?.overlayAlpha;
    let opacity = 0;

    if (overlayAlpha >= 0) {
      if (widgetType === "HEADER") {
        // do not apply opacity set on imageData if the opacity slider isnt rendered in the theme
        opacity = hasOpacitySlider
          ? overlayAlpha
          : this.constructor.getDefaultImageOverlayOpacity(
              widgetType,
              widgetPreset
            );
      } else {
        opacity = overlayAlpha;
      }
    } else {
      opacity = this.constructor.getDefaultImageOverlayOpacity(
        widgetType,
        widgetPreset
      );
    }

    gradient = true;
    generateGradient = (show) => {
      overlayColor.alpha = show ? opacity : 0;
      return `linear-gradient(to bottom, ${overlayColor} 0%, ${overlayColor} 100%)`;
    };
  }

  const backgroundImageCSS =
    !backgroundImage && !imageData.backgroundImage && isInternalUrl(resolvedSrc)
      ? buildMediaQueries(
          resolvedSrc
            .replace(
              /\/rs=w:{width},h:{height},cg:true,m\/cr=w:{width},h:{height},a[x]?:[^/]*/,
              ""
            )
            .replace(/\/:$/, ""),
          {
            generateGradient: gradient && generateGradient,
            desktopWidth,
            mobileWidth,
            blur,
            disableOverlayMobile,
            isPublish,
          }
        )
      : {
          backgroundImage: [
            gradient && generateGradient(true),
            `url("${escapeQuotes(resolvedSrc)}")`,
          ]
            .filter(Boolean)
            .join(", "),
        };

  const resolvedSrc2 = backgroundImage2 || resolveImageSource(imageData2);

  if (resolvedSrc2) {
    _bgStyle.backgroundImage = `${resolvedSrc}, url("${resolvedSrc2.replace(
      /"/g,
      '\\"'
    )}")`;
    if (backgroundSize2) {
      _bgStyle.backgroundSize = `${_bgStyle.backgroundSize}, ${backgroundSize2}`;
    }
  }

  if (gradient) {
    _bgStyle.backgroundSize = `auto, ${_bgStyle.backgroundSize}`;
  }

  // do not set background-image a url
  if (!resolvedSrc.length && !resolvedSrc2.length) {
    return this.merge({ style: _wrapperStyle, children }, nodeProps);
  }

  const isLazyLoadedWidget = typeof window !== "undefined";
  const shouldLazyLoad =
    lazyLoad &&
    isPublish &&
    !isLazyLoadedWidget &&
    !(widgetType === HEADER || order === 0);

  if (shouldLazyLoad) {
    backgroundElement = (
      <UX2.Element.Block
        data-lazybg
        className="d-none"
        style={{
          ..._bgStyle,
          ...backgroundImageCSS,
        }}
      />
    );
  } else {
    _wrapperStyle = {
      ..._wrapperStyle,
      ..._bgStyle,
      ...backgroundImageCSS,
    };
  }

  return this.merge(
    {
      role: "img",
      style: _wrapperStyle,
      children: shouldLazyLoad ? [backgroundElement, children] : children,
      ["data-aid"]: dataAids.BACKGROUND_IMAGE_RENDERED,
    },
    nodeProps
  );
}

export function BackgroundHalf(props) {
  return this.Background({ ...props, desktopWidthMultiplier: 0.5 });
}
