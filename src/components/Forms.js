import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { userAuth } from "../context/AuthContext";
import getCsrf from "../service/auth/csrf";
import loginT from "../service/auth/login.js";
export default function Forms() {
  const token = localStorage.getItem("X-CSRF-TOKEN");

  const navigate = useNavigate();
  const { googleLogin } = userAuth();

  useEffect(() => {
    getCsrf();
  }, []);

  const handeLogin = () => {
    googleLogin();

    navigate("/home", { replace: true });
  };

  return (
    <>
      <div className="flex justify-center w-full">
        <div
          className="flex-col flex w-1/3    justify-center h-  max-w-2xl max-h-2xl "
          id="frm"
        >
          <span className="text-black"> Email *</span>
          <input type="hidden" value={token} />
          <input
            className=" p-1 m-1 shadow-2xl inp block w-80 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md shadow-2xl"
            placeholder="Email"
            value=""
            tpye="text"
            disabled
          />
          <span className="text-black"> Password *</span>
          <input
            className="m-1 inp  p-1 block w-80 shadow-2xl  sm:text-sm border-gray-300 rounded-md"
            placeholder="Password"
            value=""
            type="text"
            disabled
          />
          <div className="flex flex-col mt-4 w-80">
            <button
              disabled
              className="flex flex-row align-center rounded-md p-2 text-black btn2 btn  border-black  w-full  shadow-2xl  bg-white text-center"
            >
              Giriş yap
            </button>
            <p className="flex justify-center mt-4"> Or </p>
            <button
              onClick={handeLogin}
              className="p-2 m-2 border-black shadow-slate-200 rounded-md shadow-xl m-1 w-80"
            >
              🚀 Google ile giriş yap
            </button>
            <span className="justify-items-center  mt-3 text-black text-sm mt-">
              Kayıtlı değilmisin ? Kayıt ol
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
