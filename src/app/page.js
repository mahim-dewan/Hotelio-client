import AmenitiesAccordion from "@/features/home/components/AminitiesAccordion";
import CulinarySection from "@/features/home/components/CulinarySection";
import ExperienceGrid from "@/features/home/components/ExperienceGrid";
import FinalCTA from "@/features/home/components/FinalCTA";
import FloatingBookingBar from "@/features/home/components/FloatingBookingBar";
import HeroSection from "@/features/home/components/HeroSection";
import ReviewSection from "@/features/home/components/ReviewSection";
import RoomShowcase from "@/features/home/components/RoomShowcase";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <ExperienceGrid />

      <FloatingBookingBar />

      <RoomShowcase />

      <CulinarySection />

      <AmenitiesAccordion />

      <FinalCTA />

      <ReviewSection />
    </div>
  );
}
