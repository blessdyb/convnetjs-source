export function PromoBanner(props) {
  return this.Block(
    this.merge(
      {
        role: "banner",
        style: {
          backgroundColor: "section",
          paddingVertical: "xxsmall",
        },
      },
      props
    )
  );
}

export function PromoBannerSeasonal(props) {
  return this.PromoBanner(props);
}

export function PromoBannerContainer(props) {
  return this.Container(
    this.merge(
      {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      props
    )
  );
}

export function PromoBannerText(props) {
  return this.Text(
    this.merge(
      {
        typography: "BodyAlpha",
        featured: true,
        ["data-style-fixed"]: true,
        style: {
          textAlign: "center",
        },
      },
      props
    )
  );
}
