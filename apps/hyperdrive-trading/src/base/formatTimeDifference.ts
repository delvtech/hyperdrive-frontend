const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_DAY = 86400; // 24 hours * 3600 seconds per hour

/**
 * Converts seconds to a human-readable string representing the time difference in minutes, hours, or days.
 * @param {bigint} currentTimeStamp
 * @param {bigint} previousTimeStamp
 * @returns {string} A string representing how long ago the event occurred, in minutes, hours, or days.
 */
export function formatTimeDifference({
  currentTimeStamp,
  previousTimeStamp,
}: {
  currentTimeStamp: bigint;
  previousTimeStamp: bigint;
}): string {
  const timeDifference = Number(currentTimeStamp - previousTimeStamp);

  if (timeDifference < 2 * SECONDS_PER_MINUTE) {
    return "recently";
  }

  if (timeDifference < SECONDS_PER_HOUR) {
    const minutes = Math.floor(timeDifference / SECONDS_PER_MINUTE);
    return `${minutes} minutes ago`;
  }
  if (timeDifference < SECONDS_PER_DAY) {
    const hours = Math.floor(timeDifference / SECONDS_PER_HOUR);
    const hourText = hours === 1 ? "hour" : "hours";
    return `${hours} ${hourText} ago`;
  }
  const days = Math.floor(timeDifference / SECONDS_PER_DAY);
  const dayText = days === 1 ? "day" : "days";
  return `${days} ${dayText} ago`;
}
