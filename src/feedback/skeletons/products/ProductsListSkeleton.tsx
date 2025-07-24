import ProductSkeletonIcon from "./ProductSkeletonIcon";

const ProductsListSkeleton = ({
  count = 5,
  where = "private",
}: {
  count: number;
  where?: "public" | "private" | "wishlist";
}) => {
  return (
    <div
      className={`${
        where === "public" && "w-full overflow-x-auto hide-scrollbar"
      }`}
    >
      <div
        className={`${
          where === "public"
            ? "flex flex-nowrap min-h-[350px] items-start"
            : where === "wishlist"
            ? "flex flex-col"
            : "grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 sm:grid-cols-3 min-h-[650px] items-start"
        }   gap-4 my-6`}
      >
        {Array(count)
          .fill(1)
          .map((_id, index) => {
            return <ProductSkeletonIcon key={index} />;
          })}
      </div>
    </div>
  );
};

export default ProductsListSkeleton;
