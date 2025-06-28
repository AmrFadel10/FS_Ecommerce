//react & redux
import { useEffect } from "react";
import { useAppDispatch } from "@redux/hooks";
import { cleanUpBlog } from "@redux/blogs/slices/BlogsSlice";
import { cleanUpProducts } from "@redux/products/slices/productsSlice";
import { cleanUpWishlist } from "@redux/wishlist/slices/wishlistSlice";

//API
import { getWishlistProductsApiCall } from "@redux/wishlist/apicalls/getWishlistProductsApiCall";
import getproductsApiCall from "@redux/products/apiCalls/productsApiCall";
import { getBlogsApiCall } from "@redux/blogs/apiCalls/blogsApiCall";

//Components
import BlogsCollection from "@components/home/blogs/BlogsCollection";
import EventProductCollections from "@components/home/events/EventProductCollections";
import FeatureProductCollections from "@components/home/products/FeatureProductCollections";
import HomeLayout from "@components/home/HomeLayout";
import NewProductsCollections from "@components/home/products/NewProductsCollections";
import SponsoredFeatures from "@components/home/SponsoredFeatures";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getproductsApiCall({ limit: 5 }));
    dispatch(getBlogsApiCall({ limit: 4 }));
    dispatch(getWishlistProductsApiCall());

    return () => {
      dispatch(cleanUpBlog());
      dispatch(cleanUpProducts());
      dispatch(cleanUpWishlist());
    };
  }, [dispatch]);

  return (
    <section className="flex flex-col gap-y-24 pb-18 pt-8">
      <HomeLayout />
      {/* feature collections */}
      <FeatureProductCollections where={"Home"} />
      {<NewProductsCollections />}
      {/* Special products */}
      <EventProductCollections />
      <SponsoredFeatures />
      <BlogsCollection />
    </section>
  );
}
