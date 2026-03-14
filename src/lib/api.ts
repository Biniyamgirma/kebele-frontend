import axios from "axios";

const api = axios.create({
  baseURL: "https://kebele-backend.vercel.app",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
