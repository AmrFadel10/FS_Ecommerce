//Components
import SideBarStore from "@components/ourStore/SidebarStore";
import GridList from "@components/common/GridList";
import ProductControlsPanel from "@components/common/products/ProductControlsPanel";
import Loading from "@feedback/loading/Loading";
import Pagination from "@components/ourStore/Pagination";
import ProductCard from "@components/common/products/ProductCard";
import MetaTags from "@components/common/MetaTags";
import useOurStore from "@hooks/useOurStore";

export default function OurStore() {
  const {
    handleQueryInInputs,
    handleQueryInSort,
    query,
    sort,
    category,
    brand,
    gte,
    lte,
    sr,
    productLoading,
    error,
    brandsError,
    brandsLoading,
    handleQueryLinks,
    data,
    ourStoreProducts,
  } = useOurStore();
  return (
    <div className=" mt-8 flex gap-8 min-h-[700px]">
      <MetaTags title="Our store" />
      <div className="lg:w-60 lg:flex flex-col gap-4 hidden ">
        <Loading
          error={brandsError}
          type="sidebarProductPage"
          status={brandsLoading}
          size={50}
        >
          <SideBarStore
            handleLowerAndGreaterthan={handleQueryInInputs}
            handleQueryLinks={handleQueryLinks}
            gte={query.get("gte")}
            lte={query.get("lte")}
          />
        </Loading>
      </div>
      <div className="flex-[5] flex flex-col">
        <ProductControlsPanel
          handleSort={handleQueryInSort}
          isFiltered={!!(sort || category || brand || gte || lte || sr)}
        />
        <Loading status={productLoading} error={error} type="productsListPage">
          <GridList
            items={ourStoreProducts}
            where="product"
            Component={ProductCard}
            loading={productLoading}
          />
          {data.length > 0 && <Pagination variable="products" />}
        </Loading>
      </div>
    </div>
  );
}
