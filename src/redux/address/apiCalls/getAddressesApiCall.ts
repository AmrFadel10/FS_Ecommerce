import type { RootState } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const getAddressesApiCall = createAsyncThunk(
  "addresses/get-all",
  async (_, { rejectWithValue, signal, getState }) => {
    try {
      const { data } = await axios.get(`/address/`, {
        signal,
        headers: {
          Authorization: `bearer ${(getState() as RootState).auth.accessToken}`,
        },
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
