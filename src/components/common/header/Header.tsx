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

export default function Header() {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.auth);
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
        <div className="bg-slate-950 text-slate-100">
          <div className="mx-auto container text-slate-300 lg:px-0 px-2">
            <div className="flex justify-between items-center py-4 lg:flex-nowrap flex-wrap gap-4">
              <div className="hidden sm:block">
                <Link
                  to="/"
                  className=" md:w-10 w-8 md:h-10 h-8 rounded-full overflow-hidden block"
                >
                  <img
                    src="/logo.png"
                    alt=""
                    className="object-cover w-full h-full "
                  />
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
