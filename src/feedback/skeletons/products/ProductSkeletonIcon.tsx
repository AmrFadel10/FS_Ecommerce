import ImageIcon from "@assets/svg/ImageIcon";

const ProductSkeletonIcon = () => {
  return (
    <div className={`  rounded-2xl  group shadow-md bg-white p-2 `}>
      <div className=" relative overflow-hidden">
        <div className="overflow-auto w-full md:h-52 h-36  bg-gray-300  rounded-lg flex justify-center items-center min-w-56">
          <ImageIcon size={28} />
        </div>
      </div>
      <div className="p-4">
        <h3 className="py-2 mb-2 w-2/3 bg-gray-300  rounded-lg "></h3>
        <p className="py-1 my-4  w-3/4 bg-gray-300  rounded-lg"></p>
        <p className="py-1 my-4  w-3/4 bg-gray-300  rounded-lg"></p>
        <div className="mt-6 flex  justify-between">
          <div className="py-1 w-1/4 bg-gray-300  rounded-lg"></div>
          <div className="py-1 w-1/4 bg-gray-300  rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeletonIcon;
