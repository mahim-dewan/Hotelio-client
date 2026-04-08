import { useContext } from "react";
import { MyBookingContext } from "../context/MyBookingProvider";

export const useMyBooking = () => {
  const { selectedBooking, setSelectedBooking, isModalOpen, setIsModalOpen } =
    useContext(MyBookingContext);

  return { selectedBooking, setSelectedBooking, isModalOpen, setIsModalOpen };
};
