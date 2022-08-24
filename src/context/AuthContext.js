import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Cookies from "universal-cookie";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState();
  const cookie = new Cookies();
  const navigate = useNavigate();

  const authLogin = (email, password) => {
    axios("/api/auth/login", {
      method: "POST",
      mode: "cors",
      redirect: "follow",
      header: {
        "accept ": "application/json",
      },
      data: {
        user: {
          email: email,
          password: password,
        },
        withCredentials: true,
      },
    })
      .then((res) => {
        axios.defaults.headers.common["Authorization"] = res.data.user.token;
        cookie.set("acsess_token", res.data.user.token);
        const data = Object.assign(res.data.user);
        setUser(data);
        cookie.set("id", data._id);
        setToken(data.token);
      })
      .catch((err) => toast.error("Eposta veya şifre yanlış !"));
  };

  const authStatus = async () => {
    const cookie = new Cookies();
    const token = cookie.get("acsess_token");
    const userId = cookie.get("id");
    if (!user) {
      return console.log("Refresh token");
    }
    const data = await axios(`/api/auth/verify/${userId}`, {
      headers: { Authorization: token, withCredentials: true },
    });
    const resData = Object.assign(data.data.user);
    setUser(resData);
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
  const logoutProccsess = () => {
    axios("/api/auth/logout")
      .then((res) => {
        const cookie = new Cookies();
        cookie.remove("acsess_token");
        cookie.remove("id");
        setToken(null);
        setUser(null);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ authLogin, user, token, isLoggedIn, logoutProccsess }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => {
  return React.useContext(AuthContext);
};
