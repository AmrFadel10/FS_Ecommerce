import { useAppSelector } from "@redux/hooks";
import ProductsList from "./ProductsList";

const FeatureProductCollections = ({ where }: { where: string | null }) => {
  const { products } = useAppSelector((state) => state.products);
  const { items } = useAppSelector((state) => state.wishlist);

  const homeProducts = products.map((product) => {
    return { ...product, isLiked: items.includes(product._id) };
  });

  return (
    <>
      <h3 className="text-2xl font-semibold ">
        {where === "productPage" ? "You may also like" : "Featured Collection"}
      </h3>
      <ProductsList products={homeProducts} />
    </>
  );
};

export default FeatureProductCollections;
