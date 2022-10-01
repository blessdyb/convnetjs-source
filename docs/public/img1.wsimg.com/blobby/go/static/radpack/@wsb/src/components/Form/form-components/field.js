import React from "react";
import PropTypes from "prop-types";
import ComponentMapping from "./field-type-to-component-mapping";

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value }, this.props.reset);
  };

  handleBlur = () => {
    this.props.resetFocus();
    this.props.validationInputFunc();
  };

  render() {
    const { value } = this.state;
    const ComponentClass = ComponentMapping[this.props.type];
    return (
      <ComponentClass
        handleChange={this.handleChange}
        handleBlur={this.handleBlur}
        value={value}
        {...this.props}
      />
    );
  }
}

Field.propTypes = {
  type: PropTypes.string.isRequired,
  validationInputFunc: PropTypes.func,
  reset: PropTypes.func.isRequired,
  resetFocus: PropTypes.func,
  ...ComponentMapping.propTypes,
};

Field.defaultProps = {
  validationInputFunc: () => {},
  resetFocus: () => {},
};

export default Field;
