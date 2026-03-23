import BookingCard from "@/features/rooms/components/BookingCard";
import RoomContent from "@/features/rooms/components/RoomContent";
import RoomsGallery from "@/features/rooms/components/RoomsGallery";
import { Star, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { discountRooms } from "@/data/rooms";

const RoomDetails = async ({ params }) => {
  const { id } = await params;
  const room = discountRooms?.find((room) => room._id == id);

  return (
    <main className="min-h-screen bg-light">
      {/* 1. Header Navigation */}
      <nav className="sticky top-0 z-40 w-full h-20 bg-light border-b border-muted px-6 py-4 flex items-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          <Link
            href="/rooms"
            className="flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
          >
            <ChevronLeft size={20} /> Back to Rooms
          </Link>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Star className="fill-highlight text-highlight" size={16} />
            <span>
              {room?.rating} ({room?.reviewsCount} reviews)
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto pt-24 pb-12 px-4 md:px-6">
        {/* 2. Image Gallery Grid */}
        <RoomsGallery room={room} />

        {/* 3. Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details */}
          <RoomContent room={room} />

          {/* Right Column: Sticky Booking Card */}
          <BookingCard room={room} />
        </div>
      </div>
    </main>
  );
};

export default RoomDetails;
