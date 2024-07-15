const SECONDS_PER_YEAR = 31536000;

/**
 * Converts seconds to a year fraction.
 *
 * @param seconds - The number of seconds to convert.
 * @returns The number of years represented by the given number of seconds.
 *
 * @internal
 */
export function convertSecondsToYearFraction(seconds: bigint | number): number {
  return Number(seconds) / SECONDS_PER_YEAR;
}
