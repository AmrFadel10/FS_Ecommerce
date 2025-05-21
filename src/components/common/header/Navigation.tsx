import { Link } from "react-router-dom";

//Components
import DropDownCategories from "./DropDownCategories";
import { navigationData } from "@utils/data";

const Navigation = () => {
  return (
    <nav className="bg-slate-900 text-slate-300 sticky left-0 top-0 z-[21] transition-all">
      <div className="container flex mx-auto px-2 lg:px-0">
        <DropDownCategories />
        <ul className="flex lg:gap-6 md:gap-3 gap-1 ml-4 sm:text-base text-[12px]">
          {navigationData.map((ele, index) => {
            return (
              <Link
                to={ele.path}
                key={index}
                className="pl-3 py-3  hover:text-orange-300 transition-all block"
              >
                {ele.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
