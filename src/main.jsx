import React from "react";
import ReactDOM from "react-dom/client";
import { CalculateImc } from "./App.jsx";
import "./style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CalculateImc></CalculateImc>
  </React.StrictMode>
);
