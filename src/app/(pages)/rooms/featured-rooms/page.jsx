import FeaturedRoomCard from "@/features/rooms/components/cards/FeaturedRoomCard";
import RoomHeroHeader from "@/features/rooms/components/RoomHeroHeader";
import { apiServer } from "@/lib/apis-server";
import ErrorMessage from "@/shared/components/ErrorMessage";
import Pagination from "@/shared/components/Pagination";
import { Sparkles } from "lucide-react";

const CATEGORY = "featured"

const FeaturedRoomsPage = async ({ searchParams }) => {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const res = await apiServer.getRoomsByCategory(CATEGORY, page);
  const rooms = res?.data;

  if (!res?.success || !rooms?.length) {
    return (
      <ErrorMessage
        message={res?.message || "No featured rooms found."}
        className="min-h-screen"
      />
    );
  }

  return (
    <section className="relative min-h-screen bg-dark text-light px-4 sm:px-8 md:px-12 py-16 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* --- Section 1: Reusable Dynamic Hero Header --- */}
        <RoomHeroHeader category={CATEGORY} />
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-light/5 pb-4">
            <Sparkles className="w-4 h-4 text-highlight" />
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-light">
              Discovering{" "}
              <span className="text-light font-medium">{res?.count}</span>{" "}
              premium properties
            </p>
          </div>

          {/* Asymmetric grid setup: first item spans full width on medium screens to anchor layout depth */}
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
            {rooms?.map((room) => (
              <FeaturedRoomCard key={room?._id} room={room} />
            ))}
          </div>
        </div>
        {/* --- Clean Structural Pagination --- */}
        <div className="pt-8 border-t border-light/5 flex justify-center">
          <Pagination totalPages={res?.totalPages || 1} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoomsPage;
