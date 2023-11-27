import axios from "axios";

const BASE_URL_1 = "http://localhost:27015";
const BASE_URL_2 = "http://localhost:8080";

export const axiosInstanceNode = axios.create({
  baseURL: BASE_URL_1,
});

export const axiosInstanceSpring = axios.create({
  baseURL: BASE_URL_2,
});