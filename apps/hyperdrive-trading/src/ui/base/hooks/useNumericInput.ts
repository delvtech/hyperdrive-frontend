import { useState } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { parseUnits } from "viem";

interface UseNumericInputResult {
  amount: string | undefined;
  amountAsBigInt: bigint | undefined;
  formattedAmount: string | undefined;
  setAmount: (newAmount: string | undefined) => void;
}

interface UseNumericInputProps {
  decimals: number | undefined;
}

export function useNumericInput({
  decimals = 0,
}: UseNumericInputProps): UseNumericInputResult {
  const [amount, setAmount] = useState<string | undefined>();
  const amountAsBigInt = amount
    ? parseUnits(amount as `${number}`, decimals)
    : undefined;

  const formattedAmount = amountAsBigInt
    ? formatBalance({
        balance: amountAsBigInt,
        decimals,
        places: 2,
        includeCommas: false,
      })
    : undefined;

  return {
    amount,
    amountAsBigInt,
    formattedAmount,
    setAmount: setAmount,
  };
}
