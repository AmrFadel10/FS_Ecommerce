import ProductSkeletonIcon from "./ProductSkeletonIcon";

const ProductsListSkeleton = ({ count }: { count: number }) => {
  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 lg:grid-cols-4  gap-8 my-8">
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
