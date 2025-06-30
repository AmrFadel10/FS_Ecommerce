import ProductsListSkeleton from "./ProductsListSkeleton";

const HomeProductsSkeleton = () => {
  return (
    <div className="animate-pulse">
      <h3 className="py-2 rounded-xl bg-gray-300 w-60"></h3>
      <ProductsListSkeleton count={5} />
    </div>
  );
};

export default HomeProductsSkeleton;
