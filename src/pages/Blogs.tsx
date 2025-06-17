import ShopByCategories from "@components/blogs/ShopByCategories";
import BlogCard from "@components/common/blogs/BlogCard";
import { getBlogsApiCall } from "@redux/blogs/apiCalls/blogsApiCall";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { useEffect } from "react";

export default function Blogs() {
  const dispatch = useAppDispatch();
  const { blogs } = useAppSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(getBlogsApiCall({ limit: 6 }));
  }, [dispatch]);
  return (
    <section className="container mx-auto my-16">
      <div className="flex gap-6 md:flex-row flex-col items-stretch">
        <div className="flex-1 hidden lg:block">
          <ShopByCategories />
        </div>
        <div className="flex-[5] grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 md:gap-8 min-h-screen items-start">
          {blogs.map((blog) => {
            return <BlogCard blog={blog} key={blog._id} />;
          })}
        </div>
      </div>
    </section>
  );
}
