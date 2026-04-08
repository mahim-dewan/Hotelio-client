"use client";
import Image from "next/image";
import Link from "next/link";
import {
  CreditCard,
  Star,
  CheckCircle2,
  X,
  FileDown,
  Clock,
  ChevronRight,
} from "lucide-react";
import Button from "@/shared/components/Button";
import { useMyBooking } from "../hooks/useMyBooking";

const MyBookingCard = ({ booking }) => {
  const { setIsModalOpen, setSelectedBooking } = useMyBooking();
  const paidPercent = booking.payment?.paymentPercentage || 0;
  const isPartiallyPaid = paidPercent === 50;
  const isFullyPaid = paidPercent === 100 || booking.isPaid;
  const hasPaidSomething = isPartiallyPaid || isFullyPaid;
  const isCanceled = booking.status === "canceled";

  const amountDue = isPartiallyPaid
    ? booking.totalPrice / 2
    : booking.totalPrice;

  const handlePay = (b) => {
    setSelectedBooking(b);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-dark border border-white/5 rounded-2xl overflow-hidden hover:border-secondary/30 transition-all duration-300 group shadow-2xl">
      <div className="flex flex-col">
        {/* Top Section */}
        <div className="flex items-stretch border-b border-white/5 min-h-35">
          <div className="w-28 sm:w-32 shrink-0 relative bg-black/40 border-r border-white/5">
            <Image
              src={booking?.room?.image}
              alt="room"
              width={600}
              height={900}
              className="h-full w-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/80 backdrop-blur-md px-1.5 py-0.5 rounded text-[8px] font-black border border-white/5 text-light">
              <Star size={8} className="text-highlight fill-highlight" />
              {booking?.room?.rating}
            </div>
          </div>

          <div className="grow p-4 sm:p-6 flex flex-col justify-center min-w-0">
            <div className="flex justify-between items-start gap-2 mb-4">
              <div className="min-w-0">
                <div className="flex items-start flex-col md:flex-row md:items-center gap-2 mb-1">
                  <span className="text-[8px] sm:text-[9px] font-black text-secondary uppercase tracking-widest truncate">
                    {booking?.room?.category}
                  </span>
                  <span
                    className={`text-[10px] tracking-widest font-bold px-2 py-0.5 rounded-full border border-white/10 uppercase 
                      ${
                        booking?.status === "pending"
                          ? "bg-dark/5 text-light "
                          : booking?.status === "confirmed"
                            ? "bg-secondary"
                            : "bg-highlight text-dark "
                      }
                      `}
                  >
                    {booking.status}
                  </span>
                </div>
                <Link
                  href={`/rooms/${booking?.room?._id}`}
                  className="text-sm underline sm:text-xl font-bold text-light truncate leading-tight tracking-tight"
                >
                  {booking.room.title}
                </Link>
              </div>

              <Link
                href={`mybookings/${booking?._id}`}
                className="flex items-center gap-1 text-[10px] font-black text-muted hover:text-secondary uppercase transition-colors px-2 py-1 shrink-0"
              >
                Details <ChevronRight size={12} />
              </Link>
            </div>

            <div className="flex items-center gap-6 sm:gap-10 text-muted">
              <div className="min-w-0">
                <p className="text-[8px] text-muted uppercase tracking-widest opacity-40 mb-0.5">
                  Check In
                </p>
                <p className="text-[10px] sm:text-xs font-bold text-light truncate">
                  {booking.checkIn}
                </p>
                <p className="text-[9px] text-highlight font-bold flex items-center gap-1 mt-0.5">
                  <Clock size={10} /> 2:00 PM
                </p>
              </div>
              <div className="min-w-0">
                <p className="text-[8px] text-muted uppercase tracking-widest opacity-40 mb-0.5">
                  Check Out
                </p>
                <p className="text-[10px] sm:text-xs font-bold text-light truncate">
                  {booking.checkOut}
                </p>
                <p className="text-[9px] text-highlight font-bold flex items-center gap-1 mt-0.5">
                  <Clock size={10} /> 11:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full bg-white/2 px-2 md:px-4 py-4 sm:px-6 flex items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-muted block tracking-tighter">
                Amount Due
              </span>
              <div className="flex items-center gap-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-base md:text-2xl font-black text-light leading-none">
                    ${amountDue}
                  </span>
                  <span className="text-[8px] font-bold text-muted uppercase">
                    USD
                  </span>
                </div>

                {isPartiallyPaid && (
                  <div className="flex items-center gap-1 px-1 md:px-2 py-0.5 bg-highlight/10 border border-highlight/20 rounded text-[7px] md:text-xs font-black text-highlight uppercase tracking-tighter">
                    <CheckCircle2 size={8} /> 50% Paid
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/*  Invoice or Cancel */}
            {hasPaidSomething ? (
              <Button
                className="p-2 text-muted hover:text-secondary hover:bg-secondary/10 rounded-xl transition-all border border-white/5"
                title="Download Invoice"
              >
                <FileDown size={18} />
              </Button>
            ) : isCanceled ? null : (
              <Button
                className="p-2.5 text-muted hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                title="Cancel Booking"
              >
                <X size={18} />
              </Button>
            )}

            {isFullyPaid ? (
              <div className="flex items-center gap-2 px-5 py-2 sm:px-8 sm:py-2.5 bg-secondary text-light rounded-xl text-[10px] font-black uppercase tracking-wider shadow-lg shadow-secondary/20">
                <CheckCircle2 size={14} /> PAID
              </div>
            ) : (
              <Button
                disabled={isCanceled}
                onClick={() => handlePay(booking)}
                className={`bg-white text-black px-2 py-2 sm:px-8 sm:py-2.5 rounded-md font-black text-[10px] md:text-sm uppercase tracking-widest transition-all shadow-xl flex items-center gap-2 active:scale-95
                  ${!isCanceled && "hover:bg-secondary hover:text-light"}
                  `}
              >
                <CreditCard size={14} />
                <span>{isPartiallyPaid ? "Pay Remaining" : "Secure Pay"}</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingCard;
