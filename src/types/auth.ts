import type { TError, TLoading } from "./common";

export type TSignup = {
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  email: string;
  image: File | null;
};
export type TLogin = {
  email: string;
  password: string;
};

export type TUser = {
  firstName: string;
  lasstName: string;
  email: string;
} | null;

export type TAuthIntialState = {
  loading: TLoading;
  error: TError;
  user: TUser;
  accessToken: string | null;
};

export type TLoginResponse = {
  user: TUser;
  accessToken: string;
};
