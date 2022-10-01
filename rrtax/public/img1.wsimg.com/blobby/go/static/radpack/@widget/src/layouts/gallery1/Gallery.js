import React, { Component, cloneElement, createElement } from "react";
import PropTypes from "prop-types";
import { merge } from "lodash";
import { UX2, utils } from "@wsb/guac-widget-core";
import Carousel from "@wsb/guac-widget-shared/lib/components/Carousel";
import { TABLET } from "../../common/constants/device";
import CustomArrows from "../../common/components/CustomArrows";
import ThumbnailNavList from "../../common/components/ThumbnailNavList";
import FakeThumbNav from "../../common/components/FakeThumbNav";
import {
  getGalleryDataAid,
  getGalleryDataRouteProps,
} from "../../common/constants/dataAids";
import getImageUrl from "../../common/util";
import { thumbImageDimensions } from "../../common/constants/dimensions";
import wrapWithDeviceDetection from "../../common/wrapWithDeviceDetection";
import {
  modifyKeyDownEventHandler,
  handleDirectionalKeys,
} from "../../common/directionalKeyHandlers";
import Caption from "./Caption";
import { debounce, omit } from "lodash";

const CAPTION_HEIGHT = 40;
const DIMENSIONS = {
  mobile: {
    minWidth: 200,
    maxWidth: 300,
    height: 210,
  },
  tablet: {
    minWidth: 400,
    maxWidth: 800,
    height: 600,
  },
  smallTablet: {
    minWidth: 300,
    maxWidth: 600,
    height: 400,
  },
};

