import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import PopupForm from "./Components/PopupForm";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <PopupForm />
    </>
  );
}