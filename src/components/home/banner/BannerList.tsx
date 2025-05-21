import bannerInfo from "@utils/bannerInfo";
import BannerInner from "./BannerItem";

export default function BannerList() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mx-auto flex-1">
      {bannerInfo.map((item, index) => (
        <BannerInner item={item} key={index} />
      ))}
    </div>
  );
}
