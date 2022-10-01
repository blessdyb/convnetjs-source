import React from "react";
import { UX2 } from "@wsb/guac-widget-core";
import { clone, omit, uniqueId } from "lodash";
import { SEARCH_INPUT_LEFT_PADDING } from "../../../../constants";
import { DESKTOP_NAV_COVER } from "../../../../Components/Internal/Header/constants/searchFormLocations";
import Button from "./Button";

const isLink = (url) => {
  if (!url) return false;
  const regex = new RegExp(
    /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
  );
  return regex.test(url);
};

const inputFocus = {
  outline: "none",
  boxShadow: "inset 0 0 0 1px currentColor",
};

export { Button };

export function Link({
  convertToAbsolute,
  href,
  mobileIconSize = "large",
  domainName = "",
  ...props
}) {
  const children = clone(props.children);
  if (convertToAbsolute && href && href.indexOf("http") !== 0) {
    href = `https://${domainName}${href}`;
  }

  // increase size of tappable Links that render an Icon on mobile
  if (
    this.base.widgetType !== "HEADER" &&
    href &&
    isLink(href) &&
    children &&
    typeof children !== "string" &&
    !Array.isArray(children) &&
    children.props &&
    children.props.icon
  ) {
    const { props: childrenProps } = children;
    const sharedDimensions = {
      width: this.mapPropValue("iconSize", mobileIconSize),
      height: this.mapPropValue("iconSize", mobileIconSize),
    };
    children.props = {
      ...childrenProps,
      style: {
        ["@sm-only"]: sharedDimensions,
        ["@xs-only"]: sharedDimensions,
        ...(childrenProps.style || {}),
      },
    };
  }

  const role = !href || href === "#" || href === "/" ? "button" : "link";
  const accessibilityProps = {
    role,
    ["aria-haspopup"]: role === "button" ? "menu" : props.target === "_blank",
  };

  const omittedProps = [
    "renderMode",
    "domainName",
    "pageRoute",
    "isAnchor",
    "convertToAbsolute",
    "activeStyle",
    "item",
  ];

  return this.merge(
    {
      tag: "a",
      rel: props.target === "_blank" ? "noopener" : "",
      tcclTracking: "click",
      typography: "LinkAlpha",
      style: {
        textDecoration: "none",
        wordWrap: "break-word",
        overflowWrap: "break-word",
        display: "inline",
        cursor: !props.disabled ? "pointer" : "not-allowed",
      },
      ...accessibilityProps,
    },
    { ...omit(props, omittedProps), href, children }
  );
}

export function SocialLinksLink(props) {
  return this.Link(
    this.merge(
      {
        style: {
          display: "flex",
          alignItems: "center",
          "> svg": {
            margin: 0,
            color: "highContrast",
            [":hover"]: { color: "highlight" },
          },
        },
      },
      props
    )
  );
}

export function LinkArrow({ left = true, ...props }) {
  // eslint-disable-next-line
  console.warn(
    `LinkArrow is deprecated. Use MoreLinkBackward or MoreLinkBackward. The issue is probably in ${this.base.widgetPreset}`
  );
  if (left === true) {
    return this.MoreLinkBackward(props);
  }
  return this.MoreLinkForward(props);
}

export function LinkContent(props) {
  return this.Link(
    this.merge(
      {
        style: {
          textDecoration: "underline",
        },
      },
      props
    )
  );
}

export function Input({ refCallback, ...props }) {
  return this.merge(
    {
      tag: "input",
      typography: "InputAlpha",
      style: {
        backgroundColor: "input",
        borderColor: "input",
        borderWidth: 0,
        width: "100%",
        ["::placeholder"]: {
          color: "inherit",
        },
        [":focus"]: {
          ...inputFocus,
        },
      },
      ref: refCallback && ((e) => refCallback(e)),
      role: "textbox",
      ["aria-multiline"]: false,
    },
    props
  );
}

export function InputSearch({ searchFormLocation, ...props }) {
  return this.Input(
    this.merge(
      {
        style: {
          width: "100%",
          paddingLeft: SEARCH_INPUT_LEFT_PADDING,
          paddingRight: "xsmall",
          paddingVertical: "xsmall",
          cursor: "auto",
          ...(searchFormLocation === DESKTOP_NAV_COVER
            ? {
                paddingLeft: "40px",
                backgroundColor: "transparent",
                borderStyle: "none",
                height: "40px",
              }
            : {
                backgroundColor: "section",
                borderRadius: "medium",
                borderStyle: "solid",
                borderWidth: "xsmall",
              }),
        },
        role: "searchbox",
      },
      props
    )
  );
}

