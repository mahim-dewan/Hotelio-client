import { useContext } from "react";
import { MyBookingContext } from "../context/MyBookingProvider";
import { apiClient } from "@/lib/apis-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const useMyBooking = () => {
  const router = useRouter();
  const {
    selectedBooking,
    setSelectedBooking,
    isModalOpen,
    setIsModalOpen,
    isProcessing,
    setIsProcessing,
    isDownloading,
    setIsDownloading,
    isCanceling,
    setIsCanceling,
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

  // Cancel booking
  const cancelBooking = async (id) => {
    try {
      setIsCanceling(true);
      const res = await apiClient.cancelBooking(id);

      if (!res?.success) {
        toast.error(res?.message || "Something went wrong");
        return;
      }

      toast.success(res?.message || "Your booking request has been cancelled.");
      router.refresh();
    } catch (err) {
      toast.error(err?.message || "Something went wrong");
    } finally {
      setIsCanceling(false);
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
    cancelBooking,
    isCanceling,
  };
};
