export function ContentCardText(props) {
  return this.ContentText(
    this.merge(
      {
        style: {
          width: "100%",
        },
      },
      props
    )
  );
}

export function ContentCardHeading(props) {
  return this.ContentHeading(props);
}

export function ContentCardButton(props) {
  const style =
    this.base.widgetPreset === "about1"
      ? {
          alignSelf: "center",
        }
      : {};
  return this.Button(this.merge({ style }, props));
}

export function ContentCardWrapperImage(props) {
  return this.Wrapper(
    this.merge(
      {
        style: {
          marginHorizontal: "auto",
          textAlign: "center",
          width: "100%",
        },
      },
      props
    )
  );
}

export function ContentCardImageThumbnail(props) {
  return this.ImageThumbnail(props);
}

export function ContentOverlayCardText(props) {
  return this.ContentBigText(props);
}

export function ContentOverlayCardHeading(props) {
  return this.ContentBigHeading(props);
}

export function ContentOverlayCardButton(props) {
  return this.ContentCardButton(
    this.merge(
      {
        style: {
          marginBottom: "0px !important",
        },
      },
      props
    )
  );
}
