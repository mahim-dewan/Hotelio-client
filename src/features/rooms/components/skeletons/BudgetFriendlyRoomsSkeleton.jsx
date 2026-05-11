const BudgetFriendlyRoomSkeleton = () => {
  return (
    <section className="py-24 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-4">
            {/* Title - Darker for clarity */}
            <div className="h-12 w-64 bg-dark/10 rounded-lg animate-pulse" />
            {/* Subtitle */}
            <div className="h-3 w-48 bg-dark/5 rounded-full animate-pulse" />
          </div>
          <div className="h-px flex-1 bg-dark/5 mx-8 hidden md:block"></div>
        </div>

        {/* Asymmetrical Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`relative group ${
                index % 2 === 0 ? "md:col-span-7" : "md:col-span-5"
              } ${index >= 1 ? "hidden md:block" : "block"}`}
            >
              {/* Main Card Image Area - Base color */}
              <div className="relative h-112.5 w-full overflow-hidden rounded-3xl bg-dark/5 animate-pulse">
                {/* Floating Price Tag Placeholder - Darker contrast */}
                <div className="absolute top-6 left-6 rounded-xl bg-dark/10 w-24 h-16" />

                {/* Bottom Content Overlay Placeholder - Using light/opacity on top of dark overlay */}
                <div className="absolute bottom-0 right-0 left-0 p-8 flex justify-between items-end bg-linear-to-t from-dark/20 to-transparent">
                  <div className="space-y-3 w-1/2">
                    {/* Title Block */}
                    <div className="h-8 bg-dark/10 rounded-md w-full" />
                  </div>

                  {/* Capacity Label Placeholder */}
                  <div className="flex items-center gap-2 border-l border-light/20 pl-4">
                    <div className="h-10 w-8 bg-dark/10 rounded-md" />
                    <div className="space-y-1">
                      <div className="h-2 w-8 bg-dark/10 rounded" />
                      <div className="h-2 w-8 bg-dark/10 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Row Placeholder */}
              <div className="mt-4 flex justify-between items-center px-2">
                {/* View Specification */}
                <div className="h-3 w-32 bg-dark/10 rounded-full animate-pulse" />
                {/* Round Arrow Button */}
                <div className="w-12 h-12 rounded-full bg-dark/10 border border-dark/5 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* See More Button Placeholder */}
        <div className="mx-auto w-fit my-10">
          <div className="h-12 w-36 bg-dark/10 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default BudgetFriendlyRoomSkeleton;
