import React, { useEffect } from "react";
import Layout from "../components/layout/Layout.js";
import LoginAuth from "../components/pages/login.js";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  return (
    <Layout>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <LoginAuth />
    </Layout>
  );
}
