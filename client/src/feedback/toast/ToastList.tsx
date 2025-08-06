import { useAppSelector } from "@redux/hooks";
import ToastItem from "./ToastItem";

const ToastList = () => {
  const { items } = useAppSelector((state) => state.toast);
  return (
    <div className="flex bottom-10 right-10 flex-col gap-y-2 fixed w-80 text-slate-50 z-[5000]">
      {items.map((toast) => {
        return <ToastItem key={toast.id} {...toast} />;
      })}
    </div>
  );
};

export default ToastList;
