export function Form(props) {
  return this.merge(
    {
      tag: "form",
      ["aria-live"]: "polite",
      style: {
        marginBottom: "0",
      },
    },
    props
  );
}

export function FormSearch(props) {
  return this.Form(
    this.merge(
      {
        style: {
          width: "100%",
          "@md": {
            margin: "0",
            position: "relative",
          },
        },
      },
      props
    )
  );
}

export function FormError(props) {
  return this.Error(
    this.merge(
      {
        style: {
          marginTop: "xxsmall",
        },
      },
      props
    )
  );
}
