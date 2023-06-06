import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MemeContextProvider from "./memeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MemeContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MemeContextProvider>
  </BrowserRouter>
);
