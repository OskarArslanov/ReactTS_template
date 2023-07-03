import axios from "axios";

const basePath = "http://78.24.223.121:8000/rgk24";
export const axiosInstance = axios.create({
  baseURL: basePath,
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
      const newToken = (
        await axios.post(`${basePath}/refresh`, undefined, {
          headers: { Authorization: `Bearer ${refreshToken}` },
        })
      ).data.access_token;
      localStorage.setItem("access_token", newToken);
      return axios({
        ...config,
        headers: { Authorization: `Bearer ${newToken}` },
      });
    }
    return error;
  },
);
