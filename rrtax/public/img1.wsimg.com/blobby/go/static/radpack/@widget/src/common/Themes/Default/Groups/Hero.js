export function Hero(props) {
  return props;
}

export function HeroLink(props) {
  return this.LinkContent(
    this.merge(
      {
        style: {
          color: "inherit",
          [":hover"]: { color: "inherit" },
        },
      },
      props
    )
  );
}

export function HeroMedia(props) {
  return this.merge(
    {
      tag: "div",
    },
    props
  );
}

export function HeroHeading(props) {
  return this.Tagline(props);
}
