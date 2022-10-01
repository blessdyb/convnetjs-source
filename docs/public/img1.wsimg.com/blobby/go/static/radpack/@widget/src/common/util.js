function getImageUrl(url, width, height, imageType = "image") {
  let imageUrl;
  if (imageType === "image") {
    imageUrl = [
      url,
      `rs=w:${width},h:${height},cg:true,m/cr=w:${width},h:${height},a:cc`,
    ].join(url.endsWith("/") ? "" : "/");
  } else if (imageType === "background") {
    imageUrl = url.replace(/\{width\}/g, width).replace(/\{height\}/g, height);
  }
  return imageUrl;
}

export function getGridRowSizes(size, min = 2, max = min + 2) {
  if (size <= max) {
    return [size];
  }
  const calcs = [];
  let cur = max + 1;
  let rows = size;
  while (cur > min) {
    cur--;
    const division = size / cur;
    const newRows = Math.ceil(division);
    if (newRows > rows) {
      break;
    }
    rows = newRows;
    const maxes = Math.floor(division);
    const remainder = size - maxes * cur;
    calcs.push({ cur, maxes, remainder });
  }
  const best = calcs.sort((a, b) => {
    if (a.remainder > b.remainder) {
      return 1;
    } else if (a.remainder < b.remainder) {
      return -1;
    }
    return 0;
  })[0];
  const sizes = Array(best.maxes).fill(best.cur);
  if (best.remainder === 0) {
    return sizes;
  } else if (best.remainder < min) {
    const last = sizes.pop();
    const diff = last - best.remainder;
    sizes.push(diff);
    sizes.push(min);
  } else {
    sizes.push(best.remainder);
  }
  return sizes;
}

export function getFullBleedPadding({ top, bottom } = {}) {
  const styles = { "@xs-only": {} };
  if (!top) {
    styles.paddingTop = "0px !important";
    styles["@xs-only"].paddingTop = styles.paddingTop;
  }
  if (!bottom) {
    styles.paddingBottom = "0px !important";
    styles["@xs-only"].paddingBottom = styles.paddingBottom;
  }
  return styles;
}

export default getImageUrl;
