"use client";
import DiscountRoomCard from "@/features/rooms/components/DiscountRoomCard";
import { discountRooms } from "@/data/rooms";
import { ChevronLeft, ChevronRight, HandCoins } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DiscountRooms = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-primary mb-8 ml-4 md:ml-10 flex gap-2 items-center">
        <span>Exclusive Offers</span>
        <HandCoins className="text-highlight" size={40} />
      </h2>

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
          {discountRooms.map((room) => (
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
