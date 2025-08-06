import { BiUser } from "react-icons/bi";
import ProductRating from "./ProductRating";
import { type TRatings } from "@customeTypes/products";

const ReviewCard = ({ rating }: { rating: TRatings }) => {
  return (
    <article className="py-4">
      <div className="flex items-center gap-x-2">
        <div className="bg-gray-200 rounded-full flex items-center justify-center w-10 h-10 ">
          <BiUser size={25} />
        </div>
        <div className="flex flex-col mb-2">
          <h3 className="font-medium">{rating.postedby?.fullName}</h3>
          <ProductRating totalrating={rating.star} />
        </div>
      </div>
      <p className="text-gray-700 text-sm">{rating.comment}</p>
    </article>
  );
};

export default ReviewCard;
