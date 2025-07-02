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
      className={`grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 ${
        where === "public" ? "xl:grid-cols-5" : ""
      } lg:grid-cols-4  gap-8 my-6`}
    >
      {products.map((product) => {
        return <ProductCard {...product} key={product._id} />;
      })}
    </div>
  );
};

export default ProductsList;
