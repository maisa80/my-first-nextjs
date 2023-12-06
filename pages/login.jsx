import React from "react";
import Login from "@/app/components/Login";
import Navbar from "@/app/components/Navbar";
import "@/app/globals.css";
import { Rubik } from "next/font/google";
import Footer from "@/app/components/Footer";

const rubik = Rubik({ subsets: ["latin"] });
function login() {
  return (
    <>
      <Navbar />
      <main className={rubik.className}>
        <Login />
      </main>
      <Footer />
    </>
  );
}

export default login;
