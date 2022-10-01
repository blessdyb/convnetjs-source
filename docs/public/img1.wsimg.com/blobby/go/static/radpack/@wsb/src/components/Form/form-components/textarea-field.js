import React from "react";
import PropTypes from "prop-types";
import { UX2 } from "@wsb/guac-widget-core";
import DataAidContext from "../../../common/utils/dataAidContext";

class TextareaField extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  componentDidUpdate() {
    this.props.isFocused && this.input.focus && this.input.focus();
  }

  render() {
    const { handleChange, handleBlur, name, placeholder, label, value } =
      this.props;
    return (
      <DataAidContext.Consumer>
        {(DataAid) => (
          <UX2.Element.Input.TextArea
            tag="textarea"
            onChange={handleChange}
            onBlur={handleBlur}
            name={name}
            placeholder={placeholder}
            data-aid={DataAid[`FORM_${label.toUpperCase()}`] || label}
            value={value}
            style={{ resize: "vertical" }}
            refCallback={(e) => (this.input = e)}
          />
        )}
      </DataAidContext.Consumer>
    );
  }
}

TextareaField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  isFocused: PropTypes.bool,
};

export default TextareaField;
