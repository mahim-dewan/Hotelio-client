import Image from "next/image";
import pool from "../../../../public/assets/home/home-pool.png";
import dining from "../../../../public/assets/home/home-fine_dining.png";
import weather from "../../../../public/assets/home/home-weather.png";
import concierge from "../../../../public/assets/home/home-concierge.png";

const ExperienceGrid = () => {
  return (
    <section className="pt-20 px-4 bg-light">
      <div className="w-full mx-auto">
        <h2 className="text-2xl md:text-4xl mb-8 text-primary uppercase">
          Beyond Accommodation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-240 md:h-150">
          {/* Swimming Box */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl md:rounded-2xl group">
            <Image
              src={pool}
              width={1000}
              height={800}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Pool"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-light">
              <span className="px-3 py-1 bg-light/20 backdrop-blur-md rounded-full text-xs uppercase tracking-widest">
                Leisure
              </span>
              <h3 className="text-3xl font-medium mt-2">Infinity Edge Pool</h3>
            </div>
          </div>

          {/* Weather Widget Box */}
          <div className="md:col-span-1 bg-blue-500 rounded-xl md:rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-blue-100 uppercase text-xs tracking-widest">
                Local Weather
              </p>
              <h3 className="text-5xl font-light mt-2">28°C</h3>
            </div>

            <div>
              <Image
                src={weather}
                alt="Weather Icon"
                width={1000}
                height={8000}
                className="-my-12 w-32"
              />
            </div>

            <div className="relative z-10">
              <p className="font-medium">Cox&apos;s Bazar, Bangladesh</p>
              <p className="text-blue-100 text-sm">Perfect for a dip</p>
            </div>

            {/* Circle Effect */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
          </div>

          {/* Concierge Box */}
          <div className="group relative flex flex-col justify-end overflow-hidden rounded-xl md:rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl md:col-span-1">
            {/* Background Image */}
            <Image
              src={concierge}
              alt="Smart concierge service"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={false}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/40 to-transparent" />

            {/* Content */}
            <div className="relative z-10 p-6 md:p-8 text-white">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-6xl rounded-full bg-gold-100">
                ✨
              </div>

              <h3 className="text-lg md:text-xl font-semibold">
                24/7 Smart Concierge
              </h3>

              <p className="mt-2 text-sm text-white/80">
                Personalized service at your fingertips.
              </p>
            </div>
          </div>

          {/* Fine Dining Box */}
          <div className="md:col-span-2 relative overflow-hidden rounded-xl md:rounded-2xl group">
            <Image
              src={dining}
              alt="Dining"
              className="absolute inset-0 h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/20 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl text-light font-medium border-b-2 border-light transition-all pb-1">
                Fine Dining
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceGrid;
