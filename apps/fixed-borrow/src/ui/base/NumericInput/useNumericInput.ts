import { useState } from "react";
import { formatBigInt } from "src/base/bigint/formatBigInt";
import { parseBigInt } from "src/base/bigint/parseBigInt";
import { formatBalance } from "src/ui/base/formatting/formatBalance";

interface UseNumericInputResult {
  amount: string | undefined;
  amountAsBigInt: bigint | undefined;
  /**
   * Includes commification
   */
  formattedAmount: string | undefined;
  setAmount: (newAmount: string | undefined) => void;
}

export function useNumericInput({
  decimals,
}: {
  decimals: number | undefined;
}): UseNumericInputResult {
  const [amount, setAmount] = useState<string | undefined>();
  const amountAsBigInt = amount ? parseBigInt(amount, decimals) : undefined;

  const formattedAmount = amountAsBigInt
    ? formatBalance(formatBigInt(amountAsBigInt, decimals))
    : undefined;

  return {
    amount,
    amountAsBigInt,
    formattedAmount,
    setAmount: setAmount,
  };
}
