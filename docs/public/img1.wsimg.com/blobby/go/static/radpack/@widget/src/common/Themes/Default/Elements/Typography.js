import React, { lazy, Suspense } from "react";
import { omit } from "lodash";
import { utils, constants } from "@wsb/guac-widget-core";
import { levelFilter } from "../../../utils/text";
import { OVERLAY_DARK_TEXT_SHADOW } from "../../../constants";
const BootstrappedRichTextLazy = lazy(() =>
  import("@wsb/guac-widget-shared/lib/components/RichText")
);

const { sectionTypes: SECTION } = constants;

const defaultTextStyles = {
  wordWrap: "break-word",
  overflowWrap: "break-word",
};

export function Heading({
  children,
  tag,
  level = 4,
  saveOriginalText,
  wrapWithTag: Wrapper,
  ...props
}) {
  const { widgetType, widgetId, renderMode, order } = this.base;
  const lineHeight = this.mapPropValue("lineHeightLevel", level);
  const originalText = saveOriginalText ? { originalText: children } : {};
  const isClientSide =
    typeof window !== "undefined" && renderMode === "PUBLISH";
  let tagLevel = tag ? parseInt(tag.substring(1), 10) : level;
  let shouldPromote = false;
  const levelFilterValue = levelFilter({ tag, level });
  const typographyMapping = {
    1: "HeadingAlpha",
    2: "HeadingBeta",
    3: "HeadingGamma",
    4: "HeadingDelta",
    5: "BodyAlpha",
    6: "DetailsBeta",
  };
  const featuredMapping = {
    5: true,
    6: true,
  };

  if (
    this.prevWidgetId !== widgetId &&
    tagLevel &&
    tagLevel !== 1 &&
    (!this.hasH1 || isClientSide) &&
    widgetType !== "HEADER" &&
    children &&
    tagLevel <= 4
  ) {
    if (isClientSide) {
      // For bootstrapped components, query the DOM to see if we need to promote this heading
      const domH1 = document.querySelector("h1");
      if (
        !domH1 ||
        (domH1.getAttribute("data-promoted-from") === `${tagLevel}` &&
          domH1.getAttribute("data-order") === `${order}`)
      ) {
        // Either there is no h1, or this heading was previously promoted so we need to promote again on rerender
        shouldPromote = true;
      }
    } else {
      // for non-bootstrapped components, always promote the first heading we find
      shouldPromote = true;
    }
  }

  // track previous widget's id to prevent from promoting multiple h1 tags within the same widget
  if (shouldPromote) {
    props["data-promoted-from"] = tagLevel;
    props["data-order"] = order;
    tagLevel = 1;
  }

  this.prevWidgetId = widgetId;

  // Keep track of the fact that we rendered an h1 so no section headings are promoted
  this.hasH1 = this.hasH1 || tagLevel === 1;

  // Without this, text with newline characters end up rendering on a single line.
  const whiteSpace =
    !props.richtext && typeof children === "string" && children.includes("\n")
      ? "pre-line"
      : void 0;

  if (props.dangerouslySetInnerHTML) {
    const { __html } = props.dangerouslySetInnerHTML;
    props.dangerouslySetInnerHTML = {
      __html: Wrapper ? `<${Wrapper}>${__html}</${Wrapper}>` : __html,
    };
  } else {
    props.children =
      children && Wrapper ? <Wrapper>{children}</Wrapper> : children;
  }

  const RichTextTag = (props) => (
    <Suspense fallback={<div />}>
      <BootstrappedRichTextLazy {...props} />
    </Suspense>
  );
  const resolvedTag = tagLevel ? `h${tagLevel}` : tag;

  return this.merge(
    {
      tag: props.richtext ? RichTextTag : resolvedTag,
      typography: typographyMapping[levelFilterValue],
      richTextContainer: props.richtext && resolvedTag,
      featured: Boolean(featuredMapping[levelFilterValue]),
      role: "heading",
      ["aria-level"]: tagLevel,
      style: {
        ...defaultTextStyles,
        lineHeight,
        marginHorizontal: "0",
        marginVertical: "0",
        whiteSpace,
      },
      ...originalText,
    },
    omit(props, ["layout", "tag", "font"])
  );
}

export function HeadingMajor(props) {
  return this.Heading(
    this.merge(
      {
        tag: "h2",
        typography: "HeadingBeta",
      },
      props
    )
  );
}

export function HeadingMiddle(props) {
  return this.Heading(
    this.merge(
      {
        tag: "h3",
        typography: "HeadingGamma",
      },
      props
    )
  );
}

export function HeadingMinor(props) {
  return this.Heading(
    this.merge(
      {
        tag: "h4",
        typography: "HeadingDelta",
      },
      props
    )
  );
}

