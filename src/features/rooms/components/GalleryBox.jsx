import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";

// ✅ Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GalleryBox = ({ images, setIsOpen }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative w-[95%] md:w-[70%] h-[60vh] md:h-[80vh] overflow-hidden">
        {/* Close */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-50 bg-white/80 p-2 rounded-full shadow hover:bg-highlight hover:text-white transition"
        >
          <X size={24} />
        </button>

        <div className="relative h-full">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            pagination={{
              clickable: true,
            }}
            className="h-full"
          >
            {images?.map((image, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center">
                <Image
                  src={image}
                  alt="Room Image"
                  width={1000}
                  height={800}
                  className="object-contain h-full w-full text-light"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Always visible arrows (removed hidden md:block) */}
          <button className="prev-btn flex items-center justify-center absolute left-3 top-1/2 -translate-y-1/2 z-40 bg-white/80 p-2 md:p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition">
            <ChevronLeft size={22} />
          </button>

          <button className="next-btn flex items-center justify-center absolute right-3 top-1/2 -translate-y-1/2 z-40 bg-white/80 p-2 md:p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryBox;
