import type { RootState } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

const checkCouponIsAvailableApiCall = createAsyncThunk(
  "coupon/check",
  async (name: string, { rejectWithValue, getState, signal }) => {
    try {
      const { data } = await axios.post<number>(
        "/coupon",
        { name },
        {
          signal,
          headers: {
            Authorization: `bearer ${
              (getState() as RootState).auth.accessToken
            }`,
          },
        }
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

export default checkCouponIsAvailableApiCall;
