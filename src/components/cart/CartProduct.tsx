import img from "/assets/images/subbanner-03.webp";
//Icons
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartProduct = () => {
  return (
    <tr className="flex ">
      <td className=" flex flex-[1.8] items-center p-4 gap-4 ">
        <img
          // src={"assets/images/24_150x.avif"}
          src={img}
          loading="lazy"
          alt="music"
          className="w-24 h-24"
        />
        <div>
          <p className="text-sm font-medium text-gray-600 line-clamp-2">
            title
          </p>
          {/* <p className="my-1">
            <span className="font-semibold text-sm">Size:</span>{" "}
            <span className="text-sm font-semibold">{item?.size}</span>
          </p> */}
          <p className="flex gap-2 mt-3">
            <span className="font-semibold text-base text-gray-600">
              Color :
            </span>{" "}
            <span className="  rounded-full  block w-6 h-6">red</span>
          </p>
        </div>
      </td>
      <td className="text-lg font-semibold p-4 flex-1 text-gray-600">${100}</td>
      <td className="gap-4 flex  items-center  p-4 flex-1">
        <div className="flex gap-2 items-center">
          <span className="w-12 focus:outline-none leading-[44px] h-10 border-gray-300 border text-center text-[16px] font-medium inline-block bg-gray-50">
            value
          </span>
          <div>
            <AiOutlinePlus
              size={5}
              className="w-4 h-4  text-center  bg-gray-200 border-gray-400 border cursor-pointer hover:bg-gray-200 mb-1"
            />
            <AiOutlineMinus
              size={5}
              className="w-4 h-4   text-center  bg-gray-200 border-gray-400 border cursor-pointer hover:bg-gray-200"
            />
          </div>
        </div>
        <div>
          <span className="cursor-pointer text-red-500 hover:text-red-600 ">
            <MdDelete className="text-3xl " />
          </span>
        </div>
      </td>
      <td className="text-lg font-semibold p-4 flex-1 text-gray-600">
        <div>
          <span>1000$</span>
        </div>
      </td>
    </tr>
  );
};

export default CartProduct;
