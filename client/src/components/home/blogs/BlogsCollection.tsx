//React && Redux
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { cleanUpBlogs } from "@redux/blogs/slices/BlogsSlice";
//APIS
import { getBlogsApiCall } from "@redux/blogs/apiCalls/blogsApiCall";
//Components
import BlogCard from "@components/common/blogs/BlogCard";
import Loading from "@feedback/loading/Loading";
import GridList from "@components/common/GridList";
import AboveArrowsToRightAndLeft from "../products/featureAndLatest/AboveArrowsToRightAndLeft";
import Heading from "@components/common/Heading";

const BlogsCollection = () => {
  const dispatch = useAppDispatch();
  const { data, error, loading } = useAppSelector((state) => state.blogs);
  const blogsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const blogsApi = dispatch(getBlogsApiCall({ limit: 8 }));
    return () => {
      blogsApi.abort();
      dispatch(cleanUpBlogs());
    };
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-between items-center ">
        <Heading title={"Our Latest News"} />
        <AboveArrowsToRightAndLeft refItem={blogsRef} length={data.length} />
      </div>
      <Loading status={loading} error={error} size={150} type="homeBlogs">
        <div
          className="overflow-x-scroll scroll-smooth hide-scrollbar relative"
          ref={blogsRef}
        >
          <GridList
            items={data}
            where="public"
            Component={BlogCard}
            loading={loading}
          />
        </div>
      </Loading>
    </>
  );
};

export default BlogsCollection;
