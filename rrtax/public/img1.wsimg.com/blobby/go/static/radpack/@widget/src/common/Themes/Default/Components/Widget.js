import React from "react";
import { pickBy } from "lodash";
import { UX, UX2, constants } from "@wsb/guac-widget-core";

const {
  renderModes,
  widgetTypes: { HEADER, FOOTER },
} = constants;
const PROP_WHITELIST = [
  "theme",
  "category",
  "section",
  "style",
  "className",
  "groupType",
  "id",
];

export function Widget({ children, ...props }) {
  const { widgetType } = this.base;

  let pageColorStyleTag;
  if (this.base.renderMode === renderModes.PUBLISH && widgetType === FOOTER) {
    const backgroundColor = this.base.theme.mapPropValue(
      "backgroundColor",
      "section"
    );
    pageColorStyleTag = (
      <UX.Style>{`.page-inner { background-color: ${backgroundColor}; min-height: 100vh; }`}</UX.Style>
    );
  }

  const style = {
    backgroundColor: "section",
  };

  const role =
    widgetType === HEADER
      ? "main"
      : widgetType === FOOTER
      ? "contentinfo"
      : "region";

  const sevElement =
    this.base.widgetType === "HEADER" && !props.tagline && props.isHomepage ? (
      <UX2.Element.Element style={{ display: "none" }} data-route="tagline" />
    ) : null;
  const widgetWrapperElement =
    this.base.renderMode === renderModes.EDIT ? (
      <UX2.Element.Element data-field-id="widgetSibling" />
    ) : null;

  return this.merge(
    {
      tag: UX2.Element.Widget,
      children: (
        <div>
          {widgetWrapperElement} {children} {sevElement} {pageColorStyleTag}
        </div>
      ),
      group: "Widget",
      role,
      style,
    },
    pickBy(props, (val, key) => {
      return PROP_WHITELIST.indexOf(key) !== -1 || key.indexOf("data-") === 0;
    })
  );
}

export function WidgetBanner(props) {
  return this.Widget(this.merge({ groupType: "Banner" }, props));
}

export function WidgetSplit(props) {
  return this.Widget(this.merge({ groupType: "Split" }, props));
}
