import React, { useContext } from "react";
import { Routes, Navigate } from "react-router-dom";
import { userAuth } from "../../context/AuthContext"

const ProtectedRoute = ({ children }) => {
    const { token } = userAuth()
    return token ? (children) : (<Navigate to="/" />);
}
export default ProtectedRoute;
