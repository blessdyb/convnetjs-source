export function CommerceOverlay(props) {
  return props;
}

export function CommerceOverlayHeading({ align = "left", ...props }) {
  return this.Heading(
    this.merge(
      {
        typography: "HeadingDelta",
        section: "default",
        active: true,
        style: {
          textAlign: align,
          marginBottom: "xxsmall",
        },
      },
      props
    )
  );
}

export function CommerceOverlayIcon(props) {
  return this.Icon(
    this.merge(
      {
        style: {
          display: "inline-block",
          marginRight: "xxsmall",
          marginLeft: "-xxsmall",
        },
      },
      props
    )
  );
}

export function CommerceOverlayWrapper(props) {
  return this.Wrapper(
    this.merge(
      {
        style: {
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          padding: "xsmall",
          "@sm": {
            padding: "small",
          },
          "@lg": {
            padding: "medium",
          },
        },
      },
      props
    )
  );
}

export function CommerceOverlayMoreLink(props) {
  return this.MoreLink(
    this.merge(
      {
        icon: "arrowRight",
        iconSize: "1.4em",
        right: true,
        active: true,
        style: {
          display: "block",
        },
      },
      props
    )
  );
}

export function CommerceOverlayPrice(props) {
  return this.Price(
    this.merge(
      {
        section: "overlay",
      },
      props
    )
  );
}

export function CommerceOverlayMajorWrapper(props) {
  return this.CommerceOverlayWrapper(
    this.merge(
      {
        style: {
          alignItems: "center",
          justifyContent: "center",
          padding: "medium",
          textAlign: "center",
        },
      },
      props
    )
  );
}

export function CommerceOverlayMajorMoreLink(props) {
  return this.CommerceOverlayMoreLink(
    this.merge(
      {
        style: {
          marginLeft: "xsmall",
        },
      },
      props
    )
  );
}

export function CommerceOverlayMediumWrapper(props) {
  return this.CommerceOverlayWrapper(
    this.merge(
      {
        style: {
          "@sm": {
            alignItems: "center",
            justifyContent: "center",
            padding: "medium",
            textAlign: "center",
          },
        },
      },
      props
    )
  );
}

export function CommerceOverlayMobileHeading(props) {
  return this.Heading(
    this.merge(
      {
        typography: "DetailsAlpha",
        section: "default",
        active: true,
        style: {
          marginBottom: "xxsmall",
        },
      },
      props
    )
  );
}

export function CommerceOverlayMobileMoreLink(props) {
  return this.MoreLink(
    this.merge(
      {
        typography: "DetailsBeta",
        active: true,
        icon: "arrowRight",
        iconSize: "1.4em",
        right: true,
        style: {
          display: "block",
        },
      },
      props
    )
  );
}

export function CommerceOverlayMobileText(props) {
  return this.Text(
    this.merge(
      {
        typography: "DetailsBeta",
        section: "default",
      },
      props
    )
  );
}

export function CommerceOverlayMobilePrice(props) {
  return this.CommerceOverlayPrice(
    this.merge(
      {
        typography: "DetailsBeta",
      },
      props
    )
  );
}
