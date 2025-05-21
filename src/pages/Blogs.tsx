import ShopByCategories from "@components/blogs/ShopByCategories";
import BlogCard from "@components/common/blogs/BlogCard";

export default function Blogs() {
  return (
    <section className="container mx-auto my-8">
      <div className="flex gap-6 md:flex-row flex-col items-stretch">
        <div className="flex-1 hidden lg:block">
          <ShopByCategories />
        </div>
        <div className="flex-[5] grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 md:gap-8 min-h-screen items-start">
          <BlogCard />
        </div>
      </div>
    </section>
  );
}
