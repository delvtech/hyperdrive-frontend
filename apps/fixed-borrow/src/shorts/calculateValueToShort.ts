import { parseBigInt } from "src/base/bigint/parseBigInt";
import { formatUnits } from "src/base/bigint/formatBigInt";

export function calculateValueToShort(
  debtAmountInput: bigint,
  debtTokenDecimals: number,
): { shortAmount: bigint; formattedShortAmount: string } {
  const multiplier = parseBigInt("1.25", debtTokenDecimals);
  const valueToShort =
    (debtAmountInput * multiplier) / BigInt(10 ** debtTokenDecimals);

  return {
    shortAmount: valueToShort,
    formattedShortAmount: formatUnits(valueToShort, debtTokenDecimals),
  };
}
