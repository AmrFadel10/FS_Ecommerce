//react &7 Redux
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { addToast } from "@redux/toast/slices/ToastSlice";
//Type
import type { TSignup } from "@customeTypes/auth";
// Redux && APIS
import { SignupValidation } from "@utils/validations/authValidation";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { SignupApiCall } from "@redux/auth/apicalls/SignupApiCall";
import { resetAuth } from "@redux/auth/slices/AuthSlice";

const useSignUp = () => {
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

  return {
    handleSubmit,
    handleClearError,
    handleInputData,
    formErrors,
    loading,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  };
};

export default useSignUp;
