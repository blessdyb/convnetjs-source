import PropTypes from "prop-types";
import React, { Children } from "react";
import { UX2 } from "@wsb/guac-widget-core";
import { omit } from "lodash";

export function Grid(props) {
  const {
    size,
    xs = size,
    sm = xs,
    md = sm,
    lg = md,
    spacing,
    spacingXs = spacing,
    spacingSm = spacingXs,
    spacingMd = spacingSm,
    spacingLg = spacingMd,
    tag,
    children,
    wrap,
    equal,
    bottom,
    gutter,
    column,
    reverse,
    inset,
    alignFinalRow,
  } = props;

  // eslint-disable-next-line no-shadow
  const {
    Grid,
    Grid: { Cell },
  } = UX2.Component;

  const style = {
    display: "flex",
    boxSizing: "border-box",
    flexDirection: column ? "column" : "row",
    flexWrap: wrap ? "wrap" : "nowrap",
  };

  if (alignFinalRow) {
    // https://stackoverflow.com/questions/18744164/flex-box-align-last-row-to-grid
    style[":after"] = {
      content: '""',
      flex: "auto",
      maxWidth: "25%",
    };
  }

  if (reverse) {
    style.flexDirection += "-reverse";
  }

  Grid.applySizingStyles(style, props, this);

  const cellProps = {
    gutter,
    bottom,
    equal,
    column,
    spacing,
    spacingXs,
    spacingSm,
    spacingMd,
    spacingLg,
    gridXs: xs,
    gridSm: sm,
    gridMd: md,
    gridLg: lg,
  };

  const insetCellProps = inset ? { ...cellProps, inset } : cellProps;

  const content = Children.toArray(children)
    .filter((node) => {
      const type = typeof node;
      if (type === "object") {
        return React.isValidElement(node);
      }
      if (type === "string") {
        return !!node;
      }
      return true;
    })
    .map((child, key) => {
      const type = child && child.type;
      let childStyle;
      if (type && type.prototype) {
        if (type === Cell || type.prototype instanceof Cell) {
          return React.cloneElement(child, insetCellProps);
        }
        if (type === Grid || type.prototype instanceof Grid) {
          childStyle = {
            ...(child && child.props && child.props.style),
            margin: 0,
          };
        }
      }
      return React.createElement(
        Cell,
        {
          key,
          ...insetCellProps,
          style: childStyle,
        },
        child
      );
    });

  return content.length
    ? this.merge(
        { tag, style, children: content },
        omit(props, Object.keys(Grid.propTypes))
      )
    : null;
}

Grid.propTypes = {
  tag: PropTypes.any,
  children: PropTypes.node,
  // Options
  wrap: PropTypes.bool,
  equal: PropTypes.bool,
  bottom: PropTypes.bool,
  gutter: PropTypes.bool,
  column: PropTypes.bool,
  reverse: PropTypes.bool,
  inset: PropTypes.bool,
  alignFinalRow: PropTypes.bool,
  // Props
  size: PropTypes.number,
  spacing: PropTypes.any,
  // Media Props
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  spacingXs: PropTypes.any,
  spacingSm: PropTypes.any,
  spacingMd: PropTypes.any,
  spacingLg: PropTypes.any,
};
