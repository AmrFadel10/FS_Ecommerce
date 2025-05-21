import { Link } from "react-router-dom";

//Icons
import { FaHome } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaInfo } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27512.00526065645!2d30.908102376710687!3d30.46441947272552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14587e6f4ce34e03%3A0x99b55e0a92f5939e!2sMenouf%20City%2C%20Menofia%20Governorate!5e0!3m2!1sen!2seg!4v1707975845408!5m2!1sen!2seg"
        width="100%"
        height="450"
        className="border-0"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="done"
      ></iframe>
      <div className="flex gap-16 bg-white rounded-xl shadow-md p-6 flex-col md:flex-row">
        <div className="flex-1 flex flex-col gap-8 order-2 md:order-1">
          <h2 className="text-3xl font-medium">Conatct</h2>
          <form className="flex flex-col gap-4">
            <div className="w-full">
              <input
                type="text"
                className={`p-3 bg-gray-100 text-gray-700 focus:outline-none w-full `}
                placeholder="Enter your Name..."
                name="name"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                className={`p-3 bg-gray-100 text-gray-700 focus:outline-none w-full `}
                placeholder="Enter your Email..."
                name="email"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                className={`p-3 bg-gray-100 text-gray-700 focus:outline-none w-full `}
                placeholder="Enter your Mobile..."
                name="mobile"
              />
            </div>
            <div className="">
              <textarea
                name="comment"
                className={`p-3 bg-gray-100 text-gray-700 focus:outline-none resize-none h-32 w-full `}
                placeholder="Enter your comment..."
              ></textarea>
            </div>

            <button className="hover:bg-orange-300 hover:text-slate-800 bg-slate-800 text-slate-200 px-8 py-3 mt-5 rounded-full w-fit transition-all">
              Send
            </button>
          </form>
        </div>
        <div className="flex-1 flex flex-col gap-8 order-1 md:order-2">
          <h2 className="text-3xl font-medium">Get In Touch With Us</h2>
          <p className="flex gap-3 text-gray-600 content-center font-light">
            <FaHome className="text-lg" />
            <span className="text-sm font-medium">Menouf, Menofia, Egypt</span>
          </p>
          <p className="flex gap-3 text-gray-600 content-center font-light">
            <MdOutlineLocalPhone className="text-lg" />
            <Link to={"+201012345678"} className="text-sm font-medium">
              +201012345678
            </Link>
          </p>
          <p className="flex gap-3 text-gray-600 content-center font-light">
            <MdEmail className="text-lg" />
            <Link to={"demo@company.com"} className="text-sm font-medium">
              demo@company.com
            </Link>
          </p>
          <p className="flex gap-3 text-gray-600 content-center font-light">
            <FaInfo className="text-lg" />
            <span className="text-sm font-medium">
              Monday – Friday 10 AM – 8 PM
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
