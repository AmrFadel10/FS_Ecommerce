import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
import type { TLogin, TLoginResponse } from "@customeTypes/auth";

export const LoginApiCall = createAsyncThunk(
  "auth/login",
  async (info: TLogin, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const { data } = await axios.post<TLoginResponse>("/auth/login", info, {
        signal,
      });

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
