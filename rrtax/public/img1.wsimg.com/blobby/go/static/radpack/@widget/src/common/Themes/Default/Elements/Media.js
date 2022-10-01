import React from "react";
import { get } from "lodash";
import { constants, UX, UX2, utils } from "@wsb/guac-widget-core";
import * as baseIcons from "../../../IconPacks";
import {
  resolveImageSource,
  getImageDimensionData,
} from "../../../utils/image";
import toResponsiveImage from "../../../utils/toResponsiveImage";
import { MIN_TARGET } from "../../../constants";

const { PUBLISH } = constants.renderModes;
const { RSS, HEADER } = constants.widgetTypes;
const { getImageDimensions } = utils.imageDimensions;

export function SVG(props) {
  return this.merge(
    {
      tag: "svg",
    },
    props
  );
}

export function Icon({
  icon,
  size = "medium",
  rotate = false,
  iconPack = {},
  color = false,
  minTarget = false,
  ...props
}) {
  // If no icon is provided, render nothing
  if (!icon) {
    return null;
  }

  const icons = Object.assign({}, baseIcons, iconPack);
  let iconSize = this.mapPropValue("iconSize", size);
  let padding = false;
  let svgPath = icon;
  const isValidSvgElem =
    Object.prototype.hasOwnProperty.call(icon, "type") &&
    (icon.type === "path" || icon.type === "g");

  if (typeof icon === "string") {
    if (!icons[icon]) {
      // eslint-disable-next-line
      console.warn(
        `Incorrect icon name ${icon} - the issue is probably in ${this.base.widgetPreset}`
      );
      return null;
    }

    // Color logic
    if (color) {
      icon = icons[icon + "Color"] ? icon + "Color" : icon;
    }

    svgPath = icons[icon];
  } else if (!isValidSvgElem) {
    console.warn(`Icon prop is not a valid SVG element`);
    return null;
  }

  // Target size logic
  if (minTarget) {
    if (typeof iconSize === "number" && iconSize < MIN_TARGET) {
      padding = (MIN_TARGET - iconSize) / 2 + "px";
      iconSize = MIN_TARGET + "px";
    }
  }

  return this.merge(
    {
      tag: "svg",
      children: svgPath,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      width: iconSize,
      height: iconSize,
      style: {
        color: "inherit",
        display: "inline-block",
        padding,
        transition: rotate && "transform .33s ease-in-out",
        transform: rotate && `rotate(${rotate}deg)`,
        verticalAlign: "middle",
      },
    },
    props
  );
}

export function IconHamburger({ animation, icon = "hamburger", ...props }) {
  const hamburgerStyle = {
    verticalAlign: "top",
  };

  if (animation) {
    const { animationIcon, iconPack, animationStyle, keyFrame } = animation;

    return this.merge({
      tag: "div",
      children: (
        <React.Fragment>
          <UX2.Element.Icon
            icon={animationIcon}
            iconPack={iconPack}
            style={{ ...animationStyle, ...hamburgerStyle }}
            {...props}
          />
          <UX.Style>{keyFrame}</UX.Style>
        </React.Fragment>
      ),
    });
  }
  return this.Icon(this.merge({ icon, style: hamburgerStyle }, props));
}

export function IconSearch(props) {
  const mobileStyles = {
    top: "50%",
    transform: "translateY(-50%)",
    left: 8,
  };

  return this.Icon(
    this.merge(
      {
        style: {
          "@xs-only": mobileStyles,
          "@sm-only": mobileStyles,
        },
      },
      props
    )
  );
}

export function IconSocial(props) {
  const color = this.base.category === "neutral";
  return this.Icon(
    this.merge(
      {
        color,
        style: {
          color: "highContrast",
        },
      },
      props
    )
  );
}

export function CloseIcon(props) {
  return this.Icon(
    this.merge(
      {
        size: "medium",
        icon: "close",
        minTarget: true,
        style: {
          color: "highContrast",
          [":hover"]: { color: "highlight" },
          cursor: "pointer",
          lineHeight: "1.3em",
          fontStyle: "normal",
        },
      },
      props
    )
  );
}

