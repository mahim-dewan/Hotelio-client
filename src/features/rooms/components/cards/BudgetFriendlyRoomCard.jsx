import Image from "next/image";
import Link from "next/link";
import React from "react";

const BudgetFriendlyRoomCard = ({ index, room }) => {
  return (
    <div
      className={`relative group ${index % 2 === 0 ? "md:col-span-7" : "md:col-span-5"}`}
    >
      <div className="relative h-112.5 w-full overflow-hidden rounded-3xl bg-muted/20">
        <Image
          src={room?.image}
          alt={room?.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Price Floating Tag - Highlighted */}
        <div className="absolute top-6 left-6 rounded-xl bg-secondary px-4 py-3 text-light">
          <p className="text-xs uppercase tracking-tighter text-muted/60">
            Starting at
          </p>
          <p className="text-2xl text-center font-bold">
            ${room?.discountPrice}
          </p>
        </div>

        {/* Capacity Highlight Overlay */}
        <div className="absolute bottom-0 right-0 left-0 p-8 bg-linear-to-t from-dark/80 to-transparent text-light">
          <div className="flex justify-between items-center">
            <div className="group/title relative">
              <h3 className="text-2xl font-serif line-clamp-1">
                {room?.title}
              </h3>
              {/* Tooltip */}
              <div className="absolute left-0 -top-8 scale-0 group-hover/title:scale-100 transition-transform bg-secondary text-light text-xs px-2 py-1 rounded whitespace-nowrap z-20 origin-bottom-left">
                {room?.title}
              </div>
            </div>

            {/* Capacity Label */}
            <div className="flex items-center gap-2 border-l border-light/20 pl-4">
              <span className="text-3xl font-bold text-highlight">
                {room?.capacity}
              </span>
              <span className="text-xs uppercase leading-tight text-muted">
                Guests
                <br />
                Max
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Overlay - Clean & Minimalist */}
      <div className="mt-4 flex justify-between items-center px-2">
        <span className="text-xs font-bold text-highlight uppercase tracking-[0.2em]">
          {room?.specifications.view}
        </span>
        <Link
          href={`/rooms/${room?.slug}`}
          className="w-12 h-12 rounded-full border border-dark/10 flex items-center justify-center hover:bg-secondary hover:text-light hover:border-secondary transition-all"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BudgetFriendlyRoomCard;
