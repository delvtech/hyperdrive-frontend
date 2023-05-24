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
  setAmount: (newAmount: string) => void;
}

export function useNumericInput({
  decimals,
}: {
  decimals: number | undefined;
}): UseNumericInputResult {
  const [amount, setAmount] = useState<string>("");
  const amountAsBigInt = amount ? parseUnits(amount, decimals) : undefined;

  const formattedAmount = amountAsBigInt
    ? formatBalance(formatUnits(amountAsBigInt, decimals))
    : undefined;

  return {
    amount,
    amountAsBigInt,
    formattedAmount,
    setAmount: setAmount,
  };
}
