//React & Redux
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getWishlistProductsApiCall } from "@redux/wishlist/apicalls/getWishlistProductsApiCall";
import { cleanUpWishlist } from "@redux/wishlist/slices/wishlistSlice";

//Compontents
import ProductsList from "@components/home/products/ProductsList";

export default function Wishlist() {
  const dispatch = useAppDispatch();
  const { productFullInfo } = useAppSelector((state) => state.wishlist);

  useEffect(() => {
    const promise = dispatch(getWishlistProductsApiCall());
    return () => {
      promise.abort();
      dispatch(cleanUpWishlist());
    };
  }, [dispatch]);

  const wishlistProducts = productFullInfo.map((product) => {
    return { ...product, isLiked: true };
  });

  return (
    <section>
      <ProductsList products={wishlistProducts} />
    </section>
  );
}
