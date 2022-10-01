import React from "react";
import PropTypes from "prop-types";
import InnerForm from "@wsb/guac-widget-shared/lib/components/Form";
import DataAid from "../../common/constants/data-aids";
import { UX2 } from "@wsb/guac-widget-core";
import Field from "../../common/constants/editable-field-tags";
import { FORM_PIVOT } from "../../common/constants/routes";

class ContactForm extends React.Component {
  render() {
    const { formTitle, category, section } = this.props;
    const option = {
      EMAIL_OPT_IN: {
        styleOverrides: {
          justifyContent: "left",
        },
      },
    };

    const titleElement = (
      <UX2.Element.Heading.Minor
        style={{ marginBottom: "medium", "@xs-only": { textAlign: "center" } }}
        data-aid={DataAid.CONTACT_FORM_TITLE_REND}
        data-route={Field.FORM_TITLE}
        data-field-route={FORM_PIVOT}
        children={formTitle}
      />
    );

    return (
      <UX2.Element.Block category={category} section={section}>
        <InnerForm
          title={titleElement}
          formFieldVariationOptions={option}
          dataAidPrefix="CONTACT"
          fullWidth
          {...this.props}
        />
      </UX2.Element.Block>
    );
  }
}

ContactForm.propTypes = {
  blankInfo: PropTypes.bool,
  category: PropTypes.string,
  formTitle: PropTypes.string,
  section: PropTypes.string,
  ...InnerForm.propTypes,
};

export default ContactForm;
