"use client";
import Button from "@/shared/components/Button";
import { useEffect, useState } from "react";

const FloatingBookingBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isPastThreshold = window.scrollY > 400;

      // Get the footer element
      const footer = document.querySelector("footer");
      let isFooterVisible = false;

      if (footer) {
        const rect = footer.getBoundingClientRect();
        isFooterVisible = rect.top < window.innerHeight;
      }

      setIsVisible(isPastThreshold && !isFooterVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 lg:bottom-2 left-1/2 -translate-x-1/2 z-30 transition-all duration-500 transform border-4 border-primary rounded-full ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="bg-light text-dark border border-muted shadow-xl rounded-full p-1 lg:p-2 flex items-center gap-4">
        {/* CheckIn & CheckOut  */}
        <div className="hidden lg:flex gap-4 px-2 border-r border-light">
          <div>
            <p className="text-[10px] uppercase font-bold text-dark/60">
              Check In
            </p>
            <p className="text-sm font-medium">Oct 12, 2026</p>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-dark/60">
              Check Out
            </p>
            <p className="text-sm font-medium">Oct 15, 2026</p>
          </div>
        </div>

        {/* Guest  */}
        <div className="px-4 border-r border-dark/60 hidden lg:block">
          <p className="text-[10px] uppercase font-bold text-dark/60">Guests</p>
          <p className="text-sm font-medium">2 Adults</p>
        </div>

        {/* Reserve Button  */}
        <Button className="bg-primary text-light px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium">
          Reserve Now
        </Button>
      </div>
    </div>
  );
};

export default FloatingBookingBar;
