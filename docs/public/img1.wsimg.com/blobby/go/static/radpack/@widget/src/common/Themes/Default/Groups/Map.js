export function Map(props) {
  return this.merge(
    {
      tag: "div",
    },
    props
  );
}

export function MapBanner(props) {
  return this.Map(props);
}
