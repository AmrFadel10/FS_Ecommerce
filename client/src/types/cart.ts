import type { TImage, TLoading } from "./common";
import type { TProduct } from "./products";

export type TCartInitialState = {
  loading: TLoading;
  error: string | null;
  getProductFullInfo: TProduct[];
  data: { [id: string]: { [color: string]: number } };
};

export type TProductCart = {
  _id: string;
  title: string;
  price: number;
  discountPrice?: number;
  brand: string;
  category: string;
  quantity: number;
  sold: number;
  images: TImage[];
  color: string;
};

export type TQuantityForm = {
  count: number;
  _id: string;
  color: string;
};
