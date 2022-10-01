import { get } from "lodash";

function fontDial(key) {
  const { fontDials = [], locale, language } = this.base;
  const overrides = { locale, language };
  let dial = false;
  fontDials.some((fDial) => {
    const meta =
      (fDial &&
        fDial.getMetaWithOverrides &&
        fDial.getMetaWithOverrides(overrides)) ||
      (fDial && fDial.meta);
    const val = meta && get(meta, key, void 0);

    if (val) {
      dial = val;
    }
    return dial;
  });

  return dial ? dial : key;
}

export default {
  fontDial,
};
