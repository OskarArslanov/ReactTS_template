import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://78.24.223.121:8000/rgk24/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
