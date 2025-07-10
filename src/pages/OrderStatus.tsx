//React && Redux
import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { cleanUpOrder } from "@redux/orders/slices/OrderSlice";
import { useAppDispatch, useAppSelector } from "@redux/hooks";

//Components
import { ErrorExplosion } from "@components/common/ErrorExplosion";
import { Spinner } from "@components/common/Spinner";
import { SuccessExplosion } from "@components/common/SuccessCheckmark";

const OrderStatus = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.orders);

  useEffect(() => {
    return () => {
      dispatch(cleanUpOrder());
    };
  }, [dispatch]);

  return (
    <div className="w-full min-h-screen flex gap-y-10 flex-col items-center justify-center">
      <div className="text-gray-700 text-2xl font-bold">
        {loading === "pending" ? (
          <div className="w-full h-40">
            <Spinner size={60} color="#2563eb" />
          </div>
        ) : loading === "failed" ? (
          <div className="flex flex-col gap-y-8 items-center w-full h-40">
            <ErrorExplosion />
            <span>Something went wrong!</span>
          </div>
        ) : loading === "succeeded" ? (
          <div className="flex flex-col gap-y-8 items-center">
            <SuccessExplosion />
            <span>Your order has been placed successfully!</span>
          </div>
        ) : (
          <Navigate to={"/"} />
        )}
      </div>
      <Link
        to={"/"}
        replace
        className="bg-blue-600 hover:bg-blue-700 text-blue-50 rounded-md px-4 py-2 transition-all"
      >
        Shopping now!
      </Link>
    </div>
  );
};

export default OrderStatus;
