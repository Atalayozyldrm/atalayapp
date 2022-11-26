import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import LogoutProccsess from "../middleware/ErrorRedirect.js";

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState();
  const cookie = new Cookies();
  const navigate = useNavigate();
  const client = "/v";

  const authLogin = (email, password) => {
    axios(`${client}/auth/login`, {
      method: "POST",
      mode: "cors",
      redirect: "follow",
      withCredentials: true,
      header: {
        "accept ": "application/json",
        mode: "same-origin",
        redirect: "follow",
        "Access-Control-Allow-Origin": "https://atalay.netlify.app/",
        "Access-Control-Allow-Credentials": true,
      },
      data: {
        user: {
          email: email,
          password: password,
        },
      },
    })
      .then((res) => {
        axios.defaults.headers.common["Authorization"] = res.data.user.token;
        toast.loading("Başarılı giriş yönlendiriliyor...");
        cookie.set("acsess_token", res.data.user.token);
        const data = Object.assign(res.data.user);
        setUser(data);
        cookie.set("id", data._id);
        setToken(data.token);
      })
      .catch((err) => toast.error("kullancı adın veya eposta yanlış "));
  };
  const registerUser = async (email, password, name) => {
    await axios(`${client}/auth/register`, {
      method: "POST",
      mode: "cors",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        mode: "same-origin",
        redirect: "follow",
        "Access-Control-Allow-Origin": "https://atalay.netlify.app/",
        "Access-Control-Allow-Credentials": true,
      },
      data: {
        user: {
          email: email,
          password: password,
          name: name,
        },
      },
    })
      .then((res) => {
        toast("Hesap oluşturuldu şimdi giriş yapman için yönlendiriyorum");
        navigate(0);
      })
      .catch((err) => toast.warn(err.response.data.message));
  };
  const authStatus = async () => {
    const cookie = new Cookies();
    const token = cookie.get("acsess_token");

    const userId = cookie.get("id");
    if (!user) {
      return console.log("Refresh token");
    }
    const data = await axios(`${client}/auth/verify/${userId}`, {
      withCredentials: true,
      headers: {
        Authorization: token,
        mode: "same-origin",
        redirect: "follow",
        "Access-Control-Allow-Origin": "https://atalay.netlify.app/",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((res) => {
        const resData = Object.assign(res.data.user);
        setUser(resData);
      })
      .catch((err) => LogoutProccsess());
  };
  const isLoggedIn = async () => {
    const ctx = await cookie.get("acsess_token");
    if (!ctx) {
      return false;
    }
    setToken(ctx);
    authStatus();

    return true;
  };
  const googleAuthToken = (token) => {
    axios
      .get(`https://atalayapp.herokuapp.com/api/user/google`, {
        mode: "cors",
        redirect: "follow",
        withCredentials: true,
        header: {
          redirect: "follow",
          "Access-Control-Allow-Origin": "https://atalay.netlify.app/",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((res) => {
        cookie.set("acsess_token", res.data.data.token);
        const data = Object.assign(res.data.data);
        cookie.set("id", data._id);
        setUser(data);
        setToken(data.token);
        return true;
      })
      .catch(() => {
        return false;
      });
  };
  const logoutProccsess = async () => {
    const cookie = new Cookies();

    await axios(`${client}/auth/logout`);
    await cookie.remove("acsess_token");
    await cookie.remove("id");
    await setToken(null);
    await setUser(null);
    await navigate("/");
  };
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authLogin,
        user,
        token,
        isLoggedIn,
        registerUser,
        logoutProccsess,
        googleAuthToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => {
  return React.useContext(AuthContext);
};
