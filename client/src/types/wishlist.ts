import type { TLoading } from "./common";
import type { TProduct } from "./products";

export type TWishlistSlice = {
  items: string[];
  loading: TLoading;
  error: null | string;
  productFullInfo: TProduct[];
};
