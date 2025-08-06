import axios, { isAxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TAddress } from "@customeTypes/address";
import type { RootState } from "@redux/store";

export const updateAddressApiCall = createAsyncThunk(
  "anAddress/update",
  async (info: TAddress, { rejectWithValue, signal, getState }) => {
    try {
      const { data } = await axios.put(`/address/${info._id}`, info, {
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
