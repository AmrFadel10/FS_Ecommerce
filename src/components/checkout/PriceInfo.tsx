//React && Redux
import { useEffect, useState, type FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { calculateTotalPrice } from "@redux/orders/slices/OrderSlice";
import { addToast } from "@redux/toast/slices/ToastSlice";
import {
  countSubtotalPrice,
  editProductToshowInCheckout,
} from "@redux/cart/selectors/cartSelector";

//APIS
import checkCouponIsAvailableApiCall from "@redux/coupon/apiCalls/CouponApiCall";

//Validation
import couponValidation from "@utils/validations/couponValidation";

//Components
import { Spinner } from "@components/common/Spinner";
import Loading from "@feedback/loading/Loading";

const PriceInfo = () => {
  const dispatch = useAppDispatch();
  const [couponInput, setCouponInput] = useState("");
  const [discount, setDiscount] = useState(0);
  const [errorInput, setErrorInput] = useState("");
  const products = useAppSelector(editProductToshowInCheckout);
  const { loading: couponLoading } = useAppSelector((state) => state.coupon);
  const { loading: productLoading, error: productsError } = useAppSelector(
    (state) => state.cart
  );
  const { shipping } = useAppSelector((state) => state.order);
  const subtotalPrice = useAppSelector(countSubtotalPrice);

  // calculate total price
  const totalPrice = subtotalPrice + shipping - discount;

  const handleCouponDiscount = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDiscount(0);
    if (couponLoading === "pending" || couponInput.length === 0) return;
    const schema = couponValidation.safeParse({ name: couponInput });
    if (!schema.success) {
      setErrorInput(schema.error.errors[0].message);
      return;
    }
    dispatch(checkCouponIsAvailableApiCall(couponInput))
      .unwrap()
      .then((result) => {
        setDiscount((subtotalPrice * (result || 0)) / 100);
      })
      .catch((err) => {
        dispatch(addToast({ type: "error", comment: err }));
      })
      .finally(() => {
        setCouponInput("");
      });
  };

  useEffect(() => {
    dispatch(calculateTotalPrice({ totalPrice }));
  }, [totalPrice, dispatch]);

  return (
    <Loading error={productsError} type="commonLoading" status={productLoading}>
      <div className="flex-[2.5] py-12 px-8 divide-y divide-gray-200 bg-white rounded-xl shadow min-h-[650px] order-1 lg:order-2">
        <div className="max-h-72 overflow-y-auto">
          {products.map((item, index) => {
            return (
              <div
                className=" border-gray-800 flex items-center gap-5  py-2 px-3 "
                key={index}
              >
                <div className="relative border border-gray-300 rounded-md flex-1">
                  <div className="w-5 h-5 flex items-center justify-center bg-blue-600 rounded-full absolute top-0 text-gray-50 -translate-y-1/2 translate-x-1/2 right-0 text-xs font-bold">
                    {item.quantity}
                  </div>
                  <div className="rounded-md w-14 h-14 object-contain">
                    <img
                      src={item.images[0].url}
                      alt="img"
                      className="rounded-md w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-[4]">
                  <p
                    className="font-semibold line-clamp-1 mb-1 text-sm"
                    title={item.title}
                  >
                    {item.title}
                  </p>
                  <div className="text-gray-600  text-sm font-semibold">
                    <span className=" text-gray-800">Color: </span>
                    &nbsp;
                    <span className="">{item.color}</span>
                  </div>
                  <div className="text-gray-600  text-sm font-semibold">
                    <span className=" text-gray-800">{item.quantity} </span>
                    &nbsp; x <span className="">{item.price}$</span>
                  </div>
                </div>
                <div className="font-bold text-sm flex-1">
                  {item.price * item.quantity}$
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-6 flex flex-col gapy-2 px-3">
          <div className="flex justify-between">
            <p className="text-gray-600 text-lg">Subtotal</p>
            <p className="font-semibold text-sm">$ {subtotalPrice}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600 text-lg">Shipping</p>
            <p className="font-semibold text-sm">+ {shipping}$</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600 text-lg">Discount</p>
            <p className="font-semibold text-sm"> - {discount.toFixed(2)}$</p>
          </div>
        </div>
        <div className="flex justify-between p-6">
          <p className="text-gray-600 text-lg font-semibold">Total</p>
          <div className=" text-sm flex gap-2 items-end">
            <span className="text-gray-600 font-semibold">USD</span>
            <span className="text-2xl font-semibold text-gray-700">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
        <form
          className="flex flex-col gap-2 border-t border-gray-500 pt-4"
          onSubmit={handleCouponDiscount}
        >
          <span className="text-gray-500 text-xs font-medium">
            Have a coupon code?
          </span>
          <input
            type="text"
            placeholder="Coupon..."
            value={couponInput}
            className={`${
              errorInput.trim().length ? "border-red-500" : " border-gray-300"
            } border-2 p-2 focus:outline-none  rounded-md  font-semibold text-sm`}
            onChange={(e) => setCouponInput(e.target.value)}
            onFocus={() => setErrorInput("")}
          />

          {!!errorInput.trim().length && (
            <p className="text-red-500 text-xs font-medium -mt-1">
              {errorInput}
            </p>
          )}
          <button
            disabled={couponLoading === "pending"}
            className="bg-blue-600 w-fit py-2 px-4 text-gray-50 rounded-md hover:bg-blue-700 flex cursor-pointer"
          >
            {couponLoading === "pending" ? (
              <>
                <Spinner size={18} />
                Loading...
              </>
            ) : (
              "Apply"
            )}
          </button>
        </form>
      </div>
    </Loading>
  );
};

export default PriceInfo;
