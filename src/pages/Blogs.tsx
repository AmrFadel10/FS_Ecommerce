//React & Redux
import { getBlogsApiCall } from "@redux/blogs/apiCalls/blogsApiCall";
import { cleanUpBlogs } from "@redux/blogs/slices/BlogsSlice";
//Hooks
import useLoadDataWithCleanup from "@hooks/useLoadDataWithCleanup";

// Components
import BlogCard from "@components/common/blogs/BlogCard";
import Loading from "@feedback/loading/Loading";
import HeadTags from "@components/common/MetaTags";
import GridList from "@components/common/GridList";
import MetaTags from "@components/common/MetaTags";

export default function Blogs() {
  const { data, loading, error } = useLoadDataWithCleanup({
    getDataAction: () => getBlogsApiCall({ limit: 10 }),
    cleanUpAction: cleanUpBlogs,
    stateName: "blogs",
  });
  return (
    <Loading status={loading} error={error} type="blogsPage">
      <HeadTags title="Blogs" />

      <section className="container mx-auto py-8">
        <MetaTags title="Blogs" />

        <GridList
          items={data}
          where="blog"
          Component={BlogCard}
          loading={loading}
        />
      </section>
    </Loading>
  );
}
