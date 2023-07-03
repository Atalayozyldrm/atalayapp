import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "animate.css";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";
import { AuthContextProvider } from "./context/AuthContext.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <React.Fragment>
      <BrowserRouter>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </BrowserRouter>
    </React.Fragment>
  </React.StrictMode>
);

reportWebVitals();
