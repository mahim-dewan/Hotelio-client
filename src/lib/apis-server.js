import { cookies } from "next/headers";
import { handleApiError } from "./apiErrorHandler";

const BASE_API = process.env.NEXT_PUBLIC_BASE_API;

export const apiServer = {
  // Get all bookings data by User
  getBookings: async () => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${BASE_API}/bookings/getBookingsByUser`, {
        method: "GET",
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      return await res.json();
    } catch (err) {
      return handleApiError(err);
    }
  },

  // Get all payments data by booking ID
  getPaymentsByBookingIds: async (bookingIds) => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${BASE_API}/payments/by-bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify({ bookingIds }),
        cache: "no-store",
      });

      return await res.json();
    } catch (err) {
      return handleApiError(err);
    }
  },

  // Get single room by slug
  getRoom: async (slug) => {
    try {
      const res = await fetch(`${BASE_API}/rooms/room/${slug}`, {
        next: {
          revalidate: 600,
        },
      });

      return await res.json();
    } catch (err) {
      return handleApiError(err);
    }
  },

  // Get featured rooms
  getRoomsByCategory: async (category, page = 1, capacity) => {
    try {
      const res = await fetch(`${BASE_API}/rooms/${category}?page=${page}&capacity=${capacity}`, {
        next: {
          revalidate: 3600, // revalidation for 1 hour
          // tags: [`rooms-${category}-page-${page}`],
        },
      });

      return await res.json();
    } catch (err) {
      return handleApiError(err);
    }
  },
};
