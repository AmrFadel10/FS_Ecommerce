import type { TLoading } from "./common";

export type Tbrand = {
  title: string;
  _id: string;
};

export type TBrandsIntialState = {
  loading: TLoading;
  error: string | null;
  brands: Tbrand[];
};
