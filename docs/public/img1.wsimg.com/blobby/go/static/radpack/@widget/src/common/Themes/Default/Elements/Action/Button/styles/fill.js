import { constants } from "@wsb/guac-widget-core";

const {
  buttons: { fills, colors },
} = constants;
const palette = {
  PRIMARY: {
    color: "action",
    bgColorDefault: "action",
    bgColorActive: "actionActive",
    bgColorDefaultHover: "actionHover",
  },
  HIGHCONTRAST: {
    color: "actionContrast",
    bgColorDefault: "actionContrast",
    bgColorActive: "actionContrastActive",
    bgColorDefaultHover: "actionContrastHover",
  },
};
const ghostPalette = {
  PRIMARY: {
    color: "highlight",
    colorHover: "action",
    borderColorHover: "actionBg",
    bgColorHover: "action",
  },
  HIGHCONTRAST: {
    color: "highContrast",
    colorHover: "actionContrast",
    borderColorHover: "actionContrastBg",
    bgColorHover: "actionContrast",
  },
};
const ghostStates = {
  active: {},
  default: {},
  disabled: {
    opacity: "0.4",
  },
};
const openPalette = {
  PRIMARY: {
    color: "highlight",
    colorHover: "highlightHover",
    colorActive: "highlightActive",
  },
  HIGHCONTRAST: {
    color: "highContrast",
    colorHover: "section",
    colorActive: "lowContrast",
  },
};
const openStates = {
  active: {},
  default: {},
  disabled: {
    opacity: "0.4",
  },
};

function solid(state, color) {
  const states = {
    active: {
      backgroundColor: palette[color].bgColorActive,
    },
    default: {
      backgroundColor: palette[color].bgColorDefault,
      [":hover"]: {
        backgroundColor: palette[color].bgColorDefaultHover,
      },
    },
    disabled: {
      backgroundColor: palette[color].bgColorDefault,
      opacity: "0.4",
      [":active"]: {
        backgroundColor: palette[color].bgColorDefault,
      },
    },
  };

  return {
    color: palette[color].color,
    ...states[state],
  };
}

function ghost(state, color, props) {
  return {
    borderWidth: props.customBorderWidth,
    borderStyle: "solid",
    backgroundColor: props.solid ? "section" : "transparent",
    color: ghostPalette[color].color,
    borderColor: "currentColor",
    ...ghostStates[state],
    [":hover"]: {
      color: ghostPalette[color].colorHover,
      backgroundColor: ghostPalette[color].bgColorHover,
      borderColor: ghostPalette[color].borderColorHover,
    },
  };
}

function open(state, color) {
  return {
    backgroundColor: "transparent",
    color: openPalette[color].color,
    alignItems: "flex-end",
    ...openStates[state],
    [":hover"]: {
      color: openPalette[color].colorHover,
    },
    [":active"]: {
      color: openPalette[color].colorActive,
    },
  };
}

const options = {
  [fills.NONE]: () => ({}),
  [fills.SOLID]: solid,
  [fills.GHOST]: ghost,
  [fills.OPEN]: open,
};

export default ({
  fill = fills.SOLID,
  color = colors.PRIMARY,
  state = "default",
  ...props
}) => {
  if (!fills[fill]) {
    // eslint-disable-next-line
    console.error(`Button: fill type of ${fill} is not valid.`);
    fill = fills.SOLID;
  }
  return {
    style: options[fill](state, color, props),
  };
};
