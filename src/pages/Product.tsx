import { useParams } from "react-router-dom";
//APIS
import { getAProductApiCall } from "@redux/products/apiCalls/AProductApiCall";
import { cleanUpAProduct } from "@redux/products/slices/AProductSlice";
import Loading from "@feedback/loading/Loading";
//Hook
import useLoadDataWithCleanup from "@hooks/useLoadDataWithCleanup";
//component
import DescriptionProductPage from "@components/common/products/DescriptionProductPage";
import ReviewProductPage from "@components/common/products/ReviewProductPage";
import ImageProductPage from "@components/common/products/ImageProductPage";
import RightSideProductPage from "@components/common/products/RightSideProductPage";
import MetaTags from "@components/common/MetaTags";
import PopularProductCollections from "@components/home/products/popular/PopularProductsCollection";

export default function Product() {
  const { id } = useParams();

  const { data, loading, error } = useLoadDataWithCleanup({
    getDataAction: () => getAProductApiCall({ id: id! }),
    cleanUpAction: cleanUpAProduct,
    stateName: "aProduct",
    id,
  });

  if (!data) return null;

  return (
    <Loading error={error} status={loading} type="productPage">
      <MetaTags title="Product" />
      <section className="mb-36 min-h-screen ">
        <div className="flex my-8 gap-x-8 flex-col md:flex-row ">
          <ImageProductPage images={data.images} />
          <RightSideProductPage {...data} />
        </div>
        <DescriptionProductPage description={data.description} />
        <ReviewProductPage />
        <PopularProductCollections where={"private"} category={data.category} />
      </section>
    </Loading>
  );
}
