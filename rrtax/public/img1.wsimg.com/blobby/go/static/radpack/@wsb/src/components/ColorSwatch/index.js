import React from "react";
import PropTypes from "prop-types";
import { UX2 } from "@wsb/guac-widget-core";

const ColorSwatch = ({ color, isActive, inStock, isSmall }) => {
  const showInStock = inStock || typeof inStock === "undefined";

  const sizeOuter = isSmall ? "24px" : "38px";
  const sizeInner = isSmall ? "20px" : "32px";
  const commonStyles = {
    borderRadius: "50%",
    borderWidth: "1px",
    borderStyle: "solid",
  };

  const styles = {
    outer: {
      ...commonStyles,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: sizeOuter,
      height: sizeOuter,
      borderColor: isActive ? "lowContrast" : "transparent",
    },
    inner: {
      ...commonStyles,
      borderColor: "ultraLowContrast",
      color: "ultraLowContrast",
      width: sizeInner,
      height: sizeInner,
      background: showInStock
        ? color
        : `linear-gradient(to left top, ${color} calc(50% - 1px), currentColor, ${color} calc(50% + 1px) )`,
    },
  };

  return (
    <UX2.Element.Block style={styles.outer}>
      <UX2.Element.Block style={styles.inner} />
    </UX2.Element.Block>
  );
};

ColorSwatch.propTypes = {
  color: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  inStock: PropTypes.bool,
  isSmall: PropTypes.bool,
};

export default ColorSwatch;
