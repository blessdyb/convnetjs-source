import { set } from "lodash";
import PropTypes from "prop-types";
import { UX2 } from "@wsb/guac-widget-core";

const { utils } = UX2;

export default class GridCell extends utils.createElement("Grid", "Cell") {
  static propTypes = {
    tag: PropTypes.any,
    children: PropTypes.node,
    // Options
    equal: PropTypes.bool,
    bottom: PropTypes.bool,
    gutter: PropTypes.bool,
    column: PropTypes.bool,
    // Props
    first: PropTypes.bool,
    last: PropTypes.bool,
    size: PropTypes.number,
    push: PropTypes.number,
    pull: PropTypes.number,
    grid: PropTypes.number,
    spacing: PropTypes.any,
    // Media Props
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    inset: PropTypes.bool,
    pushXs: PropTypes.number,
    pushSm: PropTypes.number,
    pushMd: PropTypes.number,
    pushLg: PropTypes.number,
    pullXs: PropTypes.number,
    pullSm: PropTypes.number,
    pullMd: PropTypes.number,
    pullLg: PropTypes.number,
    gridXs: PropTypes.number,
    gridSm: PropTypes.number,
    gridMd: PropTypes.number,
    gridLg: PropTypes.number,
    spacingXs: PropTypes.any,
    spacingSm: PropTypes.any,
    spacingMd: PropTypes.any,
    spacingLg: PropTypes.any,
  };

  static defaultProps = {
    tag: "div",
    size: 0,
    push: 0,
    pull: 0,
    grid: 0,
    spacing: "small",
    spacingSm: "medium",
    spacingMd: "large",
  };

  static getPadding(padding, unit, bottom) {
    return `0 ${padding / 2}${unit} ${bottom ? `${padding}${unit}` : 0}`;
  }

  static getPercent(size, cells) {
    return `${((size || 1) / (cells || 12)) * 100}%`;
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
      let padding = (style.padding = this.getPadding(
        ...theme.parseSizedUnit(theme.mapPropValue("padding", spacingXs)),
        bottom
      ));
      if (spacingSm !== spacingXs) {
        const value = this.getPadding(
          ...theme.parseSizedUnit(theme.mapPropValue("padding", spacingSm)),
          bottom
        );
        if (value !== padding) {
          padding = value;
          set(style, "@sm.padding", padding);
        }
      }
      if (spacingMd !== spacingSm) {
        const value = this.getPadding(
          ...theme.parseSizedUnit(theme.mapPropValue("padding", spacingMd)),
          bottom
        );
        if (value !== padding) {
          padding = value;
          set(style, "@md.padding", padding);
        }
      }
      if (spacingLg !== spacingMd) {
        const value = this.getPadding(
          ...theme.parseSizedUnit(theme.mapPropValue("padding", spacingLg)),
          bottom
        );
        if (value !== padding) {
          padding = value;
          set(style, "@lg.padding", padding);
        }
      }
    } else {
      style.padding = 0;
    }
    return style;
  }

  static applyPushPullStyles(style = {}, props = {}) {
    const {
      push,
      pushXs = push,
      pushSm = pushXs,
      pushMd = pushSm,
      pushLg = pushMd,
      pull,
      pullXs = pull,
      pullSm = pullXs,
      pullMd = pullSm,
      pullLg = pullMd,
      grid,
      gridXs = grid,
      gridSm = gridXs,
      gridMd = gridSm,
      gridLg = gridMd,
    } = props;

    // Push
    let marginLeft = "initial";
    if (pushXs > 0) {
      style.marginLeft = marginLeft = this.getPercent(pushXs, gridXs);
    }
    if (pushSm !== pushXs) {
      const value = pushSm > 0 ? this.getPercent(pushSm, gridSm) : "initial";
      if (value !== marginLeft) {
        marginLeft = value;
        set(style, "@sm.marginLeft", marginLeft);
      }
    }
    if (pushMd !== pushSm) {
      const value = pushMd > 0 ? this.getPercent(pushMd, gridMd) : "initial";
      if (value !== marginLeft) {
        marginLeft = value;
        set(style, "@md.marginLeft", marginLeft);
      }
    }
    if (pushLg !== pushMd) {
      const value = pushLg > 0 ? this.getPercent(pushLg, gridLg) : "initial";
      if (value !== marginLeft) {
        marginLeft = value;
        set(style, "@lg.marginLeft", marginLeft);
      }
    }

    // Pull
    let marginRight = "initial";
    if (pullXs > 0) {
      style.marginRight = marginRight = this.getPercent(pullXs, gridXs);
    }
    if (pullSm !== pullXs) {
      const value = pullSm > 0 ? this.getPercent(pullSm, gridSm) : "initial";
      if (value !== marginRight) {
        marginRight = value;
        set(style, "@sm.marginRight", marginRight);
      }
    }
    if (pullMd !== pullSm) {
      const value = pullMd > 0 ? this.getPercent(pullMd, gridMd) : "initial";
      if (value !== marginRight) {
        marginRight = value;
        set(style, "@md.marginRight", marginRight);
      }
    }
    if (pullLg !== pullMd) {
      const value = pullLg > 0 ? this.getPercent(pullLg, gridLg) : "initial";
      if (value !== marginRight) {
        marginRight = value;
        set(style, "@lg.marginRight", marginRight);
      }
    }
    return style;
  }

  static applySizeStyles(style = {}, props = {}) {
    const {
      size,
      xs = size,
      sm = xs,
      md = sm,
      lg = md,
      grid,
      gridXs = grid,
      gridSm = gridXs,
      gridMd = gridSm,
      gridLg = gridMd,
    } = props;

    let basis = "0%";
    if (xs > 0 || gridXs > 0) {
      style.flexBasis = style.maxWidth = basis = this.getPercent(xs, gridXs);
    }

    if (sm !== xs || gridSm !== gridXs) {
      const value = sm > 0 || gridSm > 0 ? this.getPercent(sm, gridSm) : "0%";
      if (value !== basis) {
        basis = value;
        set(style, "@sm.flexBasis", basis);
        set(style, "@sm.maxWidth", basis === "0%" ? "none" : basis);
      }
    }

    if (md !== sm || gridMd !== gridSm) {
      const value = md > 0 || gridMd > 0 ? this.getPercent(md, gridMd) : "0%";
      if (value !== basis) {
        basis = value;
        set(style, "@md.flexBasis", basis);
        set(style, "@md.maxWidth", basis === "0%" ? "none" : basis);
      }
    }

    if (lg !== md || gridLg !== gridMd) {
      const value = lg > 0 || gridLg > 0 ? this.getPercent(lg, gridLg) : "0%";
      if (value !== basis) {
        basis = value;
        set(style, "@lg.flexBasis", basis);
        set(style, "@lg.maxWidth", basis === "0%" ? "none" : basis);
      }
    }

    return style;
  }
}
