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
              <p className="flex justify-center mt-4"> Veya </p>
              <div className="mr-3 p-1">
                <a
                  className="relative googl "
                  href={`${client}api/auth/google`}
                >
                  <button className=" w-80 flex googlebutton aligin-center justify-center border-black border-2 text-black flex-row bg-white items-center    rounded-md">
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
                <a
                  className="relative googl mb-3 bg-[#3b5998] hover:bg-[#3b5998]/90 "
                  href={`#`}
                >
                  <button className=" focus:ring-[#3b5998]/50 w-80 flex  googlebutton aligin-center mt-3 justify-center    flex-row bg-[#3b5998]  items-center  rounded-md">
                    <span className="text-white  flex justify-center w-full font-medium text-sm flex-row">
                      <svg
                        class="mr-2 mt-0 -ml-1 w-6 h-6"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="facebook-f"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                        ></path>
                      </svg>
                      Facebook ile giriş yap
                    </span>
                  </button>
                </a>
                <a className="relative googl mb-3 " href={`#`}>
                  <button
                    disabled
                    className=" w-80 flex googlebutton aligin-center mt-3 justify-center r border-black border-2 text-black flex-row bg-white items-center  rounded-md"
                  >
                    <span className="text -black mr-5">
                      Metamask ile giriş yap
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
