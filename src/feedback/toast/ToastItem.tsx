import type { TToast } from "@customeTypes/toast";
import { useAppDispatch } from "@redux/hooks";
import { removeToast } from "@redux/toast/slices/ToastSlice";
import { useCallback, useEffect, useState } from "react";
import { IoIosCloseCircle, IoIosInformationCircle } from "react-icons/io";
import { IoCheckmarkCircle, IoCloseSharp } from "react-icons/io5";
import { PiShieldWarningBold } from "react-icons/pi";

const ToastItem = ({ title, type, comment, id, color }: TToast) => {
  const dispatch = useAppDispatch();
  const [increaseWidthbyTime, setIncreaseWidthbyTime] = useState(0);
  const [pauseWhenHover, setPauseWhenHover] = useState(false);

  const width = 300;
  const duration = 8000;
  const pixelPerUnite = duration / width;

  const handleRemoveToast = useCallback(() => {
    dispatch(removeToast(id!));
  }, [id, dispatch]);

  //Increase with by time throw
  useEffect(() => {
    const interval = setInterval(() => {
      setIncreaseWidthbyTime((pre) => {
        if (increaseWidthbyTime > 100 || pauseWhenHover) {
          return pre;
        }
        return pre + 1;
      });
    }, pixelPerUnite);

    return () => {
      clearInterval(interval);
    };
  }, [pixelPerUnite, pauseWhenHover, increaseWidthbyTime]);

  useEffect(() => {
    if (increaseWidthbyTime === 100) {
      handleRemoveToast();
    }
  }, [increaseWidthbyTime, handleRemoveToast]);

  return (
    <article
      className={` relative rounded-xl px-3 py-2 flex gap-x-2 shadow-md  bg-slate-50 z-2 items-center overflow-hidden cursor-pointer`}
      onMouseEnter={() => setPauseWhenHover(true)}
      onMouseLeave={() => setPauseWhenHover(false)}
    >
      <div className="pr-2 border-r border-r-slate-400">
        <div
          className={`${color} rounded-full bg-slate-50 w-9 h-9 flex justify-center items-center shadow `}
        >
          {type === "info" ? (
            <IoIosInformationCircle size={24} />
          ) : type === "warning" ? (
            <PiShieldWarningBold size={24} />
          ) : type === "success" ? (
            <IoCheckmarkCircle size={24} />
          ) : (
            <IoIosCloseCircle size={24} />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-y-1 pl-1">
        <h3 className="text-slate-700 capitalize text-sm font-bold">
          {title || type}
        </h3>
        <p className="text-slate-500 text-xs font-medium">{comment}</p>
        <span
          className="absolute top-2 right-2 cursor-pointer text-slate-700 hover:text-slate-950"
          onClick={handleRemoveToast}
        >
          <IoCloseSharp size={22} />
        </span>
      </div>
      <div
        className="absolute left-0 top-0 h-full opacity-15 z-1 transition-all duration-[30] "
        style={{
          width: `${increaseWidthbyTime}%`,
          backgroundColor: color?.split("-")[1],
        }}
      ></div>
    </article>
  );
};

export default ToastItem;
