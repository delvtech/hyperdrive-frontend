import { BigNumber } from "ethers";
import { formatUnits, parseUnits } from "ethers/lib/utils.js";
import { useState } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";

export function useNumericInput({
  decimals,
}: {
  decimals: number | undefined;
}): {
  amount: string | undefined;
  amountAsBigNumber: BigNumber;
  formattedAmount: string;
  setAmount: (newAmount: string | undefined) => void;
} {
  const [amount, setAmount] = useState<string | undefined>();
  const amountAsBigNumber = parseUnits(amount || "0", decimals);
  const formattedAmount = formatBalance(
    formatUnits(amountAsBigNumber, decimals),
  );

  return {
    amount: amount,
    amountAsBigNumber,
    formattedAmount,
    setAmount: setAmount,
  };
}
