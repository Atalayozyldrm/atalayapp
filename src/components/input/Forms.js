import React, { useState, useEffect, Suspense } from "react";
import getCsrf from "../../service/auth/csrf.js";
import { userAuth } from "../../context/AuthContext.js";

export default function Forms(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authLogin } = userAuth();

  const loginProccsess = async (e) => {
    authLogin(email, password);
  };
  useEffect(() => {
    getCsrf();
  }, []);
  return (
    <>
      <div className="flex justify-center sanabendenbirtavsiyegel w-full">
        <div
          className="flex-col flex w-1/3    justify-center h-  max-w-2xl max-h-2xl "
          id="frm"
        >
          <span className="text-black mt-6"> Email *</span>
          <div>
            <input type="hidden" />
            <input
              className=" p-1 m-1 shadow-2xl inp block w-80 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md "
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
            <div className="text-center  flex flex-col mt-4 w-80">
              <button
                className="flex flex-row  rounded-md p-2 m-1 mt-4  text-black btn2 btn justify-center  w-full  shadow-2xl  bg-white text-center"
                onClick={loginProccsess}
              >
                <span> Giriş yap</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
