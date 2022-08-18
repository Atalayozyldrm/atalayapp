import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getCsrf from "../../service/auth/csrf";
import axios from "axios";
import Cookies from "universal-cookie";
import { userAuth } from "../../context/AuthContext";

export default function Forms() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { authLogin, authStatusChange } = userAuth();

  const loginProccsess = async (e) => {
    if (!email && !password) return toast.warn("Boş bırakma 🤖");
    authLogin(email, password);
  };
  useEffect(() => {
    getCsrf();
  });
  return (
    <>
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

      <div className="flex justify-center w-full">
        <div
          className="flex-col flex w-1/3    justify-center h-  max-w-2xl max-h-2xl "
          id="frm"
        >
          <p className="text-2xl font-bold  w-full ">Tekrar Hoşgeldin 😎</p>
          <span className="text-black mt-6"> Email *</span>
          <div>
            <input type="hidden" />
            <input
              className=" p-1 m-1 shadow-2xl inp block w-80 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md shadow-2xl"
              placeholder="Email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <span className="text-black"> Password *</span>
            <input
              className="m-1 inp p-1 block w-80 shadow-2xl  sm:text-sm border-gray-300 rounded-md"
              placeholder="Password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <div className="text-center flex flex-col mt-4 w-80">
              <button
                className="flex flex-row  rounded-md p-2  text-black btn2 btn m-1  w-full  shadow-2xl  bg-white text-center"
                onClick={loginProccsess}
              >
                Giriş yap
              </button>
              <p className="flex justify-center mt-4"> Veya </p>
              <span className="justify-items-center  mt-3 text-black text-sm mt-">
                Kayıtlı değilmisin ? Kayıt ol
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
