import { useContext } from "react";
import { MyBookingContext } from "../context/MyBookingProvider";
import { apiClient } from "@/lib/apis-client";
import toast from "react-hot-toast";

export const useMyBooking = () => {
  const {
    selectedBooking,
    setSelectedBooking,
    isModalOpen,
    setIsModalOpen,
    isProcessing,
    setIsProcessing,
  } = useContext(MyBookingContext);

  // API Call for create payment
  const makePayment = async (payload) => {
    setIsProcessing(true);
    const res = await apiClient.paymentRequest(payload);
    if (res?.success) {
      window.location.href = res.url;
      setIsModalOpen(false);
    } else if (!res?.success) {
      toast.error(res?.message);
    }

    setIsProcessing(false);
  };

  return {
    selectedBooking,
    setSelectedBooking,
    isModalOpen,
    setIsModalOpen,
    isProcessing,
    makePayment,
  };
};
