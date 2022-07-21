import React, { Fragment } from "react";
import "./App.css";
import Login from "../src/pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import AuthController from "../src/components/Auth";
import Notfound from "../src/components/Notfound";
import Home from "../src/pages/Home";
import { AddClupProvider } from "./context/ClupContext";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
