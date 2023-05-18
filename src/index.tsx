import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import "antd/dist/antd.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { YMaps } from "@pbe/react-yandex-maps";
import SecuredRoute from "./utils/secured";
import Login from "./pages/Login";
import App from "./app";
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
        element: <SecuredRoute page={<Dashboard />} />,
        loader: undefined,
      },
      {
        path: "reports",
        element: <SecuredRoute page={<Reports />} />,
        loader: undefined,
      },
      {
        path: "analytics",
        element: <SecuredRoute page={<Analytics />} />,
        loader: undefined,
      },
      {
        path: "gasoline",
        element: <SecuredRoute page={<Gasoline />} />,
        loader: undefined,
      },
      {
        path: "agro",
        element: <SecuredRoute page={<Agro />} />,
        loader: undefined,
      },
      {
        path: "login",
        element: <Login />,
        loader: undefined,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <YMaps>
    <RouterProvider router={router} />
  </YMaps>
);
