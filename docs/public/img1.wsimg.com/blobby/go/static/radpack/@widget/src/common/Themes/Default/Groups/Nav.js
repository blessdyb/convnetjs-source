import React from "react";

export function Nav(props) {
  return this.merge({ tag: "nav" }, props);
}

export function NavLink(props) {
  return this.Link(
    this.merge(
      {
        typography: "NavAlpha",
        style: {
          display: "block",
        },
      },
      props
    )
  );
}

export function NavLinkActive(props) {
  return this.NavLink(
    this.merge(
      {
        active: true,
      },
      props
    )
  );
}

// NavMenu

export function NavMenuLink(props) {
  return this.Link(
    this.merge(
      {
        style: {
          display: "inline-block",
          paddingVertical: "xxsmall",
        },
        typography: "SubNavAlpha",
      },
      props
    )
  );
}

export function NavMenuLinkActive(props) {
  return this.NavMenuLink(
    this.merge(
      {
        active: true,
      },
      props
    )
  );
}

// NavMoreMenu

/* For the More menu, we want top-level links to look like regular navbar links, and nested links to look like dropdown links */
const moreMenuLinkStyle = {
  marginVertical: "xsmall",
  lineHeight: 1.5,
  display: "inline-block",
};

export function NavMoreMenuLink(props) {
  return this.NavLink(
    this.merge(
      {
        style: moreMenuLinkStyle,
      },
      props
    )
  );
}

export function NavMoreMenuLinkActive(props) {
  return this.NavLinkActive(
    this.merge(
      {
        style: moreMenuLinkStyle,
      },
      props
    )
  );
}

export function NavMoreMenuLinkNested(props) {
  return this.NavMenuLink(props);
}

export function NavMoreMenuLinkNestedActive(props) {
  return this.NavMenuLinkActive(props);
}

// MobileNav

export function MobileNavLink(props) {
  return this.NavLink(props);
}

export function MobileNavSubLink(props) {
  return this.MobileNavLink(props);
}

// NavFooter

export function NavFooter(props) {
  return this.Nav(
    this.merge(
      {
        style: {
          "@xs-only": {
            display: "flex",
            flexDirection: "column",
          },
        },
      },
      props
    )
  );
}

export function NavFooterLink(props) {
  return this.Link(
    this.merge(
      {
        typography: "NavAlpha",
        style: {
          paddingVertical: "xsmall",
          paddingHorizontal: "xsmall",
          "@xs-only": {
            paddingVertical: "xxsmall",
          },
        },
      },
      props
    )
  );
}

export function NavFooterLinkActive(props) {
  return this.NavFooterLink(props);
}

// NavVertical

export function NavVerticalHeading(props) {
  return this.Heading(
    this.merge(
      {
        typography: "HeadingDelta",
        style: {
          marginBottom: "medium",
        },
      },
      props
    )
  );
}

export function NavVerticalList({ level = 0, children, ...props }) {
  level++;
  const levelStyles = {
    2: {
      marginTop: "medium",
      marginLeft: "small",
    },
    3: {
      marginTop: "xsmall",
      marginLeft: "small",
    },
  };

  return this.List(
    this.merge(
      {},
      {
        children: React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { level: level })
            : child
        ),
        level,
        style: {
          ...levelStyles[level],
        },
      },
      props
    )
  );
}

export function NavVerticalListItem({ level = 1, children, ...props }) {
  const levelStyles = {
    3: {
      marginBottom: "xsmall",
    },
  };

  return this.ListItem(
    this.merge(
      {},
      {
        children: React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { level: level })
            : child
        ),
        style: {
          listStyle: "none",
          ...levelStyles[level],
        },
      },
      props
    )
  );
}

export function NavVerticalLink({ level = 1, ...props }) {
  return this.Link(
    this.merge(
      {
        typography: level !== 1 ? "SubNavGamma" : "NavGamma",
        style: {
          display: "block",
        },
      },
      props
    )
  );
}

export function NavVerticalLinkActive(props) {
  return this.NavVerticalLink(
    this.merge(
      {
        active: true,
      },
      props
    )
  );
}

// NavHorizontal

export function NavHorizontalList(props) {
  return this.List(
    this.merge(
      {
        style: {
          textAlign: "center",
        },
      },
      props
    )
  );
}

export function NavHorizontalListItem(props) {
  return this.ListItemInline(props);
}

export function NavHorizontalLink(props) {
  return this.Link(
    this.merge(
      {
        typography: "NavGamma",
      },
      props
    )
  );
}

export function NavHorizontalLinkActive(props) {
  return this.NavHorizontalLink(
    this.merge(
      {
        active: true,
      },
      props
    )
  );
}

// NavList

export function NavListNested(props) {
  return this.List(
    this.merge(
      {
        style: {
          marginLeft: "medium",
        },
      },
      props
    )
  );
}

// NavLinkDropdown

export function NavLinkDropdown(props) {
  return this.NavLink(
    this.merge(
      {
        style: {
          display: "flex",
          alignItems: "center",
        },
      },
      props
    )
  );
}

export function NavLinkDropdownActive(props) {
  return this.NavLinkActive(
    this.merge(
      {
        style: {
          display: "flex",
          alignItems: "center",
        },
      },
      props
    )
  );
}
