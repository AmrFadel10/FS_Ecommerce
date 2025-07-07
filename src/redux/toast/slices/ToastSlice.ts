import type { TColorObj, TToast, TToastState } from "@customeTypes/toast";
import { type PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState: TToastState = {
  items: [],
};
const colors: TColorObj = {
  info: "text-blue-600",
  error: "text-red-600",
  success: "text-green-600",
  warning: "text-orange-600",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    addToast(state, action: PayloadAction<TToast>) {
      const type = action.payload.type;
      state.items.push({
        id: nanoid(),
        type: action.payload.type,
        title: action.payload.title || action.payload.type,
        comment: action.payload.comment,
        color: colors[type],
      });
    },
    removeToast(state, action: PayloadAction<string>) {
      state.items = state.items.filter((toast) => {
        return toast.id !== action.payload;
      });
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
