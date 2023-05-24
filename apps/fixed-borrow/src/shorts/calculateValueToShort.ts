import { parseUnits } from "src/base/bigint/parseBigInt";
import { formatUnits } from "viem";

export function calculateValueToShort(
  debtAmountInput: bigint,
  debtTokenDecimals: number,
): { shortAmount: bigint; formattedShortAmount: string } {
  const multiplier = parseUnits("1.25", debtTokenDecimals);
  const valueToShort =
    (debtAmountInput * multiplier) / BigInt(10 ** debtTokenDecimals);

  return {
    shortAmount: valueToShort,
    formattedShortAmount: formatUnits(valueToShort, debtTokenDecimals),
  };
}
