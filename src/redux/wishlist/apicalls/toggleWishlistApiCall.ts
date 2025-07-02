import type { RootState } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const toggleWishlistApiCall = createAsyncThunk(
  "wishlist/add",
  async (id: string, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.put<{ type: "removed" | "added" }>(
        "/user/wishlist",
        { prodId: id },
        {
          headers: {
            Authorization: `Bearer ${
              (getState() as RootState).auth.accessToken
            }`,
          },
        }
      );
      return { ...data, id };
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("an Unexpected error");
      }
    }
  }
);
