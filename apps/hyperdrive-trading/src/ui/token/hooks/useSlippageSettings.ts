import { parseFixed } from "@delvtech/fixed-point-wasm";
import { useState } from "react";
import { DEFAULT_SLIPPAGE_AMOUNT } from "src/ui/token/SlippageSettings";

export function useSlippageSettings({ decimals }: { decimals: number }): {
  slippage: string;
  slippageAsBigInt: bigint;
  setSlippage: (slippage: string) => void;
  activeOption: "auto" | "custom";
  setActiveOption: (activeOption: "auto" | "custom") => void;
} {
  const [slippage, setSlippage] = useState<string>(DEFAULT_SLIPPAGE_AMOUNT);
  const slippageAsBigInt = slippage
    ? parseFixed(slippage, decimals).bigint
    : parseFixed(DEFAULT_SLIPPAGE_AMOUNT, decimals).bigint;
  const [activeOption, setActiveOption] = useState<"auto" | "custom">("auto");

  return {
    slippage,
    slippageAsBigInt,
    setSlippage,
    activeOption,
    setActiveOption,
  };
}
