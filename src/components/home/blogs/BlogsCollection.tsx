//React && Redux
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { cleanUpBlog } from "@redux/blogs/slices/BlogsSlice";
//APIS
import { getBlogsApiCall } from "@redux/blogs/apiCalls/blogsApiCall";

//Components
import BlogCard from "@components/common/blogs/BlogCard";
import Empty from "@components/common/Empty";
import Loading from "@feedback/loading/Loading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BlogsCollection = () => {
  const dispatch = useAppDispatch();
  const { blogs, error, loading } = useAppSelector((state) => state.blogs);
  const blogsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const blogsApi = dispatch(getBlogsApiCall({ limit: 8 }));
    return () => {
      blogsApi.abort();
      dispatch(cleanUpBlog());
    };
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold mb-8">Our Latest News</h3>
        <div className="flex gap-x-2">
          <span
            onClick={() =>
              blogsRef.current!.scrollTo({ behavior: "smooth", left: -800 })
            }
            className="hover:cursor-pointer hover:text-slate-950 text-slate-500"
          >
            <IoIosArrowBack size={23} />
          </span>
          <span
            onClick={() =>
              blogsRef.current!.scrollTo({ behavior: "smooth", left: 800 })
            }
            className="hover:cursor-pointer hover:text-slate-950 text-slate-500"
          >
            <IoIosArrowForward size={23} />
          </span>
        </div>
      </div>
      <Loading status={loading} error={error} size={150}>
        {blogs.length ? (
          <div
            className="overflow-x-scroll scroll-smooth hide-scrollbar relative"
            ref={blogsRef}
          >
            <div className="flex gap-4 my-6  justify-start  p-2 flex-nowrap ">
              {blogs.map((blog) => {
                return <BlogCard blog={blog} key={blog._id} />;
              })}
            </div>
          </div>
        ) : (
          <Empty size={150} />
        )}
      </Loading>
    </>
  );
};

export default BlogsCollection;
