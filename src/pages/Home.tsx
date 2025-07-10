import { lazy } from "react";

//Components
const LazyWrapper = lazy(() => import("@feedback/lazy/LazyWrapper"));
const PopularProductCollections = lazy(
  () => import("@components/home/products/PopularProductsCollection")
);
const LatestPorductsCollection = lazy(
  () => import("@components/home/products/LatestProductsCollection")
);
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
    <section className="flex flex-col gap-y-10 pb-18 pt-8">
      <LazyWrapper type="banner">
        <Banner />
      </LazyWrapper>

      {/* Info */}
      <LazyWrapper type="info">
        <StoreInfoFeatures />
      </LazyWrapper>

      {/* popular collections */}
      <LazyWrapper type="homeProducts">
        <PopularProductCollections where={"public"} limit={12} />
      </LazyWrapper>

      {/* feature collections */}
      <LazyWrapper type="homeProducts">
        <FeatureProductCollections where={"public"} limit={12} />
      </LazyWrapper>

      <LazyWrapper type="homeProducts">
        <LatestPorductsCollection where={"public"} limit={12} />
      </LazyWrapper>

      {/* {<NewProductsCollections />} */}
      {/* Special products */}
      {/* <EventProductCollections /> */}
      <LazyWrapper type="sponsored">
        <SponsoredFeatures />
      </LazyWrapper>
      <LazyWrapper type="homeBlogs">
        <BlogsCollection />
      </LazyWrapper>
    </section>
  );
}
