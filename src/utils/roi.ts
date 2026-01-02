export const calculateROI = (
  revenue?: number,
  time?: number
): string => {
  if (
    typeof revenue !== 'number' ||
    typeof time !== 'number' ||
    time <= 0
  ) {
    return '—';
  }

  const roi = revenue / time;
  return Number.isFinite(roi) ? roi.toFixed(2) : '—';
};
