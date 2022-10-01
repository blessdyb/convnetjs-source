import React from "react";
import { UX2 } from "@wsb/guac-widget-core";

function priceIsObject(price) {
  return price !== null && typeof price === "object";
}

function hasSalePriceOld(product) {
  return (
    product["on_sale?"] &&
    product.sale_price !== null &&
    typeof product.sale_price !== "undefined"
  );
}

function hasSalePrice(product) {
  if (!priceIsObject(product.sale_price)) {
    return hasSalePriceOld(product);
  }

  return (
    product["on_sale?"] &&
    product.sale_price.numeric !== null &&
    typeof product.sale_price.numeric !== "undefined"
  );
}

export function ProductPrices({
  product,
  getStyles = () => {
    return false;
  },
  translate,
  renderMode,
  dataAids,
  styleOverrides = {},
  ...props
}) {
  if (renderMode === "DISPLAY") return null;

  const productRangeLabel = product.has_price_range
    ? translate("products.from")
    : "";
  const renderSalePrice = hasSalePrice(product);
  const { price, sale_price: salePrice } = product;

  const styles = {
    rangeLabel: {
      display: "inline-block",
      marginRight: "xsmall",
      ...(getStyles() ? { fontSize: getStyles() } : {}),
      ...styleOverrides.rangeLabel,
    },
    original: {
      display: "inline-block",
      textAlign: "center",
      ...(getStyles() ? { fontSize: getStyles() } : {}),
      ...styleOverrides.original,
    },
    sale: {
      display: "inline-block",
      marginLeft: "xsmall",
      ...(getStyles() ? { fontSize: getStyles() } : {}),
      ...styleOverrides.sale,
    },
  };

  const priceStateCheck = renderSalePrice ? { priceState: "expired" } : {};

  return this.Block(
    this.merge(
      {
        group: "Product",
        groupType: "Prices",
        children: [
          productRangeLabel && (
            <UX2.Element.Text
              key="range"
              children={productRangeLabel}
              style={styles.rangeLabel}
            />
          ),
          <UX2.Element.Price
            key="original"
            price={price}
            data-aid={dataAids.price}
            style={styles.original}
            {...priceStateCheck}
            children={priceIsObject(price) ? price.display : price}
          />,
          renderSalePrice && (
            <UX2.Element.Price
              key="sale"
              price={salePrice}
              data-aid={dataAids.salePrice}
              style={styles.sale}
              priceState="alert"
              children={
                priceIsObject(salePrice) ? salePrice.display : salePrice
              }
            />
          ),
        ],
        style: {
          marginTop: "xsmall",
          textAlign: "center",
        },
      },
      props
    )
  );
}
