import type { TError, TLoading } from "./common";

export type TSignup = {
  fullName: string;
  password: string;
  confirmPassword: string;
  email: string;
  mobile: string;
};
export type TLogin = {
  email: string;
  password: string;
};

export type TUser = {
  _id: string;
  fullName: string;
  mobile?: string;
  email: string;
  avatar: { public_id: string; url: string } | null;
} | null;

export type TAuthIntialState = {
  loading: TLoading;
  error: TError;
  user: TUser;
  accessToken: string | null;
  message: null | string;
};

export type TLoginResponse = {
  user: TUser;
  accessToken: string;
};

export type TUpdateAccountInfo = {
  fullName?: string;
  mobile?: string;
  password?: string;
  confirmPassword?: string;
};
