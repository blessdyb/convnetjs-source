import React from "react";
import { UX2 } from "@wsb/guac-widget-core";
import { spacingVertical, stringToChildren } from "../../../../utils";
import ContentAction from "../common/ContentAction";
import ContentHeading from "../common/ContentHeading";
import ContentText from "../common/ContentText";

const flexAlignMap = {
  left: "flex-start",
  right: "flex-end",
};

export function ContentBasic({
  alignment = "center",
  heading,
  text,
  actionComponent,
  action,
  ...props
}) {
  const headingProps = heading && stringToChildren(heading);
  const textProps = text && stringToChildren(text);
  const style = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "> *": {
      maxWidth: "100%",
    },
    alignItems: flexAlignMap[alignment] || alignment,
    textAlign: alignment,
    ...spacingVertical("medium"),
    "@xs-only": spacingVertical(
      this.base.widgetPreset === "about2" ? "small" : "medium"
    ),
  };

  if (action) {
    actionComponent = <ContentAction key="action" action={action} />;
  }

  return this.merge(
    {
      tag: UX2.Element.Block,
      group: "Content",
      children: [
        !!headingProps && headingProps.children && (
          <ContentHeading key="heading" heading={headingProps} />
        ),
        !!textProps && textProps.children && (
          <ContentText key="text" text={textProps} alignment={alignment} />
        ),
        !!actionComponent && actionComponent,
      ],
      style,
    },
    props
  );
}

export function ContentWrap({
  data = [],
  render = (item) => item,
  cellProps,
  cellStyle,
  alignmentOption = "center",
  ...props
}) {
  const l = data.length;

  let colItem;
  if (l > 1) {
    if (l < 6 && l % 2 === 0) {
      colItem = { xs: 12, sm: 6, md: 6 };
    } else {
      colItem = { xs: 12, sm: 6, md: 4 };
    }
  } else {
    colItem = { xs: 12, sm: 8 };
  }

  const flexMap = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  };

  return this.merge(
    {
      tag: UX2.Component.Grid,
      children: data.map((item, i) => (
        <UX2.Component.Grid.Cell
          {...(cellProps || colItem)}
          key={item.key || i}
          children={render(item, i)}
          style={cellStyle}
        />
      )),
      style: {
        textAlign: "center",
        justifyContent: flexMap[alignmentOption],
      },
    },
    props
  );
}
