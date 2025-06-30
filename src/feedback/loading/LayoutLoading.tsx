import Loading from "@assets/animations/loading.json";
import Lottie from "lottie-react";

const LayoutLoading = () => {
  return (
    <section className="fixed left-0 top-0 w-screen h-screen bg-gray-100 flex justify-center items-center z-[1000]">
      <Lottie animationData={Loading} style={{ width: "250px" }} />
    </section>
  );
};

export default LayoutLoading;
