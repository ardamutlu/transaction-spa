import axios from "axios";

export const setupAxios = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: process.env.SERVICE_URL,
    timeout: 1000,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
};
