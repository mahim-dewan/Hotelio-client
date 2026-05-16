import FamilyRoomCard from "@/features/rooms/components/cards/FamilyRoomCard";
import { NoRoomsFound } from "@/features/rooms/components/FamilyRoomsClient";
import RoomHeroHeader from "@/features/rooms/components/RoomHeroHeader";
import TabFilterForFamilyRooms from "@/features/rooms/components/TabFilterForFamilyRooms";
import { apiServer } from "@/lib/apis-server";
import ErrorMessage from "@/shared/components/ErrorMessage";
import Pagination from "@/shared/components/Pagination";
import { Sparkles } from "lucide-react";

const CATEGORY = "family-friendly";

const FamilyFriendlyRoomsPage = async ({ searchParams }) => {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const capacity = params?.capacity || "all";

  const res = await apiServer.getRoomsByCategory(CATEGORY, page, capacity);
  const rooms = res?.data;

  if (!res?.success || !rooms?.length) {
    return (
      <ErrorMessage
        message={res?.message || "No family-friendly rooms found."}
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
                  {res?.count || rooms?.length}
                </span>{" "}
                spacious family retreats
              </p>
            </div>

            <TabFilterForFamilyRooms className={"bg-none text-light"} />
          </div>

          {/* Clean grid alignment mapping */}
          <div className="grid grid-cols-12 gap-4 md:gap-6 animate-fadeIn">
            {rooms?.map((room) => (
              <FamilyRoomCard key={room._id} room={room} />
            ))}

            {rooms?.length < 7 && (
              <div className="col-span-6 md:col-span-3">
                <NoRoomsFound group={capacity} />
              </div>
            )}
          </div>
        </div>

        {/* --- Section 3: Clean Structural Pagination Foothold --- */}
        {res?.totalPages > 1 && (
          <div className="pt-8 border-t border-light/5 flex justify-center">
            <Pagination totalPages={res?.totalPages || 1} />
          </div>
        )}
      </div>
    </section>
  );
};

export default FamilyFriendlyRoomsPage;
