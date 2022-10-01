/* eslint-disable no-prototype-builtins */
import generateFromClient from "@wsb/image-service-client";
import { ContentState } from "@wsb/draft-js";
import { UX2, constants, utils } from "@wsb/guac-widget-core";
import { merge } from "lodash";
import { getLinkDataAttributes, getHref } from "./links";

const { escapeHtml, mergeProps } = utils;
const { fontScales } = constants;

const levelMap = {
  "header-one": 1,
  "header-two": 2,
  "header-three": 3,
  "header-four": 4,
  "header-five": 5,
  "header-six": 6,
};

const typographyInheritance = {
  font: "inherit",
  letterSpacing: "inherit",
  textTransform: "inherit",
  fontSize: "inherit !important",
  color: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
};

const fontSizeResets = {
  textTransform: "unset",
  letterSpacing: "unset",
};

const {
  INLINE_FONT_SCALES,
  DEFAULT_WEBSITE_FONT_SCALES,
  BASE_INLINE_FONT_SCALE_INDEX,
} = fontScales;

function computeNewFontScale(websiteScaleId, scaleInlineFontBy) {
  const inlineFontScale =
    INLINE_FONT_SCALES[BASE_INLINE_FONT_SCALE_INDEX + scaleInlineFontBy] ||
    INLINE_FONT_SCALES[BASE_INLINE_FONT_SCALE_INDEX];
  const websiteFontScale =
    DEFAULT_WEBSITE_FONT_SCALES[websiteScaleId] ||
    DEFAULT_WEBSITE_FONT_SCALES.medium;
  return websiteFontScale * inlineFontScale;
}

function isLinkPresent(internalLinks, linkId) {
  return internalLinks && linkId && internalLinks[linkId];
}

function getLinkUrl(internalLinks, linkId) {
  if (isLinkPresent(internalLinks, linkId)) {
    return getHref({ linkId }, { internalLinks });
  }
}

function getLinkRel(rel, target) {
  if (rel !== void 0 && rel !== null) {
    return rel;
  }
  return target === "_blank" ? "noopener" : "";
}

function getImageTarget(target, renderMode) {
  if (!target || renderMode !== "PUBLISH") {
    return 'target="_blank" rel="noopener"';
  }
  return `target="${target}" ${target === "_blank" ? 'rel="noopener"' : ""}`;
}

function getRenderedClassNames(Component, props = null) {
  const el = new Component(props);
  const instance = el.render ? el.render() : el;
  return typeof instance.type === "function"
    ? getRenderedClassNames(instance.type, instance.props)
    : instance.props.className || "";
}

function blockImageRenderer(props, data, getLinkClassName) {
  const { imgOptions = {} } = props;
  const {
    src,
    top,
    left,
    width,
    height,
    rotation,
    caption,
    alignment,
    alt,
    href,
    target,
  } = data;
  const linkClassName = getLinkClassName({ href });
  const targetOption = getImageTarget(target, props.renderMode);
  const imgSrc = generateFromClient({
    imageUrl: src,
    outputWidth: imgOptions.outputWidth,
    canGrow: false,
    top,
    left,
    width,
    height,
    rotation,
  });
  // IE11 bug when using just `max-width` to calculate width (default for `Image`)
  const imgClass = getRenderedClassNames(UX2.Element.Image, props);
  const figCaptionClass = getRenderedClassNames(UX2.Element.FigCaption, props);
  const figureClass = getRenderedClassNames(
    UX2.Element.Figure,
    mergeProps(props, { alignment })
  );
  const safeAlt = escapeHtml(alt);
  const altAttribs = alt ? `alt="${safeAlt}" title="${safeAlt}" ` : "";
  const imgTag = `<img src="${imgSrc}" class="${imgClass}" ${altAttribs}/>`;
  const figCaptionTag = caption
    ? `<figcaption class="${figCaptionClass}">${caption}</figcaption>`
    : "";
  const figureTag = `<figure class="${figureClass}"><div>${imgTag}${figCaptionTag}</div></figure>`;
  return href
    ? `<a class="${linkClassName}" href="${href}" ${targetOption}>${figureTag}</a>`
    : figureTag;
}

function blockDividerRenderer(props) {
  return `<hr class="${getRenderedClassNames(UX2.Element.HR, props)}" />`;
}

