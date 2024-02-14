const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = 3600;

/**
 * Converts seconds to a human-readable string representing the time difference in minutes or hours.
 * @param {bigint} currentTimeStamp
 * @param {bigint} previousTimeStamp
 * @returns {string} A string representing how long ago the event occurred, in minutes or hours.
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
  } else {
    const hours = Math.floor(timeDifference / SECONDS_PER_HOUR);
    const hourText = hours === 1 ? "hour" : "hours";
    return `${hours} ${hourText} ago`;
  }
}
