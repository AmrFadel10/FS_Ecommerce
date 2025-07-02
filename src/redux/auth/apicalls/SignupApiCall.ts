import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const SignupApiCall = createAsyncThunk(
  "auth/signup",
  async (info: FormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post<{ message: string }>(
        "/auth/signup",
        info
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      if (isAxiosError(error)) {
        console.log(error.response?.data.message);
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("Unexpected error");
      }
    }
  }
);
