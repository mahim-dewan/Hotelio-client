"use client";
import Button from "@/shared/components/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const hotelReviews = [
  {
    _id: 1,
    name: "Sarah J.",
    city: "New York",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300",
    rating: 5,
    quote:
      "Our anniversary was effortless. Hotelio's tech integrated seamlessly with the legendary luxury service.",
  },
  {
    _id: 2,
    name: "Marcus C.",
    city: "Singapore",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300",
    rating: 5,
    quote:
      "The Michelin-starred breakfast was incredible. From the smart room controls to the private beach access, everything was perfect.",
  },
  {
    _id: 3,
    name: "Elena R.",
    city: "Madrid",
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=300",
    rating: 5,
    quote:
      "True sanctuary. The design aesthetic is impeccable, and the concierge handled every detail of our local tour effortlessly.",
  },
];

const ReviewSection = () => {
  return (
    <section className="relative py-16 bg-dark text-light overflow-hidden">
      {/* Gradient Spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 600,
          height: 600,
          background: "linear-gradient(120deg, #615fff66, transparent)",
          filter: "blur(100px)",
        }}
      />

      {/* Section Title */}
      <div className="relative mx-auto px-6">
        <div className="text-center">
          <span className="text-secondary text-xs font-bold uppercase tracking-[0.4em]">
            The Verdict
          </span>
          <h2 className="text-5xl md:text-7xl font-serif mt-2 tracking-tighter">
            Guest Sanctuaries
          </h2>
        </div>

        {/* Slide Swiper  */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
          speed={800}
          allowTouchMove={false}
        >
          {/* 2. The 3D Carousel & Content */}
          {hotelReviews?.map((review) => (
            <SwiperSlide key={review?._id}>
              <div className=" flex flex-col-reverse md:flex-row gap-6 items-center md:items-start justify-center w-full md:max-w-6xl mx-auto mt-10">
                {/* Left Side: Text Content */}
                <div className="space-y-8 flex-2">
                  <div className="space-y-6">
                    {/* Visual Rating Indicator */}
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="text-highlight text-2xl md:text-4xl"
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="text-2xl md:text-3xl font-light font-secondary leading-relaxed italic text-light text-justify">
                      “{review?.quote}”
                    </p>

                    <div className="pt-6 border-t border-slate-800">
                      <p className="font-bold text-lg">{review?.name}</p>
                      <p className="text-light text-sm">{review?.city}</p>
                    </div>
                  </div>
                </div>

                {/* Right Side: The Fancy 3D Image Carousel */}
                <div className="px-12 flex-1 justify-items-end">
                  <div className="w-52 h-64 lg:w-80 lg:h-96">
                    <Image
                      src={review?.img}
                      alt={review?.name}
                      width={1000}
                      height={1000}
                      className="w-full h-full rounded-3xl border-2 border-secondary"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-6 py-6 lg:pt-0 px-6 md:max-w-6xl mx-auto lg:px-0">
        <Button className="p-4 border border-muted rounded-full cursor-pointer prev-btn hover:bg-secondary">
          <ArrowLeft />
        </Button>
        <Button className="p-4 border border-muted rounded-full cursor-pointer next-btn hover:bg-secondary">
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
};

export default ReviewSection;
