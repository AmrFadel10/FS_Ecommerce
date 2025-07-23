import type { TUser } from "./auth";
import type { TColor, TImage, TLoading } from "./common";

export type TProduct = {
  _id: string;
  title: string;
  description?: string;
  price: number;
  discountPrice?: number;
  brand: string;
  category: string;
  quantity: number;
  sold: number;
  images: TImage[];
  color: TColor[];
  ratings: {
    star: number;
    comment: string;
    postedby: TUser;
  }[];
  totalrating: number;
};

export type TProductsInitialState = {
  loading: TLoading;
  error: string | null;
  data: TProduct[];
  count: number | null;
};
export type TAProductsInitialState = {
  loading: TLoading;
  AddingReview: boolean;
  error: string | null;
  data: TProduct | null;
};

export type TRatings = {
  star: number;
  comment: string;
  postedby: TUser;
};
