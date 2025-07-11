import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import img1 from "@assets/images/banner/banner1.jpg";
import img2 from "@assets/images/banner/banner2.jpg";
import style from "./banner.module.css";

const { active, next, prev } = style;

const images = [img2, img1];

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
    <div className="relative w-full lg:h-[400px] h-72">
      {images.map((img, idx) => (
        <div key={idx} className={`${getClass(idx)} w-full h-full`}>
          <img
            src={img}
            alt={`banner-${idx}`}
            className="w-full h-full object-fill select-none pointer-events-none rounded-2xl overflow-hidden"
          />
        </div>
      ))}
      <div className="bg-gray-50 p-2 absolute -left-8 top-1/2 -translate-y-1/2 z-50 rounded-full lg:block hidden">
        <button
          onClick={goPrev}
          className="  bg-blue-50 hover:bg-blue-100 text-white p-4 rounded-full  cursor-pointer"
        >
          <GrPrevious size={16} color="#2563EB" />
        </button>
      </div>
      <div className="bg-gray-50 absolute -right-8 top-1/2 -translate-y-1/2 p-2 z-50 rounded-full lg:block hidden">
        <button
          onClick={goNext}
          className=" bg-blue-50 hover:bg-blue-100 text-white p-4 rounded-full z-50 cursor-pointer"
        >
          <GrNext size={16} color="#2563EB" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
