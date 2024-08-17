import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";

export function formatTermLength(termLengthMS: number): string {
  const numDays = convertMillisecondsToDays(termLengthMS);
  return `${numDays}d`;
}

export function formatTermLength2(termLengthMS: number): string {
  const numDays = convertMillisecondsToDays(termLengthMS);
  return `${numDays} days`;
}
