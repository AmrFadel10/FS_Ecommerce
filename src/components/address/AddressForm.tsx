import { Spinner } from "@components/common/Spinner";
import type { TAddress } from "@customeTypes/address";
import { addAddressApiCall } from "@redux/address/apiCalls/createAddressApiCall";
import { updateAddressApiCall } from "@redux/address/apiCalls/updateAddressApiCall";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { addToast } from "@redux/toast/slices/ToastSlice";
import { addressValidation } from "@utils/validations/addressValidation";
import { memo, useState, type ChangeEvent, type FormEvent } from "react";
import { IoMdClose } from "react-icons/io";

const AddressForm = memo(
  ({
    handleCloseForm,
    addressForUpdate,
  }: {
    handleCloseForm: () => void;
    addressForUpdate?: TAddress | null;
  }) => {
    const dispatch = useAppDispatch();
    const { loading } = useAppSelector((state) => state.AnAddress);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const [info, setInfo] = useState<TAddress>({
      state: addressForUpdate?.state || "",
      city: addressForUpdate?.city || "",
      zipCode: addressForUpdate?.zipCode || "",
      country: addressForUpdate?.country || "",
      addressLine: addressForUpdate?.addressLine || "",
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setInfo((pre) => {
        return { ...pre, [name]: value };
      });
    };

    const handleAddAddress = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const schema = addressValidation.safeParse(info);
      if (!schema.success) {
        const formErrors: { [key: string]: string } = {};
        schema.error.errors.forEach((error) => {
          formErrors[error.path[0]] = error.message;
        });
        setErrors(formErrors);
        return;
      }

      if (addressForUpdate) {
        dispatch(updateAddressApiCall({ ...info, _id: addressForUpdate._id }))
          .unwrap()
          .then(() =>
            addToast({
              type: "success",
              comment: "Address was updated successfully!",
            })
          )
          .catch((error) => {
            addToast({ type: "error", comment: error });
          });
      } else {
        dispatch(addAddressApiCall(info));
      }
      handleCloseForm();
    };

    const clearError = (key: string) => {
      if (errors[key]) {
        setErrors((pre) => {
          return { ...pre, [key]: "" };
        });
      }
    };
    return (
      <section className="flex-[5] pl-3  bg-black/20 fixed w-screen h-screen left-0 top-0 z-[100000]">
        <form
          className="flex flex-col   fixed left-1/2 top-1/2 -translate-1/2 w-96  bg-white max-w-[450px] p-8 rounded-lg"
          onSubmit={handleAddAddress}
        >
          <h3 className="text-xl mb-2 font-bold text-blue-600">
            {addressForUpdate ? "Update address" : "Add address"}
          </h3>
          <span
            className="absolute top-4 right-4 cursor-pointer text-slate-600 hover:text-slate-950"
            onClick={handleCloseForm}
          >
            <IoMdClose size={23} />
          </span>
          <div className="flex flex-col">
            <input
              name="country"
              placeholder="Country"
              value={info.country}
              className={`${
                errors["country"] ? "my-1" : "my-3"
              } py-1 px-3 focus:outline-none border border-gray-300 rounded-lg  text-gray-700 text-base w-full`}
              onChange={handleChange}
              onFocus={() => clearError("country")}
            />
            {errors["country"] && (
              <p className="text-[11px] font-medium text-red-600 mt-2">
                {errors["country"]}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <input
              name="addressLine"
              placeholder="Address line"
              value={info.addressLine}
              className={`${
                errors["addressLine"] ? "my-1" : "my-3"
              } py-1 px-3 focus:outline-none border border-gray-300 rounded-lg  text-gray-700 text-base w-full`}
              onChange={handleChange}
              onFocus={() => clearError("addressLine")}
            />
            {errors["addressLine"] && (
              <p className="text-[11px] font-medium text-red-600 mt-2">
                {errors["addressLine"]}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <input
              name="city"
              placeholder="City"
              value={info.city}
              className={`${
                errors["city"] ? "my-1" : "my-3"
              } py-1 px-3 focus:outline-none border border-gray-300 rounded-lg  text-gray-700 text-base w-full`}
              onChange={handleChange}
              onFocus={() => clearError("city")}
            />
            {errors["city"] && (
              <p className="text-[11px] font-medium text-red-600 mt-2">
                {errors["city"]}
              </p>
            )}
          </div>
          <div className="flex flex-row gap-x-4">
            <div className="flex flex-col flex-1">
              <input
                name="state"
                placeholder="state"
                value={info.state}
                className={`${
                  errors["state"] ? "my-1" : "my-3"
                } py-1 px-3 focus:outline-none border border-gray-300 rounded-lg  text-gray-700 text-base w-full`}
                onChange={handleChange}
                onFocus={() => clearError("state")}
              />
              {errors["state"] && (
                <p className="text-[11px] font-medium text-red-600 mt-2">
                  {errors["state"]}
                </p>
              )}
            </div>
            <div className="flex flex-col flex-1">
              <input
                name="zipCode"
                placeholder="ZIP code"
                value={info.zipCode}
                className={`${
                  errors["zipCode"] ? "my-1" : "my-3"
                } py-1 px-3 focus:outline-none border border-gray-300 rounded-lg  text-gray-700 text-base w-full`}
                onChange={handleChange}
                onFocus={() => clearError("zipCode")}
              />
              {errors["zipCode"] && (
                <p className="text-[11px] font-medium text-red-600 mt-2">
                  {errors["zipCode"]}
                </p>
              )}
            </div>
          </div>
          <div className="flex ">
            <button
              type="submit"
              disabled={
                loading === "pending" ||
                !!Object.values(errors).filter((v) => !!v).length
              }
              className={`h-[40px] flex items-center justify-center gap-x-2 text-blue-50 font-semibold bg-blue-600 w-full rounded-md  hover:bg-blue-700 ${
                loading === "pending" ||
                !!Object.values(errors).filter((v) => !!v).length
                  ? " cursor-no-drop"
                  : "cursor-pointer"
              }`}
            >
              {loading === "pending" ? (
                <>
                  <Spinner size={18} /> Loading...
                </>
              ) : (
                <span>{addressForUpdate ? "Update" : "Add"} address</span>
              )}
            </button>
          </div>
        </form>
      </section>
    );
  }
);

export default AddressForm;
