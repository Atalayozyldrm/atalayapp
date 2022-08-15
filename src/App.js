import React, { Fragment } from "react";
import "./App.css";
import Login from "../src/pages/Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Notfound from "../src/components/Notfound";
import ProtectedRoute from "./middleware/ProtectedRoute/router";
import Home from "../src/pages/Home";
import { userAuth } from "./context/AuthContext";
import { EntryProvider } from "./context/EntryContext";
import { AddClupProvider } from "./context/ClupContext";


function App() {
  const { token } = userAuth();
  return (
    <Routes>
      <Route exact path="/" element={!token ? (token ? "Yükleniyor bro" : <Login />) : <Navigate to="/home" />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/home" element={
        <ProtectedRoute>
            <AddClupProvider>
               <EntryProvider>
                  <Home />
              </EntryProvider>
            </AddClupProvider>
        </ProtectedRoute>
      } />

    </Routes>
  );
}

export default App;
