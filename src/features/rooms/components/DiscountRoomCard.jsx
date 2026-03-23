import React from "react";
import { Bed, Users, Sparkles, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DiscountRoomCard = ({ room }) => {
  return (
    <div className="group block relative h-112.5 w-full overflow-hidden rounded-2xl bg-dark shadow-2xl">
      {/* Background Image with Overlay */}
      <Image
        src={room.image}
        alt={room.title}
        width={1000}
        height={800}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-black/20 opacity-80" />

      {/* Floating Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-highlight text-white px-4 py-1.5 rounded-full shadow-lg">
        <Sparkles size={16} className="animate-pulse" />
        <span className="text-sm font-bold tracking-tighter">
          {room.discountPercentage}% LIMITED OFFER
        </span>
      </div>

      {/* Content Container */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-10 transition-transform duration-300 group-hover:-translate-y-2">
        <p className="text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-2">
          {room.category}
        </p>
        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
          {room.title}
        </h3>

        {/* Info Row */}
        <div className="flex items-center gap-4 text-white/80 text-sm mb-6">
          <span className="flex items-center gap-1.5 backdrop-blur-md bg-white/10 px-3 py-1 rounded-md border border-white/20">
            <Users size={14} /> {room.capacity} Guests
          </span>
          <span className="flex items-center gap-1.5 backdrop-blur-md bg-white/10 px-3 py-1 rounded-md border border-white/20">
            <Bed size={14} /> {room.size} sqft
          </span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-end justify-between border-t border-white/20 pt-4">
          <div>
            <span className="text-white/50 line-through text-sm">
              ${room.originalPrice}
            </span>
            <p className="text-3xl font-black text-white leading-none">
              ${room.discountPrice}
              <span className="text-xs font-normal text-white/60 ml-1">
                / night
              </span>
            </p>
          </div>
          <Link
            href={`/rooms/${room?._id}`}
            className="bg-white cursor-pointer text-primary p-3 rounded-xl hover:bg-highlight hover:text-white transition-all duration-300 transform active:scale-95"
          >
            <ChevronRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscountRoomCard;
