const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

export function convertMillisecondsToDays(ms: number): number {
  const days = Math.floor(ms / MILLISECONDS_PER_DAY); // Calculate the number of whole days
  return days;
}

export function convertMillisecondsToYearFraction(ms: number): number {
  const days = convertMillisecondsToDays(ms);
  return days / 365;
}
