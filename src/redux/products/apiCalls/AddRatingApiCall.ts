import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const AddRatingForAProductApiCall = createAsyncThunk(
  "aproduct/add-rating",
  async (info, thunkApi) => {
    const { rejectWithValue, signal } = thunkApi;
    try {
      const { data } = await axios.put("/product/rating", info, { signal });

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
