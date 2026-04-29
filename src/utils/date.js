import { addDays, startOfDay } from "date-fns";

export const findFirst7DayGap = (disabledDates) => {
  let startDate = startOfDay(new Date());

  const maxSearchDays = 30;

  for (let i = 0; i < maxSearchDays; i++) {
    const candidateEndDate = addDays(startDate, 7);

    const hasConflict = disabledDates.some(
      (disabled) => disabled >= startDate && disabled <= candidateEndDate,
    );

    if (!hasConflict) {
      return { startDate, endDate: candidateEndDate };
    }

    startDate = addDays(startDate, 1);
  }

  return { startDate, endDate: startDate };
};

export const formatDate = (date) => {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
};
