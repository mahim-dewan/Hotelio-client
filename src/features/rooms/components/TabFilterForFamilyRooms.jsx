import { TAB_FILTERS } from "@/constants/rooms";
import Button from "@/shared/components/Button";

const TabFilterForFamilyRooms = ({
  activeGroup,
  setActiveGroup,
}) => {
  return (
    <div role="tablist" className="flex gap-2 flex-wrap font-secondary">
      {TAB_FILTERS.map((tab) => (
        <Button
          key={tab.value}
          onClick={() => setActiveGroup(tab.value)}
          className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200
            ${
              activeGroup === tab.value
                ? "bg-primary border-primary text-white shadow-sm"
                : "bg-white border-muted text-primary hover:border-secondary"
            }`}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

export default TabFilterForFamilyRooms;