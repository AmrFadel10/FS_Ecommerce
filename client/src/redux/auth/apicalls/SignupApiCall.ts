import type { TSignup } from "@customeTypes/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const SignupApiCall = createAsyncThunk(
  "auth/signup",
  async (info: TSignup, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post<{ message: string }>(
        "/auth/signup",
        info
      );
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
