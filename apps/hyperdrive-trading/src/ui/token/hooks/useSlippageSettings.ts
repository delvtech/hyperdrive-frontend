import * as dnum from "dnum";
import { useState } from "react";
export function useSlippageSettings({ decimals }: { decimals: number }): {
  slippage: bigint;
  setSlippage: (slippage: bigint) => void;
  activeTab: "auto" | "custom";
  setActiveTab: (activeTab: "auto" | "custom") => void;
} {
  const [slippage, setSlippage] = useState<bigint>(
    dnum.from("0.5", decimals)[0],
  );
  const [activeTab, setActiveTab] = useState<"auto" | "custom">("auto");

  return {
    slippage,
    setSlippage,
    activeTab,
    setActiveTab,
  };
}
