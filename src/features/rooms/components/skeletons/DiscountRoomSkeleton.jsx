const DiscountRoomSkeleton = () => {
  return (
    <div className="py-10">
      <div className="h-10 w-64 bg-gray-200 rounded mb-8 ml-4 md:ml-10 animate-pulse" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-12">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-110 bg-gray-200 rounded-2xl animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};

export default DiscountRoomSkeleton;
