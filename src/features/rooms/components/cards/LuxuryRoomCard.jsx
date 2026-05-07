import Image from "next/image";
import Link from "next/link";
import React from "react";

const LuxuryRoomCard = ({ room }) => {
  return (
    <div className="relative min-h-125 bg-primary/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group">
      {/* Image Section */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={room?.image}
          alt={room?.title}
          fill
          unoptimized
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Discount Badge */}
        {room.discountPercentage && (
          <div className="absolute top-5 left-5 bg-highlight px-3 py-1 rounded-sm shadow-lg z-20">
            <p className="text-[10px] font-bold text-light uppercase tracking-tighter">
              {room?.discountPercentage}% Off
            </p>
          </div>
        )}

        {/* Category Glass Tag */}
        <div className="absolute top-5 right-5 bg-dark/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full z-20">
          <p className="text-[10px] uppercase tracking-widest text-light">
            {room.category}
          </p>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-primary via-transparent to-transparent opacity-90" />
      </div>

      {/* Content Section */}
      <div className="p-8">
        {/* Header Row: Title with Tooltip */}
        <div className="relative mb-20 group/title">
          <span className="text-highlight text-[10px] uppercase tracking-[0.3em] font-bold block mb-1">
            {room?.specifications?.view}
          </span>

          <h3 className="text-3xl font-serif text-light leading-none group-hover:text-secondary transition-colors line-clamp-1 cursor-default">
            {room?.title}
          </h3>

          {/* Modern Tooltip */}
          <div className="absolute left-0 -top-5 scale-0 group-hover/title:scale-100 transition-all duration-200 origin-bottom-left z-30">
            <div className="bg-light text-dark text-xs py-2 px-4 rounded shadow-xl whitespace-nowrap font-medium">
              {room?.title}
              <div className="absolute -bottom-1 left-4 w-2 h-2 bg-light rotate-45" />
            </div>
          </div>
        </div>

        {/* Footer Row: Pricing & CTA */}
        <div className="flex items-center justify-between gap-6 absolute bottom-8 left-8 right-8">
          <div className="flex flex-col">
            <span className="text-[10px] text-muted/50 uppercase tracking-tighter mb-1">
              Nightly rate
            </span>

            <div className="flex items-baseline gap-2">
              {room.discountPrice < room.originalPrice ? (
                <>
                  {/* Discount Price First */}
                  <span className="text-2xl font-light text-light">
                    ${room?.discountPrice}
                  </span>
                  {/* Original Price Second (Line-through) */}
                  <span className="text-sm text-muted/40 line-through decoration-highlight/50">
                    ${room?.originalPrice}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-light text-light">
                  ${room?.originalPrice}
                </span>
              )}
              <span className="text-highlight text-xs font-bold">*</span>
            </div>
          </div>

          <Link
            href={`rooms/${room?.slug}`}
            className="flex-1 max-w-40 group/btn relative overflow-hidden bg-linear-to-r from-secondary to-primary p-px rounded-lg transition-transform duration-300 active:scale-95 text-center"
          >
            <div className="bg-dark group-hover/btn:bg-transparent transition-colors duration-300 rounded-[7px] py-3 px-4">
              <span className="relative z-10 text-light text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
                Book Now
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LuxuryRoomCard;
