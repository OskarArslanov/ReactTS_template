import { format } from "date-fns";
import ru from "date-fns/locale/ru";

export const alphabetSorter = (a: string, b: string) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

export const numberSorter = (a: number, b: number) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

export const dateSorter = (a: string, b: string, pattern: string) => {
  const dateA = format(new Date(a), pattern, { locale: ru });
  const dateB = format(new Date(a), pattern, { locale: ru });
  if (dateA < dateB) return -1;
  if (dateA > dateB) return 1;
  return 0;
};