export default wrapWithDeviceDetection(
  class Gallery extends Component {
    constructor(props) {
      super(props);
      this.state = {
        arrows: false,
        selectedIndex: 0,
        nextSlideIncremental: 0,
      };
      this.updateSelectedIndex = this.updateSelectedIndex.bind(this);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.nextSlideDebounced = debounce(
        (input) =>
          handleDirectionalKeys({ keyCode: input.keyCode, context: this }),
        200
      );
    }

    static get propTypes() {
      return {
        autoplay: PropTypes.bool,
        category: PropTypes.string,
        className: PropTypes.string,
        device: PropTypes.string,
        images: PropTypes.array,
        renderAsThumbnail: PropTypes.bool,
        section: PropTypes.string,
        showthumbnails: PropTypes.bool,
        size: PropTypes.string,
        currentImageSelected: PropTypes.string,
        fullBleed: PropTypes.bool,
        showArrows: PropTypes.bool,
        autoplayDelay: PropTypes.string,
        hasCaption: PropTypes.bool,
      };
    }

    static get defaultProps() {
      return {
        category: "neutral",
        device: "tablet",
        images: [],
        autoplay: false,
        showArrows: true,
      };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      const { images = [] } = nextProps;
      const { selectedIndex } = prevState;
      return selectedIndex >= images.length ? { selectedIndex: 0 } : null;
    }

    handleMouseLeave() {
      this.setState({ mouseOnCarousel: false, arrows: false });
    }

    handleMouseEnter() {
      this.setState({ mouseOnCarousel: true });
      this.handleMouseMove();
    }

    handleMouseMove() {
      if (!this.state.arrows) {
        this.setState({ arrows: true });
      }
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.setState({ arrows: false });
      }, 1000);
    }

    renderFakeCarousel(images) {
      const commonStyles = {
          marginVertical: 0,
          marginHorizontal: "xxsmall",
          display: "inline-block",
          height: 500,
          width: 700,
        },
        image1 = images[images.length - 1],
        image2 = images[0],
        image3 = images.length > 1 ? images[1] : image2;
      const maxWidthCaption = this.props.device !== "mobile" ? "700px" : null;
      const { selectedIndex } = this.state;
      return (
        <UX2.Element.Block color="highlight">
          <UX2.Element.Block
            style={{
              width: 900,
              overflow: "hidden",
              margin: "0 auto",
              whiteSpace: "nowrap",
            }}
          >
            {cloneElement(image1, {
              style: merge({}, commonStyles, {
                margin: "0 5px 0 -605px",
                opacity: 0.3,
              }),
            })}
            {cloneElement(image2, { style: commonStyles })}
            {cloneElement(image3, {
              style: merge({}, commonStyles, { opacity: 0.3 }),
            })}
          </UX2.Element.Block>
          <UX2.Element.Block
            style={{ width: 900, overflow: "hidden", margin: "0 auto" }}
          >
            {createElement(Caption, {
              maxWidthCaption,
              captionContainerHeight: this.props.hasCaption
                ? CAPTION_HEIGHT
                : 0,
              caption: images[selectedIndex].caption || "",
            })}
            {this.props.showthumbnails && (
              <FakeThumbNav
                images={this.props.images}
                thumbImageDimensions={thumbImageDimensions}
                baseStyle={{ position: "relative" }}
              />
            )}
          </UX2.Element.Block>
        </UX2.Element.Block>
      );
    }

    componentDidUpdate(prevProps) {
      const { currentImageSelected } = this.props;
      if (
        currentImageSelected !== prevProps.currentImageSelected &&
        currentImageSelected > -1
      ) {
        this.setState({ selectedIndex: parseInt(currentImageSelected, 10) });
      }
    }

    componentWillUnmount() {
      modifyKeyDownEventHandler(this.nextSlideDebounced);
    }

    renderCarousel(imageComponents = [], dimensions, showArrows) {
      const {
        showthumbnails,
        device,
        currentImageSelected,
        images,
        fullBleed,
        autoplayDelay,
        autoplay,
        hasCaption,
      } = this.props;
      const { selectedIndex, nextSlideIncremental } = this.state;
      const resolvedIndex =
        currentImageSelected > -1
          ? parseInt(currentImageSelected, 10)
          : selectedIndex;
      const initialSlideProp = { initialSlide: parseInt(resolvedIndex, 10) };
      const caption =
        (images[selectedIndex] && images[selectedIndex].caption) || "";
      const maxWidthCaption = device !== "mobile" ? "700px" : null;

      const controls = [];
      if (hasCaption) {
        controls.push({
          component: Caption,
          props: {
            maxWidthCaption,
            captionContainerHeight: CAPTION_HEIGHT,
            caption,
          },
          position: "bottom",
        });
      }
      const carouselHeight =
        fullBleed && !showthumbnails && !hasCaption
          ? `${dimensions.height}px`
          : "auto";
      const autoplaySpeed = (parseFloat(autoplayDelay) || 3.5) * 1000;

      if (showthumbnails && device !== "mobile" && images.length > 1) {
        const { height } = thumbImageDimensions;
        const squareThumbImageSize = { height, width: height };
        const thumbArray = images.map(({ imageData }) => {
          return {
            url: getImageUrl(
              utils.generateImageServiceUrl(omit(imageData, "position")),
              squareThumbImageSize.height,
              squareThumbImageSize.height
            ),
            caption: imageData.caption,
            alt: imageData.alt,
          };
        });
        controls.push({
          component: ThumbnailNavList,
          props: {
            images: thumbArray,
            thumbWidth: 70,
            thumbHeight: height,
            renderContainer: fullBleed,
          },
          position: "bottom",
        });
      }

      showArrows &&
        controls.push({
          component: CustomArrows,
          props: {
            visible: this.state.arrows,
            overrideArrowStyle: {
              top: 0,
              marginTop: `${dimensions.height / 2}px`,
            },
            triggerNextSlide: nextSlideIncremental,
          },
          position: "bottom",
        });

      const imagesToPrefetchOverride = fullBleed
        ? { imagesToPrefetch: 10 }
        : {};

      return (
        <Carousel
          key={currentImageSelected}
          dots={false}
          arrows={false}
          cellPadding={5}
          infinite={images.length > 1}
          slideHeight={`${dimensions.height}px`}
          slideWidth="inherit"
          draggable={images.length > 1}
          autoplay={autoplay}
          autoplaySpeed={autoplaySpeed}
          afterChange={this.updateSelectedIndex}
          controls={controls}
          children={imageComponents}
          pauseOnHover={!fullBleed}
          style={{
            slide: { opacity: "0.3" },
            selectedSlide: { opacity: "1" },
            track: { lineHeight: 0 },
          }}
          height={carouselHeight}
          {...initialSlideProp}
          {...imagesToPrefetchOverride}
        />
      );
    }

    updateSelectedIndex(index) {
      this.setState({
        selectedIndex: index,
      });
    }

    render() {
      const { device, images, renderAsThumbnail, size, fullBleed, showArrows } =
        this.props;

      const Grid = UX2.Component.Grid;
      const isSmallTablet = device === TABLET && size === "sm";
      const dimensions = isSmallTablet
        ? DIMENSIONS.smallTablet
        : DIMENSIONS[device];
      const renderFakeThumbnail =
        (device === "mobile" || size === "xs") && renderAsThumbnail;
      const imageArray = images.map(({ imageData }, index) => {
        // these values will scale with srcSet
        const maxDimensions = {
          width: 1300,
          height: 800,
        };
        const imageUrl = utils.generateImageServiceUrl({
          ...imageData,
          additionalUrlParams: [
            `rs=w:${maxDimensions.width},h:${maxDimensions.height}`,
          ],
        });
        const imgStyle = {
          maxWidth: "100%",
          position: "relative",
          height: "100%",
          objectFit: "contain",
        };
        return (
          <UX2.Element.Image
            src={imageUrl} // src prop is required by react-img-carousel child equality checks
            data-aid={getGalleryDataAid(index)}
            data-route=""
            alt={imageData.alt || ""}
            key={index}
            style={imgStyle}
            onMouseEnter={modifyKeyDownEventHandler.bind(
              this,
              this.nextSlideDebounced,
              true
            )}
            onMouseLeave={modifyKeyDownEventHandler.bind(
              this,
              this.nextSlideDebounced
            )}
            {...getGalleryDataRouteProps(index, { isImage: true })}
          />
        );
      });

      let carouselContainer = null;

      if (imageArray.length) {
        const renderArrows =
          showArrows && device !== "mobile" && imageArray.length > 1;
        const carousel = renderFakeThumbnail
          ? this.renderFakeCarousel(imageArray)
          : this.renderCarousel(imageArray, dimensions, renderArrows);
        const carouselInner = (
          <UX2.Group.Carousel
            onMouseEnter={this.handleMouseEnter}
            onMouseMove={this.handleMouseMove}
            onMouseLeave={this.handleMouseLeave}
            children={carousel}
          />
        );

        carouselContainer = fullBleed ? (
          carouselInner
        ) : (
          <Grid size={1}>{carouselInner}</Grid>
        );
      }

      const CarouselWrapper = fullBleed
        ? UX2.Element.Block
        : UX2.Element.Container;
      return (
        <CarouselWrapper data-test-radpack="bootstrap2">
          {carouselContainer}
        </CarouselWrapper>
      );
    }
  }
);
