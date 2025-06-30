//Components
import ProductControlsPanel from "@components/common/products/ProductControlsPanel";
import SideBarStoreSkeleton from "./SideBarStoreSkeleton";
import ProductsListSkeleton from "../products/ProductsListSkeleton";

export default function OurStoreSkeleton() {
  return (
    <div className="container mx-auto mt-8 flex gap-8 animate-pulse items-start">
      <SideBarStoreSkeleton />
      <div className="flex-[4] rounded-lg w-full">
        <ProductControlsPanel />
        <ProductsListSkeleton count={8} />
      </div>
    </div>
  );
}
