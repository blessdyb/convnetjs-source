import React from "react";
import { UX2 } from "@wsb/guac-widget-core";
import { constants } from "@wsb/guac-widget-core";

const { DEFAULT, ALT } = constants.sectionTypes;

export function Alert({ children, icon, onClose, section, ...props }) {
  const style = {
    container: {
      display: "flex",
      alignItems: "flex-start",
      padding: "small",
      backgroundColor: "section",
    },
    icon: {
      flexShrink: 0,
      marginRight: "xsmall",
      color: "section",
    },
    text: {
      alignSelf: "center",
    },
    closeContainer: {
      flexShrink: 0,
      paddingLeft: "small",
      marginLeft: "auto",
    },
    link: {
      color: "section",
    },
    ...props.style,
  };

  const content = (
    <React.Fragment>
      {Boolean(icon) && <UX2.Element.Icon icon={icon} style={style.icon} />}
      <UX2.Element.Text children={children} style={style.text} />
      {Boolean(onClose) && (
        <UX2.Element.Block style={style.closeContainer}>
          <UX2.Element.Link onClick={onClose} style={style.link}>
            <UX2.Element.Icon icon="close" />
          </UX2.Element.Link>
        </UX2.Element.Block>
      )}
    </React.Fragment>
  );

  return this.merge(
    {
      tag: UX2.Element.Block,
      style: style.container,
      children: content,
      section: section === DEFAULT ? ALT : DEFAULT,
    },
    props
  );
}
