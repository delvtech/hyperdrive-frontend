import { calculateTimeLeft } from "src/base/calculateTimeLeft";

export function getRemainingTimeLabel(maturitySeconds: number): string {
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

  if (hours > 0) {
    return `${hours} hours, ${minutes} minutes left`;
  }

  if (minutes > 0) {
    return `${minutes} minutes left`;
  }

  return "-";
}
