import type { TUser } from "@customeTypes/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const activationAccountApiCall = createAsyncThunk(
  "auth/activation",
  async (activationToken: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<{ user: TUser; accessToken: string }>(
        "/auth/activation",
        {
          activationToken,
        }
      );
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      } else {
        return rejectWithValue("An expected error");
      }
    }
  }
);
