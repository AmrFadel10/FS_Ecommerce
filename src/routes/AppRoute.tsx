import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@components/layout/RootLayout";

//Pages
import Home from "@pages/Home";
import Error from "@pages/Error";

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
      ],
    },
  ]);
  return <RouterProvider router={route} />;
};

export default AppRoute;
