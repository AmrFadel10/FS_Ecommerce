//React
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { addToast } from "@redux/toast/slices/ToastSlice";

//Types
import type { TUpdateAccountInfo } from "@customeTypes/auth";

//APIS
import { updateAccountInfoApiCall } from "@redux/auth/apicalls/updateAccountInfoApiCall";

//Validation
import { updateAccountInfoValidation } from "@utils/validations/authValidation";

const useAccountInfo = () => {
  const dispatch = useAppDispatch();
  const { user, loading, error } = useAppSelector((state) => state.auth);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const dataRef = useRef<TUpdateAccountInfo>({
    fullName: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dataRef.current[name as keyof TUpdateAccountInfo] = value;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      dataRef.current.fullName !== "" &&
      dataRef.current.mobile !== "" &&
      dataRef.current.password !== ""
    ) {
      if (loading === "pending") return;

      setFormErrors({});
      const schema = updateAccountInfoValidation.safeParse(dataRef.current);
      if (!schema.success) {
        const errors: { [key: string]: string } = {};
        schema.error.errors.map((error) => {
          errors[error.path[0]] = error.message;
        });
        setFormErrors(errors);
        return;
      }

      dispatch(
        updateAccountInfoApiCall({
          ...dataRef.current,
          confirmPassword: undefined,
        })
      )
        .unwrap()
        .then(() => {
          dispatch(
            addToast({
              type: "success",
              comment: "Your account information was updated successfully",
            })
          );
        })
        .catch((error) => {
          dispatch(addToast({ type: "error", comment: `${error}` }));
        });
    } else {
      dispatch(
        addToast({
          type: "info",
          comment:
            "Please fill in the form to update your account information!",
        })
      );
    }
  };
  return { error, loading, handleSubmit, handleInputChange, formErrors, user };
};

export default useAccountInfo;
