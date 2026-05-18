"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { TAB_FILTERS } from "@/constants/rooms";
import Button from "@/shared/components/Button";

export default function TabFilterForFamilyRooms({
  activeGroup,
  onFilterChange,
  className,
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Pick up the current active key depending on configuration layout
  const currentActive = activeGroup || searchParams.get("capacity") || "all";

  const handleTabClick = (value) => {
    // Scenario A: Client component handler (Direct API call on Home Section)
    if (onFilterChange) {
      onFilterChange(value);
      return;
    }

    // Scenario B: Pure Server Page URL routing
    const params = new URLSearchParams(searchParams);
    if (value === "all") {
      params.delete("capacity");
    } else {
      params.set("capacity", value);
    }
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div role="tablist" className="flex gap-2 flex-wrap font-secondary">
      {TAB_FILTERS.map((tab) => (
        <Button
          key={tab.value}
          onClick={() => handleTabClick(tab.value)}
          className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200
            ${
              currentActive === tab.value
                ? "bg-primary border-primary text-light shadow-sm"
                : `${className} border-muted hover:border-seconary`
            }`}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
}
