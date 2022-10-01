import { constants } from "@wsb/guac-widget-core";
const { Z_INDEX_NAV_DRAWER } = constants.layers;

export function DrawerPanel(props) {
  return props;
}

export function DrawerPanelContainer({
  category = "accent",
  left = true,
  maxWidth = 0,
  backgroundColor = "sectionOverlay",
  ...props
}) {
  const alignStyles = {
    left: left ? 0 : "unset",
    right: left ? "unset" : 0,
  };

  return this.Block(
    this.merge(
      {
        category,
        section: "default",
        style: {
          backgroundColor,
          maxWidth,
          position: "fixed",
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: Z_INDEX_NAV_DRAWER,
          WebkitOverflowScrolling: "touch",
          transition: "max-width .3s ease-in-out",
          display: "flex",
          flexDirection: "column",
          ...alignStyles,
        },
      },
      props
    )
  );
}

export function DrawerPanelWrapper(props) {
  return this.Block(
    this.merge(
      {
        style: {
          overflow: "auto",
          position: "absolute",
          top: "xxlarge",
          left: 0,
          right: 0,
          bottom: 0,
        },
      },
      props
    )
  );
}

export function DrawerPanelCloseIcon(props) {
  return this.CloseIcon(
    this.merge(
      {
        style: {
          position: "absolute",
          top: "small",
          right: "small",
        },
      },
      props
    )
  );
}

export function DrawerPanelBackground(props) {
  return this.Block(
    this.merge(
      {
        style: {
          zIndex: Z_INDEX_NAV_DRAWER,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgb(68, 68, 68, 0.6)",
        },
      },
      props
    )
  );
}