export function InputFloatLabel({
  placeholder,
  value,
  name,
  handleChange,
  labelFocusStyleOverrides = {},
  ...props
}) {
  /* eslint-disable-next-line no-shadow */
  const { Label, Input } = UX2.Element;
  const labelFocusStyles = {
    fontSize: "12px", // Typography exception
    top: "8px",
    color: "inputHighlight",
    ...labelFocusStyleOverrides,
  };
  const inputId = uniqueId("input");

  return this.merge(
    {
      tag: "div",
      children: [
        <Input
          id={inputId}
          key="input"
          group="InputFloatLabel"
          type="text"
          onChange={handleChange}
          name={name}
          value={value}
          labelFocusStyles={labelFocusStyles}
          {...props}
        />,
        <Label
          key="label"
          group="InputFloatLabel"
          for={inputId}
          children={placeholder}
        />,
      ],
      style: {
        position: "relative",
      },
    },
    props
  );
}

export function InputFloatLabelInput({ labelFocusStyles, ...props }) {
  return this.Input(
    this.merge(
      {
        tag: "input",
        type: "text",
        style: {
          paddingTop: "23px",
          paddingBottom: "7px",
          ":focus + label": {
            ...labelFocusStyles,
          },
          ':not([value=""]) + label': {
            ...labelFocusStyles,
          },
        },
      },
      props
    )
  );
}

export function InputFloatLabelLabel(props) {
  return this.Label(
    this.merge(
      {
        tag: "label",
        typography: "InputAlpha",
        featured: false,
        style: {
          position: "absolute",
          top: "30%",
          left: "15px",
          transition: "all .15s ease",
          pointerEvents: "none",
        },
      },
      props
    )
  );
}

export function InputTextArea(props) {
  return this.Input(
    this.merge(
      {
        tag: "textarea",
        rows: 4,
        "aria-label": props.placeholder,
        style: {
          resize: "vertical",
        },
        role: "textbox",
        "aria-multiline": true,
      },
      props
    )
  );
}

export function ButtonPrevious(props) {
  return this.merge(
    {
      tag: "button",
      children: (
        <UX2.Element.Icon icon="chevronLeft" data-edit-interactive={true} />
      ),
    },
    props
  );
}

export function ButtonNext(props) {
  return this.merge(
    {
      tag: "button",
      children: (
        <UX2.Element.Icon icon="chevronRight" data-edit-interactive={true} />
      ),
    },
    props
  );
}

export function ButtonFullWidth(props) {
  return this.Button(
    this.merge(
      {
        fullWidth: true,
      },
      props
    )
  );
}

export function ButtonExternal({ skin, ...props }) {
  const skins = {
    whatsapp: {
      style: {
        color: "brandLividContrast",
        fontSize: "medium",
        fontWeight: "700",
        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        backgroundColor: "brandLivid",
        [":hover"]: {
          backgroundColor: "brandLividHover",
        },
      },
      icon: "whatsApp",
      typography: false,
    },
  };
  return this.Button(
    this.merge(
      {
        ...skins[skin],
      },
      props
    )
  );
}

const commonArrowProps = {
  section: "overlay",
  category: "accent",
  style: {
    border: "none",
    paddingVertical: "xsmall",
    paddingHorizontal: 0,
    outline: "none",
    borderRadius: 0,
    color: "highContrast",
    fontSize: "small",
    "@md": {
      paddingVertical: "xsmall",
      paddingHorizontal: "xxsmall",
    },
  },
};

const carouselButtonProps = {
  style: {
    top: "50%",
    transform: "translateY(-50%)",
    position: "absolute",
    zIndex: 1,
    backgroundColor: "section",
    [":hover"]: {
      backgroundColor: "section",
    },
    [":active"]: {
      backgroundColor: "section",
    },
  },
};

export function CarouselButtonPrevious(props) {
  return this.ButtonPrevious(
    this.merge(
      {
        style: {
          left: 0,
        },
      },
      commonArrowProps,
      carouselButtonProps,
      props
    )
  );
}

export function CarouselButtonNext(props) {
  return this.ButtonNext(
    this.merge(
      {
        style: {
          right: 0,
        },
      },
      commonArrowProps,
      carouselButtonProps,
      props
    )
  );
}

const slideshowButtonProps = {
  style: {
    backgroundColor: "transparent",
    zIndex: 2,
    ":active": {
      backgroundColor: "transparent",
    },
    ":hover": {
      backgroundColor: "transparent",
    },
    "@sm": {
      backgroundColor: "sectionOverlaySoft",
      ":hover": {
        backgroundColor: "sectionOverlaySoft",
      },
      ":active": {
        backgroundColor: "sectionOverlaySoft",
      },
    },
    "@md": {
      ":hover": {
        backgroundColor: "section",
      },
    },
  },
};

