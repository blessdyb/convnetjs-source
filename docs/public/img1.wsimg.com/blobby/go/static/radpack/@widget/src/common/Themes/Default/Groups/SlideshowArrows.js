export function SlideshowArrows(props) {
  return this.Container(
    this.merge(
      {
        fluid: true,
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: "0px",
        },
      },
      props
    )
  );
}
