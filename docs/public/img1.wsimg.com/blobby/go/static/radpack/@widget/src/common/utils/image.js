/* eslint-disable eqeqeq */
import { constants as coreConstants, utils } from "@wsb/guac-widget-core";

const { imageDimensionConfig, FIT_IMAGE, LANDSCAPE, CIRCLE } =
  coreConstants.imageDimensions;
const transparentPlaceholder =
  "/public/img1.wsimg.com/isteam/ip/static/transparent_placeholder.png";

export const LANDSCAPE_ASPECT_RATIO =
  imageDimensionConfig[LANDSCAPE].aspectRatio;
export const CIRCLE_IMAGE_DIMENSION = CIRCLE;

export const CDN_REGEX = /[.-]wsimg\.com\//;
const { hasOwnProperty } = Object.prototype;

export function isInternalUrl(url) {
  return !!CDN_REGEX.test(url);
}

function parseOperationsUrl(operationsUrl) {
  if (!operationsUrl) {
    return [];
  }
  return operationsUrl
    .split("/")
    .filter(Boolean)
    .map((operation) => {
      const [name, value] = operation.split("=");
      return { name, value };
    });
}

function parseImageApiUrl(url) {
  if (!isInternalUrl(url)) {
    return null;
  }
  const [source, operations] = url.split("/:/");
  return { source, operations: parseOperationsUrl(operations) };
}

function stringifyParsedImageApiUrl({ source, operations }) {
  if (operations == null) {
    return source;
  }
  const operationsUrl = operations
    .map(({ name, value }) => (value == null ? name : `${name}=${value}`))
    .join("/");
  if (!operationsUrl) {
    return source;
  }
  return source + "/:/" + operationsUrl;
}

function toOperationsArray(operations) {
  if (operations == null) {
    return [];
  }
  if (typeof operations === "string") {
    return parseOperationsUrl(operations);
  }
  if (Array.isArray(operations)) {
    return operations;
  }
  return Object.entries(operations).map(([name, value]) => ({ name, value }));
}

export function addImageApiArgs(url, operations) {
  const parsedUrl = parseImageApiUrl(url);
  if (parsedUrl == null) {
    return url;
  }
  return stringifyParsedImageApiUrl({
    source: parsedUrl.source,
    operations: [...parsedUrl.operations, ...toOperationsArray(operations)],
  });
}

export function replaceImageApiArgs(url, operations) {
  const parsedUrl = parseImageApiUrl(url);
  if (parsedUrl == null) {
    return url;
  }
  // if the operation doesn't already exists, it's ignored
  parsedUrl.operations.forEach((operation) => {
    const { name } = operation;
    if (hasOwnProperty.call(operations, name)) {
      // Replacing value by mutating the object
      operation.value = operations[name];
    }
  });
  return stringifyParsedImageApiUrl(parsedUrl);
}

// Please avoid this method if you can and use replaceImageApiArgs instead.
export function replaceImageSizeParams(url, replacement = "") {
  if (!url || typeof url !== "string") {
    return "";
  }
  return url.replace(/\/:\/rs=w:[0-9]*,h:[0-9]*/, replacement);
}

function stripParams(url = "") {
  return url.split("/:/")[0];
}

export function getValidUrl(url) {
  if (!isInternalUrl(url)) {
    return stripParams(url);
  }
  return url;
}

export function resolveImageSource(imageData, legacySrc, fallback) {
  const url = imageData?.imageUrl || imageData?.image;
  if (typeof url === "string") {
    return getValidUrl(utils.generateImageServiceUrl(imageData));
  }

  if (fallback?.fallbackBackgroundImageSrc) {
    return fallback.fallbackBackgroundImageSrc.replace(
      /\{(width|height)\}/g,
      "+0"
    );
  }

  return legacySrc || "";
}

export function getImageDimensionData(imageData = {}) {
  const { outputWidth, outputHeight, imageDimension, enableImageDimension } =
    imageData;
  const imageDimensionStyles = {};
  const parsedImageData = { ...imageData };

  if (imageDimension) {
    if (imageDimension === FIT_IMAGE) {
      delete parsedImageData.outputHeight;
      delete parsedImageData.editedAspectRatio;
      imageDimensionStyles.borderRadius = 0;
    } else {
      const { aspectRatio, borderRadius } =
        imageDimensionConfig[imageDimension] || {};
      if (aspectRatio && outputWidth) {
        parsedImageData.outputHeight = outputWidth / aspectRatio;
      } else if (aspectRatio && outputHeight) {
        parsedImageData.outputWidth = outputHeight * aspectRatio;
      }
      imageDimensionStyles.borderRadius = borderRadius;
    }
  }

  return {
    imageDimensionStyles,
    parsedImageData,
    enableImageDimension,
  };
}

function generateClampedSource(inferredImageDimensions, maxSize) {
  const { outputHeight, outputWidth, aspectRatio } = inferredImageDimensions;
  let scaledWidth = Math.max(0, Math.min(outputWidth, maxSize));
  const widthRatio = outputWidth / scaledWidth;
  let scaledHeight = Math.floor(outputHeight / widthRatio);
  if (!outputWidth && aspectRatio) {
    scaledWidth = maxSize;
    scaledHeight = scaledWidth / aspectRatio;
  }
  let args;
  if (scaledWidth) {
    args = `w:${scaledWidth}`;
    if (scaledHeight) {
      args += `,h:${scaledHeight}`;
    }
    args += ",cg:true,m,i:true";
  }
  return addImageApiArgs(transparentPlaceholder, {
    rs: args,
    qt: "q:1",
    ll: "n:true",
  });
}

export function createClampedSources(inferredImageDimensions, sizes) {
  return sizes.map((size) => {
    return `${generateClampedSource(inferredImageDimensions, size)} ${size}w`;
  });
}
