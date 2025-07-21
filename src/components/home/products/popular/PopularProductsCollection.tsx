//Hooks
import usePopularProductCollection from "@hooks/usePopularProductCollection";
//Components
import ProductCard from "@components/common/products/ProductCard";
import GridList from "../../../common/GridList";
import Loading from "@feedback/loading/Loading";
import Heading from "@components/common/Heading";
import ArrowsToRightAndLeft from "./ArrowsToRightAndLeft";
import CategoriesForFilterProducts from "./CategoriesForFilterProducts";

const PopularProductCollections = ({
  limit,
  category,
}: {
  where?: "public" | "private";
  limit?: number;
  category?: string;
}) => {
  const {
    productRef,
    handleCategory,
    activeCategory,
    homeProducts,
    loading,
    error,
  } = usePopularProductCollection(limit, category);

  return (
    <section className="relative ">
      <div className="flex justify-between md:items-center md:flex-row flex-col w-full">
        <div>
          <Heading
            title={category ? "Related Collection" : "Popular Collection"}
          />
          {!category && (
            <p className="hidden lg:block text-gray-400 text-sm">{`Do not miss the current offers until the end of ${new Date().toLocaleString(
              "en-us",
              { month: "long" }
            )}.`}</p>
          )}
        </div>
        {!category && (
          <CategoriesForFilterProducts
            handleCategory={handleCategory}
            activeCategory={activeCategory}
          />
        )}
      </div>
      <Loading status={loading} error={error} size={150} type="homeProducts">
        <div className="overflow-x-scroll hide-scrollbar " ref={productRef}>
          <GridList
            items={homeProducts}
            where="public"
            Component={ProductCard}
            loading={loading}
          />
          <ArrowsToRightAndLeft
            productRef={productRef}
            length={homeProducts.length}
          />
        </div>
      </Loading>
    </section>
  );
};

export default PopularProductCollections;
