import { SECONDS_PER_YEAR } from "./constants";

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
