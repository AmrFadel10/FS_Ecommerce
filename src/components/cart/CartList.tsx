import CartProduct from "./CartProduct";
import type { TProductCart } from "@customeTypes/cart";

const CartList = ({ products }: { products: TProductCart[] }) => {
  return (
    <>
      <table className=" text-left my-12 w-full select-none">
        <thead className="text-xl border-b">
          <tr className="text-gray-500 flex">
            <th className="p-4  flex-[3]">PRODUCT</th>
            <th className="p-4 flex-1">PRICE</th>
            <th className="p-4 flex-1">QUANTITY</th>
            <th className="p-4 flex-1">TOTAL</th>
          </tr>
        </thead>
        <tbody className=" p-4 text-xl  divide-y">
          {products.map((product, index) => {
            return <CartProduct key={index} {...product} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default CartList;
