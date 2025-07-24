import CartProduct from "./CartProduct";
import type { TProductCart } from "@customeTypes/cart";

const CartList = ({ products }: { products: TProductCart[] }) => {
  return (
    <section className="overflow-x-auto hide-scrollbar">
      <table className=" text-left my-12 min-w-fit  select-none w-full">
        <thead className="text-xl border-b">
          <tr className="text-blue-600 flex">
            <th className="p-4  flex-[3] min-w-96">PRODUCT</th>
            <th className="p-4 flex-1 min-w-36">PRICE</th>
            <th className="p-4 flex-1 min-w-36">QUANTITY</th>
            <th className="p-4 flex-1 min-w-36">TOTAL</th>
          </tr>
        </thead>
        <tbody className=" p-4 text-xl  ">
          {products.map((product, index) => {
            return <CartProduct key={index} {...product} />;
          })}
        </tbody>
      </table>
    </section>
  );
};

export default CartList;
