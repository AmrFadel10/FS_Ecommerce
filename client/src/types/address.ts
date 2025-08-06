import type { TError, TLoading } from "./common";

export type TAddress = {
  country: string;
  state: string;
  city: string;
  zipCode: string;
  addressLine: string;
  _id?: string;
  userId?: string;
};

export type InitialStateAddressesType = {
  addresses: TAddress[];
  loading: TLoading;
  error: TError;
};
export type InitialStateAddressType = {
  address: TAddress | null;
  loading: TLoading;
  error: TError;
};
