import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
// import img from "/public/assets/images/banner.avif";

export default function CompareProductCard() {
  return (
    <div className="group flex flex-col relative bg-white rounded-xl min-h-[calc(100vh-150px)]">
      <span className="absolute top-3 right-3  hover:text-gray-900 text-gray-600 cursor-pointer rounded-sm">
        <IoCloseOutline className="text-3xl" />
      </span>
      <img
        src={"img"}
        alt="img"
        className=" object-contain h-60 rounded-t-xl"
      />
      <div className=" p-3">
        <Link
          to={"#"}
          className="font-medium line-clamp-2 mb-4 group-hover:underline pt-2"
        >
          Title1
        </Link>
        <div className="divide-y flex flex-col ">
          <div className="flex justify-between">$100</div>
          <div className="flex justify-between py-3">
            <span className="font-semibold text-base ">Brand &nbsp;:</span>
            <span className=" text-sm ">Brand</span>
          </div>

          <div className="flex justify-between py-3">
            <span className="font-semibold text-base ">
              Availability &nbsp;:
            </span>
            <span className=" text-sm ">
              {/* {product.sold > 0 ? "In stock" : "Not available"} */}
              In Stock
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
