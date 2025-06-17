import { Link } from "react-router-dom";

const TotalPrice = () => {
  console.log("Totla");
  return (
    <>
      <div className="my-6">
        <Link
          className={
            "bg-slate-700 text-slate-200 py-3 px-8 block w-fit rounded-full hover:bg-slate-800"
          }
          to={"/products"}
        >
          Continue shopping
        </Link>
      </div>
      <div className="flex justify-between py-5">
        <p className="text-lg font-medium text-gray-500">
          Order special instructor
        </p>
        <div className="flex gap-4">
          <span className="text-2xl text-gray-500 font-semibold">
            Subtotal:{" "}
          </span>
          <span className="font-semibold text-xl text-gray-600">$ {100}</span>
        </div>
      </div>
      <div className="text-right  font-medium text-gray-500 my-4">
        Taxes and Shipping calculated at checkout
      </div>
      <Link
        to={"/checkout"}
        className={
          "bg-slate-700 text-slate-200 py-3 px-8 block text-center rounded-full hover:bg-slate-800 ml-auto mt-8 mb-32 w-[25%]"
        }
      >
        Check out
      </Link>
    </>
  );
};

export default TotalPrice;
