//React && Redux
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { cleanUpBlog } from "@redux/blogs/slices/AblogSlice";

//Icons
import { HiOutlineArrowLeft } from "react-icons/hi";

//APIS
import { getABlog } from "@redux/blogs/apiCalls/AblogApiCall";
import Loading from "@feedback/loading/Loading";

const Blog = () => {
  const { blogId } = useParams();
  const dispatch = useAppDispatch();
  const { ablog, loading, error } = useAppSelector((state) => state.ablog);

  useEffect(() => {
    const promise = dispatch(getABlog({ id: blogId! }));
    return () => {
      promise.abort();
      dispatch(cleanUpBlog());
    };
  }, [blogId, dispatch]);

  return (
    <Loading status={loading} error={error} type="commonLoading">
      <section className="container py-8 mx-auto bg-zinc-50  text-center lg:text-left">
        <div className=" mx-auto w-full">
          <Link
            to="/blogs"
            className="flex items-center gap-4 mb-20 mt-8 hover:text-gray-950  text-gray-700 font-semibold"
          >
            <HiOutlineArrowLeft size={25} /> Go back to Blogs
          </Link>
          <h3 className="font-semibold lg:text-2xl text-lg mb-16">
            {" "}
            {ablog?.title}
          </h3>
          <div className="lg:h-[500px] h-[400px] my-4">
            <img
              src={ablog?.image?.url}
              className="object-contain w-full   h-full mx-auto"
              alt="ablog"
            />
          </div>
          <p
            className="text-gray-600 text-base leading-8 lg:leading-10 md:px-8 px-3 mt-16"
            dangerouslySetInnerHTML={{ __html: ablog?.description as string }}
          ></p>
        </div>
      </section>
    </Loading>
  );
};

export default Blog;
