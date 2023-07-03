import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState();
  const cookie = new Cookies();

  const authLogin = (email, password) => {
    axios(`/auth/login`, {
      method: "POST",
      mode: "cors",
      redirect: "follow",
      withCredentials: true,
      header: {
        "accept ": "application/json",
        mode: "same-origin",
        redirect: "follow",
        "Access-Control-Allow-Origin": "",
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

  const isLoggedIn = async () => {
    const ctx = await cookie.get("acsess_token");
    if (!ctx) {
      return false;
    }
    setToken(ctx);

    return true;
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => {
  return React.useContext(AuthContext);
};
