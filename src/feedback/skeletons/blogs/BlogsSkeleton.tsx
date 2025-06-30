import BlogCardSkeleton from "./BlogCardSkeleton";

const BlogsSkeleton = ({
  limit,
  where,
}: {
  limit?: number;
  where: "blogs" | "home";
}) => {
  return (
    <section className="animate-pulse flex-[5]">
      {where === "home" && (
        <h3 className="py-2 rounded-xl bg-gray-300 w-60 "></h3>
      )}
      <div
        className={`grid md:grid-cols-3 grid-cols-1 sm-grid-cols-2  ${
          where === "home" ? "lg:grid-cols-4" : ""
        }  gap-8 my-10`}
      >
        {Array(limit || 5)
          .fill(1)
          .map((_, idx) => {
            return <BlogCardSkeleton key={idx} />;
          })}
      </div>
    </section>
  );
};

export default BlogsSkeleton;
