import { DateRange } from "react-date-range";
import Button from "../../../shared/components/Button";
import ToggleButton from "./datePicker/ToggleButton";
import useDatePicker from "./datePicker/useDatePicker";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DatePicker = ({ setBookData }) => {
  const {
    state,
    isOpen,
    setIsOpen,
    disabledDates,
    popoverDirection,
    handleSelect,
    handleToggle,
    containerRef,
  } = useDatePicker(setBookData);

  return (
    <div className="my-4 relative z-20" ref={containerRef}>
      {/* Toggle Button */}
      <ToggleButton state={state} isOpen={isOpen} onToggle={handleToggle} />

      {/* Popover */}
      {isOpen && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 z-50 bg-white border border-gray-200 p-4 rounded-xl shadow-xl my-2 
            ${popoverDirection === "up" ? "bottom-full" : "top-full"}`}
        >
          <div className="flex flex-col items-center gap-4">
            <DateRange
              ranges={state}
              onChange={handleSelect}
              showDateDisplay={false}
              months={1}
              minDate={new Date()}
              disabledDates={disabledDates}
              rangeColors={["#0c2b4e"]}
              moveRangeOnFirstSelection={false}
            />

            <Button
              onClick={() => setIsOpen(false)}
              className="w-full bg-primary text-white py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Apply Dates
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
