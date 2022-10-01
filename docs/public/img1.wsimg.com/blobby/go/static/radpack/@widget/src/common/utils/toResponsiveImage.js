import React from "react";
import { UX2, constants, utils } from "@wsb/guac-widget-core";
import {
  addImageApiArgs,
  isInternalUrl,
  createClampedSources,
  resolveImageSource,
} from "./image";
import { densities } from "../constants/mediaQueries";

const { XS_MAX, SM_MIN, SM_MAX, MD_MIN, MD_MAX, LG_MIN, LG_MAX, XL_MIN } =
  constants.breakpoints;
const { XS, SM, MD, LG, XL } = constants.containerWidths;
const { getImageDimensions, getOriginalImageDimensions } =
  utils.imageDimensions;

const XS_MIN = 451;
const RESPONSIVE_IMAGE_SIZES = [XS_MIN, SM_MIN, MD_MIN, LG_MIN, XL_MIN];
const MAX_MOBILE_HEIGHT = 500;
const pictureStyle = {
  width: "100%",
  height: "100%",
  textAlign: "center",
  borderWidth: "0 !important",
  margin: 0,
  padding: 0,
};

function isPercentageString(value) {
  return value && value.endsWith("%");
}

function createMediaQueriesFromSizes(sizes) {
  return sizes.map((size, i) => {
    if (i === sizes.length - 1) {
      return `(min-width: ${size}px) ${size}px`;
    }
    const maxSize = sizes[i + 1] - 1;
    return `(min-width: ${size}px) and (max-width: ${maxSize}px) ${maxSize}px`;
  });
}

function generateContainer(mobileGutterWidth = 0) {
  const totalMobileGutterWidth = mobileGutterWidth * 2;
  return [
    {
      max: XS_MIN - 1,
      imageMax: XS_MIN - totalMobileGutterWidth,
      width: XS,
    },
    {
      min: XS_MIN,
      max: XS_MAX,
      imageMax: XS_MAX - totalMobileGutterWidth,
      width: XS,
    },
    {
      min: SM_MIN,
      max: SM_MAX,
      width: SM,
    },
    {
      min: MD_MIN,
      max: MD_MAX,
      width: MD,
    },
    {
      min: LG_MIN,
      max: LG_MAX,
      width: LG,
    },
    {
      min: XL_MIN,
      width: XL,
    },
  ];
}

function generateLazySrcProps(src) {
  return {
    // attribute marker used to find elements that an IntersectionObserver will observe
    ["data-lazyimg"]: true,
    ["data-srclazy"]: src,
    // can set src to the minimal valid value
    ["src"]: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
  };
}

/**
 * Creates a responsive image using either a standard img tag with srcset or a picture element with source child elements.
 *
 * @param {string} src The image steam URL
 * @param {Object} imageData The imageData object, containing the props used to generate the image source
 * @param {Object} otherProps Any other props that need to be applied to this element (such as style, data-aid, etc)
 * @param {boolean} reserveMobileHeight Whether or not an image height can be inferred based off of aspect ratio
 * @returns {Object} The resolved props to return to Base
 */
