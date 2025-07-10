// React redux
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { cleanUpWishlist } from "@redux/wishlist/slices/wishlistSlice";

//APIS
import { getWishlistProductsApiCall } from "@redux/wishlist/apicalls/getWishlistProductsApiCall";

//Components
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";
import RightSideForHeader from "./RightSideForHeader";
import DropDownCategories from "./DropDownCategories";
import TopOfHeader from "./TopOfHeader";

export default function Header() {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.auth);
  const { categories } = useAppSelector((state) => state.categories);

  useEffect(() => {
    if (accessToken) {
      const wishlistApi = dispatch(getWishlistProductsApiCall());
      return () => {
        wishlistApi.abort();
        dispatch(cleanUpWishlist());
      };
    }
  }, [dispatch, accessToken]);

  return (
    <>
      <header className="relative z-[23] change-color">
        <div className="bg-gray-50 text-slate-100">
          <TopOfHeader />
          <div className="mx-auto container text-slate-300 lg:px-0 px-2">
            <div className="flex justify-between items-center py-4 lg:flex-nowrap flex-wrap gap-4">
              <div className="flex items-center gap-x-2">
                <DropDownCategories categories={categories} />
                <Link to="/" className="  rounded-full overflow-hidden block">
                  <h1 className="text-2xl text-blue-600 font-bold">Mega</h1>
                </Link>
              </div>
              <SearchForm />
              <RightSideForHeader />
            </div>
          </div>
        </div>
      </header>
      <Navigation />
    </>
  );
}
