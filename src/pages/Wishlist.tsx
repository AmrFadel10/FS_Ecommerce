//React & Redux
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

//Compontents
import ProductsList from "@components/home/products/ProductsList";
import { getWishlistProductsApiCall } from "@redux/wishlist/apicalls/getWishlistProductsApiCall";

export default function Wishlist() {
  const dispatch = useAppDispatch();
  const { productFullInfo } = useAppSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getWishlistProductsApiCall());
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
