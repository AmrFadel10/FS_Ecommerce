import ProductCard from "@components/common/products/ProductCard";
import { useAppSelector } from "@redux/hooks";

const FeatureProductCollections = ({ where }: { where: string | null }) => {
  const { products } = useAppSelector((state) => state.products);

  return (
    <section>
      <h3 className="text-2xl font-semibold ">
        {where === "productPage" ? "You may also like" : "Featured Collection"}
      </h3>
      <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 lg:grid-cols-4  gap-8 my-8">
        {products.length > 0 ? (
          products.map((product) => {
            return <ProductCard product={product} key={product._id} />;
          })
        ) : (
          <div className="pl-4 text-sm text-gray-700">
            No products available
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureProductCollections;
