import { constants } from "@wsb/guac-widget-core";

const {
  buttons: { shapes, fills },
} = constants;

function square() {
  return {
    borderRadius: 0,
  };
}

function round() {
  return {
    borderRadius: 4,
  };
}

function pill() {
  return {
    borderRadius: 48,
  };
}

const options = {
  [shapes.NONE]: () => ({}),
  [shapes.SQUARE]: square,
  [shapes.ROUND]: round,
  [shapes.PILL]: pill,
};

export default ({ fill, shape = shapes.SQUARE }) => {
  if (fill === fills.OPEN) {
    return {};
  }

  if (!shapes[shape]) {
    // eslint-disable-next-line
    console.error(`Button: shape type of ${shape} is not valid.`);
    shape = shapes.SQUARE;
  }

  return {
    style: options[shape](),
  };
};
