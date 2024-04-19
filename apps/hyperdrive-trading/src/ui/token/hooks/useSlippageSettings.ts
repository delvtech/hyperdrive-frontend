import { useState } from "react";
import { AUTO_SLIPPAGE_AMOUNT } from "src/ui/token/SlippageSettings";
export function useSlippageSettings({ decimals }: { decimals: number }): {
  slippage: bigint;
  setSlippage: (slippage: bigint) => void;
  activeOption: "auto" | "custom";
  setActiveOption: (activeOption: "auto" | "custom") => void;
} {
  const [slippage, setSlippage] = useState<bigint>(
    AUTO_SLIPPAGE_AMOUNT(decimals),
  );
  const [activeOption, setActiveOption] = useState<"auto" | "custom">("auto");

  return {
    slippage,
    setSlippage,
    activeOption,
    setActiveOption,
  };
}