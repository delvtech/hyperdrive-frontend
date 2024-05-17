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
import { useIsTailwindLessThanSm } from "src/ui/base/mediaBreakpoints";
import { YieldSourceMarketsTableDesktop } from "src/ui/markets/YieldSourceMarketsTable/YieldSourceMarketsTableDesktop";
import { YieldSourceMarketsTableMobile } from "src/ui/markets/YieldSourceMarketsTable/YieldSourceMarketsTableMobile";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";

export function YieldSourceCard({
  yieldSourceProtocol,
}: {
  yieldSourceProtocol: Protocol;
}): ReactElement | null {
  const appConfig = useAppConfig();

  const isSmallScreen = useIsTailwindLessThanSm();

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
    <Well transparent interactive block={isSmallScreen}>
      <div className="flex flex-col gap-12 md:w-[700px] md:gap-2">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-8 md:p-4">
          {/* Card header */}
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-5">
            <div>
              <img
                src={yieldSourceProtocol.iconUrl}
                className="h-20 scale-75 sm:scale-100 "
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="mb-1">{sharesToken.extensions.shortName}</h3>
              {vaultRateStatus === "loading" && !vaultRate ? (
                <Skeleton className="w-42 h-8" />
              ) : (
                <Badge>
                  <span className="font-dmMono text-neutral-content">
                    Variable APY @{" "}
                    <span className="text-base-content">
                      {vaultRate?.formatted}%
                    </span>
                  </span>
                </Badge>
              )}
            </div>
          </div>

          {/* Deposit assets */}
          <div className="flex items-center justify-center gap-2 text-neutral-content sm:flex-col">
            <span>Deposit assets</span>
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
        {isSmallScreen ? (
          <div className="flex flex-col items-center justify-center text-neutral-content">
            <span>Markets</span>
            <YieldSourceMarketsTableMobile protocol={yieldSourceProtocol} />
          </div>
        ) : (
          <YieldSourceMarketsTableDesktop protocol={yieldSourceProtocol} />
        )}{" "}
      </div>
    </Well>
  );
}
