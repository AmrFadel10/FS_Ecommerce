import type { TLoading } from "./common";

export type TCoupon = {
  name: string;
  _id: string;
  discount: number;
  expiry: Date;
};

export type TCouponIntialState = {
  loading: TLoading;
  error: string | null;
  couponDiscount: number | null;
};
