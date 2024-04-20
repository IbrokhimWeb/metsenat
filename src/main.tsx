import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./style/index.scss";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("metsenat")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
