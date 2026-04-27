"use client";
import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

import Button from "@/shared/components/Button";
import { useMyBooking } from "../hooks/useMyBooking";
import { CURRENCY } from "@/constants/currency";
import { calculatePayment } from "../utils/calculatePayment";

/**
 * Available payment plans.
 * User can either pay full amount or reserve with 50%.
 */
const PAYMENT_OPTIONS = [
  { value: 100, label: "Full Payment", desc: "Pay total amount now" },
  { value: 50, label: "Reserve (50%)", desc: "Pay rest later" },
];

export default function PaymentModal() {
  /**
   * Booking related state and actions
   * coming from custom hook
   */
  const {
    selectedBooking,
    isModalOpen,
    setIsModalOpen,
    isProcessing,
    makePayment,
  } = useMyBooking();

  //Selected currency state (USD / BDT)
  const [currency, setCurrency] = useState(CURRENCY.USD);

  /**
   * Payment percentage chosen by user
   * default = full payment
   */
  const [paymentPercentage, setPaymentPercentage] = useState(100);

  /**
   * Don't render modal if
   * - modal is closed
   * - booking not selected
   */
  if (!isModalOpen || !selectedBooking) return null;

  /**
   * Calculate payment values dynamically
   * based on booking, currency and selected percentage
   */
  const { paidPercent, isRemaining, amount, symbol } = calculatePayment(
    selectedBooking,
    currency,
    paymentPercentage,
  );

  // Close modal handler
  const handleClose = () => setIsModalOpen(false);

  /**
   * Trigger payment request
   *
   * Prevents duplicate requests if already processing.
   *
   * If remaining payment exists,
   * use the remaining percentage instead of user selection.
   */
  const handlePayment = () => {
    if (isProcessing) return;

    makePayment({
      bookingId: selectedBooking._id,
      currency,
      paymentPercentage: isRemaining ? paidPercent : paymentPercentage,
    });
  };

  // UI label describing payment type
  const paymentLabel =
    paymentPercentage === 50
      ? "Reserve Payment"
      : isRemaining
        ? "Remaining Payment"
        : "Full Transaction";

  //  Payment button text
  const buttonLabel = isProcessing ? "Processing..." : "Complete payment";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-dark border border-white/10 w-full max-w-sm rounded-4xl p-8">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-sm font-luxury text-light/50 uppercase">
            Checkout
          </span>

          {/* Close button */}
          <X
            size={22}
            onClick={handleClose}
            className="cursor-pointer text-light/50 hover:text-light"
          />
        </div>

        {/* Currency Selector */}
        <div className="flex gap-2 mb-6">
          {[CURRENCY.USD, CURRENCY.BDT].map((curr) => (
            <Button
              key={curr}
              onClick={() => setCurrency(curr)}
              className={`flex-1 py-2 rounded-md text-sm font-bold ${
                currency === curr
                  ? "bg-secondary text-light"
                  : "bg-light/5 text-light/50"
              }`}
            >
              {curr === CURRENCY.USD ? "USD $" : "BDT ৳"}
            </Button>
          ))}
        </div>

        {/* Payment Options (only shown if booking is not partially paid) */}
        {!isRemaining && (
          <div className="space-y-3 mb-8">
            <p className="text-[10px] text-light/30 uppercase tracking-[0.2em] px-1">
              Select Payment Plan
            </p>

            {PAYMENT_OPTIONS.map((option) => {
              const active = paymentPercentage === option.value;

              return (
                <div
                  key={option.value}
                  onClick={() => setPaymentPercentage(option.value)}
                  className={`cursor-pointer flex items-center justify-between p-4 rounded-2xl border transition-all
                  ${
                    active
                      ? "border-secondary bg-secondary/5"
                      : "border-white/5 bg-white/5 hover:border-white/20"
                  }`}
                >
                  {/* Payment plan info */}
                  <div className="flex flex-col">
                    <span
                      className={`text-sm font-bold ${
                        active ? "text-light" : "text-light/60"
                      }`}
                    >
                      {option.label}
                    </span>

                    <span className="text-[10px] text-light/40">
                      {option.desc}
                    </span>
                  </div>

                  {/* Selection indicator */}
                  <CheckCircle2
                    size={20}
                    className={`transition-all ${
                      active ? "text-secondary scale-110" : "text-light/10"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Payment Amount Section */}
        <div className="text-center space-y-6">
          <h4 className="text-5xl font-black text-light">
            {symbol}
            {amount.toLocaleString()}
          </h4>

          {/* Payment description */}
          <p className="text-[12px] text-light/50 uppercase tracking-[0.2em]">
            {paymentLabel}
          </p>

          {/* Payment button */}
          <Button
            disabled={isProcessing}
            onClick={handlePayment}
            className={`w-full py-4 rounded-xl font-black text-base uppercase tracking-[0.2em] transition
              ${
                isProcessing
                  ? "bg-secondary/60 cursor-not-allowed"
                  : "bg-secondary active:scale-95"
              }`}
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
