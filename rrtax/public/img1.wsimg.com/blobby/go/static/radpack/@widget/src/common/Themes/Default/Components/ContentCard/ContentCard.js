import React from "react";
import { UX2, utils } from "@wsb/guac-widget-core";
import { clone, get, isNil, isPlainObject, merge, sortBy } from "lodash";
import { spacingVertical } from "../../../../utils";
import ContentHeading from "../common/ContentHeading";
import ContentText from "../common/ContentText";
import ContentAction from "../common/ContentAction";
import Image from "./Image";
import { CARD_BACKGROUND } from "../../../../constants/cardImageTypes";
import { ACCENT } from "../../../../constants/overlayTypes";

const { getSelectedVideoProps } = utils;

export function ContentCard({
  heading,
  text,
  action,
  image,
  video,
  alignment = "center",
  longestHeadingMap = new Map(),
  columnCountMap,
  ...props
}) {
  const { widgetPreset } = this.base;
  const flexAlignMap = {
    left: "flex-start",
    right: "flex-end",
  };
  const headingHeightSyncStyles = {
    width: "inherit",
    top: 0,
    "@sm": { position: "absolute" },
  };
  const headingEl = heading && (
    <ContentHeading
      style={longestHeadingMap.size ? headingHeightSyncStyles : {}}
      key="heading"
      heading={heading}
    />
  );
  const imageEl = image && (
    <Image key="image" image={image} widgetPreset={widgetPreset} />
  );
  const videoEl = video && (
    <UX2.Component.Video
      containerStyle={{ "@sm": { paddingBottom: "50%" } }}
      {...getSelectedVideoProps(video)}
      columnCountMap={columnCountMap}
    />
  );
  if (action && isPlainObject(text)) {
    text.style = { flexGrow: 0 };
  }
  const textEl = text && text.children && (
    <ContentText key="description" text={text} />
  );
  const contentActionAlignment = widgetPreset === "about1" ? { alignment } : {};
  const ctaEl = action && (
    <ContentAction key="action" action={action} {...contentActionAlignment} />
  );
  const resolvedHeadingElement = longestHeadingMap.size ? (
    <UX2.Element.Block
      key="heading"
      style={{
        order: headingEl && headingEl.style && headingEl.style.order,
        width: "100%",
        position: "relative",
        "> :nth-child(n)": { marginBottom: 0 },
        ...(!headingEl ? { display: "none" } : {}),
        ...(longestHeadingMap.has("sm")
          ? { "@sm-only": { display: "block" } }
          : {}),
        ...(longestHeadingMap.has("md") ? { "@md": { display: "block" } } : {}),
      }}
    >
      {[headingEl, Array.from(longestHeadingMap.values())]}
    </UX2.Element.Block>
  ) : (
    headingEl
  );
  const mappedComponents = [
    [heading, resolvedHeadingElement],
    [image, imageEl],
    [video, videoEl],
    [text, textEl],
    [action, ctaEl],
  ].filter((tuple) => tuple[1]);
  // sort by style.order in order for > :last-child selector to work correctly
  const children = sortBy(mappedComponents, (tuple) => {
    const orderStyle = get(tuple[0], "style.order", 0);
    return isNil(orderStyle) ? 0 : orderStyle;
  }).map((tuple) => tuple[1]);
  let tag = UX2.Element.Block;
  let style = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: flexAlignMap[alignment] || alignment,
    textAlign: alignment,
    justifyContent: "flex-start",
    width: "100%",
    "> *": {
      maxWidth: "100%",
    },
    ...spacingVertical("medium"),
    "@xs-only": spacingVertical(widgetPreset === "about3" ? "small" : "medium"),
  };

  let additionalProps = {};
  const {
    src,
    type,
    overlay = ACCENT,
    overlayAlpha,
    style: imageStyle,
    imageData,
    ...otherProps
  } = image || {};
  if (type === CARD_BACKGROUND) {
    tag = UX2.Component.Background;
    additionalProps = {
      overlay: overlay || ACCENT,
      groupType: "OverlayCard",
      overlayAlpha: overlayAlpha,
      imageData,
      ...otherProps,
    };
    if (src || (imageData && imageData.image)) {
      additionalProps.category = "accent";
      additionalProps.section = "overlay";
    }
    style = merge(
      style,
      {
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        paddingHorizontal: "xlarge",
        paddingVertical: "xxxlarge",
        ["@md-only"]: {
          paddingHorizontal: "large", // Give slightly more space for content at the md breakpoint as it has the thinnest cards
        },
      },
      imageStyle
    );
    const imageIndex = children.findIndex((ele) => ele.key === "image");
    // splice out the child image component to prevent extra child margin
    !isNil(imageIndex) && children.splice(imageIndex, 1);
  }

  return this.merge(
    {
      tag,
      group: "Content",
      groupType: "Card",
      children,
      style,
    },
    additionalProps,
    props
  );
}

