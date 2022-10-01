import React, { Fragment } from "react";
import { UX2 } from "@wsb/guac-widget-core";

const styles = {
  eyebrow: {
    marginBottom: "xsmall",
    textTransform: "uppercase",
  },
  priceRowLeft: {
    display: "flex",
    flexDirection: "column",
  },
  priceRowRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  eventDate: {
    marginTop: "xxsmall",
  },
  footer: {
    marginTop: "small",
  },
  button: {
    marginTop: "xsmall",
  },
};

export function CommerceCardContent({
  name,
  duration,
  eventDate,
  price,
  salePrice,
  priceText,
  productType,
  eyebrowText,
  footerText,
  footerAlert,
  ratings,
  colors,
  renderColorsLabel,
  cardSize,
  cardType,
  isBoxed,
  dataAids = {},
  dataRoutes = {},
  buttonText,
  isPriceShown,
  isImageShown,
  linkText,
  linkCategory,
  isPriceFeatured,
  style,
  hasImage,
  titleProps,
  ratingsAlignLeft,
  ...props
}) {
  const layoutStyles =
    !hasImage && isBoxed
      ? {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          marginVertical: "large",
        }
      : {};

  const componentStyles = this.merge(
    {
      position: "relative",
      paddingHorizontal: isBoxed ? "small" : "0",
      paddingBottom: isBoxed && hasImage ? "medium" : "0",
      ...layoutStyles,
    },
    style
  );

  const PriceRowComponent =
    isPriceShown && ratings ? UX2.Element.Block : Fragment;

  const priceRowProps = isPriceShown &&
    ratings && {
      style: ratingsAlignLeft ? styles.priceRowLeft : styles.priceRowRight,
    };

  const hasColors = Boolean(colors?.length);
  const isSingleMobileColumn = cardSize?.xs === "large";

  const content = (
    <>
      {eyebrowText && (
        <UX2.Element.Details.Minor
          style={styles.eyebrow}
          data-aid={dataAids.eyebrow}
        >
          {eyebrowText}
        </UX2.Element.Details.Minor>
      )}
      <UX2.Component.CommerceCardTitle
        title={name}
        isDigitalProduct={productType === "digital"}
        dataAids={dataAids}
        {...titleProps}
      />
      {eventDate && (
        <UX2.Element.Details.Minor
          style={styles.eventDate}
          data-aid={dataAids.eventDate}
        >
          {eventDate}
        </UX2.Element.Details.Minor>
      )}
      <PriceRowComponent {...priceRowProps}>
        {isPriceShown && (
          <UX2.Component.CommerceCardPriceDisplay
            price={price}
            salePrice={salePrice}
            priceText={priceText}
            duration={duration}
            isLinkShown={Boolean(linkText)}
            cardType={cardType}
            dataAids={dataAids}
            isPriceFeatured={isPriceFeatured}
            styles={{ marginRight: ratings ? "xxsmall" : "0" }}
          />
        )}
        {ratings && <UX2.Element.Block>{ratings}</UX2.Element.Block>}
      </PriceRowComponent>
      {hasColors && (
        <UX2.Component.CommerceCardColors
          colors={colors}
          renderColorsLabel={renderColorsLabel}
          isSingleMobileColumn={isSingleMobileColumn}
          data-aid={dataAids.colorSwatches}
        />
      )}
      {footerText && (
        <UX2.Element.Details.Minor
          style={styles.footer}
          data-aid={dataAids.footer}
          alert={footerAlert}
        >
          {footerText}
        </UX2.Element.Details.Minor>
      )}
      {buttonText && (
        <UX2.Element.Button.Spotlight
          style={styles.button}
          data-aid={dataAids.button}
          data-route={dataRoutes.button}
        >
          {buttonText}
        </UX2.Element.Button.Spotlight>
      )}
      {linkText && (
        <UX2.Element.MoreLink
          category={linkCategory}
          section={isImageShown ? "overlay" : "default"}
          tag="span"
        >
          {linkText}
        </UX2.Element.MoreLink>
      )}
    </>
  );

  return this.Block(
    this.merge(
      {
        children: content,
        style: componentStyles,
      },
      props
    )
  );
}
