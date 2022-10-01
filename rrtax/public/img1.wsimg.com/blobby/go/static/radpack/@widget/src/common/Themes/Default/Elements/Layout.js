export function Container({ fluid = false, ...props }) {
  const style = {
    marginLeft: "auto",
    marginRight: "auto",
    paddingHorizontal: "medium",
    maxWidth: "100%",
  };

  if (!fluid) {
    style["@sm"] = {
      width: "smContainer",
    };
    style["@md"] = {
      width: "mdContainer",
    };
    style["@lg"] = {
      width: "lgContainer",
    };
    style["@xl"] = {
      width: "xlContainer",
    };
  }
  return this.merge({ tag: "div", style }, props);
}

export function ContainerFluid(props) {
  return this.Container(this.merge(props, { fluid: true }));
}

export function ContainerSplit(props) {
  return this.ContainerFluid(
    this.merge(
      {
        style: {
          marginHorizontal: 0,
          paddingHorizontal: 0,
          display: "flex",
          flexDirection: "column",
          "@md": {
            flexWrap: "nowrap",
            flexDirection: "row",
          },
        },
      },
      props
    )
  );
}

export function Element(props) {
  return this.merge({ tag: "span" }, props);
}

export function Block(props) {
  return this.merge({ tag: "div" }, props);
}

export function CardBannerContainer(props) {
  return this.Container(
    this.merge(
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          paddingVertical: "medium",
          "> div:nth-child(2)": {
            paddingTop: "medium",
          },
          "@md": {
            flexDirection: "row",
            justifyContent: "space-around",
            "> div:first-child": {
              justifyContent: "flex-end",
              paddingRight: "xsmall",
              flexShrink: 1,
            },
            "> div:only-child": {
              justifyContent: "center",
              textAlign: "center",
              paddingHorizontal: 0,
            },
            "> div:nth-child(2)": {
              justifyContent: "flex-start",
              paddingTop: 0,
              paddingLeft: "xsmall",
              flexShrink: 0,
              maxWidth: "50%",
            },
          },
        },
      },
      props
    )
  );
}

export function CardBannerBlock(props) {
  return this.Block(
    this.merge(
      {
        style: {
          display: "flex",
          flexGrow: 1,
          textAlign: "center",
          paddingVertical: 0,
          flexBasis: "auto",
          ["@md"]: {
            textAlign: "left",
          },
        },
      },
      props
    )
  );
}
