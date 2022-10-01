export function Card(props) {
  //  temporary solution until base merges group.kind
  const kind = this.base.groupType || this.base.kind;
  const size = props.size || "default";
  const hoverStyles =
    kind === "Link"
      ? {
          ":hover": {
            boxShadow: "card",
          },
        }
      : {};

  const sizes = {
    small: {
      height: "375px",
    },
    default: {},
    large: {
      height: "435px",
    },
  };

  return this.Group(
    this.merge(
      {
        category: "neutral",
        section: "default",
        style: {
          backgroundColor: "section",
          // Theme
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "section",
          ...sizes[size],
          "@md": {
            ...hoverStyles,
          },
        },
      },
      props
    )
  );
}

export function CardHeading(props) {
  return this.HeadingMinor(
    this.merge(
      {
        style: {
          lineHeight: "1",
        },
      },
      props
    )
  );
}

export function CardHeadingSub(props) {
  return this.Heading(
    this.merge(
      {
        level: 6,
      },
      props
    )
  );
}
