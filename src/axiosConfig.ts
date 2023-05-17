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

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config } = error;
    const statusCode = error.response.status;
    if (statusCode === 401) {
      const refreshToken = localStorage.getItem("refresh_token");
      let newToken;
      await axiosInstance
        .post("/refresh", undefined, {
          headers: { Authorization: `Bearer ${refreshToken}` },
        })
        .then((resp) => {
          newToken = resp.data.access_token;
          localStorage.setItem("access_token", newToken);
        });
      return axios({
        ...config,
        headers: { Authorization: `Bearer ${newToken}` },
      });
    }
    return Promise.reject(error);
  }
);
