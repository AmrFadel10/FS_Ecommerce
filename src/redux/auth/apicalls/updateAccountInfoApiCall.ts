import type { TUpdateAccountInfo } from "@customeTypes/auth";
import type { RootState } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const updateAccountInfoApiCall = createAsyncThunk(
  "auth/update-account",
  async (info: TUpdateAccountInfo, thunkAPI) => {
    const { rejectWithValue, signal, getState } = thunkAPI;
    try {
      const { data } = await axios.put("/user/", info, {
        headers: {
          Authorization: `Bearer ${(getState() as RootState).auth.accessToken}`,
        },
        signal,
      });
      console.log(data);
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
