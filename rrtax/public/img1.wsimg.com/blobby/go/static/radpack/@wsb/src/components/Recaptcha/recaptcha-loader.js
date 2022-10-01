import { Component } from "react";
import PropTypes from "prop-types";
import { loadScript, loadSiteKey } from "../../common/utils/recaptcha";

class RecaptchaLoader extends Component {
  componentDidMount() {
    this.execute = this.props.onComplete;
    loadSiteKey(this.siteKeyUrl, this.loadRecaptcha);
  }

  get siteKeyUrl() {
    return `${this.props.formSubmitHost}${this.props.formSubmitEndpoint}`;
  }

  hideRecaptchaBadge = () => {
    const recaptcha = document.querySelector(".grecaptcha-badge");
    if (!recaptcha) {
      return;
    }

    recaptcha.setAttribute("hidden", true);
  };

  loadRecaptcha = (siteKey) => {
    loadScript({ siteKey }, () => {
      this.execute = () => {
        window.grecaptcha
          .execute(siteKey, { action: "formSubmit" })
          .then(this.props.onComplete);
      };

      this.hideRecaptchaBadge();
    });
  };

  render() {
    return null;
  }
}

RecaptchaLoader.propTypes = {
  onComplete: PropTypes.func.isRequired,
  formSubmitHost: PropTypes.string.isRequired,
  formSubmitEndpoint: PropTypes.string,
};

RecaptchaLoader.defaultProps = {
  formSubmitEndpoint: "/v3/recaptcha",
};

export default RecaptchaLoader;
