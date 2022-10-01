export function MediaObjectBackground(props) {
  return this.Background(
    this.merge(
      {
        section: "alt",
        style: {
          backgroundColor: "section",
          flexShrink: "0",
          height: "100px",
          width: "100px",
        },
      },
      props
    )
  );
}

export function MediaObjectHeading(props) {
  return this.HeadingMinor(props);
}

export function MediaObjectHeadingSub(props) {
  return this.Heading(
    this.merge(
      {
        level: "5",
      },
      props
    )
  );
}
