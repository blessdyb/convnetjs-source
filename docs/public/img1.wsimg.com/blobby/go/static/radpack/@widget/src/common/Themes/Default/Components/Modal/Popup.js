import React from "react";
import { UX2, constants } from "@wsb/guac-widget-core";
import { merge } from "lodash";

const { NEUTRAL } = constants.categoryTypes;
const { EDIT } = constants.renderModes;
const { SIDELINE_SIDEBAR_ZINDEX } = constants.themeConstants;

export function ModalPopup({
  children,
  onClose,
  closeOnClickOutside,
  preventShrink,
  width,
  styles = {},
  ...props
}) {
  const { renderMode } = this.base;

  const defaultStyles = {
    modal: {
      position: renderMode === EDIT ? "absolute" : "fixed",
      display: "flex",
      justifyContent: "center",
      top: "0",
      left: "0",
      bottom: "0",
      right: "0",
      border: "0",
      zIndex: SIDELINE_SIDEBAR_ZINDEX + 1,
      overflowY: "auto",
      backgroundColor: "modalOverlay",
    },
    bodyWrapper: {
      "@sm": {
        position: "absolute",
        width: "100%",
        transform: "none",
        justifyContent: "center",
      },
    },
    body: {
      position: "fixed",
      padding: "xlarge",
      height: "max-content",
      ["@xs-only"]: {
        width: "auto",
        margin: "small",
        borderRadius: "large",
      },
      ["@sm"]: {
        maxWidth: "80%",
      },
      ["@md"]: {
        maxWidth: "50%",
      },
    },
    closeIcon: {
      position: "absolute",
      paddingRight: "medium",
      right: 0,
      top: "20px",
      paddingTop: 0,
      paddingBottom: 0,
      ["@sm"]: {
        paddingRight: "large",
      },
    },
    content: {
      alignSelf: "center",
      width: "100%",
      maxWidth: "100%",
      height: "auto",
      paddingHorizontal: "medium",
      ["> *:not(:last-child)"]: {
        marginBottom: "large",
      },
      ["@sm"]: {
        paddingHorizontal: "large",
      },
    },
  };

  const mergedStyles = merge(defaultStyles, styles);

  const content = (
    <UX2.Component.Modal.Body
      id={props.id}
      children={children}
      onClose={onClose}
      preventShrink={preventShrink}
      width={width}
      styles={mergedStyles}
    />
  );

  return this.merge(
    {
      tag: UX2.Element.Block,
      category: NEUTRAL,
      style: mergedStyles.modal,
      children: content,
      onClick: closeOnClickOutside ? onClose : null,
    },
    props
  );
}
