import React from "react";
import { UX2 } from "@wsb/guac-widget-core";
import ColorSwatch from "@wsb/guac-widget-shared/lib/components/ColorSwatch";

const commonStyles = {
  paddingTop: "small",
  display: "flex",
  alignItems: "center",
  "> :not(:last-child)": {
    marginRight: "xxsmall",
  },
};

const desktopStyles = {
  ...commonStyles,
  display: "none",
  "@sm": {
    display: "flex",
  },
};

const mobileStyles = {
  ...commonStyles,
  display: "none",
  "@xs-only": {
    display: "flex",
  },
};

export function CommerceCardColors({
  colors,
  renderColorsLabel,
  isSingleMobileColumn,
  ...props
}) {
  const getColorSwatches = (limit) => {
    const remainder = colors.length - limit;
    let swatchLimit = limit;

    if (remainder === 1) {
      swatchLimit = colors.length;
    }

    return colors.map((colorItem, idx) =>
      idx < swatchLimit ? (
        <UX2.Element.Block key={`${colorItem.color}-${idx}`}>
          <ColorSwatch color={colorItem.color} isSmall={true} />
        </UX2.Element.Block>
      ) : idx === swatchLimit ? (
        <UX2.Element.Text disabled key={`${colorItem.color}-${idx}`}>
          {renderColorsLabel({ remainder })}
        </UX2.Element.Text>
      ) : null
    );
  };

  const content = isSingleMobileColumn ? (
    <>
      <UX2.Element.Block style={commonStyles}>
        {getColorSwatches(5)}
      </UX2.Element.Block>
    </>
  ) : (
    <>
      <UX2.Element.Block style={desktopStyles}>
        {getColorSwatches(5)}
      </UX2.Element.Block>
      <UX2.Element.Block style={mobileStyles}>
        {getColorSwatches(3)}
      </UX2.Element.Block>
    </>
  );

  return this.merge(
    {
      children: content,
    },
    props
  );
}
