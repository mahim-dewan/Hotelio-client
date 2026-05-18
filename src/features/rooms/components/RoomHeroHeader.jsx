import React from "react";
import { Spotlight, Sparkles, Flame, Users, Wallet, Gem } from "lucide-react";

// Configuration map for dynamic content and color shifting
const categoryConfig = {
  luxury: {
    badgeText: "Exquisite Living",
    icon: Gem,
    mainTitle: "Our Premium",
    gradientText: "Luxury Suites",
    description:
      "Immerse yourself in spaces designed for the ultimate connoisseur. Every suite offers breathtaking architectural views, hand-selected finishes, and dedicated concierge excellence.",
    gradientClasses: "from-secondary to-highlight",
    accentColor: "text-secondary",
  },
  featured: {
    badgeText: "Spotlight Selections",
    icon: Flame,
    mainTitle: "Handpicked",
    gradientText: "Excellence",
    description:
      "Explore our highest-rated retreats and trending architectural spaces, curated continuously for exceptional comfort, stellar aesthetics, and unforgettable stays.",
    gradientClasses: "from-highlight to-primary",
    accentColor: "text-highlight",
  },
  exclusive: {
    badgeText: "Elite Access Only",
    icon: Sparkles,
    mainTitle: "Private &",
    gradientText: "Exclusive Sanctuaries",
    description:
      "Uncompromised isolation meets architectural brilliance. Discover members-only estates and high-security luxury penthouses reserved for deep comfort.",
    gradientClasses: "from-amber-400 via-amber-200 to-yellow-500",
    accentColor: "text-amber-400",
  },
  "family-friendly": {
    badgeText: "Gather Together",
    icon: Users,
    mainTitle: "Spacious",
    gradientText: "Family Retreats",
    description:
      "Generous multi-room floor plans designed with safety, modern entertainment zones, and fully equipped smart kitchens to make everyone feel right at home.",
    gradientClasses: "from-blue-400 to-emerald-400",
    accentColor: "text-blue-400",
  },
  "budget-friendly": {
    badgeText: "Smart Value",
    icon: Wallet,
    mainTitle: "Affordable",
    gradientText: "Modern Spaces",
    description:
      "Stellar stays that don't compromise on design or location. Beautifully optimized rooms with clean, minimalist aesthetics at an approachable price point.",
    gradientClasses: "from-teal-400 to-indigo-400",
    accentColor: "text-teal-400",
  },
};

const RoomHeroHeader = ({ category }) => {
  // Fallback to 'featured' config if a wrong category string is passed
  const config = categoryConfig[category] || categoryConfig.featured;
  const CategoryIcon = config.icon;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-light/10 bg-light/2 backdrop-blur-md p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
      {/* Subtle line background decoration inside header */}
      <div className="absolute inset-0 bg-linear-to-r from-light/2 via-transparent to-transparent pointer-events-none" />

      <div className="space-y-4 max-w-2xl relative z-10">
        {/* Dynamic Badge */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 text-xs uppercase tracking-widest bg-light/5 border border-light/10 ${config.accentColor} rounded-full`}
        >
          <CategoryIcon className="w-3.5 h-3.5 fill-current" />
          {config.badgeText}
        </div>

        {/* Dynamic Heading */}
        <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-light flex flex-wrap items-center gap-x-3">
          {config.mainTitle}{" "}
          <span
            className={`text-transparent bg-clip-text bg-linear-to-r ${config.gradientClasses} font-medium`}
          >
            {config.gradientText}
          </span>
        </h1>

        {/* Dynamic Description */}
        <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
          {config.description}
        </p>
      </div>

      {/* Dynamic Animated Icon Side Panel */}
      <div
        className={`relative p-4 bg-light/5 border border-light/10 rounded-2xl md:self-center group hidden sm:block ${config.accentColor}`}
      >
        <Spotlight
          className="animate-pulse transition-transform duration-500 group-hover:scale-110 md:rotate-110"
          size={48}
        />
      </div>
    </div>
  );
};

export default RoomHeroHeader;
