//React & Redux
import { useParams } from "react-router-dom";
import { useAppSelector } from "@redux/hooks";
//APIS
import { getAProductApiCall } from "@redux/products/apiCalls/AProductApiCall";
import { cleanUpAProduct } from "@redux/products/slices/AProductSlice";
import Loading from "@feedback/loading/Loading";
//Hook
import useLoadDataWithCleanup from "@hooks/useLoadDataWithCleanup";
//Types
import type { TProduct } from "@customeTypes/products";
import type { TLoading } from "@customeTypes/common";
//component
import DescriptionProductPage from "@components/common/products/DescriptionProductPage";
import ReviewProductPage from "@components/common/products/ReviewProductPage";
import ImageProductPage from "@components/common/products/ImageProductPage";
import RightSideProductPage from "@components/common/products/RightSideProductPage";
import MetaTags from "@components/common/MetaTags";
import PopularProductCollections from "@components/home/products/popular/PopularProductsCollection";

export default function Product() {
  const { id } = useParams();
  const userId = useAppSelector((state) => state.auth.user?._id);
  const {
    data,
    loading,
    error,
  }: { data: TProduct; loading: TLoading; error: string | null } =
    useLoadDataWithCleanup({
      getDataAction: () => getAProductApiCall({ id: id!, userId }),
      cleanUpAction: cleanUpAProduct,
      stateName: "aProduct",
      id,
      userId,
    });

  return (
    <Loading error={error} status={loading} type="productPage">
      <MetaTags title="Product" />
      {!!data && (
        <section className="mb-12 min-h-screen ">
          <div className="flex mt-8 gap-6 flex-col lg:flex-row items-stretch">
            <ImageProductPage images={data.images} />
            <RightSideProductPage
              _id={data._id}
              title={data.title}
              color={data.color}
              brand={data.brand}
              category={data.category}
              price={data.price}
              quantity={data.quantity}
            />
          </div>
          <DescriptionProductPage description={data.description!} />
          <ReviewProductPage />
          <PopularProductCollections
            where={"private"}
            category={data.category}
          />
        </section>
      )}
    </Loading>
  );
}
