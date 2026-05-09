import Image from "next/image";
import Link from "next/link";

const spanClasses = [
  "col-span-12 row-span-2 md:col-span-5",
  "col-span-6 row-span-1 md:col-span-4",
  "col-span-6 row-span-1 md:col-span-3",
  "col-span-6 row-span-1 md:col-span-4",
  "col-span-6 row-span-1 md:col-span-3",
];

export default function FamilyRoomCard({ room, index }) {
  const isHero = index === 0;

  return (
    <Link
      href={`/rooms/${room.slug}`}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer flex flex-col
    ${spanClasses[index] ?? "col-span-6 md:col-span-3"}
    ${isHero ? "min-h-105" : "min-h-62.5 md:min-h-55"}
    transition-all duration-300 hover:-translate-y-1 shadow-sm
  `}
    >
      <Image
        src={room?.image}
        alt={room?.title}
        fill
        unoptimized
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content Container */}
      <div className="absolute inset-0 p-2 md:p-3 flex flex-col justify-end z-10">
        {/* Top Section: Badge */}
        <div className="mb-auto -mt-1 md:-mt-2">
          <span
            className={`inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full
          ${
            room?.isExclusive
              ? "bg-highlight text-light"
              : "bg-light/10 backdrop-blur-md text-light border border-light/20"
          }
        `}
          >
            {room?.isExclusive ? "Exclusive" : room?.category}
          </span>
        </div>

        {/* Bottom Section: Info */}
        <div className="space-y-2">
          <h3
            className={`font-luxury text-light leading-tight line-clamp-1
          ${isHero ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}
        `}
          >
            {room?.title}
          </h3>

          {isHero && (
            <p className="text-light/80 text-sm leading-relaxed line-clamp-2 max-w-[90%]">
              {room?.description}
            </p>
          )}

          {/* Metadata & Price Row */}
          <div className="flex items-center justify-between gap-2 pt-2 border-t border-light/10">
            <div className="flex items-center gap-2 overflow-hidden">
              <MetaChip icon="👥" label={room?.capacity} />
              <MetaChip icon="📐" label={`${room?.size}ft²`} />
            </div>

            <div className="text-right shrink-0">
              <span className="block text-light font-bold text-base md:text-lg leading-none -mb-2">
                ${room?.discountPrice || room?.originalPrice}
              </span>
              <span className="text-light/60 text-[10px] uppercase tracking-tighter">
                per night
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Action */}
      <div className="absolute top-4 right-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <div className="bg-light text-primary text-[10px] font-bold px-3 py-1.5 rounded-full shadow-xl">
          VIEW DETAILS
        </div>
      </div>
    </Link>
  );
}

const MetaChip = ({ icon, label }) => (
  <span className="flex items-center gap-1 text-light text-[11px] font-luxury">
    <span className="text-xs">{icon}</span> {label}
  </span>
);
