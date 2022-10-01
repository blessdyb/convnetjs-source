import React from "react";
import { UX2 } from "@wsb/guac-widget-core";

export function Rating({ rating, ...props }) {
  let numStars = 5;
  let buffer = rating;
  const starWidth = "20";
  const keyId = this.base.keyId;
  // Family2 color is yellow but for the Zillow widget it is a custom green
  const starColor =
    this.base.widgetType === "ZILLOW" ? "rgb(28,182,71)" : "#FBCF1E";
  const starEmptyColor = "rgb(224,224,224)";
  const fillValues = [];
  while (numStars--) {
    if (buffer >= 1) {
      fillValues.push(100);
    } else if (buffer < 1 && buffer > 0) {
      fillValues.push(buffer * 100);
    } else {
      fillValues.push(0);
    }
    buffer--;
  }

  // Currently the star ratings are designed to render best on a white background. Hence the category and the
  // sections are hardcoded, so is the background color. if we decide to change the star colors based on the theme
  // we will need to remove those hard coded values
  return this.merge(
    {
      tag: UX2.Element.Block,
      section: "default",
      category: "neutral",
      children: fillValues.map((fill, index) => {
        return generateStar({
          key: `star-${index}`,
          fill,
          width: starWidth,
          color: starColor,
          emptyColor: starEmptyColor,
          keyId,
        });
      }),
      style: {
        display: "flex",
        backgroundColor: "section",
      },
    },
    props
  );
}

function generateStar(options) {
  const { width, fill, color, emptyColor, key, keyId } = options;
  return (
    <div key={key} style={{ width: `${width}px` }}>
      <UX2.Element.SVG
        viewBox="0 0 50 50"
        style={{ width: "100%", height: "auto" }}
      >
        <defs>
          <linearGradient id={`fillStyle-${keyId}-${key}`}>
            {generateGradient(fill, color, emptyColor)}
          </linearGradient>
        </defs>
        <path
          d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
          fill={`url(#fillStyle-${keyId}-${key})`}
        />
      </UX2.Element.SVG>
    </div>
  );
}

function generateGradient(fill, color, emptyColor) {
  if (fill === 100) {
    return [
      <stop offset="0%" stopColor={color} key="gradient1" />,
      <stop offset="100%" stopColor={color} key="gradient2" />,
    ];
  }
  return [
    <stop offset="0%" stopColor={color} key="gradient3" />,
    <stop offset={`${fill}%`} stopColor={color} key="gradient4" />,
    <stop offset={`${fill}%`} stopColor={emptyColor} key="gradient5" />,
    <stop offset="100%" stopColor={emptyColor} key="gradient6" />,
  ];
}
