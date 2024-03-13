const SECONDS_PER_DAY = BigInt(24 * 60 * 60);

function convertSecondsToDays(seconds: bigint): bigint {
  const days = seconds / SECONDS_PER_DAY; // Calculate the number of whole days
  return days;
}

export function convertSecondsToYearFraction(seconds: bigint): number {
  const days = convertSecondsToDays(seconds);
  return Number(days) / 365;
}
