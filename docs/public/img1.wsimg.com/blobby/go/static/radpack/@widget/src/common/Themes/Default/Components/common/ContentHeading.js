import React, { Component } from "react";
import PropTypes from "prop-types";
import { UX2, components } from "@wsb/guac-widget-core";
import { stringToChildren } from "../../../../utils";

const { Link } = components;

const linkShape = PropTypes.shape({
  url: PropTypes.string,
  pageId: PropTypes.string,
  widgetId: PropTypes.string,
  linkId: PropTypes.string,
  target: PropTypes.string,
});

export default class ContentHeading extends Component {
  static propTypes = {
    heading: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        children: PropTypes.any.isRequired,
        link: linkShape,
      }),
    ]),
    style: PropTypes.object,
  };

  render() {
    const { heading, style = {} } = this.props;
    const { link, ...headingProps } = heading && stringToChildren(heading);
    const headingComponent = (
      <UX2.Element.Heading style={style} {...headingProps} />
    );

    return headingProps.children ? (
      link ? (
        <Link linkData={link}> {headingComponent} </Link>
      ) : (
        headingComponent
      )
    ) : null;
  }
}
