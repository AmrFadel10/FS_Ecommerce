import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { addToast } from "@redux/toast/slices/ToastSlice";
import { Link } from "react-router-dom";

const TotalPrice = ({ subtotalPrice }: { subtotalPrice: number }) => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.auth);
  return (
    <div className="flex justify-between  border-t pt-4 border-t-gray-300 ">
      <div className="flex flex-col gap-y-4 flex-1">
        <Link
          className={
            "bg-blue-600 text-sm font-medium text-blue-50 py-2 px-4 block w-fit rounded-full hover:bg-blue-700 "
          }
          to={"/products"}
        >
          Continue shopping
        </Link>
        <p className="text-sm font-medium text-gray-600">
          Order special instructor
        </p>
      </div>
      <div className="flex flex-col gap-y-2 py-5 flex-1">
        <div className="flex justify-between gap-y-4">
          <div className="flex gap-2 items-center ml-auto">
            <span className="text-lg text-gray-600 font-medium">Subtotal:</span>
            <span className="font-medium text-lg text-gray-600">
              $ {subtotalPrice}
            </span>
          </div>
        </div>
        <div className="text-right  font-medium text-gray-400 text-sm">
          Taxes and Shipping calculated at checkout
        </div>
        <Link
          to={"/checkout"}
          onClick={(e) => {
            if (!accessToken) {
              e.preventDefault();

              dispatch(
                addToast({ type: "info", comment: "Please log in first." })
              );
            }
          }}
          className={
            "font-medium text-sm bg-blue-600 text-blue-50 py-2 px-4 block text-center rounded-full hover:bg-blue-700 ml-auto my-6 "
          }
        >
          Check out
        </Link>
      </div>
    </div>
  );
};

export default TotalPrice;
