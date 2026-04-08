"use client";
import { createContext, useState } from "react";

export const MyBookingContext = createContext();

const MyBookingProvider = ({ children }) => {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <MyBookingContext.Provider
      value={{
        selectedBooking,
        setSelectedBooking,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </MyBookingContext.Provider>
  );
};

export default MyBookingProvider;
