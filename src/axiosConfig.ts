import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://78.24.223.121:8000",
  headers: { "X-Custom-Header": "foobar" },
});

// @ts-ignore
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (!token) return config;
  return {
    ...config,
    headers: { ...config.headers, Authorization: `Bearer ${token}` },
  };
});
