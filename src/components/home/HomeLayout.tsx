import { Link } from "react-router-dom";
import BannerList from "./banner/BannerList";
import StoreBenefitsFeatures from "./StoreBenefitsFeatures";
const HomeLayout = () => {
  return (
    <section className="flex flex-col gap-y-20">
      <div className="flex gap-6 lg:flex-row flex-col pt-10">
        <Link
          to={"/products"}
          className="relative rounded-2xl overflow-hidden  md:h-96 lg:h-[500px] flex-1"
        >
          <img
            src={"/assets/images/banner1.jpg"}
            alt="banner"
            className="object-cover w-full h-full"
          />
        </Link>
        <BannerList />
      </div>
      <StoreBenefitsFeatures />
    </section>
  );
};

export default HomeLayout;
