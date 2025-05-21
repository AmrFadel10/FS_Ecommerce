import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const getBlogsApiCall = createAsyncThunk(
  "blogs/get-all",
  async (_, { rejectWithValue, signal }) => {
    try {
      const { data } = await axios.get("/blog/", { signal });

      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      } else {
        return rejectWithValue("Unexpected error");
      }
    }
  }
);
