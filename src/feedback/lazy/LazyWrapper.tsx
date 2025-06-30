import { Suspense, useEffect, useRef, useState, type ReactNode } from "react";

//Components
import BlogsSkeleton from "@feedback/skeletons/blogs/blogsSkeleton";
import LayoutSkeleton from "@feedback/skeletons/home/LayoutSkeleton";
import SponsoredFeatureSkeleton from "@feedback/skeletons/home/SponsoredFeatureSkeleton";
import StoreInfoFeaturesSkeleton from "@feedback/skeletons/home/StoreInfoFeaturesSkeleton";
import HomeProductsSkeleton from "@feedback/skeletons/products/HomeProductsSkeleton";

const loadingComponents = {
  banner: <LayoutSkeleton />,
  info: <StoreInfoFeaturesSkeleton />,
  sponsored: <SponsoredFeatureSkeleton />,
  homeProducts: <HomeProductsSkeleton />,
  homeBlogs: <BlogsSkeleton where="home" limit={4} />,
};

type Ttype = keyof typeof loadingComponents;

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
  const Skelton = loadingComponents[type];
  return (
    <div ref={ref}>
      {!!isVisible && <Suspense fallback={Skelton}>{children}</Suspense>}
    </div>
  );
};

export default LazyWrapper;
