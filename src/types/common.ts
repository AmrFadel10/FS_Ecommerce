export type TLoading = "idle" | "pending" | "succeeded" | "failed";
export type TError = string | null;

export type TImage = {
  url: string;
  public_id: string;
};

export type TColor = {
  title: string;
  _id: string;
};
