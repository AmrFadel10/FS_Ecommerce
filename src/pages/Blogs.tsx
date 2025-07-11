//React & Redux
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { getBlogsApiCall } from "@redux/blogs/apiCalls/blogsApiCall";
import { cleanUpBlogs } from "@redux/blogs/slices/BlogsSlice";

// Components
import ShopByCategories from "@components/blogs/ShopByCategories";
import BlogCard from "@components/common/blogs/BlogCard";
import Loading from "@feedback/loading/Loading";

export default function Blogs() {
  const dispatch = useAppDispatch();
  const { blogs, error, loading } = useAppSelector((state) => state.blogs);

  useEffect(() => {
    const promise = dispatch(getBlogsApiCall({ limit: 5 }));
    return () => {
      promise.abort();
      dispatch(cleanUpBlogs());
    };
  }, [dispatch]);

  return (
    <Loading status={loading} error={error} type="blogsPage">
      <section className="container mx-auto my-16">
        <div className="flex gap-x-6 md:flex-row flex-col ">
          <div className="flex-1 hidden lg:block">
            <ShopByCategories />
          </div>
          <div className="flex-[5] grid sm:grid-cols-2 lg:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-4 md:gap-8  justify-start min-h-screen items-start">
            {blogs.map((blog) => {
              return <BlogCard blog={blog} key={blog._id} />;
            })}
          </div>
        </div>
      </section>
    </Loading>
  );
}
