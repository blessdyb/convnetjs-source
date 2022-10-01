export function Embed(props) {
  return this.merge(
    {
      tag: "iframe",
      style: {
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "100%",
        border: "0",
      },
    },
    props
  );
}

export function EmbedContainer(props) {
  return this.merge(
    {
      style: {
        position: "relative",
        paddingBottom: "56.25%",
        overflow: "hidden",
        maxWidth: "100%",
      },
    },
    props
  );
}

export function WrapperInsetEmbedVideo(props) {
  return this.Wrapper(this.merge({ style: { display: "block" } }, props));
}

export function EmbedVideo(props) {
  return this.Embed(props);
}
