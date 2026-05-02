"use client";

import { CURRENCY, CURRENCY_SYMBOL } from "@/constants/currency";
import { convertUSDtoBDT } from "@/utils/currency";
import { useState } from "react";
import DatePicker from "./DatePicker";
import useBooking from "@/features/rooms/hooks/useBooking";
import Button from "../../../shared/components/Button";
import LineSpinnerLoader from "@/shared/components/LineSpinnerLoader";

const BookingCard = ({ room }) => {
  const [currency, setCurrency] = useState(CURRENCY.USD);
  const [bookData, setBookData] = useState({
    room_id: room?._id,
    check_in: "",
    check_out: "",
  });

  const { handleReserve, isLoading } = useBooking();

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-28 bg-white border border-muted rounded-2xl p-6 shadow-xl">
        <div className="flex justify-between items-center mb-2">
          <div>
            {room?.discountPrice && room?.discountPercentage && (
              <span className="text-gray-400 line-through text-lg">
                {currency === CURRENCY.USD
                  ? `${CURRENCY_SYMBOL.USD} ${room?.originalPrice}`
                  : `${CURRENCY_SYMBOL.BDT} ${convertUSDtoBDT(room?.originalPrice, 125)}`}
              </span>
            )}
            <div className="flex items-baseline gap-1">
              {room?.discountPrice && room?.discountPercentage ? (
                <span className="text-xl xl:text-3xl font-bold text-primary">
                  {currency === CURRENCY.USD
                    ? `${CURRENCY_SYMBOL.USD} ${room?.discountPrice}`
                    : `${CURRENCY_SYMBOL.BDT} ${convertUSDtoBDT(room?.discountPrice, 125)}`}
                </span>
              ) : (
                <span className="text-xl xl:text-3xl font-bold text-primary">
                  {currency === CURRENCY.USD
                    ? `${CURRENCY_SYMBOL.USD} ${room?.originalPrice}`
                    : `${CURRENCY_SYMBOL.BDT} ${convertUSDtoBDT(room?.originalPrice, 125)}`}
                </span>
              )}

              <span className="text-gray-500">/ night</span>
            </div>
          </div>
          {room?.discountPercentage && (
            <div className="bg-highlight text-white px-3 py-1 rounded-lg font-bold animate-bounce">
              Save {room?.discountPercentage}%
            </div>
          )}
        </div>
        <div className="flex items-center justify-start gap-2">
          <div className="flex gap-1">
            <input
              type="radio"
              value={CURRENCY.USD}
              name="currency"
              id="USD"
              checked={currency === CURRENCY.USD}
              onChange={(e) => setCurrency(e.target.value)}
            />
            <label htmlFor="USD">USD</label>
          </div>
          <div className="flex gap-1">
            <input
              type="radio"
              value={CURRENCY.BDT}
              name="currency"
              id="BDT"
              checked={currency === CURRENCY.BDT}
              onChange={(e) => setCurrency(e.target.value)}
            />
            <label htmlFor="BDT">BDT</label>
          </div>
        </div>

        <DatePicker setBookData={setBookData} />

        <Button
          onClick={() => handleReserve(bookData)}
          disabled={isLoading}
          className="w-full h-16 bg-primary text-white py-4 rounded-xl font-bold"
        >
          {isLoading ? <LineSpinnerLoader className="m-0" /> : "Reserve Now"}
        </Button>

        <p className="text-center text-xs text-gray-400 mt-4">
          You won&apos;t be charged yet
        </p>
      </div>
    </div>
  );
};

export default BookingCard;
