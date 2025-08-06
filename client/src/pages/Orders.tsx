//React && Redux
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { cleanUpOrders } from "@redux/orders/slices/OrdersSlice";
//APiS
import getAllOrdersApiCall from "@redux/orders/apiCalls/getOrdersApiCall";
//Components
import Empty from "@components/common/Empty";
import Pagination from "@components/ourStore/Pagination";
import Loading from "@feedback/loading/Loading";
import MetaTags from "@components/common/MetaTags";

const Orders = () => {
  const dispatch = useAppDispatch();
  const [query] = useSearchParams();
  const { orders, loading, error } = useAppSelector((state) => state.orders);
  const { page } = Object.fromEntries(query.entries());

  useEffect(() => {
    dispatch(getAllOrdersApiCall({ page }));
    return () => {
      dispatch(cleanUpOrders());
    };
  }, [dispatch, page]);

  return (
    <Loading status={loading} error={error} type="commonLoading">
      <MetaTags title="Orders" />

      <section className="flex-[5] overflow-x-auto">
        <div className=" px-6 flex flex-col gap-y-8 min-h-[600px]">
          <h3 className="text-3xl font-bold text-blue-600">Orders</h3>
          {orders.length > 0 ? (
            <table className="text-gray-600 ">
              <thead className="border-y-2 border-blue-300 text-blue-600">
                <tr>
                  <th className="py-2 min-w-52">OrderID</th>
                  <th className="py-2 min-w-40">Date</th>
                  <th className="py-2 min-w-28">Price</th>
                  <th className="py-2 min-w-28">status</th>
                </tr>
              </thead>
              <tbody className="">
                {orders?.map((order, index) => {
                  return (
                    <tr
                      key={order._id}
                      className={`${
                        index === 0 ? "border-b-2" : "border-y-2"
                      }  border-blue-200`}
                    >
                      <td className="text-center py-4 min-w-52">
                        {order._id}{" "}
                      </td>
                      <td className="text-center py-4 min-w-40">{`${new Date(
                        order.paidAt
                      ).toLocaleDateString()}`}</td>
                      <td className="text-center py-4 min-w-28">{`${order.totalPriceAfterDiscount}`}</td>
                      <td className="text-center py-4 capitalize min-w-28">{`${order.orderStatus}`}</td>
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
    </Loading>
  );
};

export default Orders;
