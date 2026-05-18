import BudgetFriendlyRoomCard from "@/features/rooms/components/cards/BudgetFriendlyRoomCard";
import RoomHeroHeader from "@/features/rooms/components/RoomHeroHeader";
import { apiServer } from "@/lib/apis-server";
import ErrorMessage from "@/shared/components/ErrorMessage";
import Pagination from "@/shared/components/Pagination";
import { Sparkles } from "lucide-react";
import React from "react";

const CATEGORY = "budget-friendly";

const BudgetFriendlyRoomsPage = async ({ searchParams }) => {
  const params = await searchParams;
  const page = Number(params?.page) || 1;

  const res = await apiServer.getRoomsByCategory(CATEGORY, page);
  const rooms = res?.data;

  if (!res?.success || !rooms?.length) {
    return (
      <ErrorMessage
        message={res?.message || "No budget-friendly rooms found."}
        className="min-h-screen"
      />
    );
  }

  return (
    <section className="relative min-h-screen px-4 sm:px-8 md:px-12 py-16 overflow-hidden bg-dark text-light select-none">
      {/* Ambient Backdrop Structural Aesthetics */}
      <div className="absolute top-[-15%] left-[-5%] w-125 h-125 bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-150 h-150 bg-highlight/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* --- Section 1: Reusable Dynamic Hero Header --- */}
        <RoomHeroHeader category={CATEGORY} />

        {/* --- Section 2: Room Inventory Grid Matrix --- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-light/5 pb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-highlight" />
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-light">
                Discovering{" "}
                <span className="text-light font-medium">
                  {res?.count || rooms.length}
                </span>{" "}
                smart value properties
              </p>
            </div>
          </div>

          {/* Clean grid alignment mapping */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {rooms.map((room, index) => (
              <BudgetFriendlyRoomCard
                key={room._id}
                index={index}
                room={room}
              />
            ))}
          </div>
        </div>

        {/* --- Section 3: Clean Structural Pagination Foothold --- */}
        <div className="pt-8 border-t border-light/5 flex justify-center">
          <Pagination totalPages={res?.totalPages || 1} />
        </div>
      </div>
    </section>
  );
};

export default BudgetFriendlyRoomsPage;
