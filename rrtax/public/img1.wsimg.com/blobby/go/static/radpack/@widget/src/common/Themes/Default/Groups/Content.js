import { spacingVertical } from "../../../utils";

export function ContentHeading(props) {
  return this.HeadingMinor(props);
}

export function ContentText(props) {
  const { richtext } = props;
  let style = {};

  if (richtext) {
    const sharedStyles = {
      textAlign: "left",
      display: "block",
      paddingLeft: "1.3em",
      marginHorizontal: "small",
      marginVertical: "auto",
    };
    style = {
      "> p > ol": sharedStyles,
      "> p > ul": sharedStyles,
      "> ul": sharedStyles,
      "> ol": sharedStyles,
    };
  }

  return this.Text(this.merge({ style }, props));
}

// Types

export function ContentBigContentBasic(props) {
  return this.ContentBasic(
    this.merge(
      {
        style: {
          ...spacingVertical("small"),
        },
      },
      props
    )
  );
}

export function ContentBigHeading(props) {
  return this.HeadingMiddle(props);
}

export function ContentBigText(props) {
  return this.TextMajor(
    this.merge(
      {
        featured: this.base.section === "overlay",
        style: {
          lineHeight: this.mapPropValue("lineHeightLevel", 4),
        },
      },
      props
    )
  );
}

export function WelcomeContentText(props) {
  return this.ContentText(props);
}

export function WelcomeContentHeading(props) {
  return this.ContentHeading(props);
}
