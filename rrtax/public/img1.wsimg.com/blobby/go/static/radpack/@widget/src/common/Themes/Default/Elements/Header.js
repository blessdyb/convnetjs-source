export function Phone(props) {
  return this.Text(
    this.merge(
      {
        typography: "BodyBeta",
        featured: true,
        style: {
          a: {
            textDecoration: "none",
          },
        },
      },
      props
    )
  );
}

export function MembershipHeading(props) {
  return this.Text(
    this.merge(
      {
        typography: "BodyAlpha",
        style: {
          paddingHorizontal: "medium",
          paddingBottom: 0,
          cursor: "auto",
        },
      },
      props
    )
  );
}
