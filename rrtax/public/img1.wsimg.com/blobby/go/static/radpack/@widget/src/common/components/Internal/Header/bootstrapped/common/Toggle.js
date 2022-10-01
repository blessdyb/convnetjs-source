import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { omit, uniqueId } from "lodash";
import { UX2 } from "@wsb/guac-widget-core";
import {
  selfOrParentHasAttribute,
  selfOrParentHasId,
} from "../common/domUtils";

class Toggle extends Component {
  constructor() {
    super(...arguments);
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this._id = uniqueId();
    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-find-dom-node
    this._link = ReactDOM.findDOMNode(this);
    document.addEventListener("click", this.handleClick, { capture: true });
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick, { capture: true });
  }

  shouldClose(e) {
    const { closeAttr, ignoreCloseAttr, closeOnOutsideClick, toggleId } =
      this.props;

    let shouldClose = true;

    /* If `closeAttr` is defined, we only want to close the toggle
     * when clicking in an element that has the corresponding attribute.
     *
     * If `ignoreCloseAttr` is defined, we only want to close the toggle
     * when clicking in an element that does not have the corresponding attribute
     *
     * If we are clicking the toggle, we don't do anything since it's handled
     * by `handleClick`
     */
    if (closeAttr) {
      shouldClose = selfOrParentHasAttribute(e.target, closeAttr);
    } else if (ignoreCloseAttr) {
      shouldClose = !selfOrParentHasAttribute(e.target, ignoreCloseAttr);
    }

    if (!shouldClose && toggleId && closeOnOutsideClick) {
      shouldClose = !selfOrParentHasId(e.target, toggleId);
    }

    return shouldClose && !selfOrParentHasId(e.target, this._id);
  }

  handleClick(e) {
    const { open } = this.state;

    if (!open) {
      return;
    }

    if (this.shouldClose(e)) {
      this.setState({
        open: false,
      });
    }
  }

  handleToggle(e) {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      open: !this.state.open,
    });
  }

  componentDidUpdate(prevProps, { open }) {
    const { onChange } = this.props;
    if (open !== this.state.open) {
      onChange(this.state.open);
    }
  }

  render() {
    const props = omit(this.props, [
      "onChange",
      "style",
      "closeOnOutsideClick",
      "closeAttr",
      "openIcon",
      "uniqueId",
    ]);
    const { open } = this.state;
    const { style, activeStyle, isActive } = this.props;
    const toggleStyles = {
      ...(isActive
        ? {
            ...activeStyle,
          }
        : {
            ...style,
          }),
    };

    const LinkComponent = isActive
      ? UX2.Element.Link.DropdownActive
      : UX2.Element.Link.Dropdown;

    return (
      <LinkComponent
        tag="a"
        style={toggleStyles}
        href="#"
        onClick={this.handleToggle}
        data-toggle-ignore
        id={this._id}
        role="button"
        aria-expanded={open}
        {...props}
      />
    );
  }
}

Toggle.propTypes = {
  onChange: PropTypes.func.isRequired,
  closeAttr: PropTypes.string,
  ignoreCloseAttr: PropTypes.string,
  activeStyle: PropTypes.object,
  style: PropTypes.object,
  closeOnOutsideClick: PropTypes.bool,
  toggleId: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Toggle;
