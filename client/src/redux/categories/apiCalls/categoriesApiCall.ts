import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

const getCategoriesApiCall = createAsyncThunk(
  "categories/get-categories",
  async (_, thunkApi) => {
    const { rejectWithValue, signal } = thunkApi;
    try {
      const { data } = await axios.get("/category/", { signal });
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

export default getCategoriesApiCall;
