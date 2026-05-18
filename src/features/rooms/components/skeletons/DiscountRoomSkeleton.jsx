const DiscountRoomSkeleton = () => {
  return (
    <div className="py-10">
      {/* Section Title */}
      <div className="h-10 w-64 bg-muted/50 rounded mb-8 ml-4 md:ml-10 animate-pulse" />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 px-4 md:px-12">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`h-112.5 bg-muted/50 flex flex-col items-start justify-between rounded-2xl animate-pulse
              ${i >= 1 ? "hidden sm:flex" : "flex"} 
              ${i >= 2 ? "sm:hidden lg:flex" : ""} 
              ${i >= 3 ? "lg:hidden 2xl:flex" : ""}
            `}
          >
            {/* Floating Badge placeholder */}
            <div className="h-8 w-1/2 m-4 bg-dark/20 rounded-full" />

            <div className="w-full mb-2">
              {/* Category and Title */}
              <div className="h-3 w-20 mx-4 bg-dark/20 rounded-md" />
              <div className="h-8 w-5/6 mx-4 my-2 bg-dark/20 rounded-md" />

              {/* Info Row (Guests, Size) */}
              <div className="flex gap-2 mx-4 border-b border-dark/20 pb-6">
                <div className="h-8 w-24 bg-dark/20 rounded-md" />
                <div className="h-8 w-24 bg-dark/20 rounded-md" />
              </div>

              {/* Price and CTA Row */}
              <div className="flex items-center justify-between py-6">
                <div className="flex flex-col gap-2 mx-4">
                  <div className="h-3 w-16 bg-dark/20 rounded-md" />
                  <div className="h-8 w-24 bg-dark/20 rounded-md" />
                </div>
                <div className="h-12 w-12 mx-4 bg-dark/20 rounded-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountRoomSkeleton;
