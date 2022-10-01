import {
  LIGHTER,
  LIGHT,
  NORMAL,
  BOLD,
  BOLDER,
} from "../../../../../constants/font/weights";

const CACHE = {};

export default function getWeightSizes(weight, weights = []) {
  let center = weights.indexOf(weight);
  if (center === -1) {
    weights.unshift(weight);
    center = 0;
  }
  const cacheKey = [weight, ...weights].join();
  if (!(cacheKey in CACHE)) {
    const lights = weights.slice(0, center + 1);
    const lightsLen = lights.length;
    const bolds = weights.slice(center);
    const boldsLen = bolds.length;
    CACHE[cacheKey] = {
      [LIGHTER]: lights[0],
      [LIGHT]: (lightsLen > 1 && lights[Math.round(lightsLen / 3)]) || weight,
      [NORMAL]: weight,
      [BOLD]: (boldsLen > 1 && bolds[Math.round(boldsLen / 3)]) || weight,
      [BOLDER]: bolds[boldsLen - 1],
    };
  }
  return CACHE[cacheKey];
}
