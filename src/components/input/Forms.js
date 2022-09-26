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

  const loginProccsess = async (e) => {
    if (!email && !password) return toast("Boş bırakma 🤖");
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
          <p className="text-2xl font-bold  w-full">Tekrar Hoşgeldin </p>
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
                  href={`https://atalayapp.herokuapp.com/api/auth/google`}
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
                  className="relative    mb-3 bg-[#2374f2]"
                  href={
                    "https://atalayapp.herokuapp.com/api/auth/login/facebook"
                  }
                >
                  <button className="  w-80 flex facebook  googlebutton aligin-center mt-3 justify-center    flex-row  items-center  rounded-md">
                    <span className="text-white  flex justify-center w-full font-medium text-sm flex-row">
                      <svg
                        className="mr-2 mt-0 -ml-1 w-6 h-6"
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
                <a className="relative googl mb-3  " href={`#`}>
                  <button
                    disabled
                    className=" w-80 flex googlebutton aligin-center mt-3 justify-center r border-black border-2 text-black flex-row bg-white items-center  rounded-md"
                  >
                    <span className="text-black hover:shadow-md flex flex-row justify-center items-center mr-5">
                      <svg
                        fill="none"
                        className="mr-4"
                        height="33"
                        viewBox="0 0 35 33"
                        width="35"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth=".25"
                        >
                          <path
                            d="m32.9582 1-13.1341 9.7183 2.4424-5.72731z"
                            fill="#e17726"
                            stroke="#e17726"
                          />
                          <g fill="#e27625" stroke="#e27625">
                            <path d="m2.66296 1 13.01714 9.809-2.3254-5.81802z" />
                            <path d="m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" />
                            <path d="m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" />
                            <path d="m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" />
                            <path d="m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" />
                            <path d="m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" />
                            <path d="m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" />
                          </g>
                          <path
                            d="m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z"
                            fill="#d5bfb2"
                            stroke="#d5bfb2"
                          />
                          <path
                            d="m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z"
                            fill="#d5bfb2"
                            stroke="#d5bfb2"
                          />
                          <path
                            d="m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z"
                            fill="#233447"
                            stroke="#233447"
                          />
                          <path
                            d="m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z"
                            fill="#233447"
                            stroke="#233447"
                          />
                          <path
                            d="m10.8733 28.8721.6495-5.3386-4.13117.1167z"
                            fill="#cc6228"
                            stroke="#cc6228"
                          />
                          <path
                            d="m24.0982 23.5335.6366 5.3386 3.4946-5.2219z"
                            fill="#cc6228"
                            stroke="#cc6228"
                          />
                          <path
                            d="m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z"
                            fill="#cc6228"
                            stroke="#cc6228"
                          />
                          <path
                            d="m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z"
                            fill="#cc6228"
                            stroke="#cc6228"
                          />
                          <path
                            d="m8.392 17.6507 3.1049 6.0513-.1039-3.0062z"
                            fill="#e27525"
                            stroke="#e27525"
                          />
                          <path
                            d="m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z"
                            fill="#e27525"
                            stroke="#e27525"
                          />
                          <path
                            d="m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z"
                            fill="#e27525"
                            stroke="#e27525"
                          />
                          <path
                            d="m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z"
                            fill="#e27525"
                            stroke="#e27525"
                          />
                          <path
                            d="m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z"
                            fill="#f5841f"
                            stroke="#f5841f"
                          />
                          <path
                            d="m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z"
                            fill="#f5841f"
                            stroke="#f5841f"
                          />
                          <path
                            d="m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z"
                            fill="#c0ac9d"
                            stroke="#c0ac9d"
                          />
                          <path
                            d="m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z"
                            fill="#161616"
                            stroke="#161616"
                          />
                          <path
                            d="m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z"
                            fill="#763e1a"
                            stroke="#763e1a"
                          />
                          <path
                            d="m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z"
                            fill="#763e1a"
                            stroke="#763e1a"
                          />
                          <path
                            d="m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z"
                            fill="#f5841f"
                            stroke="#f5841f"
                          />
                          <path
                            d="m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z"
                            fill="#f5841f"
                            stroke="#f5841f"
                          />
                          <path
                            d="m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z"
                            fill="#f5841f"
                            stroke="#f5841f"
                          />
                        </g>
                      </svg>
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
