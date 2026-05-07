import React from "react";
import { Sparkles, Users, Bed, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedRoomCard = ({ room }) => {
  return (
    <div className="group relative flex flex-col sm:flex-row w-full  mx-auto overflow-hidden rounded-2xl bg-dark border-2 border-light/10 shadow-xl transition-all duration-500 hover:border-highlight">
      {/* Image Section - Reduced width to 35% */}
      <div className="relative w-full sm:w-[35%] h-52 sm:h-auto overflow-hidden">
        <Image
          src={room.image}
          alt={room.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-1000"
        />
        {/* Smaller Featured Tag */}
        <div className="absolute top-4 left-0 z-20 bg-highlight text-light px-3 py-1 rounded-r-full shadow-lg flex items-center gap-1.5">
          <Sparkles size={14} className="animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-tighter">
            Featured
          </span>
        </div>
      </div>

      {/* Content Section - Compact padding p-5 */}
      <div className="relative flex-1 p-5 md:p-6 flex flex-col justify-between bg-linear-to-br from-dark to-primary">
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-highlight font-bold text-[10px] uppercase tracking-[0.2em]">
              {room.category}
            </span>
            <div className="text-right">
              <span className="block text-light/40 text-base line-through leading-none">
                ${room.originalPrice}
              </span>
              <span className="text-2xl font-black text-light leading-tight">
                ${room.discountPrice}
              </span>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-light mb-3 leading-tight line-clamp-1">
            {room.title}
          </h3>

          {/* Amenities - Grid made smaller */}
          <div className="grid grid-cols-2 gap-2 mb-4 border-t border-light/10 pt-4">
            <div className="flex items-center gap-2 text-light/70">
              <Users size={14} className="text-highlight" />
              <span className="text-xs">{room.capacity} Guests</span>
            </div>
            <div className="flex items-center gap-2 text-light/70">
              <Bed size={14} className="text-highlight" />
              <span className="text-xs">{room.size} sqft</span>
            </div>
          </div>
        </div>

        {/* Action Row - Smaller button and rating */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1.5 backdrop-blur-sm bg-light/5 px-2 py-1 rounded-sm border border-white/10">
            <Star size={14} className="text-highlight fill-highlight" />
            <span className="text-[11px] font-bold text-light">
              4.9{" "}
              <span className="text-light/50 font-medium ml-0.5">(120+)</span>
            </span>
          </div>

          <Link
            href={`/rooms/${room?.slug}`}
            className="group/btn flex items-center gap-1.5 bg-light text-primary px-5 py-2.5 rounded-md font-bold text-sm hover:bg-highlight hover:text-light transition-all duration-300 shadow-lg active:scale-95"
          >
            Details
            <ChevronRight
              size={16}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRoomCard;
