import StoreInfoFeaturesSkeleton from "./StoreInfoFeaturesSkeleton";
import LayoutSkeleton from "./LayoutSkeleton";
import HomeProductsSkeleton from "../products/HomeProductsSkeleton";

const HomeSkeleton = () => {
  return (
    <section className="flex flex-col gap-y-24 pb-18 pt-8">
      <LayoutSkeleton />
      <StoreInfoFeaturesSkeleton />
      <HomeProductsSkeleton />
    </section>
  );
};

export default HomeSkeleton;
