//React
import { useNavigate } from "react-router-dom";
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

import { addToast } from "@redux/toast/slices/ToastSlice";
const useLogin = () => {
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
  return {
    handleSubmit,
    handleInputData,
    handleClearError,
    formErrors,
    showPassword,
    setShowPassword,
    loading,
  };
};

export default useLogin;
