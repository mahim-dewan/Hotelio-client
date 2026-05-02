const Loading = () => {
  return (
    <main className="min-h-screen bg-light animate-pulse">
      {/* 1. Header Navigation Skeleton */}
      <nav className="sticky top-0 z-40 w-full h-20 bg-light border-b border-muted px-6 py-4 flex items-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          {/* Back button skeleton */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gray-300 rounded" />
            <div className="w-28 h-4 bg-gray-300 rounded" />
          </div>

          {/* Rating skeleton */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded-full" />
            <div className="w-32 h-4 bg-gray-300 rounded" />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto pt-24 pb-12 px-4 md:px-6">
        {/* 2. Image Gallery Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="md:col-span-2 row-span-2 h-80 bg-gray-300 rounded-xl" />
          <div className="h-40 bg-gray-300 rounded-xl" />
          <div className="h-40 bg-gray-300 rounded-xl" />
          <div className="h-40 bg-gray-300 rounded-xl" />
        </div>

        {/* 3. Content Layout Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="h-8 w-2/3 bg-gray-300 rounded" />
            <div className="h-4 w-full bg-gray-300 rounded" />
            <div className="h-4 w-5/6 bg-gray-300 rounded" />
            <div className="h-4 w-4/6 bg-gray-300 rounded" />

            <div className="mt-6 space-y-3">
              <div className="h-5 w-1/3 bg-gray-300 rounded" />
              <div className="h-4 w-full bg-gray-300 rounded" />
              <div className="h-4 w-11/12 bg-gray-300 rounded" />
              <div className="h-4 w-10/12 bg-gray-300 rounded" />
            </div>
          </div>

          {/* Right Column (Booking Card) */}
          <div className="h-105 bg-gray-300 rounded-xl sticky top-24" />
        </div>
      </div>
    </main>
  );
};

export default Loading;
