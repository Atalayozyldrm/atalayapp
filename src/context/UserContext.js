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

  const client = "https://atalayapp.herokuapp.com";

  const getProfile = async (id) => {
    const data = await axios
      .get(`${client}/api/user/profile/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => {
        setProfile(data.data.profile[0]);
      });
  };

  axios.defaults.headers.common["X-CSRF-Token"] = csrf;
  const updateProfile = async (id, content, name) => {
    if (!content || name) return toast.error("Boş bırakma !");
    const prof = await axios(`${client}/api/user/content/edit`, {
      method: "POST",
      headers: {
        Authorization: token,
        credentials: "include",
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
