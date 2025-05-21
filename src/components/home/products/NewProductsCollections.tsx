import NewProductCard from "./NewProductCard";

const NewProductsCollections = () => {
  return (
    <div className=" my-14">
      <div className="grid  grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        <NewProductCard black={true} />
        <NewProductCard />
        <NewProductCard />
        <NewProductCard />
      </div>
    </div>
  );
};

export default NewProductsCollections;
