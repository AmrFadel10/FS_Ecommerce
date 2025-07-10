//react
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Link } from "react-router-dom";

//icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// Redux && APIS
import { SignupValidation } from "@utils/validations/authValidation";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { SignupApiCall } from "@redux/auth/apicalls/SignupApiCall";
import { resetAuth } from "@redux/auth/slices/AuthSlice";

//Type
import type { TSignup } from "@customeTypes/auth";

//Components
import { Spinner } from "@components/common/Spinner";
import { addToast } from "@redux/toast/slices/ToastSlice";

const Signup = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const dataRef = useRef<TSignup>({
    fullName: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  useEffect(() => {
    return () => {
      dispatch(resetAuth());
    };
  }, [dispatch]);

  const handleInputData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    dataRef.current[name as keyof TSignup] = value;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading === "pending") return;

    setFormErrors({});
    const schema = SignupValidation.safeParse(dataRef.current);

    if (!schema.success) {
      const errors: { [key: string]: string } = {};
      schema.error.errors.forEach((error) => {
        errors[error.path[0]] = error.message;
      });
      setFormErrors(errors);
      return;
    }

    dispatch(SignupApiCall(dataRef.current))
      .unwrap()
      .then((res) => {
        dispatch(addToast({ type: "info", comment: res.message }));
      })
      .catch((error) => dispatch(addToast({ type: "error", comment: error })));
  };

  const handleClearError = (error: string) => {
    if (formErrors[error]) {
      setFormErrors((err) => {
        return { ...err, [error]: "" };
      });
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-3">
      <h2 className="text-3xl font-extrabold text-blue-600 font-Roboto">
        Register as a new user
      </h2>
      <div className="bg-white w-full max-w-md shadow rounded-xl py-6 md:px-8 px-6 mt-8">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col ">
            <label
              htmlFor="fullName"
              className="text-gray-600 text-sm font-semibold "
            >
              Your name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="First and last name"
              onChange={handleInputData}
              onFocus={() => handleClearError("fullName")}
              className={`${
                formErrors["fullName"]
                  ? "ring-1 ring-red-400 border-red-400"
                  : "focus:ring-1 ring-blue-400 focus:border-blue-400"
              } focus:outline-none focus:border-blue-300 shadow-sm border border-gray-400 rounded-md py-2 px-3 text-sm w-full placeholder-gray-500 `}
            />
            {formErrors["fullName"] && (
              <p className="text-[11px] font-medium text-red-600 mt-2">
                {formErrors["fullName"]}
              </p>
            )}
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="email"
              className="text-gray-600 text-sm font-semibold "
            >
              Email address:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleInputData}
              onFocus={() => handleClearError("email")}
              className={`${
                formErrors["email"]
                  ? "ring-1 ring-red-400 border-red-400"
                  : "focus:ring-1 ring-blue-400 focus:border-blue-400"
              } focus:outline-none focus:border-blue-300 shadow-sm border border-gray-400 rounded-md py-2 px-3 text-sm w-full placeholder-gray-500 appearance-none `}
              autoComplete="email"
            />
            {formErrors["email"] && (
              <p className="text-[11px] font-medium text-red-600 mt-2">
                {formErrors["email"]}
              </p>
            )}
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="mobile"
              className="text-gray-600 text-sm font-semibold "
            >
              Mobile:
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              onChange={handleInputData}
              onFocus={() => handleClearError("mobile")}
              className={`${
                formErrors["mobile"]
                  ? "ring-1 ring-red-400 border-red-400"
                  : "focus:ring-1 ring-blue-400 focus:border-blue-400"
              } focus:outline-none focus:border-blue-300 shadow-sm border border-gray-400 rounded-md py-2 px-3 text-sm w-full placeholder-gray-500 appearance-none `}
              autoComplete="mobile"
            />
            {formErrors["mobile"] && (
              <p className="text-[11px] font-medium text-red-600 mt-2">
                {formErrors["mobile"]}
              </p>
            )}
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="password"
              className="text-gray-600 text-sm font-semibold "
            >
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "password" : "text"}
                id="password"
                name="password"
                placeholder="At least 6 characters"
                onChange={handleInputData}
                onFocus={() => handleClearError("password")}
                className={`${
                  formErrors["password"]
                    ? "ring-1 ring-red-400 border-red-400"
                    : "focus:ring-1 ring-blue-400 focus:border-blue-400"
                } focus:outline-none focus:border-blue-300 shadow-sm border border-gray-400 rounded-md py-2 px-3 text-sm w-full placeholder-gray-500  `}
                autoComplete="current-password"
              />
              <div
                className="right-2 top-2 absolute cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <AiOutlineEye size={21} />
                ) : (
                  <AiOutlineEyeInvisible size={21} />
                )}
              </div>
            </div>
            {formErrors["password"] && (
              <p className="text-[11px] font-medium text-red-600 mt-2">
                {formErrors["password"]}
              </p>
            )}
          </div>
          <div className="flex flex-col mb-8">
            <label
              htmlFor="confirmPassword"
              className="text-gray-600 text-sm font-semibold "
            >
              Confirm password:
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "password" : "text"}
                id="confirmPassword"
                name="confirmPassword"
                onChange={handleInputData}
                onFocus={() => handleClearError("confirmPassword")}
                className={`${
                  formErrors["confirmPassword"]
                    ? "ring-1 ring-red-400 border-red-400"
                    : "focus:ring-1 ring-blue-400 focus:border-blue-400"
                } focus:outline-none focus:border-blue-300 shadow-sm border border-gray-400 rounded-md py-2 px-3 text-sm w-full placeholder-gray-500 `}
                autoComplete="current-password"
              />
              <div
                className="right-2 top-2 absolute cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? (
                  <AiOutlineEye size={21} />
                ) : (
                  <AiOutlineEyeInvisible size={21} />
                )}
              </div>
            </div>
            {formErrors["confirmPassword"] && (
              <p className="text-[11px] font-medium text-red-600 mt-2">
                {formErrors["confirmPassword"]}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading === "pending"}
            className={`h-[40px] flex items-center justify-center gap-x-2 text-white font-semibold bg-blue-600 w-full rounded-md  hover:bg-blue-700 ${
              loading === "pending"
                ? "pointer-events-none cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            {loading === "pending" ? (
              <>
                <Spinner size={18} /> Loading...
              </>
            ) : (
              <span>Submit</span>
            )}
          </button>
          <div className="flex items-center gap-2 text-sm w-full">
            <h4 className="text-gray-400">Already have an account?</h4>
            <Link
              to={"/login"}
              className="text-blue-600 hover:underline hover:text-blue-700 font-medium"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
