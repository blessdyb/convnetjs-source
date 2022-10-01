/* eslint-disable no-empty */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { uniqueId, omit } from "lodash";
import { UX2, constants } from "@wsb/guac-widget-core";
import { stringToChildren } from "../../../../utils";

const {
  renderModes: { EDIT },
} = constants;
const DEFAULT_COLLAPSE_THRESHOLD = 340;
// minimal length of characters needed past the DEFAULT_COLLAPSE_THRESHOLD to trigger collapsible text
// this is to avoid edge cases of only a few characters being collapsed
const DEFAULT_COLLAPSE_MIN_OVERFLOW = 60;

export default class ContentText extends Component {
  static propTypes = {
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        children: PropTypes.any.isRequired,
        richtext: PropTypes.bool,
        textCollapseProps: PropTypes.shape({
          enabled: PropTypes.bool,
          renderMode: PropTypes.string.isRequired,
          collapseThreshold: PropTypes.number,
          expandIconProps: PropTypes.shape({
            children: PropTypes.any,
            ["data-aid"]: PropTypes.string,
          }),
          collapseIconProps: PropTypes.shape({
            children: PropTypes.any,
            ["data-aid"]: PropTypes.string,
          }),
        }),
      }),
    ]),
    alignment: PropTypes.string,
  };

  getPlainCaption(caption) {
    let captionText;
    const textBlocks = caption.blocks;
    if (textBlocks.length > 1) {
      const captionTextArray = [];
      textBlocks.forEach((item) =>
        item.text === ""
          ? captionTextArray.push("\n\n")
          : captionTextArray.push(item.text)
      );
      captionText = captionTextArray.join("");
    } else {
      captionText = textBlocks[0].text;
    }
    return captionText;
  }

  getShortenedCaption(parsedCaption, caption, collapseThreshold) {
    if (!parsedCaption) return caption.slice(0, collapseThreshold);
    let charCount = 0,
      blockAnchor;
    parsedCaption.blocks.some((block, index) => {
      charCount += block.text.length;
      blockAnchor = index;
      return charCount >= collapseThreshold;
    });
    const modifiedBlocksArray = parsedCaption.blocks
      .map((block, index) => {
        if (index === blockAnchor) {
          const shortenedCaptionText = block.text.slice(
            0,
            -(charCount - collapseThreshold)
          );
          return { ...block, text: shortenedCaptionText };
        } else if (index > blockAnchor) {
          return null;
        }
        return block;
      })
      .filter(Boolean);

    const shortenedCaptionObj = {
      ...parsedCaption,
      blocks: modifiedBlocksArray,
    };

    return JSON.stringify(shortenedCaptionObj);
  }

  renderCollapsedText(textProps) {
    const { alignment } = this.props;
    const { children, textCollapseProps = {} } = textProps;
    const {
      collapseThreshold = DEFAULT_COLLAPSE_THRESHOLD,
      collapseMinOverflow = DEFAULT_COLLAPSE_MIN_OVERFLOW,
      expandIconProps = {},
      collapseIconProps = {},
      renderMode,
    } = textCollapseProps;

    let parsedCaption;
    try {
      parsedCaption = JSON.parse(children);
    } catch (e) {
      // Ignore error
    }

    const shouldCollapseCaption =
      (parsedCaption
        ? this.getPlainCaption(parsedCaption).length
        : children.length) >
      collapseThreshold + collapseMinOverflow;
    const renderExpanded = shouldCollapseCaption && renderMode === EDIT;
    const uniqueCollapsedBlock = uniqueId("collapsedTextBlock");
    const uniqueExpandBlock = uniqueId("expandedTextBlock");
    const textToggle = uniqueId("expandTextToggle");
    const inputToggleProps = {
      id: textToggle,
      type: "checkbox",
      role: "button",
      style: {
        display: "none",
        [`:checked ~ #${uniqueExpandBlock}`]: {
          display: "block",
        },
        [`:checked ~ #${uniqueCollapsedBlock}`]: {
          display: "none",
        },
        [`:not(:checked) ~ #${uniqueExpandBlock}`]: {
          display: "none",
        },
        [`:not(:checked) ~ #${uniqueCollapsedBlock}`]: {
          display: "block",
        },
      },
    };

    const collapsedBlock = (
      <UX2.Element.Block
        id={uniqueCollapsedBlock}
        style={{ display: renderExpanded ? "none" : "block" }}
      >
        <UX2.Element.Text
          alignment={alignment}
          {...omit(textProps, "textCollapseProps")}
          children={this.getShortenedCaption(
            parsedCaption,
            children,
            collapseThreshold
          )}
        />
        <UX2.Element.Label for={textToggle}>
          <UX2.Element.MoreLink.Expand
            style={{ marginVertical: "xsmall" }}
            {...expandIconProps}
          />
        </UX2.Element.Label>
      </UX2.Element.Block>
    );

    const expandedBlock = (
      <UX2.Element.Block
        id={uniqueExpandBlock}
        style={{ display: renderExpanded ? "block" : "none" }}
      >
        <UX2.Element.Text
          alignment={alignment}
          {...omit(textProps, "textCollapseProps")}
        />
        <UX2.Element.Label for={textToggle}>
          <UX2.Element.MoreLink.Expand
            style={{ marginVertical: "xsmall" }}
            expanded
            {...collapseIconProps}
          />
        </UX2.Element.Label>
      </UX2.Element.Block>
    );

    return shouldCollapseCaption ? (
      <React.Fragment>
        {!renderExpanded && <UX2.Element.Input {...inputToggleProps} />}
        {collapsedBlock}
        {expandedBlock}
      </React.Fragment>
    ) : (
      <UX2.Element.Text
        alignment={alignment}
        {...omit(textProps, "textCollapseProps")}
      />
    );
  }

  render() {
    const { text, alignment } = this.props;
    const textProps =
      text && stringToChildren({ style: { flexGrow: 1 }, ...text });
    const { children, textCollapseProps = {} } = textProps;

    return children ? (
      textCollapseProps.enabled ? (
        this.renderCollapsedText(textProps)
      ) : (
        <UX2.Element.Text
          alignment={alignment}
          {...omit(textProps, "textCollapseProps")}
        />
      )
    ) : null;
  }
}
