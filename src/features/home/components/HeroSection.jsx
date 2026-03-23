import { MoveRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-start px-6 md:px-12 lg:px-16 xl:px-32 h-[70vh] md:h-screen bg-[url('/assets/heroImage.png')] bg-no-repeat bg-cover bg-right">
      <p className="btn-rounded bg-primary/40 mt-30 md:mt-44">
        WELCOME TO HOTELIO
      </p>
      <h1 className="text-4xl md:text-6xl text-light font-luxury!">
        Experience Luxury. <br /> Feel at Home
      </h1>
      <p className="text-light">
        Located in the heart of the city, our hotel blends comfort, convenience,
        and warmth for business and leisure travelers alike.
      </p>

      <Link href={"/"} className="group btn-secondary mt-10 flex items-center gap-4">
        <span>Explore Rooms</span>
        <MoveRight className="group-hover:ml-2 transition-all" />
      </Link>
    </div>
  );
};

export default HeroSection;
