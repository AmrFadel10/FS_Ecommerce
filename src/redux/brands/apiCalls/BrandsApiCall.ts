import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

const getBrandsApiCall = createAsyncThunk(
  "brands/get-brands",
  async (_, { rejectWithValue, signal }) => {
    try {
      const { data } = await axios.get("/brand", { signal });
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

export default getBrandsApiCall;
