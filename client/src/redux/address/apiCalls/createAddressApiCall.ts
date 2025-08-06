import axios, { isAxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TAddress } from "@customeTypes/address";
import type { RootState } from "@redux/store";

export const addAddressApiCall = createAsyncThunk(
  "anAddress/add",
  async (info: TAddress, { rejectWithValue, signal, getState }) => {
    try {
      const { data } = await axios.post("/address", info, {
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
