export function Blog(props) {
  return this.Group(this.merge(props));
}

export function BlogMain(props) {
  return this.merge(
    {
      tag: "main",
      section: "default",
      style: {
        paddingVertical: "large",
        "@md": {
          paddingVertical: "0",
          paddingHorizontal: "xlarge",
        },
      },
    },
    props
  );
}

export function BlogMainLinkArrow(props) {
  return this.LinkArrow(
    this.merge(
      {
        style: {
          marginBottom: "xlarge",
        },
      },
      props
    )
  );
}

export function BlogMainHeading(props) {
  return this.HeadingMiddle(
    this.merge(
      {
        level: 2,
        style: {
          marginBottom: "xsmall",
        },
      },
      props
    )
  );
}

export function BlogMainHeadingSub(props) {
  return this.Details(
    this.merge(
      {
        level: 5,
        style: {
          marginBottom: "xlarge",
        },
      },
      props
    )
  );
}

export function BlogAside(props) {
  return this.merge(
    {
      tag: "aside",
      style: {
        height: "100%",
        paddingVertical: "large",
        // Border
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "section",
        borderLeftWidth: "0px",
        borderTopWidth: "1px",
        "@md": {
          paddingVertical: "0",
          paddingHorizontal: "xlarge",
          borderLeftWidth: "1px",
          borderTopWidth: "0px",
        },
      },
    },
    props
  );
}

export function BlogAsideHeading(props) {
  return this.HeadingMinor(
    this.merge(
      {
        level: 4,
        style: {
          marginBottom: "xlarge",
        },
      },
      props
    )
  );
}

export function BlogContent(props) {
  return this.Text(
    this.merge(
      {
        style: {
          "> *": {
            marginBottom: "10px !important",
          },
          "> *:last-child": {
            marginBottom: "0 !important",
          },
        },
      },
      props
    )
  );
}
