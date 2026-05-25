const { default: axios } = require("axios");

// -----------------------------------
// Base API URL
// -----------------------------------
const BASE_API = process.env.NEXT_PUBLIC_PUBLIC_API;

// -----------------------------------
// Axios instance
// -----------------------------------
export const axiosAuth = axios.create({
  baseURL: "/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPublic = axios.create({ baseURL: BASE_API });
