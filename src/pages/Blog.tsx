//React && Redux
import { Link, useParams } from "react-router-dom";
import { cleanUpBlog } from "@redux/blogs/slices/AblogSlice";

//Icons
import { HiOutlineArrowLeft } from "react-icons/hi";

//APIS
import { getABlog } from "@redux/blogs/apiCalls/AblogApiCall";
import Loading from "@feedback/loading/Loading";

//Components
import MetaTags from "@components/common/MetaTags";

//Hooks
import useLoadDataWithCleanup from "@hooks/useLoadDataWithCleanup";

const Blog = () => {
  const { id } = useParams();

  const { data, loading, error } = useLoadDataWithCleanup({
    getDataAction: () => getABlog({ id: id! }),
    cleanUpAction: cleanUpBlog,
    stateName: "ablog",
    id,
  });
  if (!data) return null;
  return (
    <Loading status={loading} error={error} type="commonLoading">
      <MetaTags title="Blog" />
      <section className="container py-8 mx-auto bg-zinc-50  text-center lg:text-left">
        <div className=" mx-auto w-full">
          <Link
            to="/blogs"
            className="flex datas-center gap-4 mb-20 mt-8 hover:text-gray-950  text-gray-700 font-semibold"
          >
            <HiOutlineArrowLeft size={25} /> Go back to Blogs
          </Link>
          <h3 className="font-semibold lg:text-2xl text-lg mb-16">
            {data.title}
          </h3>
          <div className="lg:h-[500px] h-[400px] my-4">
            <img
              src={data.image?.url}
              className="object-contain w-full   h-full mx-auto"
              alt="ablog"
            />
          </div>
          <p
            className="text-gray-600 text-base leading-8 lg:leading-10 md:px-8 px-3 mt-16"
            dangerouslySetInnerHTML={{ __html: data.description as string }}
          ></p>
        </div>
      </section>
    </Loading>
  );
};

export default Blog;
