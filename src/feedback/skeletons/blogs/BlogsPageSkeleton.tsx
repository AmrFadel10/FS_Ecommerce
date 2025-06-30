import ShopByCategorySkeleton from "../common/ShopByCategorySkeleton";
import BlogsSkeleton from "./blogsSkeleton";

export default function BlogsPageSkeleton({ limit }: { limit: number }) {
  return (
    <div className="container mx-auto flex gap-x-6 md:flex-row flex-col mt-10">
      <div className="flex-1 hidden lg:block">
        <ShopByCategorySkeleton />
      </div>
      <BlogsSkeleton limit={limit} where={"blogs"} />
    </div>
  );
}
