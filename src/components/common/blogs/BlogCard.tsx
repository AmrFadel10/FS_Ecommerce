import type { TBlog } from "@customeTypes/blogs";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }: { blog: TBlog }) {
  return (
    <Link
      to={"/blog/1"}
      className=" relative rounded-xl overflow-hidden group shadow-md bg-white"
    >
      <div className="">
        <img
          src={blog.image.url}
          loading="lazy"
          alt="music"
          className="object-contain group-hover:scale-105 w-full transition-all h-80"
        />
      </div>
      <div className="md:px-4 md:py-4 p-3">
        <p className="text-gray-600 font-light text-sm ">
          {new Date(blog.createdAt).toDateString()}{" "}
          {new Date(blog.createdAt).toTimeString().split(" ")[0]}
        </p>
        <h5 className="md:my-3 my-1 text-xl text-slate-700 font-medium line-clamp-1">
          {blog.title}
        </h5>
        <p className="line-clamp-2 text-gray-500 font-light text-sm">
          {blog.description}
        </p>
      </div>
    </Link>
  );
}
