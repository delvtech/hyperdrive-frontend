import { calculateTimeLeft } from "src/base/calculateTimeLeft";

/**
 * @param options.maturitySeconds The timestamp in seconds when time runs out
 * @param options.condensed Show condensed labels when showing both hours and minutes
 * @param options.showLeftSuffix Whether to include "left" in the output string
 * @returns string
 */
export function getRemainingTimeLabel({
  maturitySeconds,
  condensed = false,
  showLeftSuffix = true,
}: {
  maturitySeconds: number;
  condensed?: boolean;
  showLeftSuffix?: boolean;
}): string {
  const nowSeconds = Date.now() / 1000;
  const isTermComplete = maturitySeconds < nowSeconds;
  const { days, hours, minutes } = calculateTimeLeft(
    Number(nowSeconds),
    Number(maturitySeconds),
  );

  if (isTermComplete && condensed) {
    return "Complete";
  }

  if (isTermComplete) {
    return "Term complete";
  }

  const suffix = showLeftSuffix ? " left" : "";

  if (days > 0) {
    return `${days} days${suffix}`;
  }

  // Condensed only needed when showing both hours and minutes.
  if (hours > 0 && condensed) {
    return `${hours}h ${minutes}m${suffix}`;
  }

  if (hours > 0) {
    return `${hours} hours, ${minutes} minutes${suffix}`;
  }

  if (minutes > 0) {
    return `${minutes} minutes${suffix}`;
  }

  return "-";
}