function findLargestTitleInRow(cards = [], numColumns) {
  const chunkGroups = (perLine) => {
    const cloned = clone(cards);
    return new Array(Math.ceil(cards.length / perLine))
      .fill()
      .map(() => cloned.splice(0, perLine))
      .map((set) =>
        set.reduce(
          (acc, cur) =>
            (cur.heading &&
              cur.heading.children &&
              cur.heading.children.length) > acc.length
              ? cur.heading.children
              : acc,
          ""
        )
      );
  };

  return {
    sm: chunkGroups(2),
    md: chunkGroups(numColumns),
  };
}

function getChunkGroup(perLine, index) {
  return Math.floor(index / perLine);
}

function getCardsPerLine(numberOfCards, numColumns) {
  if (numberOfCards === 5 && numColumns === 4) {
    return 3;
  } else if (numberOfCards === 4 && numColumns === 3) {
    return 2;
  }
  return numColumns;
}

export function ContentCards({
  cards = [],
  cellStyle = {},
  numColumns,
  pushCells = true,
  ...props
}) {
  const isSingleCard = cards.length === 1;
  const cardsPerLine = getCardsPerLine(cards.length, numColumns || 3);

  const longestTitles = findLargestTitleInRow(cards, cardsPerLine);
  const columnCountMap = {
    "@md": isSingleCard ? 1 : cardsPerLine,
    "@sm": isSingleCard ? 1 : 2,
  };
  const data = cards.map((child, i) => {
    const { style = {}, id, ...otherProps } = child;
    const sharedHeadingStyles = {
      visibility: "hidden",
      position: "absolute",
      marginBottom: "medium",
      width: "inherit",
      top: 0,
    };
    const mdTitle = longestTitles.md[getChunkGroup(cardsPerLine, i)];
    const smTitle = longestTitles.sm[getChunkGroup(2, i)];
    const longestHeadingMap = new Map();
    if (cards.length > 1) {
      if (mdTitle) {
        longestHeadingMap.set(
          "md",
          <ContentHeading
            key="hidden-heading-md"
            style={{ ...sharedHeadingStyles, "@md": { position: "relative" } }}
            heading={mdTitle}
          />
        );
      }
      if (smTitle) {
        longestHeadingMap.set(
          "sm",
          <ContentHeading
            key="hidden-heading-sm"
            style={{
              ...sharedHeadingStyles,
              "@sm-only": { position: "relative" },
            }}
            heading={smTitle}
          />
        );
      }
    }
    return (
      <UX2.Component.ContentCard
        key={id || i}
        style={{ flexGrow: 1, ...style }}
        longestHeadingMap={longestHeadingMap}
        columnCountMap={columnCountMap}
        {...otherProps}
      />
    );
  });
  const newProps = {
    data,
    cellStyle: { display: "flex", ...cellStyle },
    style: {
      "@xs-only": spacingVertical("medium"),
    },
  };
  if (numColumns) {
    // apply a pull/push 0.001 to slightly offset on the grid to force cards to go to the following line while keeping consistent card dimensions
    newProps.cellProps = {
      xs: 12,
      sm: 6,
      md: 12 / numColumns,
      ...(pushCells && data.length === numColumns + 1
        ? { pushMd: 0.001, pullMd: 0.001 }
        : {}),
    };
    newProps.style = {
      ...newProps.styles,
      justifyContent: data.length <= numColumns + 1 ? "center" : "flex-start",
    };
  }
  return this.ContentWrap(this.merge(newProps, props));
}
