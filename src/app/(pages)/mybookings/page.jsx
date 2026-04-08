import { BOOKING_DATA } from "@/data/booking";
import MyBookingCard from "@/features/mybookings/components/MyBookingCard";
import PaymentModal from "@/features/mybookings/components/PaymentModal";
import MyBookingProvider from "@/features/mybookings/context/MyBookingProvider";

export default function MyBookings() {
  return (
    <MyBookingProvider>
      <div className="min-h-screen bg-[#050505] text-[#e2e8f0] p-4 md:p-12 font-secondary">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8 flex items-center justify-between">
            <h1 className="text-2xl font-black tracking-tighter text-light uppercase">
              Reservations<span className="text-secondary">.</span>
            </h1>
          </header>

          <div className="space-y-5">
            {BOOKING_DATA.map((booking) => (
              <MyBookingCard key={booking._id} booking={booking} />
            ))}
          </div>
        </div>

        <PaymentModal />
      </div>
    </MyBookingProvider>
  );
}
