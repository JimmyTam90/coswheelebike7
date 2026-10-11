export type Specs = {
  topSpeed: string;
  range: string;
  motor: string;
  battery: string;
  tires: string;
  suspension: string;
  torque: string;
  brakes: string;
};

export type Product = {
  id: string;
  name: string;
  type: string;
  productUrl: string;
  affiliateUrl: string;
  /** DEEP_LINKS_VERIFIED was declared by the account owner; attribution has not been independently tested. */
  affiliateStatus: "USER_DECLARED_VERIFIED";
  availability: "in_stock";
  lastVerified: string;
  price: number;
  was?: number;
  image: string;
  alt: string;
  rating?: string;
  /** Merchant-listed torque in N·m, used to pick "high-torque" models. */
  torqueNm: number;
  hydraulicBrakes: boolean;
  /** true only where the merchant page/FAQ states the battery can be removed and charged separately. */
  removableBattery?: boolean;
  specs: Specs;
};