export function SlideshowArrowsButtonPrevious(props) {
  return this.ButtonPrevious(
    this.merge(commonArrowProps, slideshowButtonProps, props)
  );
}

export function SlideshowArrowsButtonNext(props) {
  return this.ButtonNext(
    this.merge(commonArrowProps, slideshowButtonProps, props)
  );
}

export function InputCheckbox({ label, style, textProps = {}, ...props }) {
  if (!label && !textProps.children) {
    return this.merge(
      {
        tag: "input",
        type: "checkbox",
      },
      { style, ...props }
    );
  }

  /* eslint-disable-next-line no-shadow */
  const { Input, Text, Element } = UX2.Element;
  const { category } = props;

  const styles = {
    label: {
      display: "flex",
      justifyContent: "center",
      position: "relative",
      ":hover > div": {
        borderColor: category === "primary" ? "neutral" : "primary",
      },
    },
    input: {
      position: "absolute",
      zIndex: "-1",
      opacity: "0",
      ":disabled ~ div": {
        pointerEvents: "none",
        backgroundColor: "inputDisabled",
        borderColor: "inputDisabled",
      },
      ":disabled ~ *": {
        cursor: "default",
      },
      ":checked ~ div": {
        borderColor: category === "primary" ? "neutral" : "primary",
      },
      ":checked ~ div:after": {
        // checkmark styles
        content: "''",
        display: "block",
        top: "3px",
        left: "7px",
        width: "4px",
        height: "8px",
        transform: "rotate(45deg)",
        borderColor: category === "primary" ? "neutral" : "primary",
        borderStyle: "solid",
        borderWidth: "0 2px 2px 0",
        position: "absolute",
      },
      ":focus ~ div": {
        ...inputFocus,
      },
    },
    customCheckbox: {
      marginTop: "2px",
      display: "inline-block",
      left: "0",
      minWidth: "19px",
      height: "19px",
      borderColor: "lowContrastOverlay",
      borderWidth: "xsmall",
      borderRadius: "2px",
      borderStyle: "solid",
      boxShadow: "0px 1px 3px",
      color: "lowContrast",
      cursor: "pointer",
      position: "relative",
    },
    text: {
      display: "inline-block",
      position: "static",
      lineHeight: "inherit",
      cursor: "pointer",
      marginLeft: "xsmall",
      verticalAlign: "top",
      textAlign: "left",
      overflowWrap: "anywhere",
    },
  };

  return this.merge(
    {
      tag: "label",
      children: [
        <Input
          key="checkbox"
          tag="input"
          type="checkbox"
          group="InputCheckbox"
          style={styles.input}
          tabIndex={0}
          {...props}
        />,
        <Element
          key="custom-checkbox"
          tag="div"
          group="InputCheckbox"
          style={styles.customCheckbox}
        />,
        <Text
          key="text"
          group="InputCheckbox"
          style={styles.text}
          children={label}
          {...textProps}
        />,
      ],
      style: { ...styles.label, ...style },
    },
    props
  );
}

export function InputRadio(props) {
  return this.merge(
    {
      tag: "input",
      type: "radio",
    },
    props
  );
}

export function InputSelect({
  children,
  defaultValue,
  id,
  value,
  disabled = false,
  state = "default",
  ...props
}) {
  const { Icon, Element } = UX2.Element;

  const states = {
    default: {
      borderColor: "input",
    },
    error: {
      borderColor: "inputError",
    },
    disabled: {
      opacity: ".2",
    },
  };

  return this.merge(
    {
      tag: "div",
      children: [
        <Icon key="icon" group="InputSelect" />,
        <Element
          id={id}
          key="select"
          group="InputSelect"
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          children={children}
        />,
      ],
      typography: "InputAlpha",
      style: {
        borderWidth: "none",
        backgroundColor: "input",
        position: "relative",
        ...states[disabled ? "disabled" : state],
      },
    },
    omit(props, "id")
  );
}

export function InputSelectElement(props) {
  return this.merge(
    {
      tag: "select",
      style: {
        // Static
        backgroundColor: "transparent",
        borderStyle: "none",
        borderRadius: "0",
        color: "inherit",
        cursor: "pointer",
        display: "block",
        position: "relative",
        width: "100%",
        "-webkit-appearance": "none",
        "-moz-appearance": "none",
        "::-ms-expand": {
          display: "none",
        },
        [":focus"]: {
          ...inputFocus,
        },
        "> *": {
          color: "#000",
          backgroundColor: "#fff",
        },
      },
    },
    props
  );
}

