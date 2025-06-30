import ProductSkeletonIcon from "./ProductSkeletonIcon";

const ProductsListSkeleton = ({
  count = 5,
  where = "private",
}: {
  count: number;
  where?: "public" | "private";
}) => {
  return (
    <>
      <div
        className={`${
          where === "public" ? "xl:grid-cols-5" : ""
        } grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  gap-8 my-8 animate-pulse`}
      >
        {Array(count)
          .fill(1)
          .map((_id, index) => {
            return <ProductSkeletonIcon key={index} />;
          })}
      </div>
    </>
  );
};

export default ProductsListSkeleton;
