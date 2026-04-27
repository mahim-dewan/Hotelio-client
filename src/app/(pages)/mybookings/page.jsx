import MyBookingCard from "@/features/mybookings/components/MyBookingCard";
import PaymentModal from "@/features/mybookings/components/PaymentModal";
import MyBookingProvider from "@/features/mybookings/context/MyBookingProvider";
import { apiServer } from "@/lib/apis-server";

export default async function MyBookings() {
  // Fetch bookings
  const bookingsRes = await apiServer.getBookings();

  // API error
  if (!bookingsRes?.success) {
    return (
      <div className="text-center text-gray-400 py-20 text-base md:text-2xl">
        {bookingsRes?.message || "Something went wrong"}
      </div>
    );
  }

  const bookings = bookingsRes.data;

  // No bookings
  if (!bookings?.length) {
    return (
      <div className="text-center text-gray-400 py-20 text-base md:text-2xl">
        No bookings found
      </div>
    );
  }

  // Extract booking IDs
  const bookingIds = bookings.map((b) => b._id);

  // Fetch payments
  const paymentsRes = await apiServer.getPaymentsByBookingIds(bookingIds);
  const payments = paymentsRes?.success ? paymentsRes.data : [];

  // Map payments by bookingId
  const paymentMap = new Map();

  for (const payment of payments) {
    const { bookingId } = payment;

    if (!paymentMap.has(bookingId)) {
      paymentMap.set(bookingId, []);
    }

    paymentMap.get(bookingId).push(payment);
  }

  // Merge bookings with payments
  const mergedBookings = bookings.map((booking) => ({
    ...booking,
    payments: paymentMap.get(booking._id) ?? [],
  }));

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
            {mergedBookings.map((booking) => (
              <MyBookingCard key={booking._id} booking={booking} />
            ))}
          </div>
        </div>

        <PaymentModal />
      </div>
    </MyBookingProvider>
  );
}