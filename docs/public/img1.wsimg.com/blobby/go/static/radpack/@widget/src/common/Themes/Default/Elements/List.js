export function List({ tag = "ul", ...props }) {
  return this.merge(
    {
      tag,
      style: {
        // Static
        marginVertical: "0",
        marginHorizontal: "0",
        "-webkit-margin-before": "0",
        "-webkit-margin-after": "0",
        "-webkit-padding-start": "0",
      },
    },
    props
  );
}

export function ListItem(props) {
  return this.merge(
    {
      tag: "li",
      style: {
        // Dials Based
        color: "section",
        // Theme Based
        marginBottom: "medium",
        // Static
        ":last-child": {
          marginBottom: "0",
        },
      },
    },
    props
  );
}

export function ListItemInline(props) {
  return this.merge(
    {
      tag: "li",
      style: {
        // Dials Based
        color: "section",
        // Theme Based
        marginLeft: "medium",
        marginBottom: "none",
        // Static
        display: "inline-block",
        listStyle: "none",
        ":first-child": {
          marginLeft: "0",
        },
      },
    },
    props
  );
}
