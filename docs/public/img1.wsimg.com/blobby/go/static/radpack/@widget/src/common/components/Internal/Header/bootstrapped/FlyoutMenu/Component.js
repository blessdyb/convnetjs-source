import React, { Component } from "react";
import { omit, merge } from "lodash";
import { UX2 } from "@wsb/guac-widget-core";
import Toggle from "../common/Toggle";
import { getEditorPageScale } from "../../../../../utils";
import ComponentPropTypes from "./ComponentPropTypes";

class FlyoutMenu extends Component {
  constructor() {
    super(...arguments);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      open: false,
    };
  }

  handleChange() {
    this.setState({ open: !this.state.open });
  }

  componentDidUpdate(prevProps, { open }) {
    const { enableNoOverlapDropdown, customToggleStyles } = this.props;

    if (open !== this.state.open) {
      const { toggleId } = prevProps;
      const el = document.getElementById(toggleId);

      if (el) {
        if (enableNoOverlapDropdown) {
          el.style.top = `${this.handleDropdownOffsetChange()}px`;
        }
        if (customToggleStyles) {
          merge(
            el.style,
            customToggleStyles[this.state.open ? "open" : "close"]
          );
        } else {
          el.style.display = this.state.open ? "block" : "none";
        }
      }
    }
  }

  // Calculate the top offset of dropdown menu that makes it having no overlap with nav bar
  handleDropdownOffsetChange() {
    const { navBarId, parentId } = this.props;
    const navRect = document.getElementById(navBarId).getBoundingClientRect();
    const liRect = document
      .getElementById(parentId)
      .getElementsByTagName("li")[0]
      .getBoundingClientRect();
    const scale = getEditorPageScale();

    if (navRect && liRect) {
      return (navRect.height - (liRect.top - navRect.top)) / scale;
    }
    return 0;
  }

  render() {
    const {
      label,
      renderCustomIcon,
      id,
      isActive,
      overrideIconStyle,
      dataAid,
      hasHover,
      renderCustomContent,
    } = this.props;
    const { open } = this.state;
    const props = omit(
      this.props,
      Object.keys(FlyoutMenu.propTypes).concat(["Component", "renderMode"])
    );
    const rotateIcon = open ? "180" : "0";
    const iconStyle = {
      position: "relative",
      color: "inherit",
      ...overrideIconStyle,
    };

    const labelEl = label ? (
      <span style={{ marginRight: "4px" }}>{label}</span>
    ) : null;

    return (
      <Toggle
        data-aid={dataAid}
        onChange={this.handleChange}
        isActive={isActive}
        {...props}
        {...(open && this.props.activeProps)}
        data-edit-interactive
        aria-haspopup="menu"
      >
        {renderCustomContent || (
          <div
            style={{
              pointerEvents: hasHover ? "auto" : "none",
              display: "flex",
              alignItems: "center",
            }}
            data-aid={dataAid}
          >
            {labelEl}
            <UX2.Element.Icon
              id={id}
              icon={renderCustomIcon.name || "chevronDown"}
              size={renderCustomIcon.size || "small"}
              minTarget={renderCustomIcon.minTarget || false}
              rotate={renderCustomIcon.name ? "" : rotateIcon}
              style={iconStyle}
            />
          </div>
        )}
      </Toggle>
    );
  }
}

FlyoutMenu.propTypes = ComponentPropTypes;

FlyoutMenu.defaultProps = {
  activeProps: {},
  label: "",
  renderCustomIcon: {},
  renderCustomContent: false,
  hasHover: false,
  dataAid: "NAV_DROPDOWN",
};

export default FlyoutMenu;
