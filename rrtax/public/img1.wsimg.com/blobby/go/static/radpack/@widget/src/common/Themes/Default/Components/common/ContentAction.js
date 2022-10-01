import React, { Component } from "react";
import PropTypes from "prop-types";
import { components, UX2 } from "@wsb/guac-widget-core";

const { CTAButton } = components;
const flexAlignMap = {
  left: "flex-start",
  right: "flex-end",
  center: "center",
};

export default class ContentAction extends Component {
  static propTypes = {
    action: PropTypes.shape({
      children: PropTypes.any,
      link: PropTypes.shape({
        url: PropTypes.string,
        pageId: PropTypes.string,
        widgetId: PropTypes.string,
        linkId: PropTypes.string,
        target: PropTypes.string,
      }),
      target: PropTypes.string,
    }),
    alignment: PropTypes.oneOf(["left", "center", "right"]),
  };

  render() {
    const { action, alignment } = this.props;
    const { children, link, ...props } = action;
    const parentStyles = alignment
      ? { alignSelf: flexAlignMap[alignment] }
      : {};
    const ctaProps = {
      element: UX2.Element.Button.Secondary,
      ctaButton: {
        label: children,
        enabled: true,
        ...link,
      },
      ...props,
    };
    return (
      <UX2.Element.Block
        style={parentStyles}
        children={<CTAButton {...ctaProps} />}
      />
    );
  }
}
