import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const AboveArrowsToRightAndLeft = ({
  refItem,
  length,
}: {
  refItem: React.RefObject<HTMLDivElement | null>;
  length: number;
}) => {
  return (
    <div className={`${length < 5 ? "hidden" : "flex  gap-x-2"}`}>
      <span
        className="hover:cursor-pointer hover:text-slate-950 text-slate-500"
        onClick={() =>
          refItem.current?.scrollBy({ behavior: "smooth", left: -800 })
        }
      >
        <IoIosArrowBack size={23} />
      </span>
      <span
        className="hover:cursor-pointer hover:text-slate-950 text-slate-500"
        onClick={() =>
          refItem.current?.scrollBy({ behavior: "smooth", left: 800 })
        }
      >
        <IoIosArrowForward size={23} />
      </span>
    </div>
  );
};

export default AboveArrowsToRightAndLeft;
