import React, { Fragment } from "react";
import "./App.css";
import Login from "../src/pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notfound from "../src/components/Notfound";
import Home from "../src/pages/Home";
import { userAuth } from "./context/AuthContext";
import AuthControllerComp from "./service/auth/auth";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={
          <AuthControllerComp>
            <Home />
          </AuthControllerComp>
        } />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
