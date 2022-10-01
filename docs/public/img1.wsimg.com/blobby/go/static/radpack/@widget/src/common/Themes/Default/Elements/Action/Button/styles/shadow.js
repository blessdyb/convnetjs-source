import { constants } from "@wsb/guac-widget-core";

const {
  buttons: { shadows, fills, colors },
} = constants;

function shadow1() {
  const shadowColor =
    this.base.category !== "accent"
      ? "rgba(0, 0, 0, 0.2)"
      : "rgba(255, 255, 255, 0.2)";
  return {
    position: "relative",
    zIndex: 1,
    [":after"]: {
      content: '""',
      backgroundColor: "transparent",
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      margin: "auto",
      width: "100%",
      height: "100%",
      transition: "all .3s ease",
      zIndex: -1,
      boxShadow: `5px 5px 0 ${shadowColor}`,
      borderRadius: "inherit",
      opacity: 1, // Edit mode override
    },
    [":hover"]: {
      ":after": {
        boxShadow: `1px 1px 0 ${shadowColor}`,
        backgroundPosition: "100% 0",
      },
    },
  };
}

function shadow2(color) {
  const palette = {
    PRIMARY: {
      bgColor: "action",
    },
    HIGHCONTRAST: {
      bgColor: "actionContrast",
    },
  };
  const bgColor = this.mapPropValue("backgroundColor", palette[color].bgColor);
  const buttonBorderColor =
    bgColor.lightness > 30 ? bgColor.darken(15) : bgColor.lighten(50);
  return {
    borderStyle: "solid",
    borderTopWidth: "0",
    borderLeftWidth: "0",
    borderRightWidth: "0",
    borderBottomWidth: "medium",
    borderBottomColor: buttonBorderColor.toString(),
  };
}

const options = {
  [shadows.NONE]: () => ({}),
  [shadows.SHADOW1]: shadow1,
  [shadows.SHADOW2]: shadow2,
};

export default function ({
  fill,
  shadow = shadows.NONE,
  color = colors.PRIMARY,
}) {
  if (fill !== fills.SOLID && shadow !== shadows.NONE) {
    // eslint-disable-next-line
    console.warn("Button: shadow can only be applied to fills.SOLID.");
    return {};
  }

  if (!shadows[shadow]) {
    // eslint-disable-next-line
    console.error(`Button: shadow type of ${shadow} is not valid.`);
    return {};
  }

  return {
    style: options[shadow].call(this, color),
  };
}
