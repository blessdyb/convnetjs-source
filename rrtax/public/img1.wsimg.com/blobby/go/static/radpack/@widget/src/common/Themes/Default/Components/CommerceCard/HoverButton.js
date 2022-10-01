import React from "react";
import PropTypes from "prop-types";
import { UX2 } from "@wsb/guac-widget-core";

function HoverButton({ dataAids = {}, hoverButtonText, onHoverButtonClick }) {
  const styles = {
    backgroundColor: "section",
    textAlign: "center",
    padding: "xsmall",
    display: "block",
    position: "absolute",
    zIndex: 1,
    opacity: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "xsmall",
    boxShadow: "0 0 4px 0px rgba(0,0,0,0.2)",
    transition: "opacity 0s",
  };

  const handleOnClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onHoverButtonClick();
  };

  return (
    <UX2.Element.Block
      data-aid={dataAids.quickViewButton}
      category="neutral"
      section="default"
      className="hoverButton"
      style={styles}
      onClick={(e) => handleOnClick(e)}
    >
      <UX2.Element.Text disabled>+ {hoverButtonText}</UX2.Element.Text>
    </UX2.Element.Block>
  );
}

HoverButton.propTypes = {
  dataAids: PropTypes.object,
  hoverButtonText: PropTypes.string,
  onHoverButtonClick: PropTypes.func,
};

export default HoverButton;
