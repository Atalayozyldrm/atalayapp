import React from "react";
import { Navigate } from "react-router-dom";
import { userAuth } from "../../context/AuthContext.js";

const ProtectedRoute = ({ children }) => {
  const { token, GoogleToken } = userAuth();
  return token || GoogleToken ? children : <Navigate to="/" replace={true} />;
};
export default ProtectedRoute;
