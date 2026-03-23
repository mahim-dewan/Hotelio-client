import {
  Users,
  Square,
  Bed,
  ShieldCheck,
  MapPin,
  Clock,
  Ban,
  Info,
  CigaretteOff,
  PawPrint,
} from "lucide-react";

const RoomContent = ({ room }) => {
  return (
    <div className="lg:col-span-2">
      {/* Title, category, specifications */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-xl md:text-3xl font-bold text-dark mb-2">
            {room.title}
          </h1>
          <p className="flex items-center gap-2 text-gray-500">
            {room.specifications.view && (
              <>
                {" "}
                <MapPin size={18} /> {room.specifications.view} View{" "}
              </>
            )}
            • Floor {room.specifications.floor}
          </p>
        </div>
        <div className="text-right">
          <span className="bg-secondary/10 text-nowrap text-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            {room.category}
          </span>
        </div>
      </div>

      {/* Capacity, Room size, Specifications */}
      <div className="flex gap-10 py-8 border-y border-muted mb-8">
        <div className="flex flex-col items-center gap-1">
          <Users className="text-primary" />
          <span className="text-sm font-medium">{room?.capacity} Guests</span>
        </div>

        {room?.specifications?.bedType && (
          <div className="flex flex-col items-center gap-1">
            <Bed className="text-primary" />
            <span className="text-sm font-medium">
              {room.specifications.bedType}
            </span>
          </div>
        )}

        <div className="flex flex-col items-center gap-1">
          <Square className="text-primary" />
          <span className="text-sm font-medium">{room.size} sqft</span>
        </div>

        {room?.specifications?.smoking && (
          <div className="flex flex-col items-center gap-1">
            <CigaretteOff className="text-primary" />
            <span className="text-sm font-medium">
              {room.specifications.smoking}
            </span>
          </div>
        )}
      </div>

      {/* Description */}
      {room?.description && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">About this room</h2>
          <p className="text-gray-600 leading-relaxed text-lg text-justify">
            {room.description}
          </p>
        </section>
      )}

      {/* Amenities Grid */}
      {room?.amenities?.length >= 1 && (
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">What this place offers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {room.amenities.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-700"
              >
                <div className="p-2 bg-white rounded-lg shadow-sm border border-muted">
                  <ShieldCheck size={20} className="text-secondary" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <hr className="border-muted mb-10" />

      {/* House Rules & Policies Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">House Rules & Policies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Check-in/out info */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Clock className="text-primary mt-1" size={20} />
              <div>
                <p className="font-bold text-dark">Check-in / Check-out</p>
                <p className="text-gray-600 text-sm">
                  Check-in: {room.policies.checkIn}
                </p>
                <p className="text-gray-600 text-sm">
                  Check-out: {room.policies.checkOut}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <PawPrint className="text-primary mt-1" size={20} />
              <div>
                <p className="font-bold text-dark">Pet Policy</p>
                <p className="text-gray-600 text-sm">{room.policies.pets}</p>
              </div>
            </div>
          </div>

          {/* Cancellation and Important Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Ban className="text-highlight mt-1" size={20} />
              <div>
                <p className="font-bold text-dark">Cancellation</p>
                <p className="text-highlight text-sm font-medium">
                  {room.policies.cancellation}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Info className="text-secondary mt-1" size={20} />
              <div>
                <p className="font-bold text-dark">Important Information</p>
                <p className="text-gray-600 text-sm italic">
                  {room?.information
                    ? room.information
                    : "Please have a valid government ID ready at the time of check-in."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomContent;
