import React from "react";
import PropTypes from "prop-types";
import { findIndex, isEmpty, omit } from "lodash";
import { UX2, Maniless } from "@wsb/guac-widget-core";
import Bowser from "bowser";

import Field from "./form-components/field";
import FormSuccessMessage from "./form-success-message";
import FieldWithValidation from "./form-components/field-with-validation";
import FieldAttachments from "./form-components/field-attachments";
import CancelBtn from "./form-components/cancel-btn";
import Honeypot from "./form-components/honeypot";
import {
  FORM_FIELD,
  FORM_PIVOT,
} from "../../common/constants/base/form/mutator/routes";
import DataAidContext, {
  DataAidProvider,
} from "../../common/utils/dataAidContext";
import recaptchaTypes from "../../common/constants/form/recaptchaTypes";
import getFormDataAid from "../../common/constants/form/dataAids";
import formIdentifiers from "../../common/constants/form/formIdentifiers";
import successStatusCodes from "../../common/constants/form/successStatusCodes";
import { getFieldsBalancingInfo } from "../../common/utils/form";
import { RecaptchaLoader as Recaptcha, RecaptchaTerms } from "../Recaptcha";
import Badge from "../Recaptcha/badge";

const {
  utils: { getRoute },
} = Maniless;

const { MESSAGING_CONVERSATIONS, CONTACT_US } = formIdentifiers;
const MIN_SUBMISSION_TIME = 3000; // detects spambots that fill out forms faster than this

class InnerForm extends React.Component {
  constructor(props) {
    super(props);

    // this._fields references all the field-with-validation component instances
    this._fields = {};
    this.responseStatus = 0;

    this.state = {
      formSubmitted: false,
      responseReceived: false,
      optedToSubscribe: false,
      honeypotValue: "",
      focusedFormInputIndex: -1,
      files: [],
      progressEvent: null,
    };
    this.resetFocus = this.resetFocus.bind(this);
  }

  componentDidMount() {
    this.timestamp = Date.now();
  }

  resetFocus() {
    this.setState({ focusedFormInputIndex: -1 });
  }

  onHoneypotChange = (event) => {
    this.setState({ honeypotValue: event.target.value });
  };

  validateForm() {
    const fields = this._fields;
    const firstInvalidInput = findIndex(
      Object.keys(fields),
      (key) => !fields[key].validate()
    );
    this.setState({ focusedFormInputIndex: firstInvalidInput });
    return Object.keys(fields)
      .map((key) => fields[key].validate())
      .every((v) => v);
  }

  buildMetadata() {
    const { formIdentifier } = this.props;
    const { parsedResult: { browser, os, platform } = {} } = Bowser.getParser(
      window.navigator.userAgent
    );
    const { pathname: pathName } = window.location;

    return {
      formIdentifier,
      pathName,
      ...(platform.type ? { deviceType: platform.type } : {}),
      ...(os.name ? { deviceOs: os.name } : {}),
      ...(browser.name ? { browserName: browser.name } : {}),
    };
  }

  buildRequestBody(recaptchaToken = null) {
    const {
      websiteId,
      widgetId,
      pageId,
      accountId,
      domainName,
      locale,
      isReseller,
    } = this.props;
    const { optedToSubscribe, honeypotValue } = this.state;
    const metadata = this.buildMetadata();
    const formData = [];

    Object.keys(this._fields).forEach((key) => {
      const field = this._fields[key];
      const fieldSubmissionData = field.getDataForSubmission();

      if (fieldSubmissionData) {
        formData.push(fieldSubmissionData);
      }
    });
    formData.push({ label: "_app_id", value: honeypotValue });

    return {
      websiteId,
      widgetId,
      pageId,
      accountId,
      domainName,
      optedToSubscribe,
      locale,
      metadata,
      formData,
      recaptchaToken,
      isReseller,
    };
  }

  createFilesRequest = (payload, files) => {
    const formData = new FormData();
    formData.append("payload", JSON.stringify(payload));
    files.forEach((file) => {
      if (!file.hasError) {
        formData.append("file", file.file);
      }
    });

    return formData;
  };

