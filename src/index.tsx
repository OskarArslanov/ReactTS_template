import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HeaderLayout from "./layouts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HeaderLayout />
  </React.StrictMode>
);
