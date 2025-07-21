import { Spinner } from "@components/common/Spinner";
import type { TAddress } from "@customeTypes/address";
import type { TInputsOrder } from "@customeTypes/orders";
import {
  countSubtotalPrice,
  editProductToshowInCheckout,
} from "@redux/cart/selectors/cartSelector";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import createOrderApiCall from "@redux/orders/apiCalls/addOrderApiCall";
import { addToast } from "@redux/toast/slices/ToastSlice";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const CashOnDeliveryBtn = ({
  selectAddress,
}: {
  selectAddress: TAddress | null;
}) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(editProductToshowInCheckout);
  const subtotalPrice = useAppSelector(countSubtotalPrice);

  const navigate = useNavigate();
  const {
    loading: orderLoading,
    totalPrice,
    shipping,
  } = useAppSelector((state) => state.order);

  const handleCashOnDelivery = () => {
    if (!selectAddress) {
      dispatch(
        addToast({ type: "warning", comment: "Please select address first" })
      );
      return;
    }
    const items = products.map((item) => {
      return {
        product: item._id,
        color: item.color,
        quantity: item.quantity,
        price: item.price,
      };
    });
    const info: TInputsOrder = {
      address: selectAddress._id as string,
      orderItems: items,
      paidAt: new Date(),
      totalPrice: subtotalPrice + shipping,
      totalPriceAfterDiscount: totalPrice,
    };
    dispatch(createOrderApiCall(info))
      .unwrap()
      .finally(() => {
        navigate("/order-state");
      });
  };
  return (
    <div className="flex items-center justify-between mt-4 ">
      <Link
        to={"/cart"}
        className="lg:text-base text-sm text-slate-600 hover:text-slate-950 flex items-center gap-1 font-normal group"
      >
        <span className="text-2xl font-semibold relative group-hover:right-1 right-0 transition-all duration-300">
          <BsArrowLeft />
        </span>
        Return to cart
      </Link>
      <button
        className={`${
          orderLoading === "pending" ? "cursor-not-allowed" : "cursor-pointer"
        } py-2 px-3  hover:bg-blue-700 bg-blue-600 text-blue-50 rounded-lg lg:text-base text-sm`}
        disabled={orderLoading === "pending"}
        onClick={handleCashOnDelivery}
      >
        {orderLoading === "pending" ? (
          <>
            <Spinner size={15} /> Loading...
          </>
        ) : (
          "Cash on delivery"
        )}
      </button>
    </div>
  );
};

export default CashOnDeliveryBtn;
