export function GoogleTranslate(props) {
  return this.merge(
    {
      style: {
        "@xs": {
          borderBottomRightRadius: "10%",
        },
        "@md": {
          right: 0,
          left: "unset",
          borderBottomLeftRadius: "10%",
        },
        zIndex: 1200,
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
        position: "absolute",
        color: "highContrast",
        transition: "top 750ms cubic-bezier(0.38, 0.12, 0.12, 0.85)",
        padding: "xsmall",
        backgroundColor: "sectionOverlay",
        opacity: 0.8,
        top: 0,
      },
    },
    props
  );
}
