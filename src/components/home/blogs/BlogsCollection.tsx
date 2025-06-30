//React && Redux
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { cleanUpBlog } from "@redux/blogs/slices/BlogsSlice";
//APIS
import { getBlogsApiCall } from "@redux/blogs/apiCalls/blogsApiCall";

//Components
import BlogCard from "@components/common/blogs/BlogCard";
import Empty from "@components/common/Empty";
import Loading from "@feedback/loading/Loading";

const BlogsCollection = () => {
  const dispatch = useAppDispatch();
  const { blogs, error, loading } = useAppSelector((state) => state.blogs);

  useEffect(() => {
    const blogsApi = dispatch(getBlogsApiCall({ limit: 4 }));
    return () => {
      blogsApi.abort();
      dispatch(cleanUpBlog());
    };
  }, [dispatch]);

  return (
    <>
      <h3 className="text-2xl font-semibold mb-10">Our Latest News</h3>
      <Loading status={loading} error={error} size={150}>
        {blogs.length ? (
          <div className="grid md:grid-cols-3 grid-cols-1 sm-grid-cols-2 lg:grid-cols-4 gap-8 my-6">
            {blogs.map((blog) => {
              return <BlogCard blog={blog} key={blog._id} />;
            })}
          </div>
        ) : (
          <Empty size={150} />
        )}
      </Loading>
    </>
  );
};

export default BlogsCollection;
