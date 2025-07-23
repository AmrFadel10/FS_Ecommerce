import type { TProduct } from "@customeTypes/products";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const getAProductApiCall = createAsyncThunk(
  "aproduct/get-one",
  async ({ id, userId }: { id: string; userId?: string }, thunkApi) => {
    const { rejectWithValue, signal } = thunkApi;
    try {
      const { data } = await axios.post<{
        product: TProduct;
        AddingReview: boolean;
      }>("/product/" + id, { userId }, { signal });

      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("Unexpected error");
      }
    }
  }
);
