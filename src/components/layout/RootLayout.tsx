import Footer from "@components/common/footer/Footer";
import Header from "@components/common/header/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
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
