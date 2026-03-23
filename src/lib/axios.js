const { default: axios } = require("axios");

// -----------------------------------
// Base API URL
// -----------------------------------
const BASE_API = process.env.NEXT_PUBLIC_BASE_API;

// -----------------------------------
// Axios instance
// -----------------------------------
const axiosInstance = axios.create({
  baseURL: BASE_API,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
