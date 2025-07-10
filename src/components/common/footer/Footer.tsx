import { useAppSelector } from "@redux/hooks";
import { IoIosHeart } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  const { categories } = useAppSelector((state) => state.categories);
  return (
    <footer className="bg-blue-700  text-gray-200 text-[12px] font-normal pt-16">
      <div className="container mx-auto flex lg:gap-6 gap-4 justify-between flex-wrap px-2">
        <div className="lg:w-fit w-[45%]">
          <h3 className="text-xl font-bold mb-6 border-b-2 pb-1">Conatct us</h3>
          <ul className="flex flex-col gap-3">
            <div>
              <p>Egypt</p>
            </div>
            <p className="hover:text-white font-medium">+201093900892</p>
            <a
              href="mailto:afadel1310@gmail.com"
              className="hover:text-white font-medium"
            >
              afadel1310@gmail.com
            </a>
          </ul>
        </div>
        <div className="lg:w-fit w-[45%]">
          <h3 className="text-xl font-bold mb-6 border-b-2 pb-1">Categories</h3>
          <ul className="flex flex-col gap-3">
            {categories.slice(0, 8).map((category) => {
              return (
                <Link
                  to={`/products?category=${category.title}`}
                  key={category._id}
                  className="hover:text-white capitalize font-medium"
                >
                  {category.title}
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="lg:w-fit w-[45%]">
          <h3 className="text-xl font-bold mb-6 border-b-2 pb-1">
            Information
          </h3>
          <ul className="flex flex-col gap-3">
            <Link
              to={"/privacy-policy"}
              className="hover:text-white font-medium"
            >
              Privacy policy
            </Link>
            <Link
              to={"/refund-policy"}
              className="hover:text-white font-medium"
            >
              Refund policy
            </Link>
            <Link
              to={"/shipping-policy"}
              className="hover:text-white font-medium"
            >
              Shipping policy
            </Link>
            <Link
              to={"/terms-condition"}
              className="hover:text-white font-medium"
            >
              Terms & Condition
            </Link>
            <Link to={"/blogs"} className="hover:text-white">
              Blogs
            </Link>
          </ul>
        </div>
        <div className="lg:w-fit w-[45%]">
          <h3 className="text-xl font-bold mb-6 border-b-2 pb-1">Account</h3>
          <ul className="flex flex-col gap-3">
            <Link to={"/contact"} className="hover:text-white font-medium">
              Conatct
            </Link>

            <Link to={"/faq"} className="hover:text-white font-medium">
              FAQ
            </Link>
          </ul>
        </div>
      </div>
      <div className="border-t border-blue-500 py-4 mt-8 text-center flex items-center justify-center font-light text-sm">
        © {new Date().getFullYear()} All rights reserved.
        <IoIosHeart size={20} color="red" />
        (Amr)
      </div>
    </footer>
  );
}
