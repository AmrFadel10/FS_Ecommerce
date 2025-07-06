import type { TColor, TImage, TLoading } from "./common";

export type TProduct = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  discountPrice?: number;
  brand: string;
  category: string;
  quantity: number;
  sold: number;
  images: TImage[];
  color: TColor[];
};

export type TProductsInitialState = {
  loading: TLoading;
  error: string | null;
  products: TProduct[];
  count: number | null;
};
export type TAProductsInitialState = {
  loading: TLoading;
  error: string | null;
  aproduct: TProduct | null;
};
