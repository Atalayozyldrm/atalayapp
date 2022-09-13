import React from "react";
import { Navigate } from "react-router-dom";
import { userAuth } from "../../context/AuthContext.js";

const ProtectedRoute = ({ children }) => {
  const { token } = userAuth();
  return token ? children : <Navigate to="/" replace={true} />;
};
export default ProtectedRoute;
