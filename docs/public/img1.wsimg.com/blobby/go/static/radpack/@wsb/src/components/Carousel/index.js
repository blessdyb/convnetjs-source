import React, { useEffect } from "react";
import { UX } from "@wsb/guac-widget-core";
import Carousel from "react-img-carousel";
import CarouselCSS from "react-img-carousel/lib/carousel.css";

// add only one copy of CarouselCSS during server side rendering
// CarouselCSS must be added to the dom during server side rendering in order to define styles for Carousel exclusive classnames
const stylesheetId = "carousel-stylesheet";

// The ref is a dependency for the Carousel component so, please keep forwarding the ref to the component.
export default React.forwardRef((props, ref) => {
  const isSSR = typeof window === "undefined";
  useEffect(() => {
    // Force redraw when mounts
    window.dispatchEvent(new Event("resize"));
    if (document.getElementById(stylesheetId)) return;
    const carouselStylesheet = document.createElement("style");
    carouselStylesheet.setAttribute("id", stylesheetId);
    carouselStylesheet.textContent = CarouselCSS;
    carouselStylesheet.onload = () => {
      // Force redraw after CSS loads
      window.dispatchEvent(new Event("resize"));
    };
    document.head.appendChild(carouselStylesheet);
  }, []);
  return (
    <React.Fragment>
      <Carousel {...props} ref={ref} />
      {isSSR && (
        <UX.Style attributes={{ id: stylesheetId }}> {CarouselCSS} </UX.Style>
      )}
    </React.Fragment>
  );
});