  updateUploadProgress = (event) => {
    this.setState({ progressEvent: event });
  };

  sendForm = (recaptchaToken = null) => {
    const { formSubmitHost, formSubmitEndpoint } = this.props;
    if (!formSubmitHost) {
      return;
    }

    const { files } = this.state;
    const requestBody = this.buildRequestBody(recaptchaToken);
    let requestData = JSON.stringify(requestBody);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${formSubmitHost}${formSubmitEndpoint}`);
    if (files && files.length) {
      xhr.upload.addEventListener("progress", this.updateUploadProgress, false);
      requestData = this.createFilesRequest(requestBody, files);
    } else {
      xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    }

    xhr.onreadystatechange = this.handleSubmitResponse(xhr);
    xhr.send(requestData);
  };

  onFilesSelected = (files) => {
    this.setState({ files });
  };

  handleSubmitResponse(xhr) {
    return () => {
      const { status, readyState } = xhr;
      if (readyState === 4) {
        this.responseStatus = status;
        this.setState({
          responseReceived: true,
          formSubmitted: successStatusCodes.includes(status),
        });
      }
    };
  }

  validateTimestamp() {
    return Date.now() - this.timestamp > MIN_SUBMISSION_TIME;
  }

  validateAndSend() {
    if (!this.validateTimestamp() || !this.validateForm()) {
      return;
    }

    if (this.props.recaptchaEnabled) {
      this.recaptcha.execute();
    } else {
      this.sendForm();
    }

    this.setState({
      formSubmitted: true,
      responseReceived: false,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.validateAndSend();
    this.props.onFormSubmit && this.props.onFormSubmit();
  };

  closeForm = (e) => {
    e.preventDefault();
    this.props.onFormClose && this.props.onFormClose();
  };

  renderResponseErrorMessage(hasButton) {
    const errorMessage =
      this.props.staticContent.contactFormResponseErrorMessage;
    return (
      <UX2.Element.Error
        data-aid={this.dataAids.FORM_RESPONSE_ERR_REND}
        style={{
          paddingBottom: hasButton ? "medium" : 0,
          textAlign: "left",
        }}
        children={errorMessage}
      />
    );
  }

  renderButtons(submitBtn, useCloseButton, formFieldVariationOptions = {}) {
    const { formSubmitted } = this.state;
    const submitVariationOptions = formFieldVariationOptions.SUBMIT || {};
    const styles = {
      wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        paddingTop: "medium",
      },
      cancel: {
        display: "inline",
        margin: 0,
        ["@xs-only"]: { marginTop: "medium" },
        ["@sm"]: { marginLeft: "small" },
      },
    };
    return (
      <UX2.Element.Block
        className="controls"
        style={styles.wrapper}
        data-aid={this.dataAids.FORM_CONTROLS}
      >
        <UX2.Element.Block
          data-field-id="formFields.label"
          data-field-route={getRoute(FORM_FIELD, [
            this.props.formFields.length - 1,
          ])}
        >
          <Field
            type="SUBMIT"
            label={submitBtn.label}
            inline={true}
            isSending={formSubmitted}
            {...omit(this.props, "style")}
            {...submitVariationOptions}
          />
        </UX2.Element.Block>
        {useCloseButton && (
          <CancelBtn
            onClick={this.closeForm}
            {...this.props}
            style={styles.cancel}
            tag="span"
          />
        )}
      </UX2.Element.Block>
    );
  }

  renderEmailOptIn() {
    const {
      emailOptInEnabled,
      emailOptInMessage,
      formFieldVariationOptions = {},
      category,
    } = this.props;

    const styleOverrides =
      (formFieldVariationOptions.EMAIL_OPT_IN &&
        formFieldVariationOptions.EMAIL_OPT_IN.styleOverrides) ||
      {};

    const styles = {
      marginBottom: "medium",
      display: "flex",
      justifyContent: "center",
      ...styleOverrides,
    };

    return (
      emailOptInEnabled && (
        <UX2.Element.Block style={styles}>
          <UX2.Element.Input.Checkbox
            data-aid={this.dataAids.FORM_EMAIL_OPT_IN}
            checked={this.state.optedToSubscribe}
            onChange={() => {
              this.setState({ optedToSubscribe: !this.state.optedToSubscribe });
            }}
            category={category}
            textProps={{
              children: emailOptInMessage,
              "data-field-route": FORM_PIVOT,
              "data-route": "emailOptInMessage",
            }}
          />
        </UX2.Element.Block>
      )
    );
  }

  renderSmartColumns(props) {
    const {
      formFields: fields,
      useCloseButton,
      formFieldVariationOptions,
    } = props;
    const emailOptIn = this.renderEmailOptIn();
    const buttons = this.renderButtons(
      fields[fields.length - 1],
      useCloseButton,
      formFieldVariationOptions
    );
    let groupWidth = 12;
    let group2 = null;
    const { useSecondColumn, numberOfFieldsOnLeftSide } =
      getFieldsBalancingInfo(fields);

    if (useSecondColumn) {
      groupWidth = 6;
      group2 = (
        <UX2.Component.Grid.Cell
          data-aid={this.dataAids.FORM_COL2}
          xs={12}
          md={6}
        >
          {this.renderFieldsBlock(
            fields.slice(numberOfFieldsOnLeftSide, fields.length - 1),
            numberOfFieldsOnLeftSide,
            true
          )}
        </UX2.Component.Grid.Cell>
      );
    }

    const group1 = (
      <UX2.Component.Grid.Cell
        data-aid={this.dataAids.FORM_COL1}
        xs={12}
        md={groupWidth}
      >
        {this.renderFieldsBlock(
          fields.slice(0, numberOfFieldsOnLeftSide),
          0,
          true
        )}
      </UX2.Component.Grid.Cell>
    );

    return (
      <UX2.Element.Block>
        <UX2.Component.Grid bottom={false}>
          {group1}
          {group2}
        </UX2.Component.Grid>

        <UX2.Element.Block>
          {emailOptIn}
          {this.renderRecaptcha()}
          {buttons}
        </UX2.Element.Block>
      </UX2.Element.Block>
    );
  }

  renderFieldsBlock(fields, indexOffset = 0, hideEmailOptIn = false) {
    const {
      formFieldVariationOptions,
      staticContent,
      renderMode,
      emailOptInEnabled,
      fullWidth,
      formIdentifier,
    } = this.props;
    const {
      formSubmitted,
      responseReceived,
      focusedFormInputIndex,
      optedToSubscribe,
    } = this.state;
    const shouldRenderEmailOptIn = emailOptInEnabled && !hideEmailOptIn;
    const isSMS = formIdentifier === MESSAGING_CONVERSATIONS;
    const doNotRequireEmail =
      isSMS && shouldRenderEmailOptIn && !optedToSubscribe;
    let hasButton = false;
    let emailOptInIndex = fields.length;
    let errorMessageIndex = shouldRenderEmailOptIn
      ? fields.length + 1
      : fields.length;

    const fieldsBlock = fields.map((field, i) => {
      const index = i + indexOffset;
      const isFocused = index === focusedFormInputIndex;
      const variationFieldOptions =
        (formFieldVariationOptions && formFieldVariationOptions[field.type]) ||
        {};
      const fieldProps = Object.assign(variationFieldOptions, field, {
        staticContent,
        renderMode,
        fullWidth,
        formIdentifier,
      });
      // add extra max count validation step to email validation
      let validation =
        field.validation === "email"
          ? ["email", "emailMaxCount"]
          : field.validation;

      // if isSending is true, submit btn would be disabled and text would change
      if (field.type === "SUBMIT") {
        Object.assign(fieldProps, { isSending: formSubmitted });
        hasButton = true;
      }

      if (field.type === "EMAIL" && doNotRequireEmail) {
        validation = ["emailAllowEmpty", "emailMaxCount"];
        Object.assign(fieldProps, { required: false });
      }

      if (
        field.type === "PHONE" ||
        (field.type === "SINGLE_LINE" && validation === "phone")
      ) {
        Object.assign(fieldProps, { keyName: "phone" });
        validation = isSMS ? ["required", "phone", "phoneUsOnly"] : "phone";
      }

      if (field.type === "ATTACHMENT") {
        if (!field.attachmentsEnabled) {
          return null;
        }
        const { files, progressEvent } = this.state;
        Object.assign(fieldProps, {
          currentFiles: files,
          onFilesSelected: this.onFilesSelected,
          progressEvent,
        });

        return <FieldAttachments key={index} index={index} {...fieldProps} />;
      }
      return (
        <FieldWithValidation
          ref={(el) => (this._fields[index] = el)}
          key={index}
          index={index}
          isFocused={isFocused}
          resetFocus={this.resetFocus}
          {...fieldProps}
          validation={validation}
        />
      );
    });

    if (shouldRenderEmailOptIn) {
      emailOptInIndex = hasButton ? emailOptInIndex - 1 : emailOptInIndex;
      fieldsBlock.splice(emailOptInIndex, 0, this.renderEmailOptIn());
    }

    // When receive status code other than 200 and current column is the only one or is the left one:
    // If useColumnLayout is true, add error message at the bottom of the block,
    // or, if there is a submit button at the bottom of the block, add error message above the button
    if (
      responseReceived &&
      !successStatusCodes.includes(this.responseStatus) &&
      indexOffset === 0
    ) {
      errorMessageIndex = hasButton ? errorMessageIndex - 1 : errorMessageIndex;
      fieldsBlock.splice(
        errorMessageIndex,
        0,
        this.renderResponseErrorMessage(hasButton)
      );
    }

    // insert the Recaptcha and legal blurb below the submit button
    if (hasButton) {
      fieldsBlock.splice(
        fieldsBlock.length,
        0,
        this.renderRecaptcha(),
        this.renderLegalDisclosure()
      );
    }

    return fieldsBlock;
  }

  renderLegalDisclosure() {
    const { staticContent, formIdentifier } = this.props;
    const { messagesRatesLegalDisclosure } = staticContent;
    return (
      formIdentifier === MESSAGING_CONVERSATIONS && (
        <UX2.Element.Block
          style={{ paddingBottom: "medium", textAlign: "center" }}
        >
          <UX2.Element.Details.Minor fontSize="xsmall">
            {messagesRatesLegalDisclosure}
          </UX2.Element.Details.Minor>
        </UX2.Element.Block>
      )
    );
  }

  renderRecaptcha() {
    const { recaptchaEnabled, recaptchaType, staticContent, formSubmitHost } =
      this.props;
    if (!recaptchaEnabled) return null;
    return (
      <UX2.Element.Block
        style={{
          paddingTop: "xsmall",
          paddingBottom: "small",
          textAlign: "center",
        }}
      >
        <Recaptcha
          ref={(e) => {
            this.recaptcha = e;
          }}
          type={recaptchaType}
          formSubmitHost={formSubmitHost}
          onComplete={this.sendForm}
        />
        <RecaptchaTerms staticContent={staticContent} />
        <Badge />
      </UX2.Element.Block>
    );
  }

  renderCloseIcon() {
    const {
      useCloseIcon,
      onFormClose,
      formFieldVariationOptions = {},
    } = this.props;
    if (!useCloseIcon || !onFormClose) {
      return null;
    }

    const iconVariationOptions = formFieldVariationOptions.CLOSE_ICON || {};
    const wrapperVariationOptions =
      formFieldVariationOptions.CLOSE_ICON_WRAPPER || {};

    const styles = {
      container: {
        position: "absolute",
        paddingTop: "small",
        paddingRight: "medium",
        right: 0,
        top: 0,
      },
      icon: {
        cursor: "pointer",
      },
    };

    return (
      <UX2.Element.Block style={styles.container} {...wrapperVariationOptions}>
        <UX2.Element.Icon
          icon={"close"}
          size={"medium"}
          style={styles.icon}
          onClick={onFormClose}
          {...iconVariationOptions}
        />
      </UX2.Element.Block>
    );
  }

  render() {
    const {
      category,
      formSuccessMessage,
      emailConfirmationMessage,
      useColumnLayout,
      style,
      formFields,
      onFormClose,
      dataAidPrefix,
      title,
      useCloseButton,
    } = this.props;
    const { formSubmitted, responseReceived, optedToSubscribe, honeypotValue } =
      this.state;
    const filteredFields = formFields.filter(Boolean);

    return (
      <DataAidContext.Consumer>
        {(dataAids) => {
          const shouldRenderProvider = Boolean(
            (!dataAids || isEmpty(dataAids)) && dataAidPrefix
          );
          if (shouldRenderProvider) {
            this.dataAids = getFormDataAid(dataAidPrefix);
          } else {
            this.dataAids = dataAids || {};
          }

          let successEl;
          if (
            formSubmitted &&
            responseReceived &&
            successStatusCodes.includes(this.responseStatus)
          ) {
            successEl = (
              <FormSuccessMessage
                formSuccessMessage={formSuccessMessage}
                emailConfirmationMessage={emailConfirmationMessage}
                category={category}
                optedToSubscribe={optedToSubscribe}
              />
            );
          }

          const formEl = (
            <UX2.Group.Form
              tag="form"
              onSubmit={this.onSubmit}
              style={style}
              aria-live="polite"
            >
              <Honeypot
                value={honeypotValue}
                onChange={this.onHoneypotChange}
              />
              {this.renderCloseIcon()}
              {title}
              {useColumnLayout
                ? this.renderSmartColumns(this.props)
                : this.renderFieldsBlock(filteredFields)}
              {onFormClose && !useColumnLayout && useCloseButton && (
                <UX2.Element.Block className="controls">
                  <CancelBtn onClick={this.closeForm} {...this.props} tag="p" />
                </UX2.Element.Block>
              )}
            </UX2.Group.Form>
          );

          const final = successEl || formEl;

          return shouldRenderProvider ? (
            <DataAidProvider dataAids={this.dataAids}>{final}</DataAidProvider>
          ) : (
            final
          );
        }}
      </DataAidContext.Consumer>
    );
  }
}

InnerForm.propTypes = {
  domainName: PropTypes.string,
  formSubmitHost: PropTypes.string,
  formSubmitEndpoint: PropTypes.string,
  category: PropTypes.string,
  formSuccessMessage: PropTypes.string,
  formFields: PropTypes.array,
  formFieldVariationOptions: PropTypes.object,
  accountId: PropTypes.string.isRequired,
  isReseller: PropTypes.bool,
  websiteId: PropTypes.string.isRequired,
  widgetId: PropTypes.string,
  pageId: PropTypes.string,
  staticContent: PropTypes.object.isRequired,
  onFormClose: PropTypes.func,
  onFormSubmit: PropTypes.func,
  onHoneypotChange: PropTypes.func,
  style: PropTypes.object,
  fullWidth: PropTypes.bool,
  useColumnLayout: PropTypes.bool,
  showMap: PropTypes.bool,
  renderMode: PropTypes.string,
  locale: PropTypes.string,
  emailConfirmationMessage: PropTypes.string,
  emailOptInEnabled: PropTypes.bool,
  emailOptInMessage: PropTypes.string,
  recaptchaEnabled: PropTypes.bool,
  recaptchaType: PropTypes.oneOf(Object.values(recaptchaTypes)).isRequired,
  dataAidPrefix: PropTypes.string,
  title: PropTypes.node,
  formIdentifier: PropTypes.oneOf(Object.values(formIdentifiers)),
  useCloseIcon: PropTypes.bool,
  useCloseButton: PropTypes.bool,
  optedToSubscribe: PropTypes.bool,
  ...Field.propTypes,
};

InnerForm.defaultProps = {
  formSubmitEndpoint: "/v3/messages",
  dataAidPrefix: "CONTACT",
  formIdentifier: CONTACT_US,
  useCloseIcon: false,
  useCloseButton: true,
};

export default InnerForm;
