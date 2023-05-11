export const parseMonthYearDateFromBackend = (date: string) => {
  const month = Number(date.split("-")[0]) - 1;
  const year = Number(date.split("-")[1]);
  const dateFormat = new Date(year, month);
  return dateFormat;
};

export const parseDayMonthYearDateFromBackend = (date: string) => {
  const day = Number(date.split("-")[0]);
  const month = Number(date.split("-")[1]) - 1;
  const year = Number(date.split("-")[2]);
  const dateFormat = new Date(year, month, day);
  return dateFormat;
};
