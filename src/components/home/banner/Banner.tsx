import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import img2 from "/assets/images/banner/img-2.webp";
import img1 from "/assets/images/banner/img-1.webp";
import style from "./banner.module.css";

const { active, next, prev } = style;

const images = [
  {
    topLabel: "Best Deal Online on Laptops",
    middleLabel: "Acer Nitro Laptop",
    bottomLabel: "UP to 55% OFF",
    image: img2,
  },
  {
    topLabel: "Best Deal Online on smart watches",
    middleLabel: "SMART WEARABLE.",
    bottomLabel: "UP to 50% OFF",
    image: img1,
  },
];

const Banner = () => {
  const [activeImg, setActiveImg] = useState(0);

  const goNext = () => {
    setActiveImg((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setActiveImg((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(goNext, 3000);
    return () => clearTimeout(timer);
  }, [activeImg]);

  const getClass = (idx: number) => {
    if (idx === activeImg) return active;
    if (idx === (activeImg + 1) % images.length) return next;
    if (idx === (activeImg - 1 + images.length) % images.length) return prev;
    return "";
  };

  return (
    <div className="relative w-full md:h-[350px] lg:h-[400px] h-64 p-5">
      {images.map((ele, idx) => (
        <div key={idx} className={`${getClass(idx)} w-full h-full`}>
          <div className="bg-blue-950 rounded-2xl   relative overflow-hidden h-full w-full">
            <div className="relative z-10 w-full h-full flex lg:gap-x-4 py-6 px-4 lg:px-12 xl:px-20">
              <div className="flex flex-col gap-y-3 flex-[3] items-start justify-center">
                <span className="text-white  text-xs sm:text-xl  xl:text-3xl">
                  {ele.topLabel}
                </span>
                <h1 className="text-white text-lg sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl  font-bold">
                  {ele.middleLabel}
                </h1>
                <span className="text-white  text-xs sm:text-xl  xl:text-3xl">
                  {ele.bottomLabel}
                </span>
              </div>
              <div className="flex-[2] h-full flex items-center justify-center">
                <img
                  src={ele.image}
                  alt="banner-1"
                  loading={idx === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <span className="rounded-full md:w-80 w-48 md:h-80 h-48 lg:w-[400px] lg:h-[400px] bg-indigo-950 absolute right-0 top-0 -translate-y-1/2"></span>
            <span className="rounded-full md:w-80 w-48 md:h-80 h-48 lg:w-[400px] lg:h-[400px] bg-indigo-950 absolute left-0 bottom-0 translate-y-1/2"></span>
          </div>
        </div>
      ))}
      <div className="bg-gray-50 lg:p-2 absolute lg:-left-8 left-1 top-1/2 -translate-y-1/2 z-50 rounded-full opacity-35 lg:opacity-100">
        <button
          onClick={goPrev}
          className="  bg-blue-50 hover:bg-blue-100 text-white p-2 lg:p-4 rounded-full  cursor-pointer"
        >
          <GrPrevious size={16} color="#2563EB" />
        </button>
      </div>
      <div className="bg-gray-50 absolute lg:-right-8 right-1 top-1/2 -translate-y-1/2 lg:p-2 z-50 rounded-full opacity-35 lg:opacity-100">
        <button
          onClick={goNext}
          className=" bg-blue-50 hover:bg-blue-100 text-white p-2 lg:p-4 rounded-full z-50 cursor-pointer"
        >
          <GrNext size={16} color="#2563EB" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
