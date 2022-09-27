import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { userAuth } from "../../context/AuthContext";

export default function GoogleAuthRedirect() {
  const { googleAuthToken } = userAuth();
  const navigate = useNavigate();

  useEffect(async () => {
    (await googleAuthToken()) ? navigate("/home") : navigate("/login");
  }, []);

  return <div></div>;
}
