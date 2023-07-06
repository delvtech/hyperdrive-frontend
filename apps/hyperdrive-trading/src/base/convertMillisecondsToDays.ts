export function convertMillisecondsToDays(ms: number): number {
  const millisecondsInOneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const days = Math.floor(ms / millisecondsInOneDay); // Calculate the number of whole days

  return days;
}
