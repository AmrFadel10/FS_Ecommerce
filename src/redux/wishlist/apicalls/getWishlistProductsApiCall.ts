import type { RootState } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const getWishlistProductsApiCall = createAsyncThunk(
  "wishlist/getAll",
  async (_, { rejectWithValue, signal, getState }) => {
    try {
      const { data } = await axios.get("/user/wishlist", {
        headers: {
          Authorization: `Bearer ${(getState() as RootState).auth.accessToken}`,
        },
        signal,
      });
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