export function HeadingProduct(props) {
  return this.HeadingMinor(
    this.merge(
      {
        featured: true,
      },
      props
    )
  );
}

export function Text({
  noWidow,
  linkify,
  linkStyle,
  phoneProps,
  urlProps,
  emailProps,
  children,
  tag = "p",
  ...props
}) {
  let whiteSpace;
  if (typeof children === "string") {
    if (!props.richtext && children.includes("\n")) {
      // Without this, text with newline characters end up rendering on a single line.
      whiteSpace = "pre-line";
    }
    if (linkify) {
      children = utils.linkify(children, {
        linkStyle,
        phoneProps,
        urlProps,
        emailProps,
      });
    } else if (noWidow) {
      props.dangerouslySetInnerHTML = {
        __html: children.replace(/\s(?=[^\s]*$)/, "&nbsp;"),
      };
    }
  }
  if (!props.dangerouslySetInnerHTML) {
    props.children = children;
  }

  if (tag === "h1") {
    // Keep track of the fact that we rendered an h1 so no section headings are promoted
    this.hasH1 = true;
  }

  const RichTextTag = (props) => (
    <Suspense fallback={<div />}>
      <BootstrappedRichTextLazy {...props} />
    </Suspense>
  );

  return this.merge(
    {
      tag: props.richtext ? RichTextTag : tag,
      typography: "BodyAlpha",
      richTextContainer: props.richtext && tag,
      style: {
        ...defaultTextStyles,
        lineHeight: "1.5",
        marginTop: "0",
        marginBottom: "0",
        whiteSpace,
      },
    },
    props
  );
}

export function TextMajor(props) {
  return this.Text(
    this.merge(
      {
        typography: "BodyBeta",
      },
      props,
      {
        style: {
          textShadow:
            this.base.section === SECTION.OVERLAY
              ? OVERLAY_DARK_TEXT_SHADOW
              : "none",
        },
      }
    )
  );
}

export function TextAction(props) {
  return this.Text(props);
}

export function Details(props) {
  return this.Text(
    this.merge(
      {
        typography: "DetailsAlpha",
      },
      props
    )
  );
}

export function DetailsMinor(props) {
  return this.Details(
    this.merge(
      {
        typography: "DetailsBeta",
      },
      props
    )
  );
}

export function Price({ priceState = "featured", ...props }) {
  return this.Text(
    this.merge(
      {
        tag: "div",
        typography: "BodyAlpha",
        [priceState]: true,
      },
      props
    )
  );
}

export function PriceMajor(props) {
  return this.Price(
    this.merge(
      {
        typography: "BodyBeta",
      },
      props
    )
  );
}

export function CardBannerHeading(props) {
  return this.HeadingMajor(props);
}

export function Label(props) {
  return this.merge(
    {
      tag: "label",
      typography: "BodyAlpha",
      featured: true,
      style: {
        display: "inline-block",
        ...defaultTextStyles,
      },
    },
    props
  );
}

export function LabelMinor({ children, ...props }) {
  return this.merge(
    {
      tag: "label",
      children: <strong>{children}</strong>,
      style: {
        display: "inline-block",
        ...defaultTextStyles,
      },
      typography: "DetailsAlpha",
      featured: true,
    },
    props
  );
}

export function FooterDetails(props) {
  return this.Details(
    this.merge(
      {
        typography: "DetailsAlpha",
      },
      props
    )
  );
}

export function FooterText(props) {
  return this.Text(
    this.merge(
      {
        typography: "BodyAlpha",
        featured: true,
      },
      props
    )
  );
}

export function Tagline(props) {
  return this.Heading(
    this.merge(
      {
        tag: "h1",
        typography: "HeadingAlpha",
      },
      props
    )
  );
}

export function SubTagline(props) {
  return this.Text(
    this.merge(
      {
        typography: "BodyBeta",
        featured: true,
      },
      props
    )
  );
}

export function SupTagline(props) {
  return this.Heading(
    this.merge(
      {
        tag: "h2",
        typography: "BodyBeta",
        featured: true,
      },
      props
    )
  );
}

export function Address(props) {
  return this.Text(props);
}

export function DisplayHeading(props) {
  return this.Heading(
    this.merge(
      {
        level: 3,
        typography: "HeadingGamma",
      },
      props
    )
  );
}

export function DisplayHeadingSub(props) {
  return this.Heading(
    this.merge(
      {
        level: 3,
        typography: "BodyAlpha",
        featured: true,
      },
      props
    )
  );
}

export function Error(props) {
  return this.Text(
    this.merge(
      {
        typography: "BodyAlpha",
        alert: true,
        role: "alertdialog",
        ["aria-live"]: "assertive",
      },
      props
    )
  );
}
