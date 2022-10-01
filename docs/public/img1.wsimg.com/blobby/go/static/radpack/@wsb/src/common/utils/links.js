import { constants, utils } from "@wsb/guac-widget-core";
import {
  getShopPage,
  isShopWidgetSamePage,
  convertToQueryStringPath,
  convertToFriendlyPath,
} from "./ols";
import {
  EXTERNAL,
  INTERNAL,
  PRODUCTS,
  EXTERNAL_LINK_LEGACY,
  EMPTY_LINK,
  EMAIL,
  PHONE,
} from "../constants/linkTypes";
const { renderModes } = constants;
const { sanitizeUrl } = utils;

/**
 * Given a link object, determine which link type is being used (internal, external, products, email, or phone).
 * @param {*} linkData - the link object we are checking
 * @returns {string} Returns 'internal', 'external', 'products', 'email', or 'phone'
 */
function getLinkType(linkData) {
  if (linkData.linkType) {
    return linkData.linkType;
  }
  // Has legacy data model
  if (
    (linkData.pageId && linkData.pageId !== EXTERNAL_LINK_LEGACY) ||
    !linkData.url
  ) {
    return INTERNAL;
  }

  return EXTERNAL;
}

function getLink(linkData, opts = {}) {
  const { internalLinks } = opts;

  if (!internalLinks) {
    return null;
  }
  return linkData.linkId ? internalLinks[linkData.linkId] : null;
}

function getPageId(linkData, opts = {}) {
  if (linkData.linkId) {
    const link = getLink(linkData, opts);
    return link ? link.pageId : null;
  }

  if (linkData.pageId === EXTERNAL_LINK_LEGACY) {
    return null;
  }

  return linkData.pageId || null;
}

function getWidgetId(linkData, opts) {
  if (linkData.linkId) {
    const link = getLink(linkData, opts);
    return link ? link.widgetId : null;
  }

  return linkData.widgetId || null;
}

function getRoutePath(linkData, opts = {}) {
  if (linkData.linkId) {
    const link = getLink(linkData, opts);
    return link ? link.routePath : "";
  }

  let { navigationMap } = opts;

  if (linkData.pageId && navigationMap) {
    // boostrapped widgets convert immutable to plan objects
    navigationMap = navigationMap.toJS ? navigationMap.toJS() : navigationMap;

    const page = navigationMap[linkData.pageId];
    return page ? page.href : null;
  }

  return null;
}

export function getHref(linkData, opts) {
  const linkType = getLinkType(linkData);
  switch (linkType) {
    case EXTERNAL: {
      const { url } = linkData;
      return /^\w+:\/\//.test(url) ? url : `http://${url}`;
    }
    case INTERNAL: {
      const widgetId = getWidgetId(linkData, opts);
      const routePath = getRoutePath(linkData, opts);

      if (!routePath) {
        return EMPTY_LINK;
      }

      return widgetId ? `${routePath}#${widgetId}` : routePath;
    }
    case PRODUCTS: {
      const shopPage = getShopPage(opts.navigationMap);
      const shopRoute = shopPage.href || "/";
      return (
        shopRoute +
        (shopRoute.slice(-1) === "/" ? "" : "/") +
        convertToFriendlyPath(linkData.productsLink)
      );
    }
    case PHONE: {
      return linkData.phone
        ? `tel:${linkData.phone.replace(".", "")}`
        : EMPTY_LINK;
    }
    case EMAIL: {
      const { email, subject, body } = linkData;

      if (!email) return EMPTY_LINK;

      let url = `mailto:${email.replace(/\s/g, "")}`;
      if (subject && subject.length > 0) {
        url = `${url}?subject=${encodeURIComponent(subject)}`;
      }

      if (body && body.length > 0) {
        url +=
          (url.split("?")[1] ? "&" : "?") + `body=${encodeURIComponent(body)}`;
      }

      return url;
    }
    default: {
      return EMPTY_LINK;
    }
  }
}

export function getLinkDataAttributes(linkData, opts, renderMode) {
  if (getLinkType(linkData) === INTERNAL) {
    const pageId = getPageId(linkData, opts);
    const widgetId = getWidgetId(linkData, opts);

    if (widgetId && pageId) {
      return {
        "data-page": pageId,
        "data-section-jump": widgetId,
      };
    } else if (pageId) {
      return {
        "data-page": pageId,
        // if pageId exists but widgetId does not, this scenario indicates a navigate to top of internal page navigate action
        "data-page-query":
          renderMode === renderModes.PREVIEW ? "&scrollToTop=true" : null,
      };
    }
  }

  if (getLinkType(linkData) === PRODUCTS) {
    if (
      isShopWidgetSamePage(opts.navigationMap) &&
      renderMode !== renderModes.PUBLISH
    ) {
      return {};
    }
    return {
      "data-page-query": convertToQueryStringPath(linkData.productsLink),
      "data-page": getShopPage(opts.navigationMap).pageId,
    };
  }

  return {};
}

/*
 * `generateAnchorHTML` is used to render links on the Website preview while
 * `LinkifyDecorator` (inside `utils/getRichTextDecorator`) is used to render links
 * on an editable Website, so make sure to keep both these code paths in sync.
 */
// eslint-disable-next-line
function generateAnchorHTML(
  getLinkClassName,
  match,
  ignoreElement,
  anchor,
  protocol = "",
  link,
  email
) {
  if (ignoreElement) {
    return match;
  }
  const url = email ? `mailto:${email}` : sanitizeUrl(match);
  const linkClassName = getLinkClassName({ href: !anchor ? url : null });
  const className = linkClassName ? `class="${linkClassName}" ` : "";
  if (anchor) {
    return match.replace("href=", `${className}href=`);
  }
  const protoLower = protocol.toLowerCase();
  const val = protoLower === "mailto:" || protoLower === "tel:" ? link : match;
  return `<a ${className}href="${url}" target="_blank">${val}</a>`;
}

// This regex matches anchor tags and their content, or links (http/mailto/tel), or email addresses (using the regex
// from http://emailregex.com/). This allows us to only convert links that do not already appear in anchor tags in
// the input string.
// eslint-disable-next-line max-len
const URL_REGEX =
  /(<(?:img|iframe)[^>]+\/>)|(<a[^>]+>.+<\/a>)|(?=\b)(https?:\/\/|www\.|mailto:|tel:)([^ <\t]+)|((?=\b)(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))/i;
const URL_REGEX_G = new RegExp(URL_REGEX.source, "gi");

/*
 * This method converts http:, mailto: and tel: links to anchor tags, ignoring existing anchor tags
 * in the string. It will also convert email addresses missing the mailto: protocol.
 */
export function linkifyHTML(content = "", getLinkClassName) {
  return content.replace(URL_REGEX_G, (...args) =>
    generateAnchorHTML(getLinkClassName, ...args)
  );
}
