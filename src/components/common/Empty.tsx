import Lottie from "lottie-react";
import EmptyIcon from "@assets/animations/empty.json";

const Empty = ({ size }: { size?: number }) => {
  return (
    <div className="flex flex-col items-center">
      <Lottie
        animationData={EmptyIcon}
        style={{ width: `${size ? `${size}px` : "250px"}` }}
      />
      <p className="text-center text-gray-500 text-sm font-medium">
        No products available
      </p>
    </div>
  );
};

export default Empty;
