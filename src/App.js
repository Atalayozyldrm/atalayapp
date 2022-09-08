import React from "react";
import "./App.css";
import Login from "../src/pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Notfound from "../src/components/Notfound";
import ProtectedRoute from "./middleware/ProtectedRoute/router";
import Home from "../src/pages/Home";
import { userAuth } from "./context/AuthContext";
import { EntryProvider } from "./context/EntryContext";
import { AddClupProvider } from "./context/ClupContext";
import Profile from "./components/pages/Profile";
import { EditContext } from "./context/EditContext";
import { Register } from "./context/RegisterContext";
import EntryDetail from "./components/pages/EntryDetail";
import ProfilDetail from "./components/pages/ProfilDetail";
function App() {
  const { token } = userAuth();
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          !token ? (
            token ? (
              "Yükleniyor bro"
            ) : (
              <Register>
                <Login />
              </Register>
            )
          ) : (
            <Navigate to="/home" />
          )
        }
      />
      <Route path="*" element={<Notfound />} />
      <Route path="/profile/:id" element={<ProfilDetail />} excat />
      <Route
        path="/profile"
        element={
          <EditContext>
            <UserProvider>
              <Profile />
            </UserProvider>
          </EditContext>
        }
        exact
      />
      <Route
        path="/entry/:id"
        element={
          <EntryProvider>
            <EntryDetail />
          </EntryProvider>
        }
      />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <AddClupProvider>
              <EntryProvider>
                <Home />
              </EntryProvider>
            </AddClupProvider>
          </ProtectedRoute>
        }
        excat
      />
    </Routes>
  );
}

export default App;
