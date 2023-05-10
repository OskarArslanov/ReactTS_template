import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://78.24.223.121:8000",
  headers: { "X-Custom-Header": "foobar" },
});

// axiosInstance.interceptors.request.use((config) => {
//   const session = localStorage.getItem("session");
//   if (!session) return config;
//   const updatedHeaders = { ...config.headers., Cookie: session };
//   return { ...config, headers: updatedHeaders };
// });
