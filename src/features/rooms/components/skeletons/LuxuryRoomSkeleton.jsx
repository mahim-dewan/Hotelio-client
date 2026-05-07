const LuxuryRoomSkeleton = () => {
  return (
    <section className="relative min-h-screen py-24 px-6 overflow-hidden bg-dark">
      {/* Main Background Glows  */}

      <div className="absolute top-[-5%] left-[-5%] w-125 h-125 bg-secondary/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-5%] right-[-5%] w-125 h-125 bg-highlight/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Skeleton */}
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-highlight/20" />
            <div className="h-3 w-32 bg-white/10 rounded animate-pulse" />
            <span className="h-px w-10 bg-highlight/20" />
          </div>
          <div className="h-12 md:h-16 w-64 md:w-96 bg-linear-to-r from-white/5 via-white/10 to-white/5 rounded animate-pulse" />
        </div>

        {/* Room Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="relative min-h-125 bg-primary/20 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group shadow-2xl"
            >
              {/* Image Skeleton with Shimmer Effect */}
              <div className="relative h-80 overflow-hidden bg-white/5">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />

                {/* Badge Placeholders */}
                <div className="absolute top-5 left-5 w-16 h-6 bg-white/10 rounded-sm" />
                <div className="absolute top-5 right-5 w-20 h-6 bg-white/10 rounded-full" />
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="relative mb-20">
                  {/* View/Tagline */}
                  <div className="h-3 w-24 bg-highlight/20 rounded mb-3 animate-pulse" />
                  {/* Title */}
                  <div className="h-8 w-3/4 bg-white/10 rounded animate-pulse" />
                </div>

                {/* Footer Row: Pricing & Button */}
                <div className="flex items-center justify-between gap-6 absolute bottom-8 left-8 right-8">
                  <div className="flex flex-col space-y-2">
                    <div className="h-2 w-16 bg-white/5 rounded" />
                    <div className="h-6 w-20 bg-linear-to-r from-white/10 to-transparent rounded" />
                  </div>

                  {/* Book Now Button Placeholder with Gradient Glow */}
                  <div className="flex-1 max-w-40 h-12 bg-white/20 rounded-lg animate-pulse" />
                </div>
              </div>

              {/* Subtle Inner Glow following the card shape */}
              <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryRoomSkeleton;
