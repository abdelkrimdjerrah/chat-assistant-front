import axios from "axios";

const BASE_URL = "http://localhost:27015";

export default axios.create({
  baseURL: BASE_URL,
});