export function InputSelectIcon(props) {
  return this.Icon(
    this.merge(
      {
        size: "small",
        icon: "chevronDown",
        style: {
          // Static
          position: "absolute",
          top: "50%",
          right: "15px",
          transform: "translateY(-50%)",
        },
      },
      props
    )
  );
}

export function Option(props) {
  return this.merge(
    {
      tag: "option",
    },
    props
  );
}

export function Dropdown(props) {
  return this.merge(
    {
      tag: "ul",
      groupType: "Menu",
      style: {
        borderRadius: "medium",
        boxShadow: "0 3px 6px 3px rgba(0,0,0,0.24)",
        backgroundColor: "section",
        paddingVertical: "small",
        paddingHorizontal: "small",
      },
    },
    props
  );
}

const utilitiesLinkProps = {
  style: {
    lineHeight: "0",
  },
  typography: "NavAlpha",
};

export function UtilitiesMenuLink(props) {
  return this.Link(
    this.merge(
      {
        ...utilitiesLinkProps,
      },
      props
    )
  );
}

export function UtilitiesMenuIcon(props) {
  return this.Icon(
    this.merge(
      {
        ...utilitiesLinkProps,
      },
      props
    )
  );
}

export function CardBannerButton(props) {
  return this.Button(
    this.merge(
      {
        style: {
          margin: 0,
        },
      },
      props
    )
  );
}

export function LinkIcon({
  icon = "chevronLeft",
  right = false,
  children,
  rotate,
  iconSize = "1em",
  ...props
}) {
  const modifiedChildren = children
    ? [
        <UX2.Element.Element
          key="span"
          style={{ verticalAlign: "middle" }}
          children={children}
        />,
      ]
    : [];
  const iconElement = (
    <UX2.Element.Icon
      data-aid={icon}
      key="svg"
      icon={icon}
      rotate={rotate}
      size={iconSize}
      style={{ verticalAlign: "middle" }}
    />
  );
  right
    ? modifiedChildren.push(iconElement)
    : modifiedChildren.unshift(iconElement);

  return this.Link(
    this.merge(
      {
        children: modifiedChildren,
        style: {
          display: "inline-block",
          "> :nth-child(2)": {
            marginLeft: ".25em",
          },
        },
      },
      props
    )
  );
}

export function MoreLink({ icon, right, rotate, iconSize, ...props }) {
  const typography = "LinkAlpha";
  if (icon) {
    return this.LinkIcon(
      this.merge(
        {
          icon,
          right,
          rotate,
          iconSize,
          typography,
        },
        props
      )
    );
  }
  return this.Link(
    this.merge(
      {
        typography,
      },
      props
    )
  );
}

export function MoreLinkExpand({ expanded, ...props }) {
  const icon = expanded ? "minus" : "plus";
  return this.MoreLink(
    this.merge({ icon, ["aria-expanded"]: expanded }, props)
  );
}

export function MoreLinkBackward(props) {
  return this.MoreLink(
    this.merge(
      {
        icon: "chevronLeft",
      },
      props
    )
  );
}

export function MoreLinkForward(props) {
  return this.MoreLink(
    this.merge(
      {
        icon: "chevronRight",
        right: true,
      },
      props
    )
  );
}

export function MoreLinkMenu({ expanded, ...props }) {
  const rotate = expanded ? 180 : 0;
  return this.MoreLink(
    this.merge(
      {
        icon: "chevronDown",
        rotate,
        right: true,
      },
      props
    )
  );
}

export function FooterLink(props) {
  return this.Link(
    this.merge(
      {
        typography: "LinkAlpha",
      },
      props
    )
  );
}

export function Dot(props) {
  return this.merge(
    {
      tag: "div",
      role: "button",
      "data-edit-interactive": true,
      style: {
        background: "transparent",
        borderColor: "highContrast",
        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: "50%",
        cursor: "pointer",
        height: "12px",
        width: "12px",
        marginVertical: "xxsmall",
        marginHorizontal: "12px",
        color: "highContrast",
      },
    },
    props
  );
}

export function DotActive(props) {
  return this.Dot(
    this.merge(
      {
        style: {
          background: "currentColor",
        },
      },
      props
    )
  );
}

export function LinkDropdown(props) {
  return this.Link(
    this.merge(
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      props
    )
  );
}

export function LinkDropdownActive(props) {
  return this.LinkDropdown(props);
}

export function ButtonPrimary(props) {
  return this.Button(props);
}

export function ButtonSecondary(props) {
  return this.Button(props);
}

export function ButtonSpotlight(props) {
  return this.Button(props);
}
