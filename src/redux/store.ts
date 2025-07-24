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
import addresses from "./address/slices/AddressesSlice";
import AnAddress from "./address/slices/AnAddressSlice";
import coupon from "./coupon/slices/CouponSlice";
import order from "./orders/slices/OrderSlice";
import orders from "./orders/slices/OrdersSlice";

const store = configureStore({
  reducer: {
    auth,
    brands,
    coupon,
    order,
    orders,
    addresses,
    AnAddress,
    categories,
    blogs,
    ablog,
    toast,
    products,
    aProduct,
    cart,
    wishlist,
  },
  devTools: import.meta.env.MODE !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
