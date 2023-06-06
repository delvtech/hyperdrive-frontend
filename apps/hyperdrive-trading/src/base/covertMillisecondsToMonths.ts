// 1000 milliseconds * 60 seconds * 60 minutes * 24 hours * 30.42 days
const MILLISECONDS_PER_MONTH = 1000 * 60 * 60 * 24 * (365 / 12);
export function convertMillisecondsToMonths(milliseconds: number): number {
  const months = milliseconds / MILLISECONDS_PER_MONTH;
  return Math.floor(months);
}
