import React from "react";
import { constants } from "@wsb/guac-widget-core";

const { XS_MAX, SM_MIN, SM_MAX, MD_MIN, MD_MAX, LG_MIN, LG_MAX, XL_MIN } =
  constants.breakpoints;

export function Picture({
  xsSrc,
  smSrc = xsSrc,
  mdSrc = smSrc,
  lgSrc = mdSrc,
  xlSrc = lgSrc,
  imgSrc = mdSrc || lgSrc || xlSrc,
  imgAlt = "",
  ...props
}) {
  const { dataAid, style = {} } = props;

  return this.merge(
    {
      tag: "picture",
      ["data-aid"]: dataAid,
      style: style,
      children: (
        <React.Fragment>
          {xsSrc && (
            <source srcSet={xsSrc} media={`(max-width: ${XS_MAX}px)`} />
          )}
          {smSrc && (
            <source
              srcSet={smSrc}
              media={`(min-width: ${SM_MIN}px) and (max-width: ${SM_MAX}px)`}
            />
          )}
          {mdSrc && (
            <source
              srcSet={mdSrc}
              media={`(min-width: ${MD_MIN}px) and (max-width: ${MD_MAX}px)`}
            />
          )}
          {lgSrc && (
            <source
              srcSet={lgSrc}
              media={`(min-width: ${LG_MIN}px) and (max-width: ${LG_MAX}px)`}
            />
          )}
          {xlSrc && (
            <source srcSet={xlSrc} media={`(min-width: ${XL_MIN}px)`} />
          )}
          {imgSrc && <img src={imgSrc} alt={imgAlt} />}
        </React.Fragment>
      ),
    },
    props
  );
}
