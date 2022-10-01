import React from "react";
import PropTypes from "prop-types";
import { merge } from "lodash";
import { UX2 } from "@wsb/guac-widget-core";

const CloseIcon = ({ id, onClose, style }) => {
  const styles = {
    icon: {
      color: "highContrast",
      cursor: "pointer",
    },
    container: {
      display: "flex",
      justifyContent: "flex-end",
      paddingHorizontal: "small",
      paddingTop: "small",
      paddingBottom: "xsmall",
    },
  };

  const mergedStyles = merge(styles, style);

  return (
    <UX2.Element.Block style={mergedStyles.container}>
      <UX2.Element.Icon
        id={id && `${id}-close-icon`}
        icon="close"
        size="medium"
        style={mergedStyles.icon}
        onClick={onClose}
      />
    </UX2.Element.Block>
  );
};

CloseIcon.propTypes = {
  id: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  style: PropTypes.object,
};

const Content = ({ children, style }) => {
  const styles = {
    alignSelf: "center",
    maxWidth: "100%",
    height: "100%",
    paddingHorizontal: "small",
    overflowY: "auto",
  };

  return (
    <UX2.Element.Block children={children} style={{ ...styles, ...style }} />
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export function ModalBody({
  id,
  onClose,
  children,
  preventShrink,
  width,
  styles = {},
  ...props
}) {
  const handleClick = (e) => {
    e.stopPropagation(); // prevent click inside Body from closing Modal when closeOnClickOutside === true
  };

  const modalBaseStyles = {
    bodyWrapper: {
      "@sm": {
        position: "relative",
        width: "auto",
        transform: "translate(0,0)",
        maxWidth: width ? `${width}px` : "600px",
        marginVertical: "medium",
        marginHorizontal: "auto",
        display: "flex",
        alignItems: "center",
        pointerEvents: "none",
        ":before": {
          display: "block",
          height: "90vh",
          content: '""',
        },
      },
    },
    body: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "neutral",
      boxShadow: "0 4px 12px 0 rgba(117,117,117,0.4)",
      paddingBottom: "small",
      maxHeight: "90vh",
      "@sm": {
        width: "100%",
        pointerEvents: "auto",
        borderRadius: "large",
      },
      "@xs-only": {
        maxWidth: "90vw",
      },
    },
  };

  const mergedStyles = merge(
    {
      bodyWrapper: {
        ...modalBaseStyles.bodyWrapper,
        "@xs-only": preventShrink
          ? { ...modalBaseStyles.bodyWrapper }
          : {
              position: "fixed",
              left: "0",
              right: "0",
              top: "0",
              bottom: "0",
              marginVertical: "0",
              marginHorizontal: "0",
            },
      },
      body: {
        ...modalBaseStyles.body,
        "@xs-only": preventShrink
          ? { ...modalBaseStyles.body }
          : {
              position: "fixed",
              left: "0",
              right: "0",
              top: "0",
              bottom: "0",
              borderRadius: "0",
            },
      },
    },
    styles
  );

  const content = (
    <UX2.Element.Block style={mergedStyles.body} onClick={handleClick}>
      <CloseIcon id={id} onClose={onClose} style={styles.closeIcon} />
      <Content children={children} style={styles.content} />
    </UX2.Element.Block>
  );

  return this.merge(
    {
      tag: UX2.Element.Block,
      role: "dialog",
      children: content,
      style: mergedStyles.bodyWrapper,
    },
    props
  );
}
