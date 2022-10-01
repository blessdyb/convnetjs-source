import React from "react";
import PropTypes from "prop-types";
import { UX2, constants } from "@wsb/guac-widget-core";
import DataAidContext from "../../../common/utils/dataAidContext";
import trafficEvents from "../../../common/constants/traffic2";
import formIdentifiers from "../../../common/constants/form/formIdentifiers";

const { renderModes } = constants;
const { JOB_POSTING } = formIdentifiers;

class SubmitBtn extends React.Component {
  render() {
    const {
      renderMode,
      label,
      style,
      size,
      staticContent,
      isSending,
      fullWidth,
      formIdentifier,
    } = this.props;

    // If renderMode is not defined, we are in the editor preview
    const trafficId =
      renderMode !== renderModes.PUBLISH
        ? trafficEvents.editor_preview.submit_contact_form
        : null;

    const getTCCLString = UX2.utils.TCCLUtils.getTCCLString;
    const eid =
      formIdentifier === JOB_POSTING
        ? "ux2.job_posting.submit_form.click"
        : "ux2.contact.submit_form.click";
    const tcclString = getTCCLString({
      eid,
      type: "click",
    });

    const btnState = isSending ? "disabled" : "default";

    const { submitButtonLoadingLabel, defaultSubmitButtonLabel } =
      staticContent;
    const content = isSending
      ? submitButtonLoadingLabel
      : label || defaultSubmitButtonLabel;

    const btn = (
      <DataAidContext.Consumer>
        {(DataAid) => (
          <UX2.Element.Button.Primary
            tag="button"
            type="submit"
            style={style}
            size={size}
            data-aid={DataAid.SUBMIT_BUTTON_REND}
            data-traffic2={trafficId}
            data-tccl={tcclString}
            children={content}
            state={btnState}
            fullWidth={fullWidth}
          />
        )}
      </DataAidContext.Consumer>
    );

    if (this.props.inline) {
      return btn;
    }

    return (
      <UX2.Element.Block style={{ textAlign: "center" }}>
        {btn}
      </UX2.Element.Block>
    );
  }
}

SubmitBtn.propTypes = {
  label: PropTypes.string.isRequired,
  renderMode: PropTypes.string,
  width: PropTypes.string,
  display: PropTypes.string,
  paddingVertical: PropTypes.string,
  paddingHorizontal: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.string,
  staticContent: PropTypes.object.isRequired,
  inline: PropTypes.bool,
  isSending: PropTypes.bool,
  fullWidth: PropTypes.bool,
  formIdentifier: PropTypes.string,
};

export default SubmitBtn;