export function Image({
  src,
  alt,
  title,
  imageData,
  backgroundImage,
  lazyLoad = true,
  mobileGutterWidth = 24,
  isFullWidthMobile = true,
  ...props
}) {
  const { widgetType, order } = this.base;
  const { imageDimensionStyles, parsedImageData, enableImageDimension } =
    getImageDimensionData(imageData);
  const { renderMode } = (this.base && this.base.context) || {};
  const { aspectRatio } = getImageDimensions(parsedImageData);
  const isLazyLoadedWidget = typeof window !== "undefined"; // widgets that lazy load components containing UX2.Element.Image
  const eagerLoadImages = widgetType === HEADER || order === 0;
  const reserveMobileHeight =
    renderMode === PUBLISH &&
    !isLazyLoadedWidget &&
    aspectRatio &&
    isFullWidthMobile;
  const resolvedSrc = resolveImageSource(parsedImageData, src, backgroundImage);
  const mergedImageConfig = this.merge(
    {
      style: {
        width: "auto",
        maxWidth: "100%",
        marginHorizontal: "auto",
        marginVertical: "0",
        verticalAlign: "middle",
        "@xs-only": reserveMobileHeight
          ? {
              height: `calc((100vw - ${
                mobileGutterWidth * 2
              }px)/${aspectRatio})`,
            }
          : {},
        aspectRatio: aspectRatio ? `${aspectRatio} / 1` : "auto",
      },
      tag: "img",
      alt: alt || get(parsedImageData, "alt") || title || src,
      lazyLoad:
        lazyLoad &&
        renderMode === PUBLISH &&
        !isLazyLoadedWidget &&
        !eagerLoadImages,
      mobileGutterWidth,
      reserveMobileHeight,
    },
    props,
    {
      style: enableImageDimension
        ? imageDimensionStyles
        : { borderRadius: props.style?.borderRadius || 0 },
    }
  );
  return toResponsiveImage(resolvedSrc, parsedImageData, mergedImageConfig);
}

export function ImageThumbnail(props) {
  return this.Image(
    this.merge(
      {
        style: {
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
      props
    )
  );
}

export function ImageLogo({ hasOverhang, ...props }) {
  const overhangImagePadding = 8;
  const mobileStyles = {
    display: "block",
    margin: "0 auto",
    maxHeight: hasOverhang ? 80 + overhangImagePadding : 80,
  };

  return this.Image(
    this.merge(
      {
        style: {
          maxWidth: "100%",
          objectFit: "contain",
          "@xs-only": {
            maxWidth: 224,
            ...mobileStyles,
          },
          "@sm-only": {
            ...mobileStyles,
          },
        },
      },
      props
    )
  );
}

export function WrapperImage({ children, ...props }) {
  const wrapperImageChildren = [children];
  return this.merge(
    {
      tag: "figure",
      children: wrapperImageChildren,
      style: {
        position: "relative",
        display: "inline-block",
        margin: 0,
      },
    },
    props
  );
}

export function Figure(props) {
  const floatProps = getImgFloat(props.alignment);
  const { widgetType = null } = this.base;
  const display = widgetType === RSS ? "block" : "flex";
  const style = {
    display,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
    marginLeft: "0",
    marginTop: "0",
    marginRight: "0",
    marginBottom: "medium",
    textAlign: "center",
  };
  // Floats only apply at desktop and above
  if (floatProps) {
    style["@md"] = floatProps;
  }
  return this.merge({ tag: "figure", style }, props);
}

export function FigCaption(props) {
  return this.Text(
    this.merge(
      {
        tag: "figcaption",
        typography: "DetailsAlpha",
        style: {
          backgroundColor: "section",
          paddingVertical: "xxsmall",
          paddingHorizontal: "xsmall",
        },
      },
      props,
      { section: "alt" }
    )
  );
}

export function CarouselFigCaption(props) {
  return this.Text(
    this.merge(
      {
        tag: "div",
        typography: "BodyAlpha",
        style: {
          textAlign: "center",
          paddingVertical: 0,
          margin: "0 auto",
          overflowWrap: "break-word",
          wordWrap: "break-word",
          "@sm": {
            maxWidth: 700,
          },
        },
      },
      props
    )
  );
}

export function CarouselFigCaptionOverlay(props) {
  return this.Text(
    this.merge(
      {
        category: "accent",
        section: "overlay",
        typography: "BodyAlpha",
        featured: true,
        style: {
          backgroundColor: "transparent",
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
          position: "absolute",
          bottom: 0,
          "> *": {
            backgroundColor: "section",
            padding: "xsmall",
            flexBasis: "auto",
          },
          "> :first-child": {
            flexGrow: 1,
          },
          "> :last-child": {
            flexGrow: 0,
          },
        },
      },
      props
    )
  );
}

function getImgFloat(alignment) {
  const baseStyles = {
    clear: "both",
    maxWidth: "50%",
  };
  switch (alignment) {
    case "left":
      return Object.assign(
        {
          float: "left",
          marginRight: "medium",
        },
        baseStyles
      );
    case "right":
      return Object.assign(
        {
          float: "right",
          marginLeft: "medium",
        },
        baseStyles
      );
    default:
      return null;
  }
}

export function Video(props) {
  return this.merge(
    {
      tag: "video",
    },
    props
  );
}
