import { useState } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatBigInt } from "src/ui/base/formatting/formatBigInt";
import { parseBigInt } from "src/ui/base/formatting/parseBigInt";

interface UseNumericInputResult {
  amount: string | undefined;
  amountAsBigInt: bigint | undefined;
  formattedAmount: string | undefined;
  setAmount: (newAmount: string | undefined) => void;
}

interface UseNumericInputProps {
  decimals: number | undefined;
  formatCommas?: boolean;
}

export function useNumericInput({
  decimals,
  formatCommas = false,
}: UseNumericInputProps): UseNumericInputResult {
  const [amount, setAmount] = useState<string | undefined>();
  const amountAsBigInt = amount ? parseBigInt(amount, decimals) : undefined;

  const formattedAmount = amountAsBigInt
    ? formatBalance(
        formatBigInt(amountAsBigInt, decimals),
        undefined,
        formatCommas,
      )
    : undefined;

  return {
    amount,
    amountAsBigInt,
    formattedAmount,
    setAmount: setAmount,
  };
}
