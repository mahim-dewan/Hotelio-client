import { cookies } from "next/headers";
import axiosInstance from "./axios";
import { handleApiError } from "./apiErrorHandler";

export const apiServer = {
  // Get all bookings data by User
  getBookings: async () => {
    try {
      const cookieStore = await cookies();
      const res = await axiosInstance.get("/bookings/getBookingsByUser", {
        headers: {
          Cookie: cookieStore.toString(),
        },
      });
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },

  // Get all payments data by booking ID
  getPaymentsByBookingIds: async (bookingIds) => {
    try {
      const cookieStore = await cookies();
      const res = await axiosInstance.post(
        `/payments/by-bookings`,
        { bookingIds },
        {
          headers: {
            Cookie: cookieStore.toString(),
          },
        },
      );
      return res.data;
    } catch (err) {
      return handleApiError(err);
    }
  },
};