export default function toResponsiveImage(
  src = "",
  imageData = {},
  {
    lazyLoad,
    reserveMobileHeight,
    staticImage,
    useSrcSet = true,
    mobileGutterWidth,
    ...otherProps
  } = {}
) {
  // return plain img tag for external src
  // cannot safely manipulate an image url if imageData is not passed
  if (!isInternalUrl(src) || !(imageData?.imageUrl || imageData?.image)) {
    return lazyLoad
      ? { ...otherProps, ...generateLazySrcProps(src) }
      : { src, ...otherProps };
  }

  const {
    width: originalWidth = Number.MAX_SAFE_INTEGER,
    height: originalHeight,
  } = getOriginalImageDimensions(imageData);
  const inferredDimensions = getImageDimensions(imageData);
  const { outputWidth, outputHeight } = imageData;
  const { aspectRatio } = inferredDimensions;

  // it is only necessary to scale crop values if set to pixel values
  const cropWidth =
    !isPercentageString(imageData.width) && parseInt(imageData.width || 0, 10);
  const cropHeight =
    !isPercentageString(imageData.height) &&
    parseInt(imageData.height || 0, 10);
  const hasCrop = Boolean(cropWidth || cropHeight);

  // sets srcSet to a map of width and height clamped transparent placeholder images along with matching sizes attribute
  // this allows lazy loaded images to render as content agnostic while leveraging caching of reused transparent placeholder assets
  const lazySrcSet = lazyLoad &&
    reserveMobileHeight && {
      srcSet: createClampedSources(
        inferredDimensions,
        RESPONSIVE_IMAGE_SIZES
      ).join(", "),
      sizes: createMediaQueriesFromSizes(RESPONSIVE_IMAGE_SIZES).join(", "),
    };

  const srcProps = lazyLoad
    ? { ...generateLazySrcProps(src), ...lazySrcSet }
    : { src };

  if (staticImage) {
    // return a plain img tag for images without responsive behavior
    return {
      ...srcProps,
      ...otherProps,
    };
  }

  const imgEl = <UX2.Base {...srcProps} {...otherProps} />;
  const containers = generateContainer(mobileGutterWidth);
  const genSrcSetProps = (srcSet) =>
    useSrcSet
      ? lazyLoad
        ? { ["data-lazyimg"]: true, ["data-srcsetlazy"]: srcSet, ...lazySrcSet }
        : { srcSet }
      : {};

  // clamp width to the breakpoint max width
  if (!outputWidth && !outputHeight) {
    const sources = [];
    let srcSet;
    containers.some(({ min, max, imageMax, width }) => {
      // breakpoint width values are either a percentage or a static pixel value
      const imgWidth = width === "100%" ? imageMax || max : width;
      srcSet = densities
        .reduce((acc, density) => {
          const newWidth = density * imgWidth;
          const newHeight = aspectRatio && Math.round(newWidth / aspectRatio);
          const densityStr = density > 1 ? ` ${density}x` : "";
          return newWidth <= originalWidth
            ? acc.concat(
                `${addImageApiArgs(src, {
                  rs: `w:${newWidth}${newHeight ? ",h:" + newHeight : ""}`,
                })}${densityStr}`
              )
            : acc;
        }, [])
        .join(", ");
      // exit early if the originalWidth is narrower than scaled up (by density multiplier) value
      if (srcSet.length === 0) return false;
      const isLastQuery = originalWidth < max;
      const media =
        min && max && !isLastQuery
          ? `(min-width: ${min}px) and (max-width: ${max}px)`
          : min
          ? `(min-width: ${min}px)`
          : `(max-width: ${max}px)`;
      sources.push(
        <source key={min} media={media} {...genSrcSetProps(srcSet)} />
      );
      return isLastQuery;
    });
    // return a normal image if there is only 1 source
    // a single source is possible when an image's original width is less than or equal to XS_MIN
    return sources.length === 1
      ? {
          ...srcProps,
          ...genSrcSetProps(srcSet),
          ...otherProps,
        }
      : {
          tag: "picture",
          children: [...sources, imgEl],
          style: pictureStyle,
          skipInlineStyle: true,
          ["data-lazyimg"]: true,
        };
  }

  // clamp width to each breakpoint and use known aspectRatio to calculate height
  if (outputWidth) {
    const sources = [];
    let srcSet;
    containers.some(({ min, max, imageMax }) => {
      let hasReachedOriginalWidth;
      const bpWidth = max
        ? Math.min(imageMax || max, outputWidth)
        : outputWidth;
      srcSet = densities
        .reduce((acc, density) => {
          if (hasReachedOriginalWidth) {
            // This source already exceeded the width of the original image, so skip it
            return acc;
          }
          let newWidth = density * bpWidth;
          if (newWidth >= Math.max(originalWidth, outputWidth)) {
            hasReachedOriginalWidth = true;
            if (density === 1) {
              return acc;
            }
            newWidth = Math.max(originalWidth, outputWidth);
          }
          const scale = newWidth / outputWidth;
          const newHeight = outputHeight && Math.round(outputHeight * scale);
          const updatedImageData = {
            ...imageData,
            ...(hasCrop
              ? {
                  width: Math.round(cropWidth * scale),
                  height: Math.round(cropHeight * scale),
                }
              : {}),
            outputWidth: newWidth,
            outputHeight: newHeight,
          };
          const densityStr = density > 1 ? ` ${density}x` : "";
          return acc.concat(
            `${resolveImageSource(updatedImageData)}${densityStr}`
          );
        }, [])
        .join(", ");
      // exit early if the originalWidth is narrower than scaled up (by density multiplier) value
      if (srcSet.length === 0) return false;
      const isLastQuery = outputWidth < max;
      const media =
        min && max && !isLastQuery
          ? `(min-width: ${min}px) and (max-width: ${max}px)`
          : min
          ? `(min-width: ${min}px)`
          : `(max-width: ${max}px)`;
      sources.push(
        <source key={min} media={media} {...genSrcSetProps(srcSet)} />
      );
      return isLastQuery;
    });

    // return a normal image if there is only 1 source
    // a single source is possible when the greater of outputHeight and originalWidth is less than or equal to XS_MIN
    return sources.length === 1
      ? {
          ...srcProps,
          ...genSrcSetProps(srcSet),
          ...otherProps,
        }
      : {
          tag: "picture",
          children: [...sources, imgEl],
          style: pictureStyle,
          skipInlineStyle: true,
          ["data-lazyimg"]: true,
        };
  }

  // with set outputHeight and unset outputWidth
  // generate a width based on known aspect ratio and outputHeight
  let hasReachedOriginalWidth;
  const srcSet = densities
    .map((density) => {
      if (hasReachedOriginalWidth) {
        // This source already exceeded the width of the original image, so skip it
        return false;
      }
      let newHeight = density * outputHeight;
      let newWidth = aspectRatio && Math.round(newHeight * aspectRatio);
      if (newWidth >= originalWidth) {
        hasReachedOriginalWidth = true;
        if (density === 1) {
          return false;
        }
        newWidth = originalWidth;
        newHeight = originalHeight;
      }
      const updatedImageData = {
        ...imageData,
        ...(hasCrop
          ? {
              width: Math.round(cropWidth * density),
              height: Math.round(cropHeight * density),
            }
          : {}),
        outputWidth: newWidth,
        outputHeight: newHeight,
      };
      const densityStr = density > 1 ? ` ${density}x` : "";
      return `${resolveImageSource(updatedImageData)}${densityStr}`;
    })
    .filter(Boolean)
    .join(", ");

  // outputHeight of mobile images should be limited
  // base mobile outputWidth based on MAX_MOBILE_HEIGHT clamped outputHeight
  if (outputHeight > MAX_MOBILE_HEIGHT) {
    const srcSetMobile = densities
      .map((density) => {
        const newHeight = density * MAX_MOBILE_HEIGHT;
        const newWidth = aspectRatio && Math.round(newHeight * aspectRatio);
        if (newWidth > originalWidth) {
          // This source would exceed the width of the original image, so skip it
          return false;
        }
        const updatedImageData = {
          ...imageData,
          ...(hasCrop
            ? {
                width: Math.round(cropWidth * density),
                height: Math.round(cropHeight * density),
              }
            : {}),
          outputWidth: newWidth,
          outputHeight: newHeight,
        };
        const densityStr = density > 1 ? ` ${density}x` : "";
        return `${resolveImageSource(updatedImageData)}${densityStr}`;
      })
      .filter(Boolean)
      .join(", ");

    const sources = [
      srcSetMobile.length && (
        <source
          key="mobile"
          media={`(max-width: ${XS_MIN - 1}px)`}
          {...genSrcSetProps(srcSetMobile)}
        />
      ),
      srcSet.length && (
        <source
          key="desktop"
          media={`(min-width: ${XS_MIN}px)`}
          {...genSrcSetProps(srcSet)}
        />
      ),
    ].filter(Boolean);

    return sources.length === 1
      ? {
          ...srcProps,
          ...genSrcSetProps(srcSetMobile || srcSet),
          ...otherProps,
        }
      : {
          tag: "picture",
          children: sources.concat(imgEl),
          style: pictureStyle,
          skipInlineStyle: true,
          ["data-lazyimg"]: true,
        };
  }

  return {
    ...srcProps,
    ...genSrcSetProps(srcSet),
    ...otherProps,
  };
}
