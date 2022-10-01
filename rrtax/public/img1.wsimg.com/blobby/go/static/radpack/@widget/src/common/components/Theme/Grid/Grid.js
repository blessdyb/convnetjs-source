import { set } from "lodash";
import PropTypes from "prop-types";
import { UX2 } from "@wsb/guac-widget-core";

const { utils } = UX2;

export default class Grid extends utils.createElement("Grid") {
  static propTypes = {
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

  static defaultProps = {
    tag: "div",
    wrap: true,
    gutter: true,
    bottom: true,
    size: 0,
    spacing: "medium",
    spacingSm: "xlarger",
  };

  static getMargin(margin, unit, bottom) {
    return `0 -${margin / 2}${unit} ${bottom ? `-${margin}${unit}` : 0}`;
  }

  static applySizingStyles(style = {}, props = {}, theme) {
    const {
      gutter,
      bottom,
      spacing,
      spacingXs = spacing,
      spacingSm = spacingXs,
      spacingMd = spacingSm,
      spacingLg = spacingMd,
    } = props;

    if (gutter) {
      let margin = (style.margin = this.getMargin(
        ...theme.parseSizedUnit(theme.mapPropValue("margin", spacingXs)),
        bottom
      ));
      if (spacingSm !== spacingXs) {
        const value = this.getMargin(
          ...theme.parseSizedUnit(theme.mapPropValue("margin", spacingSm)),
          bottom
        );
        if (value !== margin) {
          margin = value;
          set(style, "@sm.margin", margin);
        }
      }
      if (spacingMd !== spacingSm) {
        const value = this.getMargin(
          ...theme.parseSizedUnit(theme.mapPropValue("margin", spacingMd)),
          bottom
        );
        if (value !== margin) {
          margin = value;
          set(style, "@md.margin", margin);
        }
      }
      if (spacingLg !== spacingMd) {
        const value = this.getMargin(
          ...theme.parseSizedUnit(theme.mapPropValue("margin", spacingLg)),
          bottom
        );
        if (value !== margin) {
          margin = value;
          set(style, "@lg.margin", margin);
        }
      }
    } else {
      style.margin = 0;
    }
  }
}
