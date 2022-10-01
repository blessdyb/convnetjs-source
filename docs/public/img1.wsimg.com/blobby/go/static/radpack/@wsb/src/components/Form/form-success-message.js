import React from "react";
import PropTypes from "prop-types";
import DataAidContext from "../../common/utils/dataAidContext";
import { UX2 } from "@wsb/guac-widget-core";

class FormSuccessMessage extends React.Component {
  styles = {
    successBlock: {
      backgroundColor: "section",
      "@sm": {
        padding: "xlarge",
      },
    },
    messagesBlock: {
      textAlign: "center",
      "@md": {
        maxHeight: "400px",
        overflowY: "auto",
      },
    },
    messagesIcon: {
      fill: "highlight",
    },
    messagesText: {
      marginTop: "small",
      marginBottom: "large",
      color: "highlight",
    },
    subscribeBlock: {
      textAlign: "center",
      paddingVertical: "medium",
      paddingHorizontal: "large",
      marginTop: "xxlarge",
      backgroundColor: "section",
      "@md": {
        maxHeight: "400px",
        overflowY: "auto",
      },
    },
  };

  renderMessageSuccess() {
    return (
      <DataAidContext.Consumer>
        {(DataAid) => (
          <UX2.Element.Block style={this.styles.messagesBlock} group="Group">
            <UX2.Element.Block data-aid={DataAid.FORM_SUBMIT_SUCCESS}>
              <UX2.Element.Icon
                tag="svg"
                icon="ok"
                size="xxlarge"
                style={this.styles.messagesIcon}
              />
            </UX2.Element.Block>
            <UX2.Element.Text
              data-aid={DataAid.FORM_SUBMIT_SUCCESS_MESSAGE}
              style={this.styles.messagesText}
              richtext
            >
              {this.props.formSuccessMessage}
            </UX2.Element.Text>
          </UX2.Element.Block>
        )}
      </DataAidContext.Consumer>
    );
  }

  renderSubscribeSuccess() {
    return (
      <DataAidContext.Consumer>
        {(DataAid) => (
          <UX2.Element.Block
            category={this.props.category}
            section="alt"
            style={this.styles.subscribeBlock}
          >
            <UX2.Element.Text
              data-aid={DataAid.FORM_SUBSCRIBE_SUCCESS_MESSAGE}
              featured
              richtext
            >
              {this.props.emailConfirmationMessage}
            </UX2.Element.Text>
          </UX2.Element.Block>
        )}
      </DataAidContext.Consumer>
    );
  }

  render() {
    return (
      <UX2.Element.Block
        category={this.props.category}
        section="default"
        style={this.styles.successBlock}
      >
        {this.renderMessageSuccess()}
        {this.props.optedToSubscribe && this.renderSubscribeSuccess()}
      </UX2.Element.Block>
    );
  }
}

FormSuccessMessage.propTypes = {
  formSuccessMessage: PropTypes.string,
  emailConfirmationMessage: PropTypes.string,
  category: PropTypes.string,
  optedToSubscribe: PropTypes.bool,
};

export default FormSuccessMessage;
