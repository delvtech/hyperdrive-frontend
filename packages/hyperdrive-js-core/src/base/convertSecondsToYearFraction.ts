const SECONDS_PER_DAY = 86400n;

/**
 * Converts seconds to a year fraction.
 *
 * @param seconds - The number of seconds to convert.
 * @returns The number of years represented by the given number of seconds.
 *
 * @internal
 */
export function convertSecondsToYearFraction(seconds: bigint): number {
  const days = seconds / SECONDS_PER_DAY;
  return Number(days) / 365;
}
