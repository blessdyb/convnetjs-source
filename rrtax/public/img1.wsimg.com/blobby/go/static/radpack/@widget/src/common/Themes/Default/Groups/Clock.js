export function Clock(props) {
  return this.Block(
    this.merge(
      {
        style: {
          display: "inline-grid",
          textAlign: "center",
          gridTemplateColumns: "auto",
          gridAutoFlow: "column",
          gridAutoColumns: "1fr",
          gridColumnGap: this.mapPropValue("spacing", "xsmall"),
          ["@sm"]: {
            gridColumnGap: this.mapPropValue("spacing", "medium"),
          },
        },
      },
      props
    )
  );
}

export function ClockBlock(props) {
  return this.Block(
    this.merge(
      {
        style: {
          lineHeight: 1.1,
          ["@xs-only"]: {
            backgroundColor: "actionContrast",
            padding: "xsmall",
          },
        },
      },
      props
    )
  );
}

export function ClockValue(props) {
  return this.Block(
    this.merge(
      {
        style: {
          ["@xs-only"]: {
            minWidth: "1.45em",
          },
          ["@sm"]: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridAutoFlow: "column",
            gridAutoColumns: "1fr",
            gridGap: this.mapPropValue("spacing", "xsmall"),
            ["> span"]: {
              backgroundColor: "actionContrast",
              paddingVertical: "xsmall",
              minWidth: "1.45em",
            },
          },
        },
        typography: "DataAlpha",
      },
      props
    )
  );
}

export function ClockLabel(props) {
  return this.DetailsMinor(
    this.merge(
      {
        style: {
          display: "block",
          ["@xs-only"]: {
            color: "actionContrast",
          },
          ["@sm"]: {
            marginTop: "xsmall",
          },
        },
      },
      props
    )
  );
}
