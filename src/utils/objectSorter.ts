export function objectSorter(pairFreqObj: { [key: string]: number }): {
  [key: string]: number;
} {
  const entries = Object.entries(pairFreqObj);
  const sorte = entries.sort((a, b) => b[1] - a[1]);

  return Object.fromEntries(sorte);
}
