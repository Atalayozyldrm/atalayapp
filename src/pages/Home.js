import React, { useEffect } from "react";
import Homepage from "../components/pages/homePage";
import getCsrf from "../service/auth/csrf.js";
import { ToastContainer } from "react-toastify";

export default function Home() {
  useEffect(() => {
    getCsrf();
  }, []);
  return (
    <div className="flex relative overflow-auto bg-home w-full">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Homepage />
    </div>
  );
}
