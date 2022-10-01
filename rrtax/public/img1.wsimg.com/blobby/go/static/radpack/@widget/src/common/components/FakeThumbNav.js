import React, { Component } from "react";
import PropTypes from "prop-types";
import { UX2 } from "@wsb/guac-widget-core";
import { some } from "lodash";
import { dataAids } from "../constants/dataAids";

class FakeThumbNav extends Component {
  render() {
    const { images, thumbImageDimensions, thumbLength, baseStyle } = this.props;
    const length = Math.min(this.props.images.length, thumbLength);
    if (length <= 1) {
      return null;
    }
    const { width, height } = thumbImageDimensions;
    const thumbArray = [];
    some(images, ({ imageData }, index) => {
      if (index === length) {
        return true;
      }
      const selectStyle =
        index === 0
          ? {
              border: "5px solid",
              borderColor: "inherit",
              boxSizing: "border-box",
            }
          : null;
      const style = {
        height,
        overflowY: "hidden",
        marginLeft: index === 0 ? 0 : 10,
        ...selectStyle,
      };
      thumbArray.push(
        <UX2.Element.ListItem.Inline
          tag="li"
          style={style}
          key={`fakeThumb-${index}`}
          data-index={`fakeThumb-${index}`}
        >
          <UX2.Element.Image
            data-route=""
            key={index}
            style={{ maxWidth: "none", width, height }}
            imageData={imageData}
          />
        </UX2.Element.ListItem.Inline>
      );
    });

    const listStyle = {
      listStyle: "none",
      padding: 0,
      margin: 0,
      textAlign: "left",
      height,
      whiteSpace: "nowrap",
    };

    return (
      <UX2.Element.Block style={baseStyle}>
        <UX2.Element.List
          tag="ul"
          style={listStyle}
          data-aid={dataAids.FAKE_THUMBNAIL_NAV_LIST}
          children={thumbArray}
        />
      </UX2.Element.Block>
    );
  }
}

FakeThumbNav.propTypes = {
  images: PropTypes.array,
  thumbLength: PropTypes.number,
  thumbImageDimensions: PropTypes.object,
  baseStyle: PropTypes.object,
};

FakeThumbNav.defaultProps = {
  thumbLength: 9,
};

export default FakeThumbNav;
