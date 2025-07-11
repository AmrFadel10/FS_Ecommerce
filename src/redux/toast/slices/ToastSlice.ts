import type { TColorObj, TToast, TToastState } from "@customeTypes/toast";
import { addToCart } from "@redux/cart/slices/cartSlice";
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
  extraReducers(builder) {
    builder.addCase(addToCart, (state) => {
      state.items.push({
        type: "success",
        comment: "Product has been added to the cart",
      });
    });
  },
});

export const { addToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
