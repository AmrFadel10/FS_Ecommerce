import CartProduct from "./CartProduct";

const CartList = () => {
  return (
    <table className=" text-left my-12 border-b w-full">
      <thead className="text-xl border-b">
        <tr className="text-gray-500 flex">
          <th className="p-4  flex-[1.8]">PRODUCT</th>
          <th className="p-4 flex-1">PRICE</th>
          <th className="p-4 flex-1">QUANTITY</th>
          <th className="p-4 flex-1">TOTAL</th>
        </tr>
      </thead>
      <tbody className=" p-4 text-xl  divide-y">
        <CartProduct />
      </tbody>
    </table>
  );
};

export default CartList;
