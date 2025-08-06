import axios, { isAxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getABlog = createAsyncThunk(
  "ablog/get-ablog",
  async (arg: { id: string }, { rejectWithValue, signal }) => {
    try {
      const { data } = await axios.get("/blog/" + arg.id, { signal });
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
