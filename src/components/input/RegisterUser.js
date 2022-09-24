import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { userAuth } from "../../context/AuthContext.js";
import axios from "axios";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function RegisterPopup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [emailRepeat, setEmailRepeat] = useState("");
  const [errorEmail, setEmailError] = useState("");
  const [errorPassword, setPasswordError] = useState("");
  const [errorRepeatP, setPasswordRepatError] = useState("");
  const [errorRepeatE, setEmailRepeatError] = useState("");

  const { registerUser } = userAuth();
  const client = "https://atalayapp.herokuapp.com";

  const captchaRef = useRef(null);

  const onLoad = () => {
    captchaRef.current.execute();
  };
  const sendRegisterRequest = async (e) => {
    e.preventDefault();

    const clearName = name.toString().trim().toLowerCase();
    const clearEmailRepeat = emailRepeat.toString().trim().toLowerCase();
    const clearEmail = email.toString().trim().toLowerCase();
    const clearPassword = password.trim().toLowerCase();
    const clearPasswordRepeat = passwordRepeat.toString().trim().toLowerCase();

    const passwordControll =
      password.length < 8
        ? setPasswordError("8 karakterli bir şifre gir !")
        : true;

    const emailMatch = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/";

    const emailMatchVerify = clearEmail.match(emailMatch)
      ? true
      : setEmailError("Email biçiminde Gir ");

    const emailVerify =
      clearEmail === clearEmailRepeat
        ? true
        : setEmailRepeatError("Lütfen aynı Email biçimini gir !");

    const passwordVerify =
      clearPassword === clearPasswordRepeat
        ? true
        : setPasswordRepatError("Aynı şifre biçimini gir");

    if (
      !clearEmail &&
      !clearEmailRepeat &&
      !clearPassword &&
      !clearPassword &&
      !clearName
    ) {
      toast.error("Boş bırakma !");
    }

    axios.defaults.headers.common["H-Chaptca"] = token;
    axios
      .post(`${client}/api/verify/`, {
        headers: {
          "H-Chaptca": token,
          withCredentials: true,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => {
        if (res.data.message === true) {
          registerUser(clearEmail, clearPassword, clearName);
        } else {
          toast.error("Validation error !");
        }
      })
      .catch((err) => console.log(err));
  };

  const popup = () => {
    props.toggle();
  };
  const closePopup = () => {
    props.close();
  };
  return (
    <>
      <div className="w-full absolute  bg-transp"></div>
      <div className=" popup-register z-1 m-auto shadow-2xl bg-white   ">
        <p className="text-xl  relative font-bold">
          Yeni maceraya ilk adımı at
        </p>
        <svg
          onClick={popup}
          onChange={closePopup}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 relative hover:bg-sky-200 rounded-md md:left-36 md:top-10 left-8 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <div className="flex   justify-center flex-col ">
          <div action="" className="relative ">
            <span className="font-bold">Kullanıcı adı *</span>
            <div className="flex flex-col ">
              <input
                onChange={(e) => setName(e.target.value)}
                className="inp mt-4 inp-mobile focus:bg-yellow-200 shadow-md rounded-md"
                type="text"
                required
                name="Ad"
                placeholder="Ad ve soyad veya kullanıcı adı"
              />
              <span className="relative mt-3 font-bold">Email *</span>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="inp mt-4 rounded-md inp-mobile shadow-md focus:bg-slate-300"
                type="email"
                required
                name="email"
                placeholder="Email"
              />
              <label className="text-xs"> {errorEmail}</label>
              <input
                onChange={(e) => setEmailRepeat(e.target.value)}
                className="inp mt-4 rounded-md inp-mobile shadow-md focus:bg-sky-200"
                type="emailRepeat"
                required
                name="emailRepeat"
                placeholder="
              Email tekrar"
              />
              <label className="text-xs"> {errorRepeatE}</label>
              <span className="relative text-register mt-3 font-bold">
                Şifre *{" "}
              </span>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                className="inp mt-4 rounded-md inp-mobile shadow-md focus:bg-orange-200"
                required
                placeholder="Şifre"
              />
              <label className="text-xs">{errorPassword}</label>
              <input
                onChange={(e) => setPasswordRepeat(e.target.value)}
                className="inp mt-4  rounded-md inp-mobile shadow-md focus:bg-indigo-200"
                type="password"
                name="passwordRepeat"
                required
                placeholder="Şifre tekrar"
              />
              <label className="text-xs">{errorRepeatP}</label>
              <div className="flex justify-center mt-4">
                <HCaptcha
                  sitekey="0464e40c-be66-4abd-9411-ba5ad795b412"
                  onLoad={onLoad}
                  onVerify={setToken}
                  ref={captchaRef}
                />
              </div>

              <button
                type="submit"
                onClick={sendRegisterRequest}
                className="btn2 btn-mobile shadow-md mt-4 p-2 rounded-md "
              >
                Kayıt ol
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
