import ProductsListSkeleton from "./ProductsListSkeleton";

const HomeProductsSkeleton = ({ limit = 5 }: { limit?: number }) => {
  return (
    <div className="animate-pulse">
      <h3 className="py-2 rounded-xl bg-gray-300 w-60"></h3>
      <ProductsListSkeleton count={limit} where="public" />
    </div>
  );
};

export default HomeProductsSkeleton;
