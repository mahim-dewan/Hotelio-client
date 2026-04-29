import Image from "next/image";
import seaFood from "../../../../public/assets/home/home-sea_food.png";
import Link from "next/link";

const CulinarySection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="overflow-hidden  aspect-4/5">
            <Image
              src={seaFood}
              alt="Sea Food"
              fill
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
          {/* Floating badge for texture */}
          <div className="absolute -bottom-10 -right-10 bg-light p-8 rounded-xl shadow-xl hidden lg:block">
            <p className="text-sm font-serif italic text-slate-500">
              &quot;The best sea fish in the city.&quot;
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] mt-2 font-bold text-slate-400">
              — Food & Wine Mag
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold">
            Epicurean Journey
          </span>
          <h2 className="text-5xl font-serif text-primary leading-tight">
            A Symphony of <br /> Local Flavors
          </h2>
          <p className="text-primary leading-relaxed text-lg">
            Our Michelin-starred kitchen brings the essence of the coast to your
            plate. From sunrise breakfasts to private candlelit dinners on the
            terrace, every meal is a curated masterpiece.
          </p>
          <div className="pt-4 flex gap-8 justify-center md:justify-start">
            <div className="text-center">
              <p className="text-2xl font-serif">03</p>
              <p className="text-[10px] uppercase text-dark/60">
                Signature Bars
              </p>
            </div>
            <div className="w-px h-12 bg-dark/60"></div>
            <div className="text-center">
              <p className="text-2xl font-serif">24h</p>
              <p className="text-[10px] uppercase text-dark/60">
                In-Room Dining
              </p>
            </div>
          </div>
          <Link
            href={"/"}
            className="block w-fit hover:underline btn-rounded mx-auto"
          >
            Explore the Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CulinarySection;
