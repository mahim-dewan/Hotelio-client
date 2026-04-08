"use client";
import Button from "@/shared/components/Button";
import { X } from "lucide-react";
import React, { useState } from "react";
import { useMyBooking } from "../hooks/useMyBooking";
import { CURRENCY, CURRENCY_SYMBOL } from "@/constants/currency";

const PaymentModal = () => {
  const { selectedBooking, setIsModalOpen, isModalOpen } = useMyBooking();

  const isRemaining = selectedBooking?.payment?.paymentPercentage === 50;
  const baseAmount = isRemaining
    ? selectedBooking?.totalPrice / 2
    : selectedBooking?.totalPrice;

  const USD_TO_BDT = 110;

  const [currency, setCurrency] = useState("USD");

  const amount =
    currency === CURRENCY.BDT ? baseAmount * USD_TO_BDT : baseAmount;

  const symbol =
    currency === CURRENCY.BDT ? CURRENCY_SYMBOL.BDT : CURRENCY_SYMBOL.USD;

  const handleClose = () => setIsModalOpen(false);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-dark border border-white/10 w-full max-w-sm rounded-4xl p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-sm font-luxury text-light/50 uppercase">
            Checkout
          </span>

          <X
            size={22}
            className="cursor-pointer text-light/50 hover:text-light"
            onClick={handleClose}
          />
        </div>

        {/* Currency selector */}
        <div className="flex gap-2 mb-6">
          <Button
            onClick={() => setCurrency(CURRENCY.USD)}
            className={`flex-1 py-2 rounded-md text-sm font-bold ${
              currency === CURRENCY.USD
                ? "bg-secondary text-light"
                : "bg-light/5 text-light/50"
            }`}
          >
            USD $
          </Button>

          <Button
            onClick={() => setCurrency(CURRENCY.BDT)}
            className={`flex-1 py-2 rounded-md text-sm font-bold ${
              currency === CURRENCY.BDT
                ? "bg-secondary text-light"
                : "bg-light/5 text-light/50"
            }`}
          >
            BDT ৳
          </Button>
        </div>

        {/* Amount */}
        <div className="text-center space-y-6">
          <h4 className="text-5xl font-black text-light">
            {symbol}
            {amount.toLocaleString()}
          </h4>

          <p className="text-[12px] text-light/50 uppercase tracking-[0.2em]">
            {isRemaining ? "Remaining Balance" : "Full Transaction"}
          </p>

          <Button className="w-full py-4 bg-secondary rounded-xl font-black text-base uppercase tracking-[0.2em] active:scale-95 transition">
            COMPLETE PAYMENT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
