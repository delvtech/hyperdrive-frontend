import { formatTermLength } from "src/ui/markets/formatTermLength";

export function formatHyperdriveName({
  termLengthMS,
  baseTokenSymbol,
  yieldSourceShortName,
}: {
  termLengthMS: number;
  baseTokenSymbol: string;
  yieldSourceShortName: string;
}): string {
  return `${formatTermLength(
    termLengthMS,
  )} ${baseTokenSymbol}-${yieldSourceShortName}`;
}
