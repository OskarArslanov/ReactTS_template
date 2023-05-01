import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/antd.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import "@ant-design/flowchart/dist/index.css";
import Analytics from "./pages/Analytics";
import Gasoline from "./pages/Gasoline";
import Agro from "./pages/Agro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: undefined,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: undefined,
      },
      {
        path: "reports",
        element: <Reports />,
        loader: undefined,
      },
      {
        path: "analytics",
        element: <Analytics />,
        loader: undefined,
      },
      {
        path: "gasoline",
        element: <Gasoline />,
        loader: undefined,
      },
      {
        path: "agro",
        element: <Agro />,
        loader: undefined,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
