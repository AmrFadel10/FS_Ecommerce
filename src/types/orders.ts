import type { TAddress } from "./address";
import type { TUser } from "./auth";
import type { TLoading } from "./common";
import type { TProduct } from "./products";

export type TOrder = {
  user: TUser;
  address: TAddress;
  orderItems: {
    product: TProduct;
    color: string;
    quantity: number;
    price: number;
  }[];
  paidAt: Date;
  totalPrice: number;

  totalPriceAfterDiscount: number;
  orderStatus: string;
};

export type TInputsOrder = {
  address: string;
  orderItems: {
    product: string;
    color: string;
    quantity: number;
    price: number;
  }[];
  paidAt: Date;
  totalPrice: number;
  totalPriceAfterDiscount: number;
};

export type TOrderIntialState = {
  loading: TLoading;
  error: string | null;
  totalPrice: number;
  shipping: number;
  order: TOrder | null;
};
