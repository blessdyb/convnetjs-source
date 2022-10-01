export function SearchPopout({ hasBorder, ...props }) {
  return this.Block(
    this.merge(
      {
        style: {
          position: "relative",
          display: "flex",
          alignItems: "center",
          paddingHorizontal: "xsmall",
          backgroundColor: "section",
          ...(hasBorder && {
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderColor: "input",
          }),
        },
      },
      props
    )
  );
}

export function SearchPopoutIconSearch(props) {
  return this.IconSearch(
    this.merge(
      {
        style: {
          color: "highContrast",
          marginLeft: "xsmall",
          zIndex: 1,
        },
      },
      props
    )
  );
}

export function SearchPopoutInputSearch(props) {
  return this.InputSearch(
    this.merge(
      {
        style: {
          [":focus"]: {
            boxShadow: "none",
          },
        },
      },
      props
    )
  );
}
