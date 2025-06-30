//React & Redux
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";

//APIS
import { getWishlistProductsApiCall } from "@redux/wishlist/apicalls/getWishlistProductsApiCall";
import getproductsApiCall from "@redux/products/apiCalls/productsApiCall";
import { cleanUpProducts } from "@redux/products/slices/productsSlice";
import { cleanUpWishlist } from "@redux/wishlist/slices/wishlistSlice";

//Components
import ProductsList from "./ProductsList";

const FeatureProductCollections = ({
  where,
  limit,
}: {
  where: string | null;
  limit?: number;
}) => {
  const { products } = useAppSelector((state) => state.products);
  const { items } = useAppSelector((state) => state.wishlist);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const productsApi = dispatch(getproductsApiCall({ limit: limit! }));
    const wishlistApi = dispatch(getWishlistProductsApiCall());
    return () => {
      productsApi.abort();
      wishlistApi.abort();
      dispatch(cleanUpProducts());
      dispatch(cleanUpWishlist());
    };
  }, [dispatch]);

  const homeProducts = products.map((product) => {
    return { ...product, isLiked: items.includes(product._id) };
  });

  return (
    <>
      <h3 className="text-2xl font-semibold ">
        {where === "productPage" ? "You may also like" : "Featured Collection"}
      </h3>
      <ProductsList products={homeProducts} />
    </>
  );
};

export default FeatureProductCollections;
