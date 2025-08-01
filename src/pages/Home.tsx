import { lazy } from "react";
//Components
import LazyWrapper from "@feedback/lazy/LazyWrapper";
import MetaTags from "@components/common/MetaTags";
const PopularProductCollections = lazy(
  () => import("@components/home/products/popular/PopularProductsCollection")
);
const ProductsCollection = lazy(
  () => import("@components/home/products/featureAndLatest/ProductsCollection")
);
const Banner = lazy(() => import("@components/home/banner/Banner"));
const BlogsCollection = lazy(
  () => import("@components/home/blogs/BlogsCollection")
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
      <MetaTags title="Home" />
      <LazyWrapper type="banner">
        <Banner />
      </LazyWrapper>
      {/* Info */}
      <LazyWrapper type="info">
        <StoreInfoFeatures />
      </LazyWrapper>
      {/* Latest collections */}
      <LazyWrapper type="homeProducts">
        <ProductsCollection
          where={"public"}
          limit={12}
          sort="-createdAt"
          type="latest"
        />
      </LazyWrapper>
      {/* feature collections */}
      <LazyWrapper type="homeProducts">
        <ProductsCollection
          where={"public"}
          limit={12}
          sort="-sold"
          type="feature"
        />
      </LazyWrapper>
      {/* popular collections */}
      <LazyWrapper type="homeProducts">
        <PopularProductCollections where={"public"} limit={12} />
      </LazyWrapper>

      <LazyWrapper type="sponsored">
        <SponsoredFeatures />
      </LazyWrapper>
      <LazyWrapper type="homeBlogs">
        <BlogsCollection />
      </LazyWrapper>
    </section>
  );
}
