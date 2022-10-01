import PropTypes from "prop-types";
import { UX2 } from "@wsb/guac-widget-core";

const linkShape = PropTypes.shape({
  url: PropTypes.string,
  pageId: PropTypes.string,
  widgetId: PropTypes.string,
  linkId: PropTypes.string,
  target: PropTypes.string,
});

export class ContentBasic extends UX2.utils.createElement("ContentBasic") {
  static propTypes = {
    heading: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        children: PropTypes.any.isRequired,
        link: linkShape,
      }),
    ]),
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        children: PropTypes.any.isRequired,
        richtext: PropTypes.bool,
      }),
    ]),
    actionComponent: PropTypes.object,
    action: PropTypes.shape({
      children: PropTypes.any.isRequired,
      link: linkShape,
    }),
    alignment: PropTypes.oneOf(["left", "center", "right"]),
  };
}

export class ContentWrap extends UX2.utils.createElement("ContentWrap") {
  static propTypes = {
    data: PropTypes.array,
    render: PropTypes.func,
  };
}
