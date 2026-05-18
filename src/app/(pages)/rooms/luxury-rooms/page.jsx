import LuxuryRoomCard from "@/features/rooms/components/cards/LuxuryRoomCard";
import RoomHeroHeader from "@/features/rooms/components/RoomHeroHeader";
import { apiServer } from "@/lib/apis-server";
import ErrorMessage from "@/shared/components/ErrorMessage";
import Pagination from "@/shared/components/Pagination";
import React from "react";

const CATEGORY = "luxury";

const LuxuryRoomsPage = async ({ searchParams }) => {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const res = await apiServer.getRoomsByCategory(CATEGORY, page);
  const rooms = res?.data;

  if (!res?.success || !rooms?.length) {
    return (
      <ErrorMessage
        message={res?.message || "No luxury rooms found."}
        className="min-h-screen"
      />
    );
  }

  return (
    <section className="relative min-h-screen px-4 sm:px-8 md:px-12 py-16 overflow-hidden bg-dark text-light select-none">
      {/* Editorial Ambient Background Glows */}
      <div className="absolute top-[-15%] left-[-5%] w-125 h-125 bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-150 h-150 bg-highlight/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* --- Section 1: Reusable Dynamic Hero Header --- */}
        <RoomHeroHeader category={CATEGORY} />

        {/* --- Section 2: Room Inventory Grid --- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-light/5 pb-4">
            <p className="text-xs uppercase tracking-widest text-neutral-400 font-light">
              Showing{" "}
              <span className="text-light font-medium">
                {res?.count || rooms.length}
              </span>{" "}
              signature selections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {rooms.map((room) => (
              <LuxuryRoomCard key={room?._id} room={room} />
            ))}
          </div>
        </div>

        {/* --- Section 3: Clean Structural Pagination --- */}
        <div className="pt-8 border-t border-light/5 flex justify-center">
          <Pagination totalPages={res?.totalPages || 1} />
        </div>
      </div>
    </section>
  );
};

export default LuxuryRoomsPage;
