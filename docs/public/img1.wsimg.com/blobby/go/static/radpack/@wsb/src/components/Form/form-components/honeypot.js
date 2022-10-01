import React, { Component } from "react";
import PropTypes from "prop-types";

class Honeypot extends Component {
  render() {
    const { onChange, value } = this.props;
    const styles = { display: "none" };

    return (
      <input
        type="text"
        name="_app_id"
        autoComplete="off"
        tabIndex="-1"
        style={styles}
        onChange={onChange}
        value={value}
      />
    );
  }
}

Honeypot.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Honeypot;
