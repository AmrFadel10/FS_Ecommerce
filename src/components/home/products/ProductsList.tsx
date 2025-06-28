import ProductCard from "@components/common/products/ProductCard";
import type { TProduct } from "@customeTypes/products";

const ProductsList = ({
  products,
}: {
  products: (TProduct & { isLiked: boolean })[];
}) => {
  return (
    <>
      {products.length > 0 ? (
        <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 lg:grid-cols-4  gap-8 my-8">
          {products.map((product) => {
            return <ProductCard {...product} key={product._id} />;
          })}
        </div>
      ) : (
        <div className=" text-sm font-semibold text-slate-700 flex justify-center items-center flex-1">
          No products available
        </div>
      )}
    </>
  );
};

export default ProductsList;
