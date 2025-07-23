import Lottie from "lottie-react";
import EmptyIcon from "@assets/animations/empty.json";
import { useLocation } from "react-router-dom";

const Empty = () => {
  const location = useLocation();
  const size = location.pathname === "/" ? "150px" : "250px";
  return (
    <div className="flex flex-col items-center min-h-[400px] w-full mx-auto">
      <Lottie animationData={EmptyIcon} style={{ width: size }} />
      <p className="text-center text-gray-500 text-sm font-medium">
        No items available
      </p>
    </div>
  );
};

export default Empty;
