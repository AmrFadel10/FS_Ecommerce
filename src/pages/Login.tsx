//React
import { Link, useNavigate } from "react-router-dom";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

//APIS
import { LoginApiCall } from "@redux/auth/apicalls/LoginApiCall";
import { resetAuth } from "@redux/auth/slices/AuthSlice";
import { useAppDispatch, useAppSelector } from "@redux/hooks";

//Validations
import { loginValidation } from "@utils/validations/authValidation";

//Icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

//components
import { Spinner } from "@components/common/Spinner";
import { addToast } from "@redux/toast/slices/ToastSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.auth);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(true);
  const dataRef = useRef({ email: "", password: "" });

  useEffect(() => {
    return () => {
      dispatch(resetAuth());
    };
  }, [dispatch]);

  useEffect(() => {
    if (loading === "succeeded") {
      navigate("/");
    }
  }, [loading, navigate]);

  const handleInputData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dataRef.current[name as keyof { email: string }] = value;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading === "pending") return;
    setFormErrors({});

    const schema = loginValidation.safeParse(dataRef.current);

    if (!schema.success) {
      const errors: { [key: string]: string } = {};
      schema.error.errors.forEach((ele) => {
        errors[ele.path[0]] = ele.message;
      });
      setFormErrors(errors);
      return;
    }
    dispatch(LoginApiCall(dataRef.current))
      .unwrap()
      .catch((error) => dispatch(addToast({ type: "error", comment: error })));
  };

  const handleClearError = (error: string) => {
    if (formErrors[error]) {
      setFormErrors((pre) => ({ ...pre, [error]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-3">
      <h2 className="text-3xl font-extrabold text-gray-800 font-Roboto">
        Login to your account
      </h2>
      <div className="bg-white w-full max-w-sm shadow rounded-xl py-16 md:px-8 px-6 mt-8">
        <form className="space-y-8" onSubmit={handleSubmit}>
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
              } focus:outline-none  shadow-sm border border-gray-300 rounded-md py-2 px-3 text-sm w-full placeholder-gray-400 `}
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
                onChange={handleInputData}
                onFocus={() => handleClearError("password")}
                className={`${
                  formErrors["password"]
                    ? "ring-1 ring-red-400 border-red-400"
                    : "focus:ring-1 ring-blue-400 focus:border-blue-400"
                } focus:outline-none focus:border-blue-300 shadow-sm border border-gray-300 rounded-md py-2 px-3 text-sm w-full`}
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

          <button
            type="submit"
            disabled={loading === "pending"}
            className={`h-[40px] flex items-center justify-center gap-x-2 text-slate-50 font-semibold bg-gray-800 w-full rounded-md  hover:bg-gray-950 ${
              loading === "pending" ? " cursor-no-drop" : "cursor-pointer"
            }`}
          >
            {loading === "pending" ? (
              <>
                <Spinner size={18} color="white" /> Loading...
              </>
            ) : (
              <span>Submit</span>
            )}
          </button>
          <div className="flex items-center gap-2 text-sm w-full">
            <h4 className="text-gray-400">Don't have an account?</h4>
            <Link
              to={"/signup"}
              className="text-gray-800 hover:underline hover:text-gray-950 font-medium"
            >
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
