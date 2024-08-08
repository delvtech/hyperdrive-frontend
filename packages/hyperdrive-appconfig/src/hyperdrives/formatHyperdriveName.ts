const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

function convertMillisecondsToDays(ms: number): number {
  const days = Math.floor(ms / MILLISECONDS_PER_DAY); // Calculate the number of whole days
  return days;
}

function formatDaysLabel(timeMS: number): string {
  const numDays = convertMillisecondsToDays(timeMS);
  return `${numDays}d`;
}

export function formatHyperdriveName({
  termLengthMS,
  yieldSourceShortName,
}: {
  termLengthMS: number;
  yieldSourceShortName: string;
}): string {
  return `${formatDaysLabel(termLengthMS)} ${yieldSourceShortName}`;
}
