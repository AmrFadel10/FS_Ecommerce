//react hooks
import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";

//component
import FeatureProductCollections from "@components/home/products/FeatureProductCollections";
import DescriptionProductPage from "@components/common/products/DescriptionProductPage";
import ReviewProductPage from "@components/common/products/ReviewProductPage";
import ImageProductPage from "@components/common/products/ImageProductPage";
import RightSideProductPage from "@components/common/products/RightSideProductPage";

//APIS
import { getAProductApiCall } from "@redux/products/apiCalls/AProductApiCall";
import { cleanUpAProduct } from "@redux/products/slices/AProductSlice";
import Loading from "@feedback/loading/Loading";

export default function Product() {
  const { aproduct, loading, error } = useAppSelector(
    (state) => state.aProduct
  );
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    const promise = dispatch(getAProductApiCall({ id: id as string }));
    return () => {
      promise.abort();
      dispatch(cleanUpAProduct());
    };
  }, [dispatch, id]);

  if (aproduct) {
    return (
      <Loading error={error} status={loading} type="productPage">
        <section className="mb-36 min-h-screen">
          <div className="flex my-8 gap-x-8 flex-col md:flex-row ">
            <ImageProductPage images={aproduct.images} />
            <RightSideProductPage {...aproduct} />
          </div>
          <DescriptionProductPage description={aproduct.description} />
          <ReviewProductPage />
          <FeatureProductCollections where={"private"} />
        </section>
      </Loading>
    );
  } else {
    <Navigate to={"/"} />;
  }
}
