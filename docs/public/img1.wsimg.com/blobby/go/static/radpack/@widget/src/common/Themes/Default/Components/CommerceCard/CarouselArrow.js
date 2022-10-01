import React from "react";
import PropTypes from "prop-types";
import { UX2 } from "@wsb/guac-widget-core";
import { ICONS, WIDTHS } from "./Constants";

const baseStyles = {
  position: "absolute",
  top: "calc(50% - 21px)",
  width: `${WIDTHS.ARROW}px`,
  color: "highContrast",
  cursor: "pointer",
  zIndex: "2",
  ["svg"]: {
    filter: "drop-shadow(0px 0px 3px rgb(0 0 0 / 0.4))",
  },
};

const styles = {
  leftArrow: {
    ...baseStyles,
    left: `${WIDTHS.ARROW_OFFSET}px`,
  },
  rightArrow: {
    ...baseStyles,
    right: `${WIDTHS.ARROW_OFFSET}px`,
  },
};

const CarouselArrow = (props) => {
  const {
    Element: { Block, Icon },
  } = UX2;
  const { icon, prevSlide, nextSlide } = props;

  return (
    <Block
      category="accent"
      id={icon}
      style={icon === ICONS.LEFT ? styles.leftArrow : styles.rightArrow}
    >
      <Icon
        onClick={icon === ICONS.LEFT ? prevSlide : nextSlide}
        icon={icon}
        size="xlarge"
      />
    </Block>
  );
};

CarouselArrow.propTypes = {
  icon: PropTypes.string,
  prevSlide: PropTypes.func,
  nextSlide: PropTypes.func,
  numSlides: PropTypes.number,
  currentAssetIndex: PropTypes.number,
};

export default CarouselArrow;
