//React & react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

//Pages
import Error from "@pages/Error";
import ProductsListSkeleton from "@feedback/skeletons/products/ProductsListSkeleton";
import LayoutLoading from "@feedback/loading/LayoutLoading";
import LayoutSkeleton from "@feedback/skeletons/home/LayoutSkeleton";
import StoreInfoFeaturesSkeleton from "@feedback/skeletons/home/StoreInfoFeaturesSkeleton";
import BlogsPageSkeleton from "@feedback/skeletons/blogs/BlogsPageSkeleton";
import OurStoreSkeleton from "@feedback/skeletons/ourStore/OurStoreSkeleton";
import AProductPageSkeleton from "@feedback/skeletons/aProduct/AProductPageSkeleton";

//Lazy pages
const RootLayout = lazy(() => import("@components/layout/RootLayout"));
const Home = lazy(() => import("@pages/Home"));
const PrivacyPolicy = lazy(() => import("@pages/PrivacyPolicy"));
const RefundPolicy = lazy(() => import("@pages/RefundPolicy"));
const ShippingPolicy = lazy(() => import("@pages/ShippingPolicy"));
const TermsAndConditions = lazy(() => import("@pages/TermsAndConditions"));
const FAQ = lazy(() => import("@pages/FAQ"));
const Contact = lazy(() => import("@pages/Contact"));
const CompareProducts = lazy(() => import("@pages/CompareProducts"));
const Cart = lazy(() => import("@pages/Cart"));
const OurStore = lazy(() => import("@pages/OurStore"));
const Product = lazy(() => import("@pages/Product"));
const Blogs = lazy(() => import("@pages/Blogs"));
const Wishlist = lazy(() => import("@pages/Wishlist"));

const AppRoute = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<LayoutLoading />}>
          <RootLayout />
        </Suspense>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <Suspense
              fallback={
                <section className="flex flex-col gap-y-24 pb-18 pt-8">
                  <LayoutSkeleton />
                  <StoreInfoFeaturesSkeleton />
                </section>
              }
            >
              <Home />
            </Suspense>
          ),
        },
        {
          path: "compare",
          element: (
            <Suspense fallback="loading please wait...">
              <CompareProducts />
            </Suspense>
          ),
        },
        {
          path: "wishlist",
          element: (
            <Suspense
              fallback={<ProductsListSkeleton count={5} where="public" />}
            >
              <Wishlist />
            </Suspense>
          ),
        },
        {
          path: "cart",
          element: (
            <Suspense
              fallback={<ProductsListSkeleton count={5} where="public" />}
            >
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "products",
          element: (
            <Suspense fallback={<OurStoreSkeleton />}>
              <OurStore />
            </Suspense>
          ),
        },
        {
          path: "blogs",
          element: (
            <Suspense fallback={<BlogsPageSkeleton limit={8} />}>
              <Blogs />
            </Suspense>
          ),
        },
        {
          path: "product/:id",
          element: (
            <Suspense fallback={<AProductPageSkeleton />}>
              <Product />
            </Suspense>
          ),
          loader: ({ params }) => {
            if (!/^[a-fA-F-0-9]{24}$/.test(params.id as string)) {
              throw new Response("Invalid id", {
                status: 400,
                statusText: "Product not found!",
              });
            }
            return true;
          },
        },
        {
          path: "privacy-policy",
          element: (
            <Suspense fallback={<LayoutLoading />}>
              <PrivacyPolicy />
            </Suspense>
          ),
        },
        {
          path: "refund-policy",
          element: (
            <Suspense fallback={<LayoutLoading />}>
              <RefundPolicy />
            </Suspense>
          ),
        },
        {
          path: "shipping-policy",
          element: (
            <Suspense fallback={<LayoutLoading />}>
              <ShippingPolicy />
            </Suspense>
          ),
        },
        {
          path: "terms-condition",
          element: (
            <Suspense fallback={<LayoutLoading />}>
              <TermsAndConditions />
            </Suspense>
          ),
        },
        {
          path: "faq",
          element: (
            <Suspense fallback={<LayoutLoading />}>
              <FAQ />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<LayoutLoading />}>
              <Contact />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
};

export default AppRoute;
