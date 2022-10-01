/* eslint-disable no-console */
import { constants } from "@wsb/guac-widget-core";
import { merge } from "lodash";

const {
  buttons: { decorations, fills },
} = constants;

const resetCTE = {
  position: "unset",
  opacity: "unset",
  zIndex: "unset",
  border: "unset",
  transition: "unset",
};

function underline(props) {
  if (props.fill !== fills.OPEN) {
    console.warn("Button: underline decoration must be used with shapes.OPEN.");
    return {};
  }

  return {
    style: {
      borderWidth: 0,
      borderBottomWidth: props.customBorderWidth,
      borderStyle: "solid",
      borderColor: "currentColor",
      paddingTop: 0,
      paddingBottom: "xxsmall",
      alignItems: "flex-end",
    },
  };
}

function arrow({ fill }) {
  if (fill !== fills.OPEN) {
    console.warn("Button: arrow decoration must be used with shapes.OPEN.");
    return {};
  }

  return {
    icon: "chevronRight",
    iconLeft: false,
    iconSize: "small",
    style: {
      paddingVertical: 0,
      ["svg"]: {
        transform: "translateX(0)",
        transition: "transform .5s ease",
      },
      [":hover svg"]: {
        transform: "translateX(4px)",
      },
    },
  };
}

function lines({ size }) {
  if (size === "small") {
    return {};
  }

  const reset =
    this.base.renderMode === constants.renderModes.EDIT ? resetCTE : {};
  const dash = {
    content: `""`,
    display: "inline-block",
    height: 0.1, // Prevent it to be invisible
    width: 18,
    borderTop: "1px solid !important",
  };
  return {
    style: {
      alignItems: "center",
      [":before"]: {
        marginRight: "xsmall",
        ...dash,
      },
      [":after"]: {
        marginLeft: "xsmall",
        ...reset,
        ...dash,
      },
    },
  };
}

function underlineWithArrow(props) {
  if (props.fill !== fills.OPEN) {
    console.warn(
      "Button: underline with arrow decoration must be used with shapes.OPEN."
    );
    return {};
  }

  return merge(
    {
      style: {
        ["svg"]: {
          marginTop: "-2px",
        },
        [".iconText"]: {
          borderWidth: 0,
          borderBottomWidth: props.customBorderWidth,
          borderStyle: "solid",
          borderColor: "currentColor",
          paddingBottom: "xxsmall",
        },
      },
    },
    arrow.call(this, props)
  );
}

const options = {
  [decorations.NONE]: () => ({}),
  [decorations.UNDERLINE]: underline,
  [decorations.ARROW]: arrow,
  [decorations.LINES]: lines,
  [decorations.UNDERLINE_WITH_ARROW]: underlineWithArrow,
};

export default function (props) {
  const { decoration = decorations.NONE } = props;

  if (!decorations[decoration]) {
    console.error(`Button: decoration type of ${decoration} is not valid.`);
    return {};
  }

  return options[decoration].call(this, props);
}
