import { calculateTimeLeft } from "src/base/calculateTimeLeft";

export function getRemainingTimeLabel({
  maturitySeconds,
  condensed = false,
}: {
  maturitySeconds: number;
  condensed?: boolean;
}): string {
  const nowSeconds = Date.now() / 1000;
  const isTermComplete = maturitySeconds < nowSeconds;
  const { days, hours, minutes } = calculateTimeLeft(
    Number(nowSeconds),
    Number(maturitySeconds),
  );

  if (isTermComplete) {
    return "Term complete";
  }

  if (days > 0) {
    return `${days} days left`;
  }

  // Condensed only needed when showing both hours and minutes.
  if (hours > 0 && condensed) {
    return `${hours}h ${minutes}m left`;
  }

  if (hours > 0) {
    return `${hours} hours, ${minutes} minutes left`;
  }

  if (minutes > 0) {
    return `${minutes} minutes left`;
  }

  return "-";
}
