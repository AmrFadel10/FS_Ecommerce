import type { TProduct } from "@customeTypes/products";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

const getproductsApiCall = createAsyncThunk(
  "products/get-products",
  async (
    {
      limit,
      sort,
      category,
      brand,
      gte,
      lte,
      sr,
      page,
    }: {
      limit: number;
      sort?: string | null;
      category?: string | null;
      brand?: string | null;
      gte?: string | null;
      lte?: string | null;
      sr?: string | null;
      page?: string | null;
    },
    thunkApi
  ) => {
    const { rejectWithValue, signal } = thunkApi;
    try {
      const { data } = await axios.get<{ products: TProduct[]; count: number }>(
        `/product/?limit=${limit}&sort=${sort || "-createdAt"}${
          category ? `&category=${category}` : ""
        }${brand ? `&brand=${brand}` : ""}${lte ? `&price[lte]=${lte}` : ""}${
          gte ? `&price[gte]=${gte}` : ""
        }${sr ? `&search=${sr}` : ""}${`&page=${page ? page : ""}`}`,
        { signal }
      );
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("an Unexpected error");
      }
    }
  }
);
export const getPopularProductsApiCall = createAsyncThunk(
  "products/get-popular-products",
  async (
    {
      limit,
      category,
      sort,
    }: {
      limit: number;
      category?: string | null;
      sort: string;
    },
    thunkApi
  ) => {
    const { rejectWithValue, signal } = thunkApi;
    try {
      const { data } = await axios.get<{ products: TProduct[]; count: number }>(
        `/product/?limit=${limit}${
          category ? `&category=${category}` : ""
        }&sort=${sort}`,
        { signal }
      );
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("an Unexpected error");
      }
    }
  }
);

export default getproductsApiCall;
