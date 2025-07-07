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
      <main className="container mx-auto min-h-[calc(100vh-437.5px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
