import { ChevronRightIcon, CircleStackIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Stat } from "src/ui/base/components/Stat";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { OpenLongModalButton } from "src/ui/hyperdrive/longs/OpenLongModalButton/OpenLongModalButton";
import { OpenShortModalButton } from "src/ui/hyperdrive/shorts/OpenShortModalButton/OpenShortModalButton";
import { MarketSelect } from "src/ui/markets/MarketSelect/MarketSelect";
import { MarketStats } from "src/ui/markets/MarketStats/MarketStats";
import { YieldSourceLabel } from "src/ui/markets/YieldSourceLabel/YieldSourceLabel";
import { FAQ } from "src/ui/onboarding/FAQ/FAQ";
import { PositionsSection } from "src/ui/portfolio/PositionsSection/PositionsSection";
import { useMintBaseToken } from "src/ui/token/hooks/useMintBaseToken";
import { parseUnits } from "viem";
import { useAccount, useBalance, useChainId } from "wagmi";

interface PositionsTableProps {
  hyperdrive: Hyperdrive;
}

export function TradeBody({ hyperdrive }: PositionsTableProps): ReactElement {
  const { appConfig } = useAppConfig();
  const { address: account } = useAccount();
  const { data: balance } = useBalance({
    address: account,
    token: hyperdrive.baseToken.address,
  });
  const chainId = useChainId();
  const yieldSource = appConfig?.yieldSources[hyperdrive.yieldSource];
  const { mint } = useMintBaseToken({
    amount: parseUnits("100", hyperdrive.baseToken.decimals),
    baseToken: hyperdrive.baseToken.address,
    destination: account,
  });

  return (
    <div className="flex max-w-4xl flex-col gap-16 ">
      {/* Name w/ market select */}
      <div className="flex w-full flex-col gap-6">
        <div className="flex flex-wrap items-start justify-between">
          <div className="flex shrink-0 flex-col">
            <div className="flex flex-1 justify-between">
              <YieldSourceLabel yieldSource={yieldSource} />{" "}
              <MarketSelect markets={[hyperdrive]} />
            </div>
            <p className="text-h3 font-semibold">{hyperdrive.name}</p>
          </div>
          <Well>
            <div className="flex items-center gap-4">
              <Stat
                label="Your available balance"
                value={
                  <div className="-mt-1 flex items-center gap-1 text-h5">
                    <img className="h-4" src={hyperdrive.baseToken.iconUrl} />
                    {formatBalance(balance?.formatted || 0, 4)}{" "}
                    {hyperdrive.baseToken.symbol}
                    {chainId === 31337 ? (
                      <button
                        disabled={!mint}
                        className="daisy-btn-xs daisy-btn ml-1"
                        onClick={() => mint?.()}
                      >
                        Mint Tokens
                      </button>
                    ) : undefined}
                  </div>
                }
              />
            </div>
          </Well>
        </div>

        {/* Stats row */}
        <MarketStats hyperdrive={hyperdrive} />
      </div>

      <div>
        <div className="mb-8 flex w-full items-center border-b border-neutral-content/30">
          <span className="pb-2 font-lato text-h5 font-light text-neutral-content">
            Hyperdrive Actions
          </span>
        </div>
        <div className="flex flex-wrap gap-10 ">
          <OpenLongModalButton hyperdrive={hyperdrive} />

          <OpenShortModalButton hyperdrive={hyperdrive} />

          <Well interactive variant="primary">
            <div className="flex w-52 flex-col gap-2 py-4 text-center">
              <CircleStackIcon className="mb-2 h-16 text-primary" />
              <p className="font-lato text-h5 font-light text-primary">
                Add liquidity
              </p>
              <p className="font-light">
                Earn trading fees when users open longs or shorts
              </p>
              <div className="daisy-btn-primary daisy-btn-sm daisy-btn mt-2 justify-between gap-0 normal-case">
                <span className="ml-4 flex-1 text-center">Add LP</span>
                <ChevronRightIcon className="h-3 text-right" />
              </div>
            </div>
          </Well>
        </div>
      </div>

      <PositionsSection hyperdrive={hyperdrive} />

      <FAQ />
    </div>
  );
}
