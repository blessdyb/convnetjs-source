export function LogoHeading(props) {
  return this.Heading(
    this.merge(
      {
        typography: "LogoAlpha",
        style: {
          lineHeight: "1.2",
          wordWrap: "break-word",
          overflowWrap: "break-word",
          maxWidth: "100%",
        },
      },
      props
    )
  );
}
