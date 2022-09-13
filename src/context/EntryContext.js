import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import LogoutProccsess from "../middleware/ErrorRedirect.js";

const Entry = React.createContext();

export const EntryProvider = ({ children }) => {
  const [post, setPost] = useState();

  const cookie = new Cookies();
  const token = cookie.get("acsess_token");

  const getAll = async () => {
    const entry = await axios
      .get("/api/entry/entry", {
        headers: {
          Authorization: token,
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
