// Generate visible pagination range
export const getPaginationRange = (current, total, visible = 4) => {
  if (total <= visible) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  let start = current - Math.floor(visible / 2);
  let end = start + visible - 1;

  if (start < 1) {
    start = 1;
    end = visible;
  }

  if (end > total) {
    end = total;
    start = total - visible + 1;
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};
