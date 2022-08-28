import React, { useState, useEffect, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getCsrf from "../../service/auth/csrf";
import { userAuth } from "../../context/AuthContext";
import { registerUser } from "../../context/RegisterContext";

const Register = React.lazy(() => import("../button/Register"));

export default function Forms(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authLogin } = userAuth();
  const { edit, show } = registerUser();

  const loginProccsess = async (e) => {
    if (!email && !password) return toast.warn("Boş bırakma 🤖");
    authLogin(email, password);
  };
  const register = () => {
    props.show();
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
            <div className="text-center flex flex-col mt-4 w-80">
              <button
                className="flex flex-row  rounded-md p-2 mt-4  text-black btn2 btn m-1 text-center justify-center  w-full  shadow-2xl  bg-white text-center"
                onClick={loginProccsess}
              >
                <span className="flex justify-center align-center ">
                  {" "}
                  Giriş yap
                </span>
              </button>
              <p className="flex justify-center mt-4"> Veya </p>
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
