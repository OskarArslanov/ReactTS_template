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

export const dateSorter = (a: string, b: string) => {
  if (new Date(a) < new Date(b)) return -1;
  if (new Date(a) > new Date(b)) return 1;
  return 0;
};

export const duplicatesSorter = (data: string[]) => {
  const result: string[] = [];
  data.forEach((item) => {
    if (result.includes(item)) result.push(item);
  });
  return result;
};
