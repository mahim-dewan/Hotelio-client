"use client";
import { createContext, useState } from "react";

export const MyBookingContext = createContext();

const MyBookingProvider = ({ children }) => {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <MyBookingContext.Provider
      value={{
        selectedBooking,
        setSelectedBooking,
        isModalOpen,
        setIsModalOpen,
        isProcessing,
        setIsProcessing,
      }}
    >
      {children}
    </MyBookingContext.Provider>
  );
};

export default MyBookingProvider;
