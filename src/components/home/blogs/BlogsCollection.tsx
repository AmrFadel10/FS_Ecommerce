import { useAppSelector } from "@redux/hooks";
import BlogCard from "../../common/blogs/BlogCard";

const BlogsCollection = () => {
  const { blogs } = useAppSelector((state) => state.blogs);
  return (
    <div className="my-16">
      <h3 className="text-2xl font-semibold ">Our Latest News</h3>
      <div className="grid md:grid-cols-3 grid-cols-1 sm-grid-cols-2  lg:grid-cols-4 gap-8 my-8">
        {blogs.map((blog) => {
          return <BlogCard blog={blog} key={blog._id} />;
        })}
      </div>
    </div>
  );
};

export default BlogsCollection;
