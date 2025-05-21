import { useAppSelector } from "@redux/hooks";
import EventProductCard from "./EventProductCard";

const EventProductCollections = () => {
  const { products } = useAppSelector((state) => state.products);

  return (
    <div className="mb-28 ">
      <h3 className="text-2xl font-semibold ">Special Products Discount</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-center">
        {products.slice(0, 3).map((product) => {
          return <EventProductCard product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
};

export default EventProductCollections;
