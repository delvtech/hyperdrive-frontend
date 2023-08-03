import { formatUnits } from "viem";

export function caclulateProfitLoss(
  baseAmountOut: bigint,
  baseAmountPaid: bigint,
  baseDecimals: number,
): number {
  const formattedBaseAmountOut = formatUnits(baseAmountOut, baseDecimals);

  const formattedBaseAmountPaid = formatUnits(baseAmountPaid, baseDecimals);

  return Number(formattedBaseAmountOut) - Number(formattedBaseAmountPaid);
}

export function calculateProfitLossPercentage({
  baseAmountOut,
  baseAmountPaid,
}: {
  baseAmountOut: bigint;
  baseAmountPaid: bigint;
}): string {
  if (baseAmountPaid === 0n) {
    return "0";
  } // Avoid division by zero

  const profitOrLoss =
    (Number(baseAmountOut - baseAmountPaid) / Number(baseAmountPaid)) * 100;
  return profitOrLoss.toFixed(2);
}

interface ProfitLossTextParams {
  baseAmountOut: bigint;
  baseAmountPaid: bigint;
  baseSymbol: string;
  baseDecimals: number;
}

export function getProfitLossText({
  baseAmountOut,
  baseAmountPaid,
  baseSymbol,
  baseDecimals,
}: ProfitLossTextParams): string {
  const profitLossAmount = caclulateProfitLoss(
    baseAmountOut,
    baseAmountPaid,
    baseDecimals,
  );
  const profitLossPercentage = calculateProfitLossPercentage({
    baseAmountOut,
    baseAmountPaid,
  });

  return `${profitLossAmount.toFixed(
    2,
  )} ${baseSymbol} (${profitLossPercentage}%)`;
}
