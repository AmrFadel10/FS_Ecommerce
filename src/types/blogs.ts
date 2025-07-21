import type { TImage, TLoading } from "./common";

//blog type
export type TBlog = {
  _id: string;
  title: string;
  description: string;
  category: string;
  numViews: number;
  isLiked: boolean;
  isDisLiked: false;
  likes: string[];
  dislikes: string[];
  image: TImage;
  auth: "admin" | "user";
  createdAt: string;
  updatedAt: string;
};

//blog
export type TAblogStateType = {
  loading: TLoading;
  error: null | string;
  data: TBlog | null;
};

//blogs
export type TBlogsIntialState = {
  loading: TLoading;
  error: null | string;
  data: TBlog[];
};
