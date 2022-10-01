import React, { Component } from "react";
import PropTypes from "prop-types";
import { constants } from "@wsb/guac-widget-core";

const { PUBLISH } = constants.renderModes;

export default function withActiveLinkDetection(WrappedComponent) {
  return class WithActiveLinkDetection extends Component {
    static displayName = `WithActiveLinkDetection(${getDisplayName(
      WrappedComponent
    )})`;

    static propTypes = {
      renderMode: PropTypes.oneOf(Object.values(constants.renderModes)),
      toggleId: PropTypes.string,
    };

    constructor() {
      super(...arguments);
      this.checkActiveLink = this.checkActiveLink.bind(this);
      this.state = {
        isActive: false,
      };
    }

    componentDidMount() {
      const { toggleId } = this.props;
      this.moreDropdownElement = document.getElementById(toggleId);
      if (this.moreDropdownElement) {
        this.checkActiveLink();
        window.addEventListener("NavItemsResized", this.checkActiveLink, {
          passive: true,
        });
      }
    }

    componentWillUnmount() {
      this.moreDropdownElement &&
        window.removeEventListener("NavItemsResized", this.checkActiveLink, {
          passive: true,
        });
    }

    checkActiveLink() {
      const { renderMode } = this.props;

      window.requestAnimationFrame(() => {
        let isActive = false;
        const selectedLink =
          this.moreDropdownElement.querySelector('[data-ux="NavLinkActive"]') ||
          this.moreDropdownElement.querySelector(
            '[data-ux="NavMoreMenuLinkActive"]'
          ) ||
          this.moreDropdownElement.querySelector(
            '[data-ux="NavMoreMenuLinkNestedActive"]'
          );
        const menuItem = selectedLink && selectedLink.closest("li");
        if (selectedLink && menuItem?.style?.visibility === "visible") {
          isActive =
            renderMode === PUBLISH
              ? selectedLink.href.includes(window.location.pathname)
              : window.location.pathname.includes(selectedLink.dataset.page);
        }
        this.setState({ isActive });
      });
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
}

function getDisplayName(component) {
  return component.displayName || component.name || "Component";
}
