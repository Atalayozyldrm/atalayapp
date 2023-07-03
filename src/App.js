import React from "react";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import Login from "../src/pages/Login.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext.js";
import { EntryProvider } from "./context/EntryContext.js";
import { AddClupProvider } from "./context/ClupContext.js";
import Profile from "./components/pages/Profile.js";
import { EditContext } from "./context/EditContext.js";
import EntryDetail from "./components/pages/EntryDetail.js";
import ProfilDetail from "./components/pages/ProfilDetail.js";
import { AddCommentProvider } from "./context/Comment";

function App() {
  return (
    <Routes>
      <Route
        path="/profile/:id"
        element={
          <AddClupProvider>
            <ProfilDetail />
          </AddClupProvider>
        }
        excat
      />
      <Route
        path="/profile"
        element={
          <EditContext>
            <AddClupProvider>
              <UserProvider>
                <Profile />
              </UserProvider>
            </AddClupProvider>
          </EditContext>
        }
        exact
      />
      <Route
        path="/entry/:id"
        element={
          <EntryProvider>
            <AddClupProvider>
              <AddCommentProvider>
                <EntryDetail />
              </AddCommentProvider>
            </AddClupProvider>
          </EntryProvider>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
