import React, { Component } from "react";
import PropTypes from "prop-types";
import { UX2 } from "@wsb/guac-widget-core";
import { dataAids } from "../constants/dataAids";
import { merge, noop } from "lodash";

const DIRECTIONS = {
  left: {
    step: -1,
  },
  right: {
    step: 1,
  },
};

class ThumbnailNavList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conveyorMarginLeft: 0,
      conveyorWidth: 0,
    };
  }

  componentDidMount() {
    this._resizeObserver = new ResizeObserver(this.onResize);
    this._resizeObserver.observe(this.conveyor);
    this.onResize();
  }

  componentWillUnmount() {
    this._resizeObserver.disconnect();
  }

  componentDidUpdate(prevProps) {
    const { selectedIndex, thumbWidth, thumbMargin, stepSize } = this.props;
    const { conveyorMarginLeft, conveyorWidth } = this.state;

    if (selectedIndex === prevProps.selectedIndex) {
      return;
    }

    const leftOffSet =
      conveyorMarginLeft + selectedIndex * (thumbWidth + thumbMargin);
    if (leftOffSet < 0) {
      // selectedIndex is on the left side
      this.moveConveyor("left", Math.ceil(-leftOffSet / stepSize))();
    } else if (conveyorWidth < leftOffSet + thumbWidth) {
      this.moveConveyor(
        "right",
        Math.ceil((leftOffSet + thumbWidth - conveyorWidth) / stepSize)
      )();
    }
  }

  get thumbsExceededWidth() {
    const { thumbWidth, thumbMargin, images } = this.props;
    const { conveyorWidth } = this.state;

    return (
      thumbWidth * images.length +
      thumbMargin * (images.length - 1) -
      conveyorWidth
    );
  }

  onResize = () => {
    this.setState({ conveyorWidth: this.conveyor.offsetWidth });
  };

  renderThumbnails() {
    const {
      images,
      selectedIndex,
      goToSlide,
      thumbWidth,
      thumbMargin,
      thumbHeight,
    } = this.props;
    const { conveyorMarginLeft, conveyorWidth } = this.state;
    let thumbArray = null;

    if (conveyorWidth) {
      const fullThumbWidth = thumbWidth + thumbMargin;
      const firstVisibleIndex = Math.max(
        0,
        Math.floor(Math.abs(conveyorMarginLeft) / fullThumbWidth) - 1
      );
      const lastVisibleIndex =
        firstVisibleIndex + Math.ceil(conveyorWidth / fullThumbWidth) + 1;

      thumbArray = images.map((image, index) => {
        const imageUrl = image.url;
        const selectStyle =
          index === selectedIndex
            ? {
                outline: "3px solid",
                outlineOffset: -3,
              }
            : null;

        const style = {
          color: "highlight",
          overflowY: "hidden",
          margin: `0 0 0 ${index === 0 ? 0 : "10px"}`,
          width: thumbWidth,
          height: thumbHeight,
        };
        const imgEl =
          index >= firstVisibleIndex && index <= lastVisibleIndex ? (
            <UX2.Element.Image
              src={imageUrl}
              data-route=""
              alt={image.alt || `image${index}`}
              key={index}
              style={{ width: thumbWidth, cursor: "pointer", ...selectStyle }}
              data-edit-interactive={true}
            />
          ) : (
            <span key={index} />
          );

        return (
          <UX2.Element.ListItem.Inline
            tag="li"
            key={`thumb-${index}`}
            data-index={`thumb-${index}`}
            style={style}
            onClick={goToSlide.bind(null, index)}
          >
            {imgEl}
          </UX2.Element.ListItem.Inline>
        );
      });
    }

    const listStyles = {
      listStyle: "none",
      padding: 0,
      margin: 0,
      textAlign: "left",
      whiteSpace: "nowrap",
      transition: "margin-left 0.5s",
      marginLeft: conveyorMarginLeft,
    };

    return (
      <UX2.Element.Block style={{ position: "relative" }}>
        <UX2.Element.Block
          tag="button"
          style={this.getArrowStyle("left")}
          onClick={this.moveConveyor("left")}
        >
          <UX2.Element.Icon
            data-edit-interactive={true}
            style={{ color: "white" }}
            icon="chevronLeft"
          />
        </UX2.Element.Block>

        <ul
          style={listStyles}
          data-aid={dataAids.THUMBNAIL_NAV_LIST}
          children={thumbArray}
        />

        <UX2.Element.Block
          tag="button"
          style={this.getArrowStyle("right")}
          onClick={this.moveConveyor("right")}
        >
          <UX2.Element.Icon
            data-edit-interactive={true}
            style={{ color: "white" }}
            icon="chevronRight"
          />
        </UX2.Element.Block>
      </UX2.Element.Block>
    );
  }

  getArrowStyle(direction) {
    const { transparentBackground, thumbHeight } = this.props;
    const { conveyorMarginLeft } = this.state;
    const width = this.thumbsExceededWidth;
    const arrowStyle = { display: "none" };
    if (
      (direction === "left" && conveyorMarginLeft) ||
      (direction === "right" &&
        width !== Math.abs(conveyorMarginLeft) &&
        width > 0)
    ) {
      merge(arrowStyle, {
        position: "absolute",
        zIndex: 1,
        border: "none",
        height: thumbHeight,
        width: 50,
        background: transparentBackground
          ? "transparent"
          : "rgba(0, 0, 0, 0.5)",
        padding: 0,
        cursor: "pointer",
        outline: "none",
        top: 0,
        display: "block",
      });
    } else {
      return arrowStyle;
    }

    if (direction === "left") {
      arrowStyle.left = 0;
    } else {
      arrowStyle.right = 0;
    }

    return arrowStyle;
  }

  moveConveyor = (direction, stepNum = 1) => {
    return (event) => {
      event && event.preventDefault();
      const margin = this.state.conveyorMarginLeft;
      const absMargin = Math.abs(margin);
      let step = stepNum * this.props.stepSize;

      if (direction === "left" && absMargin < step) {
        step = absMargin;
      } else if (
        direction === "right" &&
        this.thumbsExceededWidth - absMargin < step
      ) {
        step = this.thumbsExceededWidth - absMargin;
      }
      this.setState({
        conveyorMarginLeft: margin + -DIRECTIONS[direction].step * step,
      });
    };
  };

  render() {
    const { renderContainer, overrideStyle } = this.props;
    const Wrapper = renderContainer ? UX2.Element.Container : UX2.Element.Block;
    const wrapperStyle = {
      marginTop: "small",
      ...overrideStyle,
    };
    return (
      <Wrapper style={wrapperStyle}>
        <div
          style={{ overflow: "hidden", width: "100%" }}
          ref={(ref) => {
            this.conveyor = ref;
          }}
          children={this.renderThumbnails()}
        />
      </Wrapper>
    );
  }
}

ThumbnailNavList.propTypes = {
  goToSlide: PropTypes.func,
  selectedIndex: PropTypes.number,
  images: PropTypes.array.isRequired,
  transparentBackground: PropTypes.bool,
  stepSize: PropTypes.number,
  thumbHeight: PropTypes.number,
  overrideStyle: PropTypes.object,
  renderContainer: PropTypes.bool,
  thumbWidth: PropTypes.number,
  thumbMargin: PropTypes.number,
};

ThumbnailNavList.defaultProps = {
  goToSlide: noop,
  selectedIndex: 0,
  renderContainer: false,
  thumbMargin: 10,
  thumbWidth: 70,
  thumbHeight: 70,
  stepSize: 200,
};

export default ThumbnailNavList;
