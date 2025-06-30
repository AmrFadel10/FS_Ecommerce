//React & react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

//Pages
import Error from "@pages/Error";
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
        <Suspense fallback="loading please wait...">
          <RootLayout />,
        </Suspense>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback="loading please wait...">
              <Home />,
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
            <Suspense fallback="loading please wait...">
              <Wishlist />
            </Suspense>
          ),
        },
        {
          path: "cart",
          element: (
            <Suspense fallback="loading please wait...">
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "products",
          element: (
            <Suspense fallback="loading please wait...">
              <OurStore />
            </Suspense>
          ),
        },
        {
          path: "blogs",
          element: (
            <Suspense fallback="loading please wait...">
              <Blogs />
            </Suspense>
          ),
        },
        {
          path: "product/:id",
          element: (
            <Suspense fallback="loading please wait...">
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
            <Suspense fallback="loading please wait...">
              <PrivacyPolicy />
            </Suspense>
          ),
        },
        {
          path: "refund-policy",
          element: (
            <Suspense fallback="loading please wait...">
              <RefundPolicy />
            </Suspense>
          ),
        },
        {
          path: "shipping-policy",
          element: (
            <Suspense fallback="loading please wait...">
              <ShippingPolicy />
            </Suspense>
          ),
        },
        {
          path: "terms-condition",
          element: (
            <Suspense fallback="loading please wait...">
              <TermsAndConditions />
            </Suspense>
          ),
        },
        {
          path: "faq",
          element: (
            <Suspense fallback="loading please wait...">
              <FAQ />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback="loading please wait...">
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
