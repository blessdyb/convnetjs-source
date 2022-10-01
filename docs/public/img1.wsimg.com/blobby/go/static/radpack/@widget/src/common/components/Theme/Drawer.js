import PropTypes from "prop-types";
import { UX2, constants } from "@wsb/guac-widget-core";

const {
  renderModes: { PUBLISH },
} = constants;

export class Drawer extends UX2.utils.createElement("Drawer") {
  static propTypes = {
    maxWidth: PropTypes.string,
    category: PropTypes.string,
    backgroundColor: PropTypes.string,
    children: PropTypes.any.isRequired,
    left: PropTypes.bool,
    isOpen: PropTypes.bool,
    showCloseIcon: PropTypes.bool,
    onCloseClick: PropTypes.bool,
    renderMode: PropTypes.string,
  };

  static defaultProps = {
    maxWidth: "100%",
    left: true,
    isOpen: false,
    showCloseIcon: true,
  };

  componentDidUpdate() {
    const { renderMode } = this.props;

    if (renderMode === PUBLISH) {
      this.handleBodyOverflow();
    }
  }

  handleBodyOverflow() {
    const { isOpen } = this.props;

    if (isOpen) {
      this._prevScrollTop = document.documentElement.scrollTop;
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
      document.documentElement.scrollTop = this._prevScrollTop;
    }
  }
}
