import React from "react";
import FeaturedRoomCard from "../cards/FeaturedRoomCard";
import { apiServer } from "@/lib/apis-server";
import { Spotlight } from "lucide-react";
import ErrorMessage from "@/shared/components/ErrorMessage";
import Link from "next/link";

const FeaturedRooms = async () => {
  const res = await apiServer.getRoomsByCategory("featured");
  const rooms = res?.data.slice(0, 6);

  if (!res?.success || !rooms.length) {
    return <ErrorMessage message={res?.message} />;
  }

  return (
    <div className="py-10">
      <h3 className="text-3xl font-bold text-primary mb-4 ml-4 md:ml-10 flex gap-2 items-center">
        <span>Featured Rooms</span>
        <Spotlight className="text-highlight" size={40} />
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:px-12">
        {rooms?.map((room) => (
          <FeaturedRoomCard key={room?._id} room={room} />
        ))}
      </div>

      <div className="mx-auto w-fit my-10">
        <Link
          href="/rooms/featured-rooms"
          className="btn-rounded-outline text-primary hover:bg-primary hover:text-light"
        >
          See All →
        </Link>
      </div>
    </div>
  );
};

export default FeaturedRooms;
