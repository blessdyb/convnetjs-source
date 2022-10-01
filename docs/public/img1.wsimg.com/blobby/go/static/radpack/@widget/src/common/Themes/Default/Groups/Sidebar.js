import { constants } from "@wsb/guac-widget-core";
const { themeConstants, renderModes } = constants;
const { DISPLAY } = renderModes;

export function Sidebar({ renderMode, sidebarWidth, ...props }) {
  const disableClick =
    renderMode === DISPLAY || renderMode === "PREVIEW_RENDER_MODE"; // disable click behavior when in onboarding or in theme gallery preview

  return this.merge(
    {
      tag: "nav",
      style: {
        pointerEvents: disableClick ? "none" : "auto",
        display: "none",
        backgroundColor: "section",
        top: 0,
        left: 0,
        height: "100%",
        width: sidebarWidth,
        zIndex: themeConstants.SIDELINE_SIDEBAR_ZINDEX,
        transition: "transform 0.4s ease-in-out",
        boxShadow: "0 0 4px 0px rgba(0,0,0,0.2)",
        position: "fixed",
        ["@md"]: {
          display: "block",
          transform: "translateX(-150vw)",
        },
        ["@lg"]: {
          display: "block",
          transition: "none",
          transform: "translateX(0) !important",
        },
      },
    },
    props
  );
}

export function SidebarContainer(props) {
  return this.Container(
    this.merge(
      {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "inherit",
          height: "100vh",
        },
      },
      props
    )
  );
}

export function SidebarList(props) {
  return this.List(
    this.merge(
      {
        style: {
          paddingLeft: 0,
          listStyleType: "none",
        },
      },
      props
    )
  );
}
