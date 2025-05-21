import type { TLoading } from "./common";

export type TCategory = {
  _id: string;
  title: string;
};

export type TCategoriesInitialState = {
  loading: TLoading;
  error: string | null;
  categories: TCategory[];
};
