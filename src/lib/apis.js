import { handleApiError } from "@/utils/apiErrorHandler";
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
  // Register a new user
  register: async (data) => {
    try {
      const res = await axiosInstance.post(`/auth/register`, data);
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  // User Login
  login: async (data) => {
    try {
      const res = await axiosInstance.post(`/auth/login`, data);
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  // verify user's token
  verifyToken: async () => {
    try {
      const res = await axiosInstance.get(`/auth/me`);
      return res.data;
    } catch (err) {
      return handleApiError(err)
    }
  },

  //  logged in user sign out
  signout: async () => {
    try {
      const res = await axiosInstance.get(`/auth/signout`);
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },
};
