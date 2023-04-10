export const DateDiff = (startDate: string, endDate: string): number => {
  const sdt = new Date(startDate);
  const edt = new Date(endDate);
  const dateDiff = Math.ceil(
    (edt.getTime() - sdt.getTime()) / (1000 * 3600 * 24)
  );

  return dateDiff;
};
