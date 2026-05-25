import { handleApiError } from "@/lib/apiErrorHandler";
import { axiosAuth, axiosPublic } from "./axios";

export const apiClient = {
  // Request for a new registration
  requestRegister: async (data) => {
    try {
      const res = await axiosAuth.post(`/auth/request-register`, data);
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  // Verify with otp and create an user
  verifyRegister: async (data) => {
    try {
      const res = await axiosAuth.post(`/auth/verify-register`, data);
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  // Resend Otp for registration
  resendRegistrationOtp: async (data) => {
    try {
      const res = await axiosAuth.post(`/auth/registerOtp-resend`, {
        email: data.email,
      });
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  // Password forgot request
  forgotPassword: async (data) => {
    try {
      const res = await axiosAuth.post(`/auth/forgot-password`, data);
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  // Reset Password
  resetPassword: async (data) => {
    try {
      const res = await axiosAuth.post(`/auth/reset-password`, data);
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  // Reset Password
  resetOtpResend: async (data) => {
    try {
      const res = await axiosAuth.post(`/auth/resetOtp-resend`, data);
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  // User Login
  login: async (data) => {
    try {
      const res = await axiosAuth.post(`/auth/login`, data);
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  // verify user's token
  verifyToken: async () => {
    try {
      const res = await axiosAuth.get(`/auth/me`);
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  //  logged in user sign out
  signout: async () => {
    try {
      const res = await axiosAuth.get(`/auth/signout`);
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  // Booking a room
  bookingRequest: async (data) => {
    try {
      const res = await axiosAuth.post(`/bookings`, data);
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  // Create a payment
  paymentRequest: async (data) => {
    try {
      const res = await axiosAuth.post(`/payments/makePayment`, data);
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  // Create a payment
  invoiceDownload: async (id) => {
    try {
      const res = await axiosAuth.get(`/bookings/${id}/invoice`, {
        responseType: "blob",
      });

      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  // Get exclusive rooms
  getRoomsByCategory: async (category, query) => {
    try {
      const res = await axiosPublic.get(`/rooms/${category}?${query}`);

      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },
};
