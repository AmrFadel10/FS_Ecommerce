import { lazy } from "react";

//Components
import NewProductsCollections from "@components/home/products/NewProductsCollections";
import LazyWrapper from "@feedback/lazy/LazyWrapper";
import EventProductCollections from "@components/home/events/EventProductCollections";
const Banner = lazy(() => import("@components/home/banner/Banner"));
const BlogsCollection = lazy(
  () => import("@components/home/blogs/BlogsCollection")
);
const FeatureProductCollections = lazy(
  () => import("@components/home/products/FeatureProductCollections")
);
const SponsoredFeatures = lazy(
  () => import("@components/home/SponsoredFeatures")
);
const StoreInfoFeatures = lazy(
  () => import("@components/home/StoreBenefitsFeatures")
);

export default function Home() {
  return (
    <section className="flex flex-col gap-y-24 pb-18 pt-8">
      <LazyWrapper type="banner">
        <Banner />
      </LazyWrapper>

      {/* Info */}
      <LazyWrapper type="info">
        <StoreInfoFeatures />
      </LazyWrapper>
      {/* feature collections */}
      <LazyWrapper type="homeProducts">
        <FeatureProductCollections where={"Home"} limit={5} />
      </LazyWrapper>

      {<NewProductsCollections />}
      {/* Special products */}
      <EventProductCollections />
      <LazyWrapper type="sponsored">
        <SponsoredFeatures />
      </LazyWrapper>
      <LazyWrapper type="homeBlogs">
        <BlogsCollection />
      </LazyWrapper>
    </section>
  );
}
