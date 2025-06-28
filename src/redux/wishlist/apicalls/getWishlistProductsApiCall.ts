import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const getWishlistProductsApiCall = createAsyncThunk(
  "wishlist/getAll",
  async (_, { rejectWithValue, signal }) => {
    try {
      const { data } = await axios.get("/user/wishlist", {
        headers: { Authorization: `Bearer ${import.meta.env.VITE_JWT}` },
        signal,
      });
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      } else {
        return rejectWithValue("an Unexpected error");
      }
    }
  }
);
