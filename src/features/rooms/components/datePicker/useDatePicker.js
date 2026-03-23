import { useEffect, useMemo, useRef, useState } from "react";
import { eachDayOfInterval, startOfDay, isWithinInterval } from "date-fns";
import { BOOKED_RANGES } from "@/data/booking";
import { findFirst7DayGap } from "@/utils/date";
import toast from "react-hot-toast";

const useDatePicker = (setBookData) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popoverDirection, setPopoverDirection] = useState("down");
  const containerRef = useRef(null);

  // 1. Memoize disabled dates once
  const disabledDates = useMemo(
    () =>
      BOOKED_RANGES.flatMap((range) =>
        eachDayOfInterval({
          start: startOfDay(new Date(range.start)),
          end: startOfDay(new Date(range.end)),
        }),
      ),
    [],
  );

  // 2. Initial state
  const [state, setState] = useState(() => {
    const gapForDefaultSelection = findFirst7DayGap(disabledDates);

    return [
      {
        startDate: gapForDefaultSelection.startDate,
        endDate: gapForDefaultSelection.endDate,
        key: "selection",
      },
    ];
  });

  // 3. Toggle for open and close calendar popover
  const handleToggle = () => {
    if (!isOpen && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      setPopoverDirection(spaceBelow < 450 ? "up" : "down");
    }
    setIsOpen((prev) => !prev);
  };

  // 4. Validation: Check if the selected range contains any disabled dates
  const isRangeBlocked = (startDate, endDate) => {
    return disabledDates.some((disabledDate) =>
      isWithinInterval(disabledDate, { start: startDate, end: endDate }),
    );
  };

  // 5. Handle select booking date range
  const handleSelect = (item) => {
    const { startDate, endDate } = item.selection;

    setState([item.selection]);

    if (startDate && endDate && startDate !== endDate) {
      if (isRangeBlocked(startDate, endDate)) {
        return toast("Not available for your selected date");
      }

      
      setBookData((prev) => ({
        ...prev,
        check_in: startDate,
        check_out: endDate,
      }));
    }
  };

  // 6. Click Outside Listener
  useEffect(() => {
    setBookData((prev) => ({
      ...prev,
      check_in: state[0]?.startDate,
      check_out: state[0]?.endDate,
    }));

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return {
    state,
    isOpen,
    setIsOpen,
    disabledDates,
    popoverDirection,
    handleSelect,
    handleToggle,
    containerRef,
  };
};

export default useDatePicker;
