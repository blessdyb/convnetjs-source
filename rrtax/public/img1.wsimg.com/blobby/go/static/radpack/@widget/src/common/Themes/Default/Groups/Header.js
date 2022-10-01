export function UtilitiesMenu({ hasNav, pipe, ...props }) {
  return this.merge(
    {
      style: {
        display: "flex",
        alignItems: "center",
        lineHeight: "0",
        "@md": {
          "> :first-child": {
            marginLeft: hasNav ? "medium" : pipe ? "small" : 0,
          },
        },
      },
    },
    props
  );
}

export function SocialLinks(props) {
  return this.merge(
    {
      style: {
        "> div": {
          paddingVertical: 0,
        },
      },
    },
    props
  );
}

export function HeaderMedia(props) {
  return this.merge(
    {
      style: {
        position: "relative",
      },
    },
    props
  );
}
