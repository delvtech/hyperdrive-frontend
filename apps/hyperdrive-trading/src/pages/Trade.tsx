import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";
import { useLoaderData } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { parseUnits } from "src/base/parseUnits";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Button } from "src/ui/base/components/Button";
import { Stat } from "src/ui/base/components/Stat";
import { YieldSourceLabel } from "src/ui/protocol/ProtocolLabel";
import { useMintBaseToken } from "src/ui/token/hooks/useMintBaseToken";
import { TradeBody } from "src/ui/trade/TradeBody";
import { TradeSideBar } from "src/ui/trade/TradeSideBar";
import { useAccount, useChainId } from "wagmi";

export function Trade(): ReactElement {
  // Safe to cast this variable because router configs this page is rendered with a valid market
  const market = useLoaderData() as Hyperdrive;
  const { appConfig } = useAppConfig();
  const { address: account } = useAccount();
  const chainId = useChainId();

  const yieldSource = appConfig?.yieldSources[market.yieldSource];

  const { mint } = useMintBaseToken({
    amount: parseUnits("100", market.baseToken.decimals),
    baseToken: market.baseToken.address,
    destination: account,
  });

  return (
    <div className="grid h-full grid-cols-[450px_1fr]">
      {/* Sidebar */}
      <div className="flex h-full shrink-0 flex-col px-8 py-6">
        <TradeSideBar market={market} />
      </div>

      {/* Content column */}
      <div className="flex h-full flex-col bg-base-100">
        <div className="flex items-center justify-start gap-x-20 px-8 py-4">
          <div className="flex w-full flex-col items-center gap-8">
            <div className="flex w-full items-center justify-end gap-8">
              {chainId === 31337 ? (
                <Button
                  disabled={!mint}
                  variant="Work"
                  onClick={() => mint?.()}
                >
                  Mint Tokens
                </Button>
              ) : undefined}
              <ConnectButton showBalance={false} />
            </div>

            <div className="flex w-full items-center justify-start gap-x-16">
              <Stat
                label="Protocol"
                value={<YieldSourceLabel yieldSource={yieldSource} />}
              />
              <Stat label="Liquidity" value="$100M" />
              <Stat label="Long APR" value="1.50%" />
              <Stat label="LP APY" value="1.60%" />
              <Stat label="Volume (24h)" value="$4.4M" />
            </div>
          </div>
        </div>

        <TradeBody hyperdrive={market} />
      </div>
    </div>
  );
}
