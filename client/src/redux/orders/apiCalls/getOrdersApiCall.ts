import type { TOrder } from "@customeTypes/orders";
import type { RootState } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

const getAllOrdersApiCall = createAsyncThunk(
  "order/get-all",
  async ({ page }: { page: string }, { rejectWithValue, getState, signal }) => {
    try {
      const { data } = await axios.get<{ orders: TOrder[]; count: number }>(
        `/order/get-my-order?${`page=${page || 1} `}`,
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

export default getAllOrdersApiCall;
