export type TColor =
  | "text-blue-600"
  | "text-red-600"
  | "text-green-600"
  | "text-orange-600";

export type TColorObj = {
  info: "text-blue-600";
  error: "text-red-600";
  success: "text-green-600";
  warning: "text-orange-600";
};

export type TToast = {
  title?: string;
  type: "info" | "warning" | "success" | "error";
  comment: string;
  id?: string;
  color?: TColor;
};

export type TToastState = {
  items: TToast[];
};
