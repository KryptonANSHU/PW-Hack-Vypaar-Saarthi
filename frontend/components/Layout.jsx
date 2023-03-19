import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <main className="bg-black lg:min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
