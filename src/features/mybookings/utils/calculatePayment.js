import { CURRENCY, CURRENCY_SYMBOL } from "@/constants/currency";
import { paidPercentage } from "./paidPercentage";

const USD_TO_BDT = 110; // Static conversion rate

export const calculatePayment = (booking, currency, paymentPercentage) => {
  const paidPercent = paidPercentage(booking);

  // Check if only remaining payment is due
  const isRemaining = paidPercent === 50;

  // Determine base amount (full or 50%)
  const baseAmount = isRemaining
    ? booking?.totalPrice / 2
    : paymentPercentage === 50
      ? booking?.totalPrice / 2
      : booking?.totalPrice;

  // Convert amount if BDT selected
  const amount =
    currency === CURRENCY.BDT ? baseAmount * USD_TO_BDT : baseAmount;

  // Select currency symbol
  const symbol =
    currency === CURRENCY.BDT ? CURRENCY_SYMBOL.BDT : CURRENCY_SYMBOL.USD;

  return { paidPercent, isRemaining, amount, symbol };
};
