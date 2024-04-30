import * as dnum from "dnum";
import { useState } from "react";
import { AUTO_SLIPPAGE_AMOUNT } from "src/ui/token/SlippageSettings";
export function useSlippageSettings({ decimals }: { decimals: number }): {
  slippage: string;
  slippageAsBigInt: bigint;
  setSlippage: (slippage: string) => void;
  activeOption: "auto" | "custom";
  setActiveOption: (activeOption: "auto" | "custom") => void;
} {
  const [slippage, setSlippage] = useState<string>(AUTO_SLIPPAGE_AMOUNT);
  const slippageAsBigInt = slippage
    ? dnum.from(slippage, decimals)[0]
    : dnum.from(AUTO_SLIPPAGE_AMOUNT, decimals)[0];
  const [activeOption, setActiveOption] = useState<"auto" | "custom">("auto");

  return {
    slippage,
    slippageAsBigInt,
    setSlippage,
    activeOption,
    setActiveOption,
  };
}
