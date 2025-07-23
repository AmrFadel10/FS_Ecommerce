import { useState, type FormEvent } from "react";
import ProductRating from "./ProductRating";
import { BiUser } from "react-icons/bi";
import { addToast } from "@redux/toast/slices/ToastSlice";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { AddRatingForAProductApiCall } from "@redux/products/apiCalls/AddRatingApiCall";
import { Spinner } from "@components/common/Spinner";

const RatingForm = () => {
  const dispatch = useAppDispatch();
  const prodId = useAppSelector((state) => state.aProduct.data?._id);
  const [starsValue, setStarsValue] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const handleStarsValue = (val: number) => {
    setStarsValue(val);
  };
  const handleSubmitRating = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (comment.length <= 30) {
      dispatch(
        addToast({
          comment: "Comment must be at least 30 characters",
          type: "info",
        })
      );

      setLoading(false);

      return;
    } else if (starsValue <= 0) {
      dispatch(
        addToast({
          comment: "Please select a star rating",
          type: "info",
        })
      );
      setLoading(false);

      return;
    } else if (!prodId) return;
    dispatch(
      AddRatingForAProductApiCall({
        comment,
        star: starsValue,
        prodId,
      })
    )
      .unwrap()
      .then(() => {
        dispatch(
          addToast({
            comment: "Your review was added successfully",
            type: "success",
          })
        );
      })
      .catch((error) => {
        dispatch(
          addToast({
            comment: error,
            type: "error",
          })
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form
      className="flex  gap-x-2 p-6  mt-6 bg-white rounded-lg shadow"
      onSubmit={handleSubmitRating}
    >
      <div className="bg-gray-200 rounded-full flex items-center justify-center w-10 h-10">
        <BiUser size={25} />
      </div>
      <div className="flex flex-col gap-y-4 flex-1">
        <ProductRating
          handleStarsValue={handleStarsValue}
          totalrating={starsValue}
        />
        <textarea
          name="comment-for-review"
          id="comment-for-review"
          placeholder="Leave you comment"
          className="resize-none text-sm text-gray-800 p-2 h-20  w-full border-blue-200 focus:border-blue-500 border-2 rounded-lg focus:outline-none"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className={`h-[40px] flex items-center justify-center gap-x-2 text-blue-50 font-semibold bg-blue-600 w-full rounded-md  hover:bg-blue-700 ${
            loading ? " cursor-no-drop" : "cursor-pointer"
          }`}
        >
          {loading ? (
            <>
              <Spinner size={18} /> Loading...
            </>
          ) : (
            <span>Add review</span>
          )}
        </button>
      </div>
    </form>
  );
};

export default RatingForm;
