import axios from "axios";

// -----------------------------------
// Base API URL (from environment)
// -----------------------------------
const BASE_API = process.env.NEXT_PUBLIC_BASE_API;

// -----------------------------------
// Axios instance with default config
// -----------------------------------
const axiosInstance = axios.create({
  baseURL: BASE_API,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = {
  // verify user's token
  verifyToken: async () => {
    try {
      const res = await axiosInstance.get(`${BASE_API}/auth/me`);
      return res.data;
    } catch (err) {}
  },

  //  logged in user sign out
  signout: async () => {
    try {
      const res = await axiosInstance.get(`${BASE_API}/auth/signout`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
};
