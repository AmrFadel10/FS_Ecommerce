import { Spinner } from "@components/common/Spinner";

const RootLoading = () => {
  return (
    <section className="fixed left-0 top-0 w-screen h-screen bg-blue-50 flex justify-center items-center z-[1000]">
      <Spinner size={50} color="#2563eb" />
    </section>
  );
};

export default RootLoading;
