import { useState } from "react";
import { parseUnits } from "viem";

interface UseNumericInputResult {
  amount: string | undefined;
  amountAsBigInt: bigint | undefined;
  setAmount: (newAmount: string | undefined) => void;
}

interface UseNumericInputProps {
  decimals: number;
}

export function useNumericInput({
  decimals,
}: UseNumericInputProps): UseNumericInputResult {
  const [amount, setAmount] = useState<string | undefined>();
  const amountAsBigInt = amount
    ? parseUnits(amount as `${number}`, decimals)
    : undefined;

  return {
    amount,
    amountAsBigInt,
    setAmount: setAmount,
  };
}
