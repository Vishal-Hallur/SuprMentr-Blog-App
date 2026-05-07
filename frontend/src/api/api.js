import axios from "axios";

const API = axios.create({
  baseURL: "https://blog-app-gz6a.onrender.com"
});

export default API;