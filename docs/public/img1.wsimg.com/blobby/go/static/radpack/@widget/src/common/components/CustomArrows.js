import React, { Component } from "react";
import PropTypes from "prop-types";
import { UX2 } from "@wsb/guac-widget-core";
import { dataAids } from "../constants/dataAids";

class CustomArrows extends Component {
  componentDidUpdate(prevProps) {
    const { nextSlide, prevSlide, triggerNextSlide } = this.props;
    if (triggerNextSlide > prevProps.triggerNextSlide) {
      nextSlide();
    }
    if (triggerNextSlide < prevProps.triggerNextSlide) {
      prevSlide();
    }
  }

  render() {
    const {
      prevSlide,
      nextSlide,
      visible,
      overrideArrowStyle = {},
    } = this.props;
    const containerStyle = {
      opacity: visible ? 1 : 0,
      transition: "opacity 0.5s",
      ":hover": {
        opacity: 1,
      },
    };

    return (
      <UX2.Element.Block style={containerStyle}>
        <UX2.Element.Button.Previous
          data-aid={dataAids.GALLERY_SCROLL_LEFT_ARROW}
          onClick={prevSlide}
          style={overrideArrowStyle}
        />
        <UX2.Element.Button.Next
          data-aid={dataAids.GALLERY_SCROLL_RIGHT_ARROW}
          onClick={nextSlide}
          style={overrideArrowStyle}
        />
      </UX2.Element.Block>
    );
  }
}

CustomArrows.propTypes = {
  prevSlide: PropTypes.func,
  nextSlide: PropTypes.func,
  visible: PropTypes.bool,
  overrideArrowStyle: PropTypes.object,
  triggerNextSlide: PropTypes.number,
};

export default CustomArrows;
