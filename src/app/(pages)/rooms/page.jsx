import DiscountRooms from "@/features/rooms/components/DiscountRooms";
import FamilyRoomsSection from "@/features/rooms/components/FamilyRoomsSection";
import FeaturedRooms from "@/features/rooms/components/FeaturedRooms";
import LuxuryRooms from "@/features/rooms/components/LuxuryRooms";
import FamilyRoomsSkeleton from "@/features/rooms/components/skeletons/FamilyRoomsSkeleton";
import FeaturedRoomsSkeleton from "@/features/rooms/components/skeletons/FeaturedRoomsSkeleton";
import LuxuryRoomSkeleton from "@/features/rooms/components/skeletons/LuxuryRoomSkeleton";
import { Suspense } from "react";

const Rooms = () => {
  return (
    <section className="min-h-screen">
      <div className="min-h-150">
        <DiscountRooms />
      </div>

      <Suspense fallback={<FeaturedRoomsSkeleton />}>
        <FeaturedRooms />
      </Suspense>

      <Suspense fallback={<LuxuryRoomSkeleton />}>
        <LuxuryRooms />
      </Suspense>

      <Suspense fallback={<FamilyRoomsSkeleton />}>
        <FamilyRoomsSection />
      </Suspense>
    </section>
  );
};

export default Rooms;
