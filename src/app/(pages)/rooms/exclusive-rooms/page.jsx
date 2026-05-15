import DiscountRoomCard from "@/features/rooms/components/cards/DiscountRoomCard";
import { apiServer } from "@/lib/apis-server";
import ErrorMessage from "@/shared/components/ErrorMessage";
import Pagination from "@/shared/components/Pagination";
import { HandCoins } from "lucide-react";
import React from "react";

const ExlcusiveRoomsPage = async ({ searchParams }) => {
  const params = await searchParams;
  const page = Number(params?.page || 1);

  const res = await apiServer.getRoomsByCategory(`exclusive`, page);
  const rooms = res?.data;

  if (!res?.success || !rooms.length) {
    return <ErrorMessage message={res?.message} className="min-h-screen" />;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-primary py-4 flex gap-2 items-center">
        <span>Exclusive Offers</span>
        <HandCoins className="text-highlight" size={40} />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 md:space-y-6">
        {rooms?.map((room) => (
          <DiscountRoomCard key={room._id} room={room} />
        ))}
      </div>

      <div>
        <Pagination totalPages={res?.totalPages} />
      </div>
    </div>
  );
};

export default ExlcusiveRoomsPage;
