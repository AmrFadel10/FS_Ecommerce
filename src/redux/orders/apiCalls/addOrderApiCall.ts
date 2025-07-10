import type { TInputsOrder, TOrder } from "@customeTypes/orders";
import type { RootState } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

const createOrderApiCall = createAsyncThunk(
  "order/create",
  async (info: TInputsOrder, { rejectWithValue, getState, signal }) => {
    try {
      const { data } = await axios.post<TOrder>("/order", info, {
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

export default createOrderApiCall;
