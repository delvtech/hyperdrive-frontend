import {
  Protocol,
  findBaseToken,
  findYieldSourceHyperdrives,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Badge } from "src/ui/base/components/Badge";
import { Well } from "src/ui/base/components/Well/Well";
import { YieldSourceMarketsTable } from "src/ui/markets/YieldSourceMarketsTable/YieldSourceMarketsTable";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";

export function YieldSourceCard({
  yieldSourceProtocol,
}: {
  yieldSourceProtocol: Protocol;
}): ReactElement | null {
  const appConfig = useAppConfig();

  // Extract the list of pools that have this yield source
  const pools = findYieldSourceHyperdrives({
    yieldSourceId: yieldSourceProtocol.id,
    hyperdrives: appConfig.hyperdrives,
    tokens: appConfig.tokens,
  });

  const { vaultRate, vaultRateStatus } = useYieldSourceRate({
    hyperdriveAddress: pools[0]?.address,
  });

  if (!pools.length) {
    return null;
  }

  // The first pool is used to get the canonical base and shares tokens, etc..
  const [firstPool] = pools;

  const {
    depositOptions: { isBaseTokenDepositEnabled, isShareTokenDepositsEnabled },
  } = firstPool;

  const baseToken = findBaseToken({
    baseTokenAddress: firstPool.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: firstPool.sharesToken,
    tokens: appConfig.tokens,
  });

  return (
    <Well transparent interactive>
      <div className="flex w-full flex-col gap-2 md:w-[700px]">
        {/* Card header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row md:p-4 ">
          {/* Yield source name, icon, and rate */}
          <div className="flex gap-2 sm:gap-5">
            <img
              src={yieldSourceProtocol.iconUrl}
              className="h-20 scale-75 sm:scale-100"
            />
            <div>
              <h3 className="mb-1">{sharesToken.extensions.shortName}</h3>
              {vaultRateStatus === "loading" && !vaultRate ? (
                <Skeleton className="w-42 h-8" />
              ) : (
                <Badge>
                  <span className="font-dmMono text-neutral-content">
                    Variable APY @{" "}
                    <span className="text-primary">
                      {vaultRate?.formatted}%
                    </span>
                  </span>
                </Badge>
              )}
            </div>
          </div>

          {/* Deposit assets */}
          <div className="flex items-center justify-center gap-2 text-neutral-content sm:flex-col">
            <span className="mb-2 flex">Deposit assets</span>
            <div className="daisy-avatar-group inline-flex justify-center -space-x-6 rtl:space-x-reverse">
              {isBaseTokenDepositEnabled ? (
                <div className="daisy-avatar w-12 scale-75 sm:scale-100">
                  <img src={baseToken.iconUrl} />
                </div>
              ) : null}
              {isShareTokenDepositsEnabled ? (
                <div className="daisy-avatar w-12 scale-75 sm:scale-100">
                  <img src={sharesToken.iconUrl} />
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Pools Table */}
        <YieldSourceMarketsTable protocol={yieldSourceProtocol} />
      </div>
    </Well>
  );
}
