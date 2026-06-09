import { paidPercentage } from "./paidPercentage";

export const getBookingPaymentStatus = (booking) => {
  const paidPercent = paidPercentage(booking);
  const isPartiallyPaid = paidPercent === 50;
  const isFullyPaid = paidPercent === 100;
  const hasPaidSomething = isPartiallyPaid || isFullyPaid;
  const isCanceled = booking.status === "cancelled";

  const amountDue = isPartiallyPaid
    ? booking.totalPrice / 2
    : booking.totalPrice;

  return {
    isPartiallyPaid,
    isFullyPaid,
    hasPaidSomething,
    isCanceled,
    amountDue,
  };
};
