import { constants } from "@wsb/guac-widget-core";

const {
  buttons: { shapes, decorations, fills },
} = constants;

export default ({ fill, decoration, shape, size = "default" }) => {
  let paddingStyle = "default";

  if (fill === fills.OPEN) {
    paddingStyle = "open";
  } else if (decoration === decorations.LINES) {
    paddingStyle = "lines";
  } else if (shape === shapes.PILL) {
    paddingStyle = "pill";
  }

  const paddingHorizontal = {
    default: {
      small: "small",
      default: "large",
      large: "xlarge",
    },
    pill: {
      small: "medium",
      default: "xlarge",
      large: "xlarge",
    },
    lines: {
      small: shape === shapes.PILL ? "medium" : "small",
      default: shape === shapes.PILL ? "medium" : "small",
      large: shape === shapes.PILL ? "medium" : "small",
    },
    open: {
      small: 0,
      default: 0,
      large: 0,
    },
  };
  return {
    style: {
      small: {
        paddingHorizontal: paddingHorizontal[paddingStyle].small,
        paddingVertical: "xxsmall",
        minHeight: 40,
      },
      default: {
        paddingHorizontal: paddingHorizontal[paddingStyle].default,
        paddingVertical: "xsmall",
        minHeight: fill === fills.OPEN ? 40 : 56,
      },
      large: {
        paddingHorizontal: paddingHorizontal[paddingStyle].large,
        paddingVertical: "xsmall",
        minHeight: fill === fills.OPEN ? 40 : 56,
      },
    }[size],
  };
};
