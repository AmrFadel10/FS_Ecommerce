import ProductCard from "@components/common/products/ProductCard";
import type { TProduct } from "@customeTypes/products";

const ProductsList = ({
  products,
  where,
}: {
  products: (TProduct & { isLiked: boolean; isActivation: boolean })[];
  where?: string;
}) => {
  return (
    <div
      className={`${
        where === "public"
          ? "flex flex-nowrap"
          : "grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 sm:grid-cols-3 min-h-[650px] items-start"
      }   gap-4 my-6`}
    >
      {products.map((product) => {
        return <ProductCard {...product} key={product._id} where={where} />;
      })}
    </div>
  );
};

export default ProductsList;
