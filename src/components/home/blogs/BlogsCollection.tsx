import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { useEffect } from "react";
import { getBlogsApiCall } from "@redux/blogs/apiCalls/blogsApiCall";
import BlogCard from "@components/common/blogs/BlogCard";
import { cleanUpBlog } from "@redux/blogs/slices/BlogsSlice";

const BlogsCollection = () => {
  const dispatch = useAppDispatch();
  const { blogs } = useAppSelector((state) => state.blogs);

  useEffect(() => {
    const blogsApi = dispatch(getBlogsApiCall({ limit: 4 }));
    return () => {
      blogsApi.abort();
      dispatch(cleanUpBlog());
    };
  }, [dispatch]);

  return (
    <section>
      <h3 className="text-2xl font-semibold ">Our Latest News</h3>
      <div className="grid md:grid-cols-3 grid-cols-1 sm-grid-cols-2  lg:grid-cols-4  gap-8 my-10">
        {blogs.map((blog) => {
          return <BlogCard blog={blog} key={blog._id} />;
        })}
      </div>
    </section>
  );
};

export default BlogsCollection;
