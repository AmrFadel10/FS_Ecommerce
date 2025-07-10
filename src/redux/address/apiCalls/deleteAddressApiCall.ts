import axios, { isAxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "@redux/store";

export const deleteteAddressApiCall = createAsyncThunk(
  "anAddress/delete",
  async (id: string, { rejectWithValue, signal, getState }) => {
    try {
      const { data } = await axios.delete(`/address/${id}`, {
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
