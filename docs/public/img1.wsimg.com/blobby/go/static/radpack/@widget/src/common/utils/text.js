export function multiLinePadded({
  styleOverrides,
  otherStyleOverrides,
  renderMode,
}) {
  const sharedStyle = {
    display: "inline",
    verticalAlign: "baseline",
    boxDecorationBreak: "clone",
    "-webkit-box-decoration-break": "clone",
    ...styleOverrides,
  };
  // This makes sure that the "box-background" styles are applyed to the correct
  // draft-js elements when we are on inline-editing.
  // Mobile is not yet on inline editing, that's why the media query was used.
  const inlineStyleRelatedStyle =
    renderMode === "EDIT"
      ? {
          ["@md"]: {
            span: void 0,
            ".mx-inline-field .public-DraftStyleDefault-block": sharedStyle,
          },
        }
      : null;
  return {
    style: {
      borderWidth: "0 !important",
      padding: "0 !important",
      display: "block",
      span: sharedStyle,
      ...inlineStyleRelatedStyle,
      ...otherStyleOverrides,
    },
  };
}

export function levelFilter({ tag, level }) {
  const tagSearch = tag && (tag.match(/\d+/) || [])[0];
  return level || parseInt(tagSearch, 10);
}
