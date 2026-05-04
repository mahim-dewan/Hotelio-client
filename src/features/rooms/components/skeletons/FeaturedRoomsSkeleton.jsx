const FeaturedRoomsSkeleton = () => {
  return (
    <div className="py-10">
      <div className="h-10 w-64 bg-gray-200 rounded mb-8 ml-4 md:ml-10 animate-pulse" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:px-12">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-64 rounded-2xl bg-gray-200 animate-pulse" />
        ))}
      </div>
    </div>
  );
};

export default FeaturedRoomsSkeleton;
