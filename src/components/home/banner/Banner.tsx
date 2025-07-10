import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import img1 from "@assets/images/banner/banner1.jpg";
import img2 from "@assets/images/banner/banner2.jpg";
// import img3 from "@assets/images/banner/banner3.webp";
import img4 from "@assets/images/banner/banner4.webp";
import style from "./banner.module.css";

const { active, next, prev } = style;

const images = [img4, img2, img1];

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
    <div className="relative w-full h-[480px] overflow-hidden rounded-lg">
      {images.map((img, idx) => (
        <div key={idx} className={`${getClass(idx)} w-full h-full`}>
          <img
            src={img}
            alt={`banner-${idx}`}
            className="w-full h-full object-cover select-none pointer-events-none rounded-lg"
          />
        </div>
      ))}

      <button
        onClick={goPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-50 cursor-pointer"
      >
        <GrPrevious size={26} />
      </button>
      <button
        onClick={goNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-50 cursor-pointer"
      >
        <GrNext size={26} />
      </button>
    </div>
  );
};

export default Banner;
