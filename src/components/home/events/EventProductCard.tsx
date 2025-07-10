import { IoIosShuffle } from "react-icons/io";
import { AiFillHeart, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import EventTime from "./EventTime";
import { useState } from "react";
import type { TProduct } from "@customeTypes/products";

export default function EventProductCard({ product }: { product: TProduct }) {
  const [open, setOpen] = useState(false);
  const [clickHeart, setClickHeart] = useState(false);
  return (
    <div className="rounded-3xl group shadow-sm bg-white flex overflow-hidden flex-col lg:flex-row ">
      <div className="relative overflow-hidden flex-1">
        <div className=" transition-all duration-300 hover:text-blue-500 text-gray-50 rounded-full p-1 absolute top-[2%] right-3">
          {clickHeart ? (
            <AiFillHeart
              className="transition-all hover:text-blue-500 text-gray-50 rounded-full cursor-pointer"
              size={20}
              onClick={() => setClickHeart(!clickHeart)}
              color="black"
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              className="transition-all hover:text-blue-500 text-gray-50 rounded-full cursor-pointer"
              size={20}
              onClick={() => setClickHeart(!clickHeart)}
              color="#333"
              title="Add to wishlist"
            />
          )}
        </div>
        <div className="min-h-[270px]">
          <img
            loading="lazy"
            src={product.images[0].url}
            alt="music"
            className={` ${
              !!(product.images.length > 1) && "group-hover:hidden"
            }  object-cover`}
          />
          {!!(product.images.length > 1) && (
            <img
              src={product.images[1].url}
              alt="music"
              loading="lazy"
              className=" group-hover:block block h-full  w-full"
            />
          )}
        </div>
        <div className="absolute top-[12%] -right-6 flex gap-2 flex-col group-hover:right-3 transition-all  text-lg">
          <div className=" transition-all hover:text-blue-500 text-gray-50 rounded-full p-1">
            <IoIosShuffle
              size={20}
              className="cursor-pointer"
              color="#333"
              title="Compare between"
            />
          </div>
          <div className=" transition-all hover:text-blue-500 text-gray-50 rounded-full p-1 flex justify-center items-center">
            <AiOutlineEye
              className="cursor-pointer"
              size={20}
              color="#333"
              title="Quick view"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-8 flex-1">
        <div className="text-blue-500 font-medium text-xs my-4 ">brand</div>
        <div className="my-2  text-md text-slate-900 font-medium line-clamp-2">
          {product.title}
        </div>

        <div className="flex  justify-between mt-8">
          <div className="flex gap-4">
            <div className=" font-semibold">{product.price}$</div>
            {!!product.discountPrice && (
              <sup className=" font-semibold text-red-600 text-base line-through">
                {product.discountPrice}$
              </sup>
            )}
          </div>
          <div className="text-teal-500 font-semibold">{product.sold} sold</div>
        </div>
        <EventTime />
      </div>
    </div>
  );
}
