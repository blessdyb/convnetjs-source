import React from "react";
import PropTypes from "prop-types";
import { UX2, Maniless } from "@wsb/guac-widget-core";
import DataAidContext from "../../../common/utils/dataAidContext";
import Validations from "../../../common/constants/form/validations";
import { FORM_FIELD } from "../../../common/constants/base/form/mutator/routes";
import Field from "./field";

const {
  utils: { getRoute },
} = Maniless;

class FieldWithValidation extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = "FieldWithValidation";

    const { validation, required } = this.props;
    this.state = {
      isValid: true,
      validation: validation || (required && "required"),
      firstError: "", // records first validation error when validation array is passed
    };
    this.validate = this.validate.bind(this);
    this.getDataForSubmission = this.getDataForSubmission.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { validation, required } = nextProps;
    this.setState({ validation: validation || (required && "required") });
  }

  validate() {
    const { maxCount } = this.props;
    const { validation } = this.state;
    let isValid, firstError;
    if (!validation || (!this.props.required && !this._field.state.value)) {
      isValid = true;
    } else if (Array.isArray(validation) && validation.length) {
      firstError = validation.find(
        (key) => !Validations[key].test(this._field.state.value, { maxCount })
      );
      isValid = !firstError;
    } else {
      isValid = Validations[validation].test(this._field.state.value, {
        maxCount,
      });
    }

    this.setState({ isValid, firstError });
    return isValid;
  }

  resetField = () => {
    this.setState({ isValid: true });
  };

  getDataForSubmission() {
    const { label, replyTo, type, keyName } = this.props;
    if (type === "SUBMIT") return null;

    let value = this._field.state.value;
    if (type === "EMAIL") {
      value = value.trim();
    } else if (type === "PHONE") {
      value = value.replace(/\+| |-|\(|\)/g, "");
    }

    const submissionData = { label, value };
    if (replyTo) {
      submissionData.replyTo = replyTo;
    }
    if (keyName) {
      submissionData.keyName = keyName;
    }

    return submissionData;
  }

  renderErrorMessage() {
    const { type, renderMode, staticContent } = this.props;
    if (this.state.isValid || renderMode === "EDIT") {
      return null;
    }
    const validation = this.state.firstError || this.state.validation;
    return (
      <DataAidContext.Consumer>
        {(DataAid) => (
          <UX2.Element.Error
            data-aid={
              type === "EMAIL" ? DataAid.EMAIL_ERR_REND : DataAid.ERR_REND
            }
            style={{ textAlign: "left" }}
            children={staticContent[`${validation}ValidationErrorMessage`]}
          />
        )}
      </DataAidContext.Consumer>
    );
  }

  render() {
    const { isValid } = this.state;
    /* placeholder is specified directly below because of an incongruity between the designs at different phases of development */
    return (
      <UX2.Element.Block style={{ paddingBottom: "medium" }}>
        <UX2.Element.Block
          data-field-id="formFields.label"
          data-field-route={getRoute(FORM_FIELD, [this.props.index])}
        >
          <Field
            validationInputFunc={this.props.validation && this.validate}
            reset={this.resetField}
            ref={(el) => (this._field = el)}
            {...this.props}
            placeholder={this.props.label + (this.props.required ? "*" : "")}
            aria-required={this.props.required}
            aria-invalid={isValid}
          />
          {this.renderErrorMessage()}
        </UX2.Element.Block>
      </UX2.Element.Block>
    );
  }
}

FieldWithValidation.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  validation: PropTypes.string,
  replyTo: PropTypes.bool,
  type: PropTypes.string,
  staticContent: PropTypes.object.isRequired,
  renderMode: PropTypes.string,
  index: PropTypes.number,
  keyName: PropTypes.string,
  maxCount: PropTypes.number,
};

FieldWithValidation.defaultProps = {
  label: "",
};

export default FieldWithValidation;
