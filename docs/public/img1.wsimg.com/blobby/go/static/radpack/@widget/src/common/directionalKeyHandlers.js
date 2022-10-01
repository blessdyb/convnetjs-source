const KEY_CODES = {
  LEFT: 37,
  RIGHT: 39,
};

export const modifyKeyDownEventHandler = (
  mountedFunction = () => {},
  isMounting = false
) => {
  if (isMounting) {
    document.addEventListener("keydown", mountedFunction, false);
  } else {
    document.removeEventListener("keydown", mountedFunction, false);
  }
};

export const handleDirectionalKeys = ({ keyCode, context }) => {
  let nextValue = context.state.nextSlideIncremental;
  if (keyCode === KEY_CODES.LEFT) {
    nextValue = nextValue - 1;
  }
  if (keyCode === KEY_CODES.RIGHT) {
    nextValue = nextValue + 1;
  }
  context.setState({ nextSlideIncremental: nextValue });
};
