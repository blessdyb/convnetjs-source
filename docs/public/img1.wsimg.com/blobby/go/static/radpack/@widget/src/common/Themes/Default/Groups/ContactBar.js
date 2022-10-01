export function ContactBar(props) {
  return this.Group(
    this.merge(
      {
        style: {
          width: "100%",
          textAlign: "center",
          paddingVertical: "small",
          backgroundColor: "section",
        },
      },
      props
    )
  );
}

export function ContactBarAddress(props) {
  return this.Address(
    this.merge(
      {
        style: {
          display: "block",
          "@sm": {
            display: "inline-block",
          },
        },
      },
      props
    )
  );
}

export function ContactBarPipe(props) {
  return this.Pipe(
    this.merge(
      {
        style: {
          display: "inline-block",
          marginHorizontal: "small",
        },
      },
      props
    )
  );
}

export function ContactBarPhone(props) {
  return this.Phone(
    this.merge(
      {
        style: {
          display: "inline-block",
        },
      },
      props
    )
  );
}
