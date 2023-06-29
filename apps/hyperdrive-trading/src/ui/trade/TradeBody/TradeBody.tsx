import {
  BoltIcon,
  ChevronRightIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Button } from "src/ui/base/components/Button";
import { Stat } from "src/ui/base/components/Stat";
import { Well } from "src/ui/base/components/Well/Well";
import { MarketSelect } from "src/ui/markets/MarketSelect/MarketSelect";
import { FAQ } from "src/ui/onboarding/FAQ/FAQ";
import { YieldSourceLabel } from "src/ui/protocol/ProtocolLabel";
import { useMintBaseToken } from "src/ui/token/hooks/useMintBaseToken";
import { OpenLongModalButton } from "src/ui/trade/OpenLongModalButton/OpenLongModalButton";
import { PositionsSection } from "src/ui/trade/PositionsSection/PositionsSection";
import { parseUnits } from "viem";
import { useAccount, useChainId } from "wagmi";

interface PositionsTableProps {
  hyperdrive: Hyperdrive;
}

export function TradeBody({ hyperdrive }: PositionsTableProps): ReactElement {
  const { appConfig } = useAppConfig();
  const { address: account } = useAccount();
  const chainId = useChainId();
  const yieldSource = appConfig?.yieldSources[hyperdrive.yieldSource];
  const { mint } = useMintBaseToken({
    amount: parseUnits("100", hyperdrive.baseToken.decimals),
    baseToken: hyperdrive.baseToken.address,
    destination: account,
  });

  return (
    <div className="flex max-w-4xl flex-col gap-16 ">
      {/* Name and Stats */}
      <div className="flex w-full flex-col gap-6">
        <div className="flex flex-wrap items-center gap-8">
          <p className="flex shrink-0 flex-col font-rubik text-h3 font-semibold">
            <YieldSourceLabel
              yieldSource={yieldSource}
              className="text-h6 font-normal text-hyper-blue-200"
            />
            {hyperdrive.name}
          </p>
          <div className="flex items-center gap-8">
            <MarketSelect markets={[hyperdrive]} />
            {chainId === 31337 ? (
              <Button disabled={!mint} variant="Work" onClick={() => mint?.()}>
                Mint Tokens
              </Button>
            ) : undefined}
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center justify-start gap-16">
          <Stat
            label="Token"
            value={
              <span className="flex items-center gap-1.5">
                {hyperdrive.baseToken.iconUrl && (
                  <img className="h-4" src={hyperdrive.baseToken.iconUrl} />
                )}
                {hyperdrive.baseToken.symbol}
              </span>
            }
          />
          <Stat label="Term" value="1 year" />
          <Stat label="Fixed Rate" value="1.50% APR" />
          <Stat label="DSR APY" value="3.49%" />
          <Stat label="LP APY" value="1.60%" />
          <Stat label="Volume (24h)" value="$4.4M" />
          <Stat label="Liquidity" value="$100M" />
        </div>
      </div>

      <div>
        <div className="mb-8 flex w-full items-center justify-between border-b border-base-500">
          <span className="pb-2 font-rubik text-h5 text-hyper-blue-200">
            Hyperdrive Actions
          </span>
        </div>
        <div className="flex flex-wrap gap-10 ">
          <OpenLongModalButton hyperdrive={hyperdrive} />

          <Well interactive variant="secondary">
            <div className="flex w-44 flex-col gap-2 py-4 text-center">
              <BoltIcon className="mb-2 h-16 text-hyper-orange" />
              <p className="font-rubik text-h5 font-thin text-hyper-orange">
                Open a short
              </p>
              <p className="text-body">
                Gain leveraged exposure to the DAI Savings Rate (DSR)
              </p>
              <Button
                size="sm"
                className="mt-2 justify-between gap-0"
                variant="Crimson"
                onClick={() => {}}
              >
                <span className="ml-4 flex-1 text-center">Short</span>
                <ChevronRightIcon className="h-3 text-right" />
              </Button>
            </div>
          </Well>

          <Well interactive variant="accent">
            <div className="flex w-44 flex-col gap-2 py-4 text-center">
              <CircleStackIcon className="mb-2 h-16 text-hyper-pink" />
              <p className="font-rubik text-h5 font-thin text-hyper-pink">
                Add liquidity
              </p>
              <p className="text-body">
                Earn trading fees when users open longs or shorts
              </p>
              <Button
                size="sm"
                className="mt-2 justify-between gap-0"
                variant="Future"
                onClick={() => {}}
              >
                <span className="ml-4 flex-1 text-center">LP</span>
                <ChevronRightIcon className="h-3 text-right" />
              </Button>
            </div>
          </Well>
        </div>
      </div>

      <PositionsSection hyperdrive={hyperdrive} />

      <FAQ />
    </div>
  );
}
