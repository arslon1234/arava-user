import axios from "axios";
import { getDataFromCookie } from "@/src/utils/Cookie";

const request = axios.create({
  baseURL: "https://webtest.aravva.uz/services",
});

request.interceptors.request.use((config) => {
  const token = getDataFromCookie("access_token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default request;
