import type { TLoading } from "./common";

export type Tbrand = {
  title: string;
  _id: string;
};

export type TBrandIntialState = {
  loading: TLoading;
  error: string | null;
  brand: Tbrand[] | null;
};
