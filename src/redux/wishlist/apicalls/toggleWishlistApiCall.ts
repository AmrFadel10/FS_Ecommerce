import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const toggleWishlistApiCall = createAsyncThunk(
  "wishlist/add",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.put<{ type: "removed" | "added" }>(
        "/user/wishlist",
        { prodId: id },
        { headers: { Authorization: `Bearer ${import.meta.env.VITE_JWT}` } }
      );
      return { ...data, id };
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      } else {
        return rejectWithValue("an Unexpected error");
      }
    }
  }
);
