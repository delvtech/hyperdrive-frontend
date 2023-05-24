import { useState } from "react";
import { formatUnits, parseUnits } from "viem";
import { formatBalance } from "src/ui/base/formatting/formatBalance";

interface UseNumericInputResult {
  amount: string;
  amountAsBigInt: bigint | undefined;
  /**
   * Includes commification
   */
  formattedAmount: string | undefined;
  setAmount: (newAmount: `${number}`) => void;
}

export function useNumericInput({
  decimals,
}: {
  decimals: number | undefined;
}): UseNumericInputResult {
  const [amount, setAmount] = useState<`${number}` | "">("");
  const amountAsBigInt =
    amount && decimals ? parseUnits(amount, decimals) : undefined;

  const formattedAmount =
    amountAsBigInt && decimals
      ? formatBalance(formatUnits(amountAsBigInt, decimals))
      : undefined;

  return {
    amount,
    amountAsBigInt,
    formattedAmount,
    setAmount: setAmount,
  };
}
