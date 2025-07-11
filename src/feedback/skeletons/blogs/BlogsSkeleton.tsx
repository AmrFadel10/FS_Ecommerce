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
        <h3 className="py-2 rounded-xl bg-gray-300 w-48 "></h3>
      )}
      <div className="overflow-x-scroll scroll-smooth hide-scrollbar relative ">
        <div
          className={`${
            where === "blogs"
              ? " flex-[5] grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4 md:gap-8  justify-start min-h-screen items-start"
              : "flex my-6 p-2 "
          } gap-6 `}
        >
          {Array(limit || 5)
            .fill(1)
            .map((_, idx) => {
              return <BlogCardSkeleton key={idx} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default BlogsSkeleton;
