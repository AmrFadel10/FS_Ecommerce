import {
  MdOutlineStarRate,
  MdOutlineStarPurple500,
  MdStarHalf,
} from "react-icons/md";

const ProductRating = ({
  totalrating,
  handleStarsValue,
}: {
  totalrating: number;
  handleStarsValue?: (startValue: number) => void;
}) => {
  2.5 % 2;
  return (
    <div className="flex gap-x-2 items-center -mt-0.25">
      <ul className="flex ">
        {[1, 2, 3, 4, 5].map((star) => {
          return (
            <li
              className={`${
                handleStarsValue ? "cursor-pointer" : "cursor-default"
              } fill-orange-400`}
              key={star}
              onClick={() => handleStarsValue && handleStarsValue(star)}
            >
              {totalrating >= star ? (
                <MdOutlineStarPurple500
                  className="fill-orange-400"
                  size={handleStarsValue ? 25 : 20}
                />
              ) : totalrating < star && totalrating > star - 1 ? (
                <MdStarHalf
                  className="fill-orange-400"
                  size={handleStarsValue ? 25 : 20}
                />
              ) : (
                <MdOutlineStarRate
                  color="gray"
                  size={handleStarsValue ? 25 : 20}
                />
              )}
            </li>
          );
        })}
      </ul>
      <span className="font-semibold text-sm mt-1">
        {totalrating.toFixed(2)}
      </span>
    </div>
  );
};

export default ProductRating;
