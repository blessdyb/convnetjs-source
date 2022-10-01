import React from "react";
import PropTypes from "prop-types";
import DataAidContext from "../../../common/utils/dataAidContext";
import { UX2 } from "@wsb/guac-widget-core";

class CancelBtn extends React.Component {
  render() {
    const { style, staticContent, onClick, tag } = this.props;
    return (
      <DataAidContext.Consumer>
        {(DataAid) => (
          <UX2.Element.Text
            data-aid={DataAid.CANCEL_BUTTON_REND}
            style={{
              width: "fit-content",
              margin: "0 auto",
              textDecoration: "underline",
              color: "highlight",
              textAlign: "center",
              ":hover": {
                cursor: "pointer",
              },
              ...style,
            }}
            tag={tag}
            onClick={onClick}
          >
            {staticContent.defaultCancelButtonLabel}
          </UX2.Element.Text>
        )}
      </DataAidContext.Consumer>
    );
  }
}

CancelBtn.defaultProps = {
  staticContent: {},
  tag: "p",
};

CancelBtn.propTypes = {
  renderMode: PropTypes.string,
  style: PropTypes.object,
  staticContent: PropTypes.object.isRequired,
  onClick: PropTypes.object.isRequired,
  tag: PropTypes.string,
};

export default CancelBtn;
