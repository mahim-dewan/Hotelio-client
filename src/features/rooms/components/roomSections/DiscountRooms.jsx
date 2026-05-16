"use client";
import DiscountRoomCard from "@/features/rooms/components/cards/DiscountRoomCard";
import { ChevronLeft, ChevronRight, HandCoins } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { apiClient } from "@/lib/apis-client";
import DiscountRoomSkeleton from "../skeletons/DiscountRoomSkeleton";
import ErrorMessage from "@/shared/components/ErrorMessage";
import Link from "next/link";

const DiscountRooms = () => {
  const [res, setRes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const rooms = res?.data;

  useEffect(() => {
    // API call for exclusive rooms
    const fetchRooms = async () => {
      setIsLoading(true);
      const res = await apiClient.getRoomsByCategory("exclusive");
      setRes(res);
      setIsLoading(false);
    };

    fetchRooms();
  }, []);

  if (isLoading) return <DiscountRoomSkeleton />;

  if (!res?.success || !rooms?.length)
    return <ErrorMessage message={res?.message} />;

  return (
    <div className="py-10">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8 mx-4 md:mx-10">
        <h2 className="text-2xl md:text-3xl font-bold text-primary  flex gap-2 items-center">
          <span>Exclusive Offers</span>
          <HandCoins className="text-highlight" size={40} />
        </h2>
        <Link
          href="/rooms/exclusive-rooms"
          className="text-dark hover:text-highlight underline font-medium text-xl ml-auto"
        >
          See More →
        </Link>
      </div>

      <div className="relative px-4 md:px-12 bg-light">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1536: { slidesPerView: 4 },
          }}
          speed={800}
        >
          {rooms.map((room) => (
            <SwiperSlide key={room._id}>
              <DiscountRoomCard room={room} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="prev-btn hidden md:block absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-xl text-primary hover:bg-primary hover:text-white transition-all">
          <ChevronLeft size={28} />
        </button>
        <button className="next-btn hidden md:block absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-xl text-primary hover:bg-primary hover:text-white transition-all">
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default DiscountRooms;
