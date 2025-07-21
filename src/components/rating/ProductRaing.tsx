import { MdOutlineStarRate, MdOutlineStarPurple500 } from "react-icons/md";

const ProductRaing = ({ vote = 2 }) => {
  return (
    <div className="flex gap-x-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <button key={star}>
            {vote >= star ? (
              <MdOutlineStarPurple500 className="fill-orange-400" size={19} />
            ) : (
              <MdOutlineStarRate className={`stroke-2"`} size={19} />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ProductRaing;
