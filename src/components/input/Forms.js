import React, { useState, useEffect, Suspense } from "react";
import getCsrf from "../../service/auth/csrf.js";
import toast, { Toaster } from "react-hot-toast";
import { userAuth } from "../../context/AuthContext.js";
import { registerUser } from "../../context/RegisterContext.js";

const Register = React.lazy(() => import("../button/Register"));

export default function Forms(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authLogin } = userAuth();
  const { edit } = registerUser();

  const client = "https://atalayapp.herokuapp.com/";

  const loginProccsess = async (e) => {
    if (!email && !password) return toast("Boş bırakma 🤖");
    authLogin(email, password);
  };
  useEffect(() => {
    getCsrf();
  });
  return (
    <>
      <div className="flex justify-center sanabendenbirtavsiyegel w-full">
        <div
          className="flex-col flex w-1/3    justify-center h-  max-w-2xl max-h-2xl "
          id="frm"
        >
          <p className="text-2xl font-bold  w-full ">Tekrar Hoşgeldin </p>
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
            <div className="text-center  flex flex-col mt-4 w-80">
              <button
                className="flex flex-row  rounded-md p-2 m-1 mt-4  text-black btn2 btn m-1 text-center justify-center  w-full  shadow-2xl  bg-white text-center"
                onClick={loginProccsess}
              >
                <span className="flex justify-center align-center ">
                  {" "}
                  Giriş yap
                </span>
              </button>
              <p className="flex justify-center mt-4"> Veya </p>
              <div className="mr-3 p-1">
                <a
                  className="relative googl "
                  href={`${client}api/auth/google`}
                >
                  <button className=" w-80 flex googlebutton aligin-center justify-center border-black border-2 text-black flex-row bg-white items-center text-white    rounded-md">
                    <img
                      src="https://developers.google.com/static/identity/images/g-logo.png"
                      alt="google"
                      className="mr-5"
                      width={30}
                      height={30}
                    />
                    <span className="text-black mr-5">
                      Google ile giriş yap
                    </span>
                  </button>
                </a>
              </div>
              <Suspense>
                <Register show={edit} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
