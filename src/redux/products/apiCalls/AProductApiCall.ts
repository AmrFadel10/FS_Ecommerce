import type { TProduct } from "@customeTypes/products";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const getAProductApiCall = createAsyncThunk(
  "aproduct/get-one",
  async ({ id }: { id: string }, thunkApi) => {
    const { rejectWithValue, signal } = thunkApi;
    try {
      const { data } = await axios.get<TProduct>("/product/" + id, { signal });
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
