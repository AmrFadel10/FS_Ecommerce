import { Spinner } from "@components/common/Spinner";
import type { TUpdateAccountInfo } from "@customeTypes/auth";
import { updateAccountInfoApiCall } from "@redux/auth/apicalls/updateAccountInfoApiCall";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { addToast } from "@redux/toast/slices/ToastSlice";
import { updateAccountInfoValidation } from "@utils/validations/authValidation";
import { useRef, useState, type ChangeEvent, type FormEvent } from "react";

const AccountInfo = () => {
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector((state) => state.auth);
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
  return (
    <form
      className="flex-[5] px-6 flex flex-col gap-y-8 min-h-[500px]"
      onSubmit={handleSubmit}
    >
      <div className="w-36 h-36 rounded-full bg-slate-50 shadow shadow-slate-500 p-2 mx-auto mb-8">
        <img
          src={user?.avatar?.url}
          alt="avatar"
          className="h-full w-full rounded-full"
        />
      </div>
      <div className="flex flex-col  max-w-[400px] w-full mx-auto">
        <label
          htmlFor="fullName"
          className="text-left w-full font-medium text-sm"
        >
          Your name:
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          onChange={handleInputChange}
          className={`${
            formErrors["password"]
              ? "ring-1 ring-red-400 border-red-400"
              : "focus:ring-1 ring-blue-400 focus:border-blue-400"
          } focus:outline-none focus:border-blue-300 shadow-sm border border-gray-300 rounded-md py-2 px-3 text-sm w-full`}
          placeholder={`${user?.fullName || "Your name (Optional)"}`}
        />
        {formErrors["fullName"] && (
          <p className="text-[11px] font-medium text-red-600 mt-2">
            {formErrors["fullName"]}
          </p>
        )}
      </div>
      <div className="flex flex-col  max-w-[400px] w-full mx-auto">
        <label
          htmlFor="mobile"
          className="text-left w-full font-medium text-sm"
        >
          Your mobile:
        </label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          onChange={handleInputChange}
          className={`${
            formErrors["mobile"]
              ? "ring-1 ring-red-400 border-red-400"
              : "focus:ring-1 ring-blue-400 focus:border-blue-400"
          } focus:outline-none focus:border-blue-300 shadow-sm border border-gray-300 rounded-md py-2 px-3 text-sm w-full`}
          placeholder={`${user?.mobile || "+20 000 000 0000 (Optional)"}`}
        />
        {formErrors["mobile"] && (
          <p className="text-[11px] font-medium text-red-600 mt-2">
            {formErrors["fullName"]}
          </p>
        )}
      </div>
      <div className="flex flex-col mx-auto  max-w-[400px] w-full ">
        <label
          htmlFor="password"
          className="text-left w-full font-medium text-sm"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="At least 6 characters (Optional)"
          onChange={handleInputChange}
          className={`focus:border-blue-400 border-2 border-slate-200 p-2 rounded-md focus:outline-none w-full text-sm placeholder:text-gray-400`}
        />
        {formErrors["password"] && (
          <p className="text-[11px] font-medium text-red-600 mt-2">
            {formErrors["password"]}
          </p>
        )}
      </div>
      <div className="flex flex-col  max-w-[400px] w-full mx-auto">
        <label
          htmlFor="confirmPassword"
          className="text-left w-full font-medium text-sm"
        >
          Re-enter password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleInputChange}
          className={`${
            formErrors["confirmPassword"]
              ? "ring-1 ring-red-400 border-red-400"
              : "focus:ring-1 ring-blue-400 focus:border-blue-400"
          } focus:outline-none focus:border-blue-300 shadow-sm border border-gray-300 rounded-md py-2 px-3 text-sm w-full`}
        />
        {formErrors["confirmPassword"] && (
          <p className="text-[11px] font-medium text-red-600 mt-2">
            {formErrors["confirmPassword"]}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={loading === "pending"}
        className={`  max-w-[400px] w-full mx-auto h-[40px] flex items-center justify-center gap-x-2 text-white font-semibold bg-gray-800  rounded-md  hover:bg-gray-950 ${
          loading === "pending"
            ? "pointer-events-none cursor-not-allowed"
            : "cursor-pointer"
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
    </form>
  );
};

export default AccountInfo;
