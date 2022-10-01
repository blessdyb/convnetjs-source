import React from "react";
import PropTypes from "prop-types";
import { UX2 } from "@wsb/guac-widget-core";
import { dataAids } from "../../common/constants/dataAids";

const Caption = ({ maxWidthCaption, captionContainerHeight, caption }) => {
  return (
    <UX2.Element.FigCaption
      data-aid={dataAids.GALLERY_CAPTION_RENDERED}
      children={caption}
      richtext
      style={{
        textAlign: "center",
        maxWidth: maxWidthCaption || "",
        minHeight: captionContainerHeight || "",
        paddingTop: "small",
        margin: "0 auto",
      }}
    />
  );
};

Caption.propTypes = {
  maxWidthCaption: PropTypes.string,
  captionContainerHeight: PropTypes.string,
  caption: PropTypes.string,
};

export default Caption;