function blockVideoRenderer(props, data) {
  const { embedSrc } = data;

  const embedContainerClass = getRenderedClassNames(
    UX2.Element.Embed.Container,
    props
  );
  const embedClass = getRenderedClassNames(UX2.Element.Embed, props);
  const iframeTag = `<iframe src="${embedSrc}" class="${embedClass}" allowfullscreen></iframe>`;
  return `<div class="${embedContainerClass}">${iframeTag}</div>`;
}

function getRichTextConfig({ fontSize, ...props }) {
  const websiteFontScale = props.fontScale;
  const base = props.theme?.base;

  function getLinkClassName(otherProps) {
    return getRenderedClassNames(
      UX2.Element.Link.Content,
      merge({}, props, otherProps, {
        style: { fontSize: "inherit" },
        fontSize: "unset",
      })
    );
  }
  const entityStyles = {
    LINK(entity) {
      const { internalLinks } = props;
      const { url, href, linkId, target, rel, widgetId, pageId } =
        entity.getData();
      const _href = getLinkUrl(internalLinks, linkId) || url || href;
      return {
        element: "a",
        attributes: {
          className: getLinkClassName({ href: _href }),
          href: _href,
          rel: getLinkRel(rel, target),
          target,
          ...getLinkDataAttributes(
            { linkId, widgetId, pageId },
            { internalLinks }
          ),
        },
      };
    },
  };

  return {
    getLinkClassName,
    blockStyleFn(block) {
      const blockType = block.getType();
      const hasBlockTypeMapping = levelMap.hasOwnProperty(blockType);
      const scaleInlineFontBy = parseInt(block.getData().get("fontScale"), 10);
      // We have replaced this font scale mechanism with themeOverrides, so only apply this legacy scaler if
      // it was already set and there are no theme overrides applied to this element.
      const applyInlineFontScale =
        !Number.isNaN(scaleInlineFontBy) && !base?.fontScaleMultiplier;

      if (hasBlockTypeMapping) {
        const extendWithProps = {
          style: fontSizeResets,
          level: levelMap[blockType],
        };

        if (applyInlineFontScale) {
          extendWithProps.fontScale = computeNewFontScale(
            websiteFontScale,
            scaleInlineFontBy
          );
        }

        return {
          attributes: {
            class: getRenderedClassNames(
              UX2.Element.Heading,
              mergeProps(props, extendWithProps)
            ),
          },
        };
      }

      if (applyInlineFontScale) {
        return {
          attributes: {
            class: getRenderedClassNames(
              UX2.Element.Element,
              mergeProps(props, {
                fontSize,
                style: fontSizeResets,
                fontScale: computeNewFontScale(
                  websiteFontScale,
                  scaleInlineFontBy
                ),
              })
            ),
          },
        };
      }
    },
    blockRenderers: {
      atomic(block) {
        const entityId = block.getEntityAt(0);
        const contentState = ContentState.createFromBlockArray([block]);
        const entity =
          (entityId || entityId === 0) && contentState.getEntity(entityId);
        const entityType = entity && entity.type && entity.type.toLowerCase();
        const data = entity && entity.getData();
        switch (entityType) {
          case "image": {
            return blockImageRenderer(props, data, getLinkClassName);
          }
          case "divider": {
            return blockDividerRenderer(props);
          }
          case "video": {
            return blockVideoRenderer(props, data);
          }
          default:
            return;
        }
      },
    },
    entityStyles,
    entityStyleFn(entity) {
      const entityType = entity.get("type");
      if (entityStyles.hasOwnProperty(entityType)) {
        return entityStyles[entityType](entity);
      }
    },
    inlineStyles: {
      BOLD: {
        attributes: {
          className: getRenderedClassNames(
            UX2.Element.Element,
            mergeProps(props, {
              style: {
                ...typographyInheritance,
                fontWeight: "bold",
              },
            })
          ),
        },
      },
      CODE: {
        element: "span",
      },
      ITALIC: {
        attributes: {
          className: getRenderedClassNames(
            UX2.Element.Element,
            mergeProps(props, {
              style: {
                ...typographyInheritance,
                fontStyle: "italic",
              },
            })
          ),
        },
      },
      STRIKETHROUGH: {
        attributes: {
          className: getRenderedClassNames(
            UX2.Element.Element,
            mergeProps(props, {
              style: {
                ...typographyInheritance,
                textDecoration: "line-through",
              },
            })
          ),
        },
      },
      UNDERLINE: {
        attributes: {
          className: getRenderedClassNames(
            UX2.Element.Element,
            mergeProps(props, {
              style: {
                ...typographyInheritance,
                textDecoration: "underline",
              },
            })
          ),
        },
      },
    },
  };
}

export default getRichTextConfig;
