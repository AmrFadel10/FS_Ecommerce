//React && Redux
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { cleanUpBlog } from "@redux/blogs/slices/BlogsSlice";
import { useAppDispatch, useAppSelector } from "@redux/hooks";

//Icons
import { HiOutlineArrowLeft } from "react-icons/hi";

//APIS
import { getABlog } from "@redux/blogs/apiCalls/AblogApiCall";

const Blog = () => {
  const { blogId } = useParams();
  const dispatch = useAppDispatch();
  const { ablog } = useAppSelector((state) => state.ablog);

  useEffect(() => {
    const promise = dispatch(getABlog({ id: blogId! }));

    return () => {
      promise.abort();
      dispatch(cleanUpBlog());
    };
  }, [blogId, dispatch]);

  return (
    <section className="container py-8 mx-auto bg-zinc-50">
      <div className=" mx-auto w-full">
        <Link
          to="/blogs"
          className="flex items-center gap-4 mb-20 mt-8 hover:text-gray-950  text-gray-700 font-semibold"
        >
          <HiOutlineArrowLeft size={25} /> Go back to Blogs
        </Link>
        <h3 className="font-semibold text-2xl mb-16"> {ablog?.title}</h3>
        <img
          src={ablog?.image?.url}
          className="object-cover  my-4 max-h-[500px] mx-auto"
          alt="ablog"
        />
        <div
          className="text-gray-800  leading-10 md:px-8 px-3 mt-16"
          dangerouslySetInnerHTML={{ __html: ablog?.description as string }}
        ></div>
      </div>
    </section>
  );
};

export default Blog;
