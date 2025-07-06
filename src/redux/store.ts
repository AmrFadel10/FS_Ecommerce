import { configureStore } from "@reduxjs/toolkit";

//reducers
import categories from "./categories/slices/categoriesSlice";
import blogs from "./blogs/slices/BlogsSlice";
import ablog from "./blogs/slices/AblogSlice";
import products from "./products/slices/productsSlice";
import aProduct from "./products/slices/AProductSlice";
import cart from "./cart/slices/cartSlice";
import wishlist from "./wishlist/slices/wishlistSlice";
import auth from "./auth/slices/AuthSlice";
import toast from "./toast/slices/ToastSlice";
import brands from "./brands/slices/BrandsSlice";

const store = configureStore({
  reducer: {
    auth,
    brands,
    categories,
    blogs,
    ablog,
    toast,
    products,
    aProduct,
    cart,
    wishlist,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
