export const SITE = {
  name: "PrimeGearLab",
  domain: "https://primegearlab.com",
  email: "daniaengracia26377@gmail.com",
};
export const BASE_PATH = "/coswheel-ebike";
export const BASE_URL = `${SITE.domain}${BASE_PATH}`;
/** Builds an internal link that always carries the subpath, e.g. sub("/privacy") -> "/coswheel-ebike/privacy". */
export const sub = (p = "") => `${BASE_PATH}${p}`;

export const MERCHANT_ORIGIN = "https://www.coswheelebike.com";
const REF = "sca_ref=12451454.hXrs3jWqbL";
export const DEFAULT_AFFILIATE_URL = `${MERCHANT_ORIGIN}?${REF}`;

/** Appends the supplied Uppromote ref to a merchant product path (no other parameters are added). */
export function deepLink(path: string): string {
  return `${MERCHANT_ORIGIN}${path}?${REF}`;
}
