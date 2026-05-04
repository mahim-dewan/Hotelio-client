import DiscountRooms from "@/features/rooms/components/DiscountRooms";
import FeaturedRooms from "@/features/rooms/components/FeaturedRooms";
import FeaturedRoomsSkeleton from "@/features/rooms/components/skeletons/FeaturedRoomsSkeleton";
import { Suspense } from "react";

const Rooms = () => {
  return (
    <section className="min-h-screen">
      <div className="min-h-110">
        <DiscountRooms />
      </div>

      <Suspense fallback={<FeaturedRoomsSkeleton />}>
        <FeaturedRooms />
      </Suspense>
    </section>
  );
};

export default Rooms;
