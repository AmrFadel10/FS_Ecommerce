import { useAppSelector } from "@redux/hooks";
import RatingForm from "./RatingForm";
import ReviewCard from "./ReviewCard";
import ProductRating from "./ProductRating";

const Rating = () => {
  const AddingReview = useAppSelector((state) => state.aProduct.AddingReview);
  const ratings = useAppSelector((state) => state.aProduct.data?.ratings);
  const totalrating = useAppSelector(
    (state) => state.aProduct.data?.totalrating
  );
  return (
    <>
      <div className="lg:p-6 py-6 px-4 bg-white rounded-lg shadow">
        {!!ratings?.length && (
          <div className="flex items-center lg:gap-x-2 gap-x-0.5">
            <span className="font-semibold text-gray-500 lg:text-base text-sm">
              Total reviews:
            </span>
            <ProductRating totalrating={totalrating || 0} />
            <span className="text-sm text-gray-500 font-medium">
              ({ratings?.length} reviews)
            </span>
          </div>
        )}
        {ratings?.length ? (
          <div className="max-h-80 overflow-y-auto  p-6 divide-y divide-blue-200 ">
            {ratings?.map((rating, index) => {
              return <ReviewCard rating={rating} key={index} />;
            })}
          </div>
        ) : (
          <div className="text-gray-500 ">No reviews yet!</div>
        )}
      </div>
      {AddingReview ? (
        <RatingForm />
      ) : (
        <div className="flex  gap-x-2 p-6  mt-6 bg-white rounded-lg shadow">
          You must purchase this product before submitting a review
        </div>
      )}
    </>
  );
};

export default Rating;
