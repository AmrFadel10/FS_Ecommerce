import BlogsSkeleton from "./blogsSkeleton";
import ShopByCategorySkeleton from "../common/ShopByCategorySkeleton";

export default function BlogsPageSkeleton() {
  return (
    <section className="container mx-auto my-16">
      <div className="flex gap-6 md:flex-row flex-col items-stretch">
        <div className="flex-1 hidden lg:block">
          <ShopByCategorySkeleton />
        </div>
        <BlogsSkeleton limit={10} />
      </div>
    </section>
  );
}
