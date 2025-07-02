import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { activationAccountApiCall } from "@redux/auth/apicalls/AtivationApiCall";
import { Spinner } from "@components/common/Spinner";
import { ErrorExplosion } from "@components/common/ErrorExplosion";
import { SuccessExplosion } from "@components/common/SuccessCheckmark";
const Activation = () => {
  const { activationToken } = useParams();
  const { error, loading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(activationAccountApiCall(activationToken as string));
  }, [dispatch]);

  return (
    <div className="w-full min-h-screen flex gap-y-10 flex-col items-center justify-center">
      <div className="text-gray-700 text-2xl font-bold">
        {loading === "pending" ? (
          <div className="w-full h-40">
            <Spinner size={60} color="black" />
          </div>
        ) : error ? (
          <div className="flex flex-col gap-y-8 items-center w-full h-40">
            <ErrorExplosion />
            <span>The token expired!</span>
          </div>
        ) : (
          <div className="flex flex-col gap-y-8 items-center">
            <SuccessExplosion /> <span>"Account created Successfully!"</span>
          </div>
        )}
      </div>
      <Link
        to={"/"}
        replace
        className="bg-slate-900 hover:bg-slate-950 text-slate-50 rounded-md px-4 py-2 transition-all"
      >
        Shopping now!
      </Link>
    </div>
  );
};

export default Activation;
