import React from "react";
import PropTypes from "prop-types";
import { ContentState, convertToRaw, convertFromRaw } from "@wsb/draft-js";
import { stateToHTML } from "@wsb/draft-js-export-html";
import { utils, constants } from "@wsb/guac-widget-core";
import { pick, omit } from "lodash";

import getRichTextConfig from "../../common/utils/getRichTextConfig";
import { linkifyHTML } from "../../common/utils/links";

const { contextTypes } = constants;
const { getContextProps } = utils;
const RICH_TEXT_PROPS = ["imgParams", "imgOptions"];

class RichText extends React.PureComponent {
  getTags(tag) {
    const blockTag = "p";
    let containerTag = tag;
    if (tag === "p") {
      containerTag = "div";
    }
    return { blockTag, containerTag };
  }

  getRawData(children) {
    if (React.isValidElement(children)) {
      throw Error(
        "The `richtext` prop should get applied to the closest parent element to the rendered draft-js object.\n"
      );
    }

    try {
      return JSON.parse(children) || {};
    } catch (e) {
      const contentState = ContentState.createFromText(children);
      return convertToRaw(contentState) || {};
    }
  }

  getBlockArrays(raw) {
    let last;
    // we should not collapse 2 following blocks of the same type into one for these:
    const noncollapsibleBlockTypes = ["atomic", "unstyled"];
    const blockArrays = [];
    (raw.blocks || []).forEach((block) => {
      const isCollapsibleBlock = !noncollapsibleBlockTypes.includes(block.type);
      const sameBlockType = last && last.type === block.type;

      if (
        blockArrays.length &&
        (block.depth > 0 || (isCollapsibleBlock && sameBlockType))
      ) {
        blockArrays[blockArrays.length - 1].push(block);
      } else {
        blockArrays.push([block]);
      }
      last = block;
    });

    return blockArrays;
  }

  render() {
    const { tag, children, ...props } = this.props;
    const theme = this.context && this.context.v2 && this.context.v2.theme;
    const blockTagStyle = { margin: "0" };

    const raw = this.getRawData(children);
    const blockArrays = this.getBlockArrays(raw);

    const { blockTag, containerTag } = this.getTags(tag);
    const contextProps = {
      ...getContextProps(this.context, props),
      ...pick(props, RICH_TEXT_PROPS),
    };
    const {
      getLinkClassName,
      inlineStyles,
      blockStyleFn,
      blockRenderers,
      entityStyleFn,
    } = getRichTextConfig({
      ...contextProps,
      theme,
    });
    const containerProps = {
      ...omit(props, RICH_TEXT_PROPS),
      className: `${props.className} x-rt`,
    };

    return React.createElement(
      containerTag,
      containerProps,
      blockArrays.map((blocks) => {
        const { key, type } = blocks[0];
        let __html = stateToHTML(convertFromRaw({ ...raw, blocks }), {
          inlineStyles,
          blockStyleFn,
          blockRenderers,
          entityStyleFn,
        });
        // Remove parent P elements to remove unnecessary nesting
        __html = __html.replace(
          /^<\s*p(\s+[^>]*)?>([\s\S]*?)<\s*\/\s*p\s*>/gm,
          "<span$1>$2</span>"
        );

        if (type !== "atomic") {
          // Linkify content
          __html = linkifyHTML(__html, getLinkClassName);
        }

        const elementTag = type.startsWith("header") ? "div" : blockTag;
        return React.createElement(elementTag, {
          style: blockTagStyle,
          key,
          dangerouslySetInnerHTML: { __html },
        });
      })
    );
  }
}

RichText.propTypes = {
  tag: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

RichText.contextTypes = contextTypes;

RichText.defaultProps = {
  children: "",
};

export default RichText;
