import React from "react";
import { UX2 } from "@wsb/guac-widget-core";

const fixedWidths = {
  "@sm": {
    maxWidth: "smContainer",
  },
  "@md": {
    maxWidth: "mdContainer",
  },
  "@lg": {
    maxWidth: "lgContainer",
  },
};

export function Page({ fixedWidth, children, innerContainerStyle, ...props }) {
  const widths = fixedWidth ? fixedWidths : {};
  const style = {
    backgroundColor: "section",
    width: "100%",
    "> div": {
      position: "relative",
      overflow: "hidden",
      margin: "auto",
      ...widths,
    },
  };
  return this.merge(
    {
      tag: UX2.Element.Block,
      category: "neutral",
      section: "default",
      children: (
        <UX2.Element.Block className="page-inner" style={innerContainerStyle}>
          {children}
        </UX2.Element.Block>
      ),
      style,
    },
    props
  );
}
