import React from "react";
import { userAuth } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const AuthVerify = ({ children }) => {
  const { user } = userAuth();
  const location = useLocation();
  if (!user) {
    console.log("Auth controller " + user);
    return <Navigate to="/" replace={true} state={{ from: location }} />;
  }

  return children;
};
export default AuthController;
