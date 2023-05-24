import { useState } from "react";
import { formatUnits } from "viem";
import { parseBigInt } from "src/base/bigint/parseBigInt";
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
  const amountAsBigInt = amount ? parseBigInt(amount, decimals) : undefined;

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
