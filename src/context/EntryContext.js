import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import LogoutProccsess from "../middleware/ErrorRedirect.js";

const Entry = React.createContext();

export const EntryProvider = ({ children }) => {
  const [post, setPost] = useState();

  const cookie = new Cookies();
  const token = cookie.get("acsess_token");

  const client = "/api";

  const getAll = async () => {
    const entry = await axios(`${client}/api/entry/entry`, {
      method: "GET",
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
        const data = Object.entries(res.data.data);
        setPost(data);
      })
      .catch((err) => LogoutProccsess());
  };

  useEffect(() => {
    getAll();
  }, []);
  return <Entry.Provider value={{ post, token }}>{children}</Entry.Provider>;
};

export const userEntry = () => {
  return React.useContext(Entry);
};
