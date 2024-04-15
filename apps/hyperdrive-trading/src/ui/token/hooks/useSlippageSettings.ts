import { useState } from "react";
import { AUTO_SLIPPAGE_AMOUNT } from "src/ui/token/SlippageSettings";
export function useSlippageSettings(): {
  slippage: bigint;
  setSlippage: (slippage: bigint) => void;
  activeTab: "auto" | "custom";
  setActiveTab: (activeTab: "auto" | "custom") => void;
} {
  const [slippage, setSlippage] = useState<bigint>(AUTO_SLIPPAGE_AMOUNT);
  const [activeTab, setActiveTab] = useState<"auto" | "custom">("auto");

  return {
    slippage,
    setSlippage,
    activeTab,
    setActiveTab,
  };
}
