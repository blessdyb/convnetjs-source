export function CommerceItem(props) {
  return this.Block(
    this.merge(
      {
        style: {
          display: "flex",
          flexDirection: "column",
          height: "100%",
        },
      },
      props
    )
  );
}

export function CommerceItemHeading({ align, ...props }) {
  return this.Heading(
    this.merge(
      {
        typography: "BodyAlpha",
        featured: true,
        style: {
          marginBottom: "xsmall",
          textAlign: align,
        },
      },
      props
    )
  );
}

export function CommerceItemIcon(props) {
  return this.Icon(
    this.merge(
      {
        style: {
          display: "inline-block",
          marginRight: "xxsmall",
          marginLeft: "-xxsmall",
        },
      },
      props
    )
  );
}

export function CommerceItemPrice(props) {
  return this.Price(
    this.merge(
      {
        typography: "DetailsAlpha",
      },
      props
    )
  );
}

export function CommerceItemWrapper(props) {
  return this.Wrapper(
    this.merge(
      {
        style: {
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
        },
      },
      props
    )
  );
}

export function CommerceItemLabel({
  size = { xs: "large" },
  ribbonType,
  ...props
}) {
  const styles = {};
  const leftOrRight = ribbonType === "pill" ? "left" : "right";
  const defaultStyles = {
    paddingHorizontal: "medium",
    paddingVertical: "xsmall",
    top: "10px",
    [leftOrRight]: "10px",
  };

  for (const key of Object.keys(size)) {
    styles[key] =
      size[key] === "large"
        ? {
            ...defaultStyles,
          }
        : {
            paddingHorizontal: "small",
            paddingVertical: "xxsmall",
            top: "5px",
            [leftOrRight]: "5px",
          };
  }

  const backgroundColorTransparent = "rgba(83, 83, 83, .6)";

  if (ribbonType === "transparent") {
    props.category = "accent";
    props.featured = true;
  }

  let borderRadius;
  if (ribbonType === "roundRectangle") {
    borderRadius = "large";
  } else if (ribbonType === "pill") {
    borderRadius = "99em";
  }

  const style = {
    position: "absolute",
    display: "block",
    backgroundColor:
      ribbonType === "transparent" ? backgroundColorTransparent : "section",
    "border-radius": borderRadius,
    ...defaultStyles,
    ...styles.xs,
    "@sm": {
      ...styles.sm,
    },
    "@md": {
      ...styles.md,
    },
    "@lg": {
      ...styles.lg,
    },
    "@xl": {
      ...styles.xl,
    },
  };

  return this.DetailsMinor(
    this.merge(
      {
        style: style,
        category: "primary",
      },
      props
    )
  );
}

export function CommerceItemButton(props) {
  return this.Button(
    this.merge(
      {
        size: "small",
      },
      props
    )
  );
}
