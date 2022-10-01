import { UX2, constants } from "@wsb/guac-widget-core";

const { POPUP } = constants.widgetTypes;

export function ModalOverlay({ style = {}, ...props }) {
  const { widgetType } = this.base;

  const modalStyles = {
    ...(widgetType === POPUP && {
      position: "absolute",
    }),
    padding: "0",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    border: "0",
    borderRadius: "0",
    zIndex: "1002",
    width: "100%",
    height: "100%",
    opacity: "0.75",
    backgroundColor: "accentOverlay",
    ...style,
  };

  return this.merge(
    {
      tag: UX2.Element.Block,
      style: modalStyles,
    },
    props
  );
}
