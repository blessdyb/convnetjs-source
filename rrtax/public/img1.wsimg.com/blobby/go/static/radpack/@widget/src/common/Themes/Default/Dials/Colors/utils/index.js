function getProp(theme, prop, values) {
  return Array.isArray(values)
    ? values.map((value) => theme.mapPropValue(prop, value))
    : theme.mapPropValue(prop, values);
}

function getDial(theme, value) {
  return getProp(theme, "colorDial", value);
}

function getColor(theme, value) {
  return getProp(theme, "color", value);
}

function getBackgroundColor(theme, value) {
  return getProp(theme, "backgroundColor", value);
}

function getBorderColor(theme, value) {
  return getProp(theme, "borderColor", value);
}

export { getProp, getDial, getColor, getBackgroundColor, getBorderColor };
