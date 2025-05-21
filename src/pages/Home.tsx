//Hooks
import { useEffect } from "react";
import { useAppDispatch } from "@redux/hooks";
import getproductsApiCall from "@redux/products/apiCalls/productsApiCall";
import { getBlogsApiCall } from "@redux/blogs/apiCalls/blogs.ApiCall";

//Components
import BlogsCollection from "@components/home/blogs/BlogsCollection";
import EventProductCollections from "@components/home/events/EventProductCollections";
import FeatureProductCollections from "@components/home/products/FeatureProductCollections";
import HomeLayout from "@components/home/HomeLayout";
import NewProductsCollections from "@components/home/products/NewProductsCollections";
import SponsoredFeatures from "@components/home/SponsoredFeatures";
import StoreBenefitsFeatures from "@components/home/StoreBenefitsFeatures";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getproductsApiCall({ limit: 5 }));
    dispatch(getBlogsApiCall());
  }, [dispatch]);

  return (
    <>
      <HomeLayout />
      <StoreBenefitsFeatures />
      {/* feature collections */}
      <FeatureProductCollections where={"Home"} />
      {<NewProductsCollections />}
      {/* Special products */}
      <EventProductCollections />
      <SponsoredFeatures />
      <BlogsCollection />
    </>
  );
}
