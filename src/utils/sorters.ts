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
