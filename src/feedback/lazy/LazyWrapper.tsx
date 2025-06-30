import { Suspense, useEffect, useRef, useState, type ReactNode } from "react";

//Components
import BlogsSkeleton from "@feedback/skeletons/blogs/blogsSkeleton";
import LayoutSkeleton from "@feedback/skeletons/home/LayoutSkeleton";
import SponsoredFeatureSkeleton from "@feedback/skeletons/home/SponsoredFeatureSkeleton";
import StoreInfoFeaturesSkeleton from "@feedback/skeletons/home/StoreInfoFeaturesSkeleton";
import HomeProductsSkeleton from "@feedback/skeletons/products/HomeProductsSkeleton";

const skeletonComponentsObj = {
  banner: LayoutSkeleton,
  sponsored: SponsoredFeatureSkeleton,
  info: StoreInfoFeaturesSkeleton,
  homeProducts: HomeProductsSkeleton,
  homeBlogs: BlogsSkeleton,
};

type Ttype = keyof typeof skeletonComponentsObj;

const LazyWrapper = ({
  children,
  type,
}: {
  children: ReactNode;
  type: Ttype;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isVisible || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
  }, [isVisible]);
  const Skelton = skeletonComponentsObj[type];
  return (
    <div ref={ref}>
      {isVisible && <Suspense fallback={<Skelton />}>{children}</Suspense>}
    </div>
  );
};

export default LazyWrapper;
