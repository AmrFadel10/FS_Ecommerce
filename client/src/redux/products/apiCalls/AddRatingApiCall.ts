import type { TProduct } from "@customeTypes/products";
import type { RootState } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const AddRatingForAProductApiCall = createAsyncThunk(
  "aproduct/add-rating",
  async (info: { star: number; comment: string; prodId: string }, thunkApi) => {
    const { rejectWithValue, signal, getState } = thunkApi;
    try {
      const { data } = await axios.put<TProduct>("/product/rating", info, {
        signal,
        headers: {
          Authorization: `bearer ${(getState() as RootState).auth.accessToken}`,
        },
      });

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
