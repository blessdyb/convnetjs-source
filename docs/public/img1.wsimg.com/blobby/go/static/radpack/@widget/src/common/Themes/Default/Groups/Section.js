import React from "react";
import { sectionHrTypes } from "../../../constants";
import { UX2 } from "@wsb/guac-widget-core";

const { NONE, INLINE, SMALL_UNDERLINE, FULL_UNDERLINE } = sectionHrTypes;

export function Section(props) {
  return this.Group(
    this.merge(
      {
        tag: "section",
        style: {
          // Dial Based
          backgroundColor: "section",
          // Theme Based
          paddingVertical: "xxlarge",
          "@xs-only": {
            paddingVertical: "xlarge",
          },
        },
      },
      props
    )
  );
}

function generateSectionHeadingChildren(children, hrType, richtext) {
  const inheritStyles = {
    fontSize: "unset",
    color: "inherit",
    fontFamily: "unset",
    textTransform: "unset",
    letterSpacing: "unset",
  };
  const pseudoStyles = {
    content: `""`,
    height: "1px",
    marginTop: "-1px",
    background: "currentColor",
    position: "absolute",
    top: ".75em",
    width: "100vw",
    display: "block",
  };
  const childStyles = {
    ...inheritStyles,
    display: "inline-block",
    position: "relative",
    maxWidth: "80%",
    ":before": {
      right: "100%",
      marginRight: "medium",
      ...pseudoStyles,
    },
    ":after": {
      left: "100%",
      marginLeft: "medium",
      ...pseudoStyles,
    },
  };
  const containerStyles = {
    display: "block",
    overflow: "hidden",
  };
  if (hrType === INLINE) {
    return (
      <UX2.Element.Container style={containerStyles}>
        <UX2.Element.Element style={childStyles} richtext={richtext}>
          {children}
        </UX2.Element.Element>
      </UX2.Element.Container>
    );
  }
  if (hrType === SMALL_UNDERLINE) {
    const blockStyles = {
      width: "100%",
      lineHeight: "0px",
    };
    const lineStyles = {
      display: "inline-block",
    };
    return [
      <UX2.Base key="child" richtext={richtext} style={inheritStyles}>
        {children}
      </UX2.Base>,
      <UX2.Element.Block key="hr" style={blockStyles}>
        <UX2.Element.HR
          group="SectionHeading"
          sectionHeadingHR={hrType}
          style={lineStyles}
        />
      </UX2.Element.Block>,
    ];
  }
  if (hrType === FULL_UNDERLINE) {
    const lineStyles = {
      marginBottom: "0",
    };
    return [
      <UX2.Base key="child" richtext={richtext} style={inheritStyles}>
        {children}
      </UX2.Base>,
      <UX2.Element.HR
        key="hr"
        group="SectionHeading"
        sectionHeadingHR={hrType}
        style={lineStyles}
      />,
    ];
  }
  if (typeof children === "string") {
    return (
      <UX2.Base
        key="child"
        richtext={richtext}
        nakedElement={true}
        style={inheritStyles}
      >
        {children}
      </UX2.Base>
    );
  }
  return children;
}

export function SectionHeading({
  children,
  sectionHeadingHR = NONE,
  richtext,
  ...props
}) {
  return this.Heading(
    this.merge(
      {
        level: 2,
        typography: "HeadingBeta",
        children: generateSectionHeadingChildren(
          children,
          sectionHeadingHR,
          richtext
        ),
        style: {
          lineHeight: "1.4",
          // Theme Based
          marginTop: 0,
          marginBottom: "xlarge",
        },
      },
      props
    )
  );
}

export function SectionHeadingHR({ sectionHeadingHR, ...props }) {
  const styleMap = {
    [NONE]: {
      display: "none",
    },
    [SMALL_UNDERLINE]: {
      borderBottomWidth: "small",
      marginTop: "medium",
      marginBottom: "0",
      width: "50px",
    },
    [FULL_UNDERLINE]: {
      borderColor: "lowContrast",
      borderBottomWidth: "xsmall",
      marginTop: "small",
      marginBottom: "large",
      width: "100%",
    },
  };
  return this.HR(
    this.merge(
      {
        style: styleMap[sectionHeadingHR] || {},
      },
      props
    )
  );
}

export function SectionHeadingSub(props) {
  return this.Heading(
    this.merge(
      {
        level: 4,
        style: {
          color: "highContrast",
          textAlign: "center",
          lineHeight: "1.5",
          maxWidth: "90%",
          marginBottom: "xlarge",
          marginHorizontal: "auto",
          "@md": {
            maxWidth: "80%",
          },
        },
      },
      props
    )
  );
}

export function SectionBanner(props) {
  return this.Section(
    this.merge(
      {
        style: {
          backgroundColor: "transparent",
        },
      },
      props
    )
  );
}

export function SectionBannerHeading(props) {
  return this.HeadingMajor(
    this.merge(
      {
        style: {
          textAlign: "center",
          marginBottom: props.reducedMargin ? "large" : "xxlarge",
        },
      },
      props
    )
  );
}

export function SectionSplit(props) {
  return this.Section(this.merge({}, props));
}

export function SectionSplitHeading(props) {
  const textAlign = props.alignmentOption ? props.alignmentOption : "left";
  return this.SectionHeading(
    this.merge(
      {
        style: {
          textAlign,
          "@md": {
            textAlign,
          },
          "@xs": {
            textAlign: "center",
          },
        },
      },
      props
    )
  );
}
