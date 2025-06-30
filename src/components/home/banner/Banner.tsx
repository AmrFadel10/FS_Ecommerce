import { GrNext, GrPrevious } from "react-icons/gr";
import img1 from "@assets/images/banner/banner1.jpg";
import img2 from "@assets/images/banner/banner2.jpg";
import img3 from "@assets/images/banner/banner3.jpg";
import style from "./banner.module.css";
const { active, next, prev } = style;
import { useEffect, useState } from "react";
const Banner = () => {
  const [activeImg, setActiveImg] = useState(0);

  const images = [img1, img2, img3];

  const handlebanner = (btn: string) => {
    if (btn === "next") {
      if (activeImg === images.length - 1) {
        setActiveImg(0);
      } else {
        setActiveImg((ele) => ++ele);
      }
    } else if (btn === "prev") {
      if (activeImg === 0) {
        setActiveImg(images.length - 1);
      } else {
        setActiveImg((ele) => --ele);
      }
    }
  };
  useEffect(() => {
    const counter = setTimeout(() => {
      handlebanner("next");
    }, 3000);
    return () => {
      clearTimeout(counter);
    };
  }, [activeImg]);
  return (
    <div className={`h-[450px] relative w-full overflow-hidden`}>
      {images.map((img, idx) => {
        return (
          <div
            className={`${activeImg === idx ? `${active} ` : ""}
                 ${activeImg === idx + 1 ? `${next} ` : ""}
                ${activeImg === idx - 1 ? `${prev} ` : ""}
                ${
                  idx === 0 && activeImg === images.length - 1 ? `${prev} ` : ""
                }
                ${
                  idx === images.length - 1 && activeImg === 0 ? `${next} ` : ""
                }
             w-full `}
            key={idx}
          >
            <img
              src={img}
              loading="lazy"
              alt="banner"
              className="h-full w-full object-cover select-none pointer-events-none rounded-lg"
            />
          </div>
        );
      })}
      <div
        className="absolute right-2 top-1/2  z-10 cursor-pointer  hover:bg-gray-950/30 bg-slate-950/15 p-3 rounded-full"
        onClick={() => handlebanner("next")}
      >
        <GrNext size={26} />
      </div>
      <div
        className="absolute left-2 top-1/2  z-10 cursor-pointer hover:bg-gray-950/30 bg-slate-950/15 p-3 rounded-full"
        onClick={() => handlebanner("prev")}
      >
        <GrPrevious size={26} />
      </div>
    </div>
  );
};

export default Banner;
