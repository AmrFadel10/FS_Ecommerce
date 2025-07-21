//React & react router dom
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import { useAppSelector } from "@redux/hooks";

//Pages
import Error from "@pages/Error";
import ProductsListSkeleton from "@feedback/skeletons/products/ProductsListSkeleton";
import RootLoading from "@feedback/loading/RootLoading";
import BlogsPageSkeleton from "@feedback/skeletons/blogs/BlogsPageSkeleton";
import OurStoreSkeleton from "@feedback/skeletons/ourStore/OurStoreSkeleton";
import AProductPageSkeleton from "@feedback/skeletons/aProduct/AProductPageSkeleton";
import Activation from "@pages/Activation";
import ProfileLayoutSkeleton from "@feedback/skeletons/profileInfomation/ProfileLayoutSkeleton";
import AccountInfoSkeleton from "@feedback/skeletons/profileInfomation/AccountInfoSkeleton";
import InlineLoading from "@feedback/loading/InlineLoading";
import AddressesSkeleton from "@feedback/skeletons/profileInfomation/AddressSkeleton";
import HomeSkeleton from "@feedback/skeletons/home/HomeSkeleton";

//Lazy pages
const RootLayout = lazy(() => import("@components/layout/RootLayout"));
const ProfileLayout = lazy(() => import("@components/layout/ProfileLayout"));
const Home = lazy(() => import("@pages/Home"));
const PrivacyPolicy = lazy(() => import("@pages/PrivacyPolicy"));
const RefundPolicy = lazy(() => import("@pages/RefundPolicy"));
const ShippingPolicy = lazy(() => import("@pages/ShippingPolicy"));
const TermsAndConditions = lazy(() => import("@pages/TermsAndConditions"));
const FAQ = lazy(() => import("@pages/FAQ"));
const Contact = lazy(() => import("@pages/Contact"));
const Cart = lazy(() => import("@pages/Cart"));
const OurStore = lazy(() => import("@pages/OurStore"));
const Product = lazy(() => import("@pages/Product"));
const Blogs = lazy(() => import("@pages/Blogs"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
const Signup = lazy(() => import("@pages/Signup"));
const Login = lazy(() => import("@pages/Login"));
const Checkout = lazy(() => import("@pages/Checkout"));
const OrderStatus = lazy(() => import("@pages/OrderStatus"));
const AccountInfo = lazy(() => import("@pages/AccountInfo"));
const Orders = lazy(() => import("@pages/Orders"));
const Blog = lazy(() => import("@pages/Blog"));
const Addresses = lazy(() => import("@pages/Addresses"));

const AppRoute = () => {
  const { user } = useAppSelector((state) => state.auth);

  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<RootLoading />}>
          <RootLayout />
        </Suspense>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<HomeSkeleton />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "wishlist",
          element: user ? (
            <Suspense
              fallback={<ProductsListSkeleton count={3} where="public" />}
            >
              <Wishlist />
            </Suspense>
          ) : (
            <Navigate to={"/"} />
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
          path: "checkout",
          element: user ? (
            <Suspense fallback={<InlineLoading />}>
              <Checkout />
            </Suspense>
          ) : (
            <Navigate to={"/"} />
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
          path: "blogs/:id",
          loader: ({ params }) => {
            if (!/^[a-fA-F-0-9]{24}$/.test(params.id as string)) {
              throw new Response("Invalid id", {
                status: 400,
                statusText: "Blog not found",
              });
            }
            return true;
          },
          element: (
            <Suspense fallback={<InlineLoading />}>
              <Blog />
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
            <Suspense fallback={<RootLoading />}>
              <PrivacyPolicy />
            </Suspense>
          ),
        },
        {
          path: "refund-policy",
          element: (
            <Suspense fallback={<RootLoading />}>
              <RefundPolicy />
            </Suspense>
          ),
        },
        {
          path: "shipping-policy",
          element: (
            <Suspense fallback={<RootLoading />}>
              <ShippingPolicy />
            </Suspense>
          ),
        },
        {
          path: "order-state",
          element: user ? (
            <Suspense fallback={<RootLoading />}>
              <OrderStatus />
            </Suspense>
          ) : (
            <Navigate to={"/"} />
          ),
        },
        {
          path: "terms-condition",
          element: (
            <Suspense fallback={<RootLoading />}>
              <TermsAndConditions />
            </Suspense>
          ),
        },
        {
          path: "faq",
          element: (
            <Suspense fallback={<RootLoading />}>
              <FAQ />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<RootLoading />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "profile",
          element: user ? (
            <Suspense fallback={<ProfileLayoutSkeleton />}>
              <ProfileLayout />
            </Suspense>
          ) : (
            <Navigate to={"/"} />
          ),
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<AccountInfoSkeleton />}>
                  <AccountInfo />
                </Suspense>
              ),
            },
            {
              path: "orders",
              element: (
                <Suspense fallback={<InlineLoading />}>
                  <Orders />
                </Suspense>
              ),
            },
            {
              path: "address",
              element: (
                <Suspense fallback={<AddressesSkeleton />}>
                  <Addresses />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      errorElement: <Error />,
      element: user ? (
        <Navigate to={"/"} />
      ) : (
        <Suspense fallback={<RootLoading />}>
          <Login />
        </Suspense>
      ),
    },

    {
      path: "/signup",
      errorElement: <Error />,
      element: user ? (
        <Navigate to={"/"} />
      ) : (
        <Suspense fallback={<RootLoading />}>
          <Signup />
        </Suspense>
      ),
    },
    {
      path: "/activation/:activationToken",
      errorElement: <Error />,
      element: (
        <Suspense fallback={<RootLoading />}>
          <Activation />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={route} />;
};

export default AppRoute;
