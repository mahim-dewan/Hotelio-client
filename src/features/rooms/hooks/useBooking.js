"use client";
import { useAuth } from "@/context/AuthProvider";
import { apiClient } from "@/lib/apis-client";
import { TOGGLE_AUTH_BOX } from "@/reducers/auth/actions";
import { formatDate } from "@/utils/date";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const useBooking = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { state, dispatch } = useAuth();
  const { user } = state;

  const handleReserve = async (payload) => {
    setIsLoading(true);
    // Check Is user logged in
    if (!user) {
      dispatch(TOGGLE_AUTH_BOX());
    }

    const checkInDate = formatDate(payload?.check_in);
    const checkOutDate = formatDate(payload?.check_out);

    const data = {
      room: payload.room_id,
      checkIn: checkInDate,
      checkOut: checkOutDate,
    };

    const res = await apiClient.bookingRequest(data);

    if (!res?.success) {
      toast.error(res?.errors?.[0] || res?.message || "Booking request failed");
      setIsLoading(false);
      return;
    }

    toast.success(res?.message || "Booking successfull");
    setIsLoading(false);
    router.push("/mybookings");
  };

  return { handleReserve, isLoading };
};

export default useBooking;
