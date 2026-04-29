"use client";
import { discountRooms } from "@/data/rooms";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RoomShowcase = () => {
  return (
    <section className="pt-20">
      {/* Header  */}
      <div className="px-6 mb-6 flex justify-between items-end max-w-7xl mx-auto">
        <div>
          <h2 className="text-5xl text-primary font-serif">Refined Living</h2>
          <p className="text-primary mt-4">
            Selected sanctuaries designed for comfort.
          </p>
        </div>
        <Link
          href={"/rooms"}
          className="hidden md:block btn-rounded-outline text-primary hover:underline"
        >
          View All Suites
        </Link>
      </div>

      {/* Showcase Rooms Slide */}
      <div className="relative px-4 md:px-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1536: { slidesPerView: 5 },
          }}
          speed={800}
        >
          {discountRooms?.map((room) => (
            <SwiperSlide key={room?._id} className="">
              <Link href={"/"} className="group cursor-pointer">
                <div className="relative h-72 sm:h-80 md:h-104 overflow-hidden rounded-xl">
                  <Image
                    src={room?.image}
                    alt={room?.title}
                    fill
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-sm md:text-base border border-light text-light px-4 py-2 rounded-full font-medium">
                    ${room?.discountPrice || room?.originalPrice}/night
                  </div>
                </div>
                <h3 className="text-base md:text-xl underline font-bold mt-2 px-2 line-clamp-2">
                  {room.title}
                </h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RoomShowcase;
