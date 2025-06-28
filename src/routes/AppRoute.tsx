import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@components/layout/RootLayout";

//Pages
import Home from "@pages/Home";
import Error from "@pages/Error";
import PrivacyPolicy from "@pages/PrivacyPolicy";
import RefundPolicy from "@pages/RefundPolicy";
import ShippingPolicy from "@pages/ShippingPolicy";
import TermsAndConditions from "@pages/TermsAndConditions";
import FAQ from "@pages/FAQ";
import Contact from "@pages/Contact";
import CompareProducts from "@pages/CompareProducts";
import Cart from "@pages/Cart";
import OurStore from "@pages/OurStore";
import Product from "@pages/Product";
import Blogs from "@pages/Blogs";
import Wishlist from "@pages/Wishlist";

const AppRoute = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "compare",
          element: <CompareProducts />,
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        { path: "products", element: <OurStore /> },
        { path: "blogs", element: <Blogs /> },
        {
          path: "product/:id",
          element: <Product />,
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
          element: <PrivacyPolicy />,
        },
        {
          path: "refund-policy",
          element: <RefundPolicy />,
        },
        {
          path: "shipping-policy",
          element: <ShippingPolicy />,
        },
        {
          path: "terms-condition",
          element: <TermsAndConditions />,
        },
        {
          path: "faq",
          element: <FAQ />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
};

export default AppRoute;
