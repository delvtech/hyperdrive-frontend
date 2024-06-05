import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";

const MS_PER_MINUTE = 1000 * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;
const MS_PER_DAY = MS_PER_HOUR * 24;

// Function to calculate time left
export function calculateTimeLeft(
  currentTimestampInSeconds: number,
  maturityTimestampInSeconds: number,
): { days: number; hours: number; minutes: number } {
  const timeLeftMS =
    maturityTimestampInSeconds * 1000 - (currentTimestampInSeconds || 0) * 1000;

  // Calculate days left by converting milliseconds to days
  const daysLeft = convertMillisecondsToDays(timeLeftMS);

  // Calculate remaining hours after subtracting days
  const hoursLeft = Math.floor((timeLeftMS % MS_PER_DAY) / MS_PER_HOUR);

  // Calculate remaining minutes after subtracting hours
  const minutesLeft = Math.floor((timeLeftMS % MS_PER_HOUR) / MS_PER_MINUTE);

  return { days: daysLeft, hours: hoursLeft, minutes: minutesLeft };
}
