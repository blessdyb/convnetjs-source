import React from "react";
import PropTypes from "prop-types";
import { Maniless, UX2 } from "@wsb/guac-widget-core";

import Field from "./field";
import { FORM_FIELD } from "../../../common/constants/base/form/mutator/routes";

const {
  utils: { getRoute },
} = Maniless;

class FieldAttachments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <UX2.Element.Block style={{ paddingBottom: "medium" }}>
        <UX2.Element.Block
          data-field-id="formFields.attachmentsEnabled"
          data-field-route={getRoute(FORM_FIELD, [this.props.index])}
        >
          <Field {...this.props} />
        </UX2.Element.Block>
      </UX2.Element.Block>
    );
  }
}

FieldAttachments.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  validation: PropTypes.string,
  replyTo: PropTypes.bool,
  type: PropTypes.string,
  staticContent: PropTypes.object.isRequired,
  attachmentsEnabled: PropTypes.bool,
  attachmentsLabel: PropTypes.string,
  renderMode: PropTypes.string,
  index: PropTypes.number,
  keyName: PropTypes.string,
  maxCount: PropTypes.number,
  section: PropTypes.string.isRequired,
};

export default FieldAttachments;
