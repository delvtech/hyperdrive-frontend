import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";

export function formatTermLength(termLengthMS: number): string {
  const numDays = convertMillisecondsToDays(termLengthMS);
  return `${numDays}d`;
}
