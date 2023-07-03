import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Cookie from "universal-cookie";
import { userAuth } from "../context/AuthContext.js";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState({});
  const [content, setContent] = useState("");

  const atalay = (a) => {
    setContent(a);
  };

  const cookie = new Cookie();

  const token = cookie.get("acsess_token");
  const csrf = cookie.get("_csrf");

  const { user } = userAuth();

  const id = cookie.get("id");

  const getProfile = async (id) => {
    const data = await axios(`/user/profile/${id}`, {
      withCredentials: true,
      method: "GET",
      headers: {
        Authorization: token,
        "Access-Control-Allow-Credentials": true,
      },
    }).then((data) => {
      setProfile(data.data.profile[0]);
    });
  };

  axios.defaults.headers.common["X-CSRF-Token"] = csrf;
  const updateProfile = async (id, content, name) => {
    if (!content || name) return toast.error("Boş bırakma !");
    const prof = await axios(`/user/content/edit`, {
      withCredentials: true,
      method: "POST",
      headers: {
        Authorization: token,
        mode: "same-origin",
        redirect: "follow",
        "Access-Control-Allow-Credentials": true,
      },
      data: {
        user: {
          id: id,
          content: content,
          name: user.name || name,
          token: token,
          image: user.profile_image || null,
        },
      },
    }).then((res) => {
      const data = Object.entries(res.data);
      setProfile(data[0][1]);
    });
  };
  useEffect(() => {
    getProfile(id);
  }, []);
  return (
    <UserContext.Provider
      value={{ updateProfile, profile, atalay, getProfile, content }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const userData = () => {
  return React.useContext(UserContext);
};
