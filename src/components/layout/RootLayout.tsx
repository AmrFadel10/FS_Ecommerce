import Footer from "@components/common/footer/Footer";
import Header from "@components/common/header/Header";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location.search, location.pathname]);

  return (
    <>
      <Header />
      <main className="container mx-auto  px-2 md:px-4 lg:px-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
