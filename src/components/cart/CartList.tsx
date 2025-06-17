import { useEffect } from "react";
import CartProduct from "./CartProduct";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { getProductsCartApiCall } from "@redux/cart/apicalls/cartApiCall";

const CartList = () => {
  const dispatch = useAppDispatch();
  const { getProductFullInfo, items } = useAppSelector((state) => state.cart);
  const val = getProductFullInfo
    .map((ele) => {
      if (items[ele._id]) {
        const keysArr = Object.keys(items[ele._id]);
        const valuesArr = Object.values(items[ele._id]);
        return keysArr.map((col, ind) => {
          return { ...ele, color: col, count: valuesArr[ind] };
        });
      }
      return [];
    })
    .flat();
  console.log("List");
  useEffect(() => {
    dispatch(getProductsCartApiCall());
  }, [dispatch]);

  return (
    <>
      {val.length > 0 ? (
        <table className=" text-left my-12 border-b w-full select-none">
          <thead className="text-xl border-b">
            <tr className="text-gray-500 flex">
              <th className="p-4  flex-[3]">PRODUCT</th>
              <th className="p-4 flex-1">PRICE</th>
              <th className="p-4 flex-1">QUANTITY</th>
              <th className="p-4 flex-1">TOTAL</th>
            </tr>
          </thead>

          <tbody className=" p-4 text-xl  divide-y">
            {val.map((product, index) => {
              return <CartProduct key={index} {...product} />;
            })}
          </tbody>
        </table>
      ) : (
        <div className="min-h-screen  flex justify-center items-center">
          No items available
        </div>
      )}
    </>
  );
};

export default CartList;
