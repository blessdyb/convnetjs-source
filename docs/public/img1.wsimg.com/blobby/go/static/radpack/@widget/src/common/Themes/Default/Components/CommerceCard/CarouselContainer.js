import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { UX2 } from "@wsb/guac-widget-core";

function CarouselContainer({
  imageList,
  imageShape,
  imageCropMethod,
  dataAids = {},
  hasImageBorder,
  carouselWidthOffset,
  ribbonComponent,
  buttonComponent,
}) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  const componentProps = {
    width: width,
    imageList,
    imageShape,
    imageCropMethod,
    hasImageBorder,
    carouselWidthOffset,
    ribbonComponent,
    buttonComponent,
  };

  return (
    <div data-aids={dataAids.carousel} ref={ref}>
      <UX2.Component.CommerceCardCarousel {...componentProps} />
    </div>
  );
}

CarouselContainer.propTypes = {
  imageList: PropTypes.array,
  imageShape: PropTypes.string,
  imageCropMethod: PropTypes.string,
  dataAids: PropTypes.object,
  hasImageBorder: PropTypes.bool,
  carouselWidthOffset: PropTypes.string,
  ribbonComponent: PropTypes.object,
  buttonComponent: PropTypes.object,
};

export default CarouselContainer;
