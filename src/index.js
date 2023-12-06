import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import App from "./App";
import "../src/styles/common/index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
