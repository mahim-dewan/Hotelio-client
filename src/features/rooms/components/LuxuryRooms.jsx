import { apiServer } from "@/lib/apis-server";
import LuxuryRoomCard from "./cards/LuxuryRoomCard";
import Link from "next/link";
import ErrorMessage from "@/shared/components/ErrorMessage";

const LuxuryRooms = async () => {
  const res = await apiServer.getRoomsByCategory("luxury");
  const rooms = res?.data?.slice(0, 6);

  if (!res?.success || !rooms.length) {
    return <ErrorMessage message={res?.message} />;
  }

  return (
    <section className="relative min-h-screen py-24 px-6 overflow-hidden bg-dark">
      {/* Decorative Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-highlight/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-highlight" />
            <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-highlight">
              Elite Collection
            </span>
            <span className="h-px w-10 bg-highlight" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-light leading-tight">
            Luxury{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-highlight">
              Redefined
            </span>
          </h2>
        </div>

        {/* Room Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {rooms?.map((room) => (
            <LuxuryRoomCard key={room._id} room={room} />
          ))}
        </div>
      </div>

      <div className="mx-auto w-fit my-10">
        <Link
          href="/rooms"
          className="btn-rounded-outline text-highlight hover:bg-highlight border-highlight hover:text-light"
        >
          See All →
        </Link>
      </div>
    </section>
  );
};

export default LuxuryRooms;
