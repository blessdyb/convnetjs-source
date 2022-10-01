/* eslint-disable no-prototype-builtins */
export const convertToFriendlyPath = (url) => {
  if (!url || typeof url !== "string") return url;
  // Url may look like '/shop?olsPage=t/&sortOption=descend_by_created_at' or '/shop?olsPage=t/shoes'
  // When url is '/some/path?olsPage=x', we want 'olsPage=x'
  let newUrl = url.substr(url.indexOf("?olsPage") + 1);
  // In the case of '/some/path/ols/x/y', we want 'ols/x/y'
  newUrl = newUrl.substring(newUrl.indexOf("/ols") + 1);
  // If url is of form 'olsPage=t/&', then we want it to be 'ols/all' (all products page)
  newUrl = newUrl.replace("olsPage=t/&", "ols/all?");
  // If url is of form 'olsPage=t/x', then we want it to look like 'ols/categories/x'
  newUrl = newUrl.replace("olsPage=t/", "ols/categories/");
  // if the link has an '&' but no '?', then convert first '&' to '?'
  if (newUrl.indexOf("?") === -1) {
    newUrl = newUrl.replace("&", "?");
  }

  return newUrl;
};

export const convertToQueryStringPath = (url = "") => {
  if (!url) return url;
  // Convert any '?' to '&'
  let newUrl = url.replace("?", "&");
  // Convert 'ols/categories/x' to 'olsPage=t/x'
  newUrl = newUrl.replace("ols/categories/", "olsPage=t/");
  // Convert 'ols/all' to 'olsPage=all'
  newUrl = newUrl.replace("ols/all", "olsPage=all");

  return newUrl;
};

export function getShopPage(navigationMap) {
  for (const k in navigationMap) {
    if (navigationMap.hasOwnProperty(k)) {
      const tags = navigationMap[k].tags;
      if (Array.isArray(tags) && tags.includes("SHOP")) {
        return navigationMap[k];
      }
    }
  }

  return {};
}

export function isShopWidgetSamePage(navigationMap) {
  const shopPage = getShopPage(navigationMap);
  return !!shopPage.active;
}
