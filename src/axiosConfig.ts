import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://78.24.223.121:8000",
});

// @ts-ignore
axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");
  if (!accessToken || !refreshToken) return config;
  return {
    ...config,
    headers: { ...config.headers, Authorization: `Bearer ${accessToken}` },
  };
});

axiosInstance.interceptors.request.use((config) => {
  // console.log(config);
  return config;
});
