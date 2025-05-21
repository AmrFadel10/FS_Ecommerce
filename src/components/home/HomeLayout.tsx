import { Link } from "react-router-dom";
import BannerList from "./banner/BannerList";
const HomeLayout = () => {
  return (
    <>
      <div className="py-8 flex gap-6 lg:flex-row flex-col">
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
    </>
  );
};

export default HomeLayout;
