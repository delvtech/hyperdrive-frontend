import { useState } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatUnits, parseUnits } from "viem";

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
  decimals = 0,
  formatCommas = false,
}: UseNumericInputProps): UseNumericInputResult {
  const [amount, setAmount] = useState<string | undefined>();
  const amountAsBigInt = amount
    ? parseUnits(amount as `${number}`, decimals)
    : undefined;

  const formattedAmount = amountAsBigInt
    ? formatBalance({
        balance: formatUnits(amountAsBigInt, decimals),
        numDecimals: undefined,
        includeCommas: formatCommas,
      })
    : undefined;

  return {
    amount,
    amountAsBigInt,
    formattedAmount,
    setAmount: setAmount,
  };
}
