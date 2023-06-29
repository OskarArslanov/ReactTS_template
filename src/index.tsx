import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { YMaps } from "@pbe/react-yandex-maps";
import * as Sentry from "@sentry/react";
import SecuredRoute from "./utils/secured";
import Login from "./pages/Login";
import App from "./app";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import Gasoline from "./pages/Gasoline";
import Agro from "./pages/Agro";

Sentry.init({
  dsn: "https://68f8ec56acd74727a93a393584ffa8c7@o4505001118269440.ingest.sentry.io/4505001120366592",
  integrations: [
    new Sentry.BrowserTracing({
      // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["http://78.24.223.121:4000"],
    }),
    new Sentry.Replay(),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const router = createBrowserRouter([
  {
    path: "/rgk24",
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
  document.getElementById("root") as HTMLElement,
);

root.render(
  <YMaps>
    <RouterProvider router={router} />
  </YMaps>,
);
