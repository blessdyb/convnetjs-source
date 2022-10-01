import { constants } from "@wsb/guac-widget-core";
const { Z_INDEX_NAV_DRAWER } = constants.layers;
import { NAV_DRAWER_OFFSET } from "../../../constants";

export function NavigationDrawer({
  category = "accent",
  left = true,
  ...props
}) {
  return this.merge(
    {
      category,
      left,
      section: "default",
      style: {
        backgroundColor: "section",
        position: "fixed",
        top: 0,
        width: "100%",
        height: "100%",
        overflowY: "auto",
        zIndex: Z_INDEX_NAV_DRAWER,
        paddingTop: "xxlarge",
        WebkitOverflowScrolling: "touch",
        transform: `translateX(${NAV_DRAWER_OFFSET})`,
        overscrollBehavior: "contain",
        boxShadow: "0 2px 6px 0px rgba(0,0,0,0.2)",
        transition: "transform .3s ease-in-out",
      },
      role: "navigation",
    },
    props
  );
}

export function NavigationDrawerList(props) {
  return this.List(
    this.merge(
      {
        role: "menu",
      },
      props
    )
  );
}

export function NavigationDrawerListItem(props) {
  return this.ListItem(
    this.merge(
      {
        style: {
          display: "block",
          marginBottom: "0",
          borderColor: "uLowContrastOverlay",
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          ":last-child": {
            borderBottom: "none",
          },
        },
        role: "menuitem",
      },
      props
    )
  );
}

export function NavigationDrawerLink(props) {
  return this.Link(
    this.merge(
      {
        typography: "NavBeta",
        style: {
          paddingVertical: "small",
          paddingHorizontal: "medium",
          display: "flex",
          alignItems: "center",
          minWidth: 200,
          justifyContent: "space-between",
          ["@md"]: {
            minWidth: 300,
          },
        },
      },
      props
    )
  );
}

export function NavigationDrawerLinkActive(props) {
  return this.NavigationDrawerLink(
    this.merge(
      {
        active: true,
      },
      props
    )
  );
}

export function NavigationDrawerSubLink(props) {
  return this.NavigationDrawerLink(
    this.merge(
      {
        typography: "SubNavBeta",
        style: {
          display: "block",
          paddingVertical: "xsmall",
          paddingLeft: "xlarge",
          paddingRight: "medium",
        },
      },
      props
    )
  );
}

export function NavigationDrawerSubLinkActive(props) {
  return this.NavigationDrawerSubLink(
    this.merge(
      {
        active: true,
      },
      props
    )
  );
}

export function NavigationDrawerInputSearch(props) {
  return this.Input(
    this.merge(
      {
        style: {
          backgroundColor: "searchMobileDark",
          borderWidth: "none",
          borderRadius: "none",
          paddingVertical: "small",
          paddingHorizontal: "xlarge",
        },
        role: "searchbox",
      },
      props
    )
  );
}
