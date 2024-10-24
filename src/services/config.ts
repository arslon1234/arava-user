import axios from "axios";

const request = axios.create({
  baseURL: "https://webtest.aravva.uz",
});

request.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default request;
