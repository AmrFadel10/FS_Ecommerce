import Rating from "@components/rating/Rating";

const ReviewProductPage = () => {
  return (
    <div className="my-12">
      <h3 className="font-semibold mb-4 text-2xl  text-gray-700">Reviews</h3>
      <div className=" text-gray-400 text-sm rounded-lg leading-7">
        <Rating />
      </div>
    </div>
  );
};

export default ReviewProductPage;
