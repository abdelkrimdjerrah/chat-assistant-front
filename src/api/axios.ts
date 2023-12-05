import axios from "axios";

const BASE_URL_1 = "http://localhost:27015";
const BASE_URL_2 = "http://localhost:8080";
const BASE_URL_3 = "http://127.0.0.1:8000";

export const axiosInstanceNode = axios.create({
  baseURL: BASE_URL_1,
});

export const axiosInstanceSpring = axios.create({
  baseURL: BASE_URL_2,
});

export const axiosInstancePython = axios.create({
  baseURL: BASE_URL_3,
});

export const axiosPrivateNode = axios.create({
  baseURL: BASE_URL_1,
  headers: {
    "Content-Type": "application/json",
    withCredentials: "true",
  },
  withCredentials: true,
});

export const axiosPrivateSpring = axios.create({
  baseURL: BASE_URL_2,
  headers: {
    "Content-Type": "application/json",
    withCredentials: "true",
  },
  withCredentials: true,
});

