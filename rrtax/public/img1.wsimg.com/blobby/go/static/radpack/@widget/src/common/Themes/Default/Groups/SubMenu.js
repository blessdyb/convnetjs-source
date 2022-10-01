import { constants } from "@wsb/guac-widget-core";
const { themeConstants } = constants;

export function SubMenu({ sidebarWidth, ...props }) {
  const { renderMode } = this.base;

  return this.merge(
    {
      tag: "div",
      style: {
        display: "flex",
        flexDirection: "column",
        position: renderMode === "PUBLISH" ? "fixed" : "absolute",
        top: 0,
        left: sidebarWidth,
        height: "100vh",
        backgroundColor: "section",
        marginVertical: 0,
        listStyleType: "none",
        maxWidth: 0,
        overflowX: "hidden",
        zIndex: themeConstants.SIDELINE_SIDEBAR_ZINDEX,
      },
    },
    props
  );
}

export function SubMenuList(props) {
  return this.List(
    this.merge(
      {
        style: {
          paddingHorizontal: "xlarge",
          width: "100%",
        },
      },
      props
    )
  );
}

export function SubMenuListItem(props) {
  return this.ListItem(
    this.merge(
      {
        style: {
          display: "flex !important",
          justifyContent: "center",
          whiteSpace: "nowrap",
          width: "100%",
          lineHeight: "45px",
        },
      },
      props
    )
  );
}
