import BlogsSkeleton from "./BlogsSkeleton";

export default function BlogsPageSkeleton({ limit }: { limit: number }) {
  return (
    <div className="container mx-auto flex gap-x-6 md:flex-row flex-col mt-10">
      <BlogsSkeleton limit={limit} where={"blogs"} />
    </div>
  );
}
