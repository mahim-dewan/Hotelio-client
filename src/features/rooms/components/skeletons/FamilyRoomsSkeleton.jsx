const spanClasses = [
  "col-span-12 row-span-2 md:col-span-5",
  "col-span-6 row-span-1 md:col-span-4",
  "col-span-6 row-span-1 md:col-span-3",
  "col-span-6 row-span-1 md:col-span-4",
  "col-span-6 row-span-1 md:col-span-3",
];

const FamilyRoomCardSkeleton = ({ index }) => {
  const isHero = index === 0;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-muted animate-pulse
      ${spanClasses[index] ?? "col-span-6 md:col-span-3"}
      ${isHero ? "min-h-105" : "min-h-62.5 md:min-h-55"}
    `}
    >
      {/* Image */}
      <div className="absolute inset-0 bg-muted" />

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-dark/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-3 flex flex-col justify-end z-10">
        {/* Badge */}
        <div className="mb-auto">
          <div className="w-20 h-6 rounded-full bg-light/70 border border-muted" />
        </div>

        {/* Bottom */}
        <div className="space-y-3">
          {/* Title */}
          <div
            className={`rounded bg-light/80
            ${isHero ? "w-52 h-8" : "w-36 h-6"}
          `}
          />

          {/* Description */}
          {isHero && (
            <div className="space-y-2">
              <div className="w-full h-3 rounded bg-light/70" />
              <div className="w-4/5 h-3 rounded bg-light/70" />
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between gap-2 pt-3 border-t border-light/40">
            {/* Meta */}
            <div className="flex gap-2">
              <div className="w-8 h-3 lg:w-14 lg:h-4 rounded bg-light/70" />
              <div className="w-10 h-3 lg:w-16 lg:h-4 rounded bg-light/70" />
            </div>

            {/* Price */}
            <div className="space-y-1">
              <div className="w-16 h-5 rounded bg-light/80" />
              <div className="w-10 h-3 rounded bg-light/70 ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FamilyRoomsSkeleton() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Header Skeleton */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between mb-8 md:mb-10">
        <div className="space-y-3">
          <div className="w-28 h-3 rounded bg-muted animate-pulse" />

          <div className="w-80 h-8 rounded bg-muted animate-pulse" />
        </div>

        {/* Filter Skeleton */}
        <div className="flex gap-2 flex-wrap">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-20 h-9 rounded-full bg-muted animate-pulse"
            />
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-12 gap-4">
        {[...Array(9)].map((_, i) => (
          <FamilyRoomCardSkeleton key={i} index={i} />
        ))}
      </div>
    </section>
  );
}
