import React, { Component } from "react";
import PropTypes from "prop-types";
import { UX2 } from "@wsb/guac-widget-core";
import { flatten } from "lodash";

class Terms extends Component {
  render() {
    const { staticContent = {} } = this.props;

    const replacements = {
      "{privacyPolicy}": [
        staticContent.privacyPolicy,
        staticContent.privacyPolicyURL,
      ],
      "{termsOfSerivce}": [
        staticContent.termsOfSerivce,
        staticContent.termsOfSerivceURL,
      ],
    };

    const { recaptchaDisclosure = "" } = staticContent;
    const textSplitByReplacementWords = Object.keys(replacements).reduce(
      (array, replacement) => {
        const re = new RegExp(`(${replacement})`);
        return flatten(array.map((text) => text.split(re)));
      },
      [recaptchaDisclosure]
    );

    return (
      <UX2.Element.Details.Minor>
        {textSplitByReplacementWords.map((value) => {
          if (replacements[value]) {
            const [text, url] = replacements[value];
            return (
              <UX2.Element.Link key={url} href={url} target="_blank">
                {text}
              </UX2.Element.Link>
            );
          }

          return value;
        })}
      </UX2.Element.Details.Minor>
    );
  }
}

Terms.propTypes = {
  staticContent: PropTypes.object.isRequired,
};

export default Terms;
