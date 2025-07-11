//React && Redux
import { Spinner } from "@components/common/Spinner";

//Components
import Loading from "@feedback/loading/Loading";

//customeHook
import useAccountInfo from "./useAccountInfo";

const AccountInfo = () => {
  const { error, loading, handleSubmit, handleInputChange, formErrors, user } =
    useAccountInfo();
  return (
    <Loading error={error} status={loading} type="accountInfo">
      <form
        className="flex-[5] px-6 flex flex-col gap-y-8 min-h-[500px]"
        onSubmit={handleSubmit}
      >
        <h2 className="lg:text-3xl text-xl font-bold text-blue-600">
          Account info
        </h2>

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
          className={`  max-w-[400px] w-full mx-auto h-[40px] flex items-center justify-center gap-x-2 text-white font-semibold bg-blue-600  rounded-md  hover:bg-blue-700 ${
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
      </form>
    </Loading>
  );
};

export default AccountInfo;
