import type { TLoading } from "@customeTypes/common";
import type { ReactNode } from "react";
import Lottie from "lottie-react";
import Error from "@assets/animations/error.json";
import ProductsListSkeleton from "@feedback/skeletons/products/ProductsListSkeleton";
import BlogsPageSkeleton from "@feedback/skeletons/blogs/BlogsPageSkeleton";
import OurStoreSkeleton from "@feedback/skeletons/ourStore/OurStoreSkeleton";
import HomeProductsSkeleton from "@feedback/skeletons/products/HomeProductsSkeleton";
import AProductPageSkeleton from "@feedback/skeletons/aProduct/AProductPageSkeleton";
import SideBarStoreSkeleton from "@feedback/skeletons/ourStore/SideBarStoreSkeleton";

const loadingComponents = {
  wishlist: () => <ProductsListSkeleton count={3} where="public" />,
  cart: () => <ProductsListSkeleton count={5} where="public" />,
  blogsPage: () => <BlogsPageSkeleton limit={8} />,
  homeProducts: () => <HomeProductsSkeleton />,
  outStore: () => <OurStoreSkeleton />,
  productPage: () => <AProductPageSkeleton />,
  sidebarProductPage: () => <SideBarStoreSkeleton />,
  productsListPage: () => <ProductsListSkeleton count={8} />,
};
type Ttype = keyof typeof loadingComponents;
const Loading = ({
  status,
  error,
  children,
  size,
  type = "wishlist",
}: {
  status: TLoading;
  error: string | null;
  children: ReactNode;
  size?: number;
  type?: Ttype;
}) => {
  const Skeleton = loadingComponents[type];
  if (status === "pending" || status === "idle") {
    return Skeleton();
  }

  if (status === "failed") {
    return (
      <div className="flex justify-center items-center gap-y-4 flex-col">
        <Lottie
          animationData={Error}
          style={{ width: size ? `${size}px` : "300px" }}
        />
        <p className="text-sm font-medium text-gray-500">{error}</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default Loading;
