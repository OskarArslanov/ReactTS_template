import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import ruRU from "antd/es/locale/ru_RU";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import "@ant-design/flowchart/dist/index.css";

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
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ConfigProvider locale={ruRU}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
