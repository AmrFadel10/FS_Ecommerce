import Empty from "@components/common/Empty";
import Pagination from "@components/ourStore/Pagination";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import getAllOrdersApiCall from "@redux/orders/apiCalls/getOrdersApiCall";
import { cleanUpOrders } from "@redux/orders/slices/OrdersSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Orders = () => {
  const dispatch = useAppDispatch();
  const [query] = useSearchParams();
  const { orders } = useAppSelector((state) => state.orders);
  const { page } = Object.fromEntries(query.entries());

  useEffect(() => {
    dispatch(getAllOrdersApiCall({ page }));
    return () => {
      dispatch(cleanUpOrders());
    };
  }, [dispatch, page]);

  return (
    <section className="flex-[5]">
      <div className=" px-6 flex flex-col gap-y-8 min-h-[600px]">
        <h3 className="text-3xl font-bold text-blue-600">Orders</h3>
        {orders.length > 0 ? (
          <table className="text-gray-600 ">
            <thead className="border-y-2 border-blue-300 text-blue-600">
              <tr>
                <th className="py-2">OrderID</th>
                <th className="py-2">Address</th>
                <th className="py-2">Country</th>
                <th className="py-2">Zip code</th>
                <th className="py-2">Date</th>
                <th className="py-2">Price</th>
                <th className="py-2">status</th>
              </tr>
            </thead>
            <tbody className="">
              {orders.map((order, index) => {
                return (
                  <tr
                    key={order._id}
                    className={`${
                      index === 0 ? "border-b-2" : "border-y-2"
                    }  border-blue-200`}
                  >
                    <td className="text-center py-4">
                      {(+page - 1) * 10 + index + 1}
                    </td>
                    <td className="text-center py-4 capitalize">{`${order.address.addressLine}, ${order.address.state}, ${order.address.city}`}</td>
                    <td className="text-center py-4">{`${order.address.country}}`}</td>
                    <td className="text-center py-4">{`${order.address.zipCode}`}</td>
                    <td className="text-center py-4">{`${new Date(
                      order.paidAt
                    ).toLocaleDateString()}`}</td>
                    <td className="text-center py-4">{`${order.totalPriceAfterDiscount}`}</td>
                    <td className="text-center py-4 capitalize">{`${order.orderStatus}`}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <Empty />
        )}
      </div>
      {orders.length > 0 && <Pagination variable="orders" />}
    </section>
  );
};

export default Orders;
