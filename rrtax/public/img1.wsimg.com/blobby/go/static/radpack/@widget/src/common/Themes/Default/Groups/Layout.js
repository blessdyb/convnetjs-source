export function SplitItem(props) {
  return this.merge(
    {
      tag: "div",
      style: {
        display: "flex",
        flexGrow: 1,
        flexShrink: 0,
        maxWidth: "100%",
        position: "relative",
        "@md": {
          flexBasis: "50%",
          maxWidth: "50%",
          justifyContent: "center",
          // Split container content should be restricted to 70% of available width
          "> *": {
            maxWidth: "70%",
          },
        },
        ":only-child": {
          "@md": {
            flexBasis: "100%",
            maxWidth: "100%",
            "> *": {
              maxWidth: "100%",
            },
          },
        },
      },
    },
    props
  );
}

export function SplitItemImage(props) {
  return this.SplitItem(
    this.merge(
      {
        style: {
          minHeight: "inherit",
          "> *": {
            flexGrow: 1,
          },
          "@xs-only": {
            order: -1,
          },
          "@sm-only": {
            order: -1,
          },
          "@md": {
            "> *": {
              maxWidth: "100%",
              width: "100%",
            },
          },
        },
      },
      props
    )
  );
}
