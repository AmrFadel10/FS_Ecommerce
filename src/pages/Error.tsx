import Lottie from "lottie-react";
import NotFound from "@assets/animations/notFound.json";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="flex justify-center items-center h-screen w-full gap-y-4 flex-col">
      <Lottie animationData={NotFound} style={{ width: "600px" }} />
      <Link
        to={"/"}
        className="bg-slate-900 hover:bg-slate-950 text-slate-50 rounded-md px-4 py-2 transition-all"
        replace
      >
        Back to home page
      </Link>
    </section>
  );
};

export default Error;
