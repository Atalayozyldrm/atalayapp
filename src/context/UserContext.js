import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookie from "universal-cookie";
import { userAuth } from "../context/AuthContext.js";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState({});
  const cookie = new Cookie();

  const token = cookie.get("acsess_token");
  const csrf = cookie.get("_csrf");

  const { user } = userAuth();

  const id = cookie.get("id");

  const getProfile = async (id) => {
    const data = await axios.get(`/api/user/profile/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    await setProfile(data.data.profile[0]);
  };

  axios.defaults.headers.common["X-CSRF-Token"] = csrf;
  const updateProfile = async (id, content, name) => {
    const prof = await axios.post("/api/user/content/edit", {
      headers: {
        Authorization: token,
      },
      user: {
        id: id,
        content: content,
        name: !name ? user.name : name,
        token: token,
      },
    });

    const data = await Object.entries(prof.data);
    await setProfile(data);
  };
  useEffect(() => {
    getProfile(id);
  }, []);
  return (
    <UserContext.Provider value={{ updateProfile, profile, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const userData = () => {
  return React.useContext(UserContext);
};
