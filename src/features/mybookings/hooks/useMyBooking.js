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
    isDownloading,
    setIsDownloading,
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

  // Download invoice PDF
  const invoiceDownload = async (id) => {
    try {
      setIsDownloading(true);
      const blob = await apiClient.invoiceDownload(id);
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Hotelio_Receipt";

      document.body.appendChild(link);

      link.click();
      link.remove();

      setIsDownloading(false);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      toast.error("Could not download receipt. Please try again.");
    }
  };

  return {
    selectedBooking,
    setSelectedBooking,
    isModalOpen,
    setIsModalOpen,
    isProcessing,
    isDownloading,
    makePayment,
    invoiceDownload,
  };
};
