import { configureStore } from "@reduxjs/toolkit";

//reducers
import categoriesReducer from "./products/slices/productsSlice";
import blogsReducer from "./blogs/slices/Blogs.Slice";
import ablogReducer from "./blogs/slices/Ablog.slice";
import productsReducer from "./products/slices/productsSlice";
import aProductReducer from "./products/slices/AProduct.Slice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    //blogs
    blogs: blogsReducer,
    ablog: ablogReducer,
    //products
    products: productsReducer,
    aProduct: aProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
