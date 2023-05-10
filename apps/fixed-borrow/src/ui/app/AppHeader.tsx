import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MintButton } from "src/ui/faucet/MintButton";
import { parseBigInt } from "src/base/bigint/parseBigInt";
import { ReactElement } from "react";

interface AppHeaderProps {}

export function AppHeader({}: AppHeaderProps): ReactElement {
  return (
    <div className="flex h-16 items-center justify-between gap-2 p-4">
      <h4 className="shrink-0 font-bold text-white">Fixed Borrow Demo</h4>
      <div className="flex shrink-0 items-center gap-2">
        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
}
