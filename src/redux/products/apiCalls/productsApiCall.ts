import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

const getproductsApiCall = createAsyncThunk(
  "products/get-products",
  async ({ limit }: { limit: number }, thunkApi) => {
    const { rejectWithValue, signal } = thunkApi;
    try {
      const { data } = await axios.get(`/product/?limit=${limit}`, { signal });
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.error);
      } else {
        return rejectWithValue("an Unexpected error");
      }
    }
  }
);

export default getproductsApiCall;
