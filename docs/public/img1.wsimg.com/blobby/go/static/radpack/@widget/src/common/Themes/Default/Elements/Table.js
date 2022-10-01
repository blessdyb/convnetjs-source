export function Table(props) {
  return this.merge(
    {
      tag: "table",
      typography: "DetailsAlpha",
      style: {
        display: "flex",
        flexDirection: "column",
        borderWidth: "xsmall",
        borderStyle: "solid",
        borderColor: "input",
        borderRadius: "medium",
      },
    },
    props
  );
}

export function TableHeader(props) {
  return this.LabelMinor(
    this.merge(
      {
        tag: "th",
        style: {
          flex: 1,
          textAlign: "left",
          verticalAlign: "middle",
          paddingHorizontal: "small",
          paddingVertical: "xxsmall",
          borderRightWidth: "xsmall",
          borderRightStyle: "solid",
          borderColor: "input",
          ":last-child": {
            borderColor: "transparent",
          },
        },
      },
      props
    )
  );
}

export function TableRow(props) {
  return this.merge(
    {
      tag: "tr",
      style: {
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: "xsmall",
        borderBottomStyle: "solid",
        borderColor: "input",
        ":last-child": {
          borderColor: "transparent",
        },
      },
    },
    props
  );
}

export function TableCell(props) {
  return this.merge(
    {
      tag: "td",
      style: {
        flex: 1,
        paddingHorizontal: "small",
        paddingVertical: "xxsmall",
        borderRightWidth: "xsmall",
        borderRightStyle: "solid",
        borderColor: "input",
        textAlign: "left",
        overflowWrap: "break-word",
        ":last-child": {
          borderColor: "transparent",
        },
      },
    },
    props
  );
}
