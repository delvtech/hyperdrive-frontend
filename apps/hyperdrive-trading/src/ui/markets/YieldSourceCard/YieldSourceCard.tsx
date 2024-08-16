import { YieldSource } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Well } from "src/ui/base/components/Well/Well";
import { useIsTailwindLessThanSm } from "src/ui/base/mediaBreakpoints";
import { YieldSourceMarketsTableDesktop } from "src/ui/markets/YieldSourceMarketsTable/YieldSourceMarketsTableDesktop";
import { YieldSourceMarketsTableMobile } from "src/ui/markets/YieldSourceMarketsTable/YieldSourceMarketsTableMobile";
import { YieldSourceRateBadge } from "src/ui/vaults/YieldSourceRateBadge";

/**
 * @deprecated
 */
export function YieldSourceCard({
  yieldSource,
}: {
  yieldSource: YieldSource;
}): ReactElement | null {
  const appConfig = useAppConfig();

  const isSmallScreen = useIsTailwindLessThanSm();

  // Extract the list of pools that have this yield source
  const pools = appConfig.hyperdrives.filter((hyperdrive) => {
    return hyperdrive.yieldSource === yieldSource.id;
  });

  if (!pools.length) {
    return null;
  }

  // The first pool is used to get the canonical base and shares tokens, etc..
  const [firstPool] = pools;

  const {
    depositOptions: { isBaseTokenDepositEnabled, isShareTokenDepositsEnabled },
  } = firstPool;

  const baseToken = appConfig.tokens.find(
    (token) => firstPool.poolConfig.baseToken === token.address,
  );
  const sharesToken = appConfig.tokens.find(
    (token) => firstPool.poolConfig.vaultSharesToken === token.address,
  );

  return (
    <Well transparent interactive block={isSmallScreen}>
      <div className="flex flex-col gap-12 md:w-[740px] md:gap-2">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-8 md:p-4">
          {/* Card header */}
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-5">
            <div>
              <img
                src={appConfig.protocols[yieldSource.protocol]?.iconUrl}
                className="h-20 scale-75 sm:scale-100"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="mb-1">{yieldSource.shortName}</h3>
              <YieldSourceRateBadge hyperdriveAddress={firstPool.address} />
            </div>
          </div>

          {/* Deposit assets */}
          <div className="flex items-center justify-center gap-2 text-neutral-content sm:flex-col">
            <span>Deposit assets</span>
            {/* DaisyUI note: overflow-visible enables tooltips to be shown in the daisy-avatar-group */}
            <div className="daisy-avatar-group inline-flex justify-center -space-x-6 overflow-visible rtl:space-x-reverse">
              {baseToken && isBaseTokenDepositEnabled ? (
                <div
                  className="daisy-avatar daisy-tooltip daisy-tooltip-bottom w-12 scale-75 overflow-visible sm:scale-100"
                  data-tip={baseToken.symbol}
                >
                  <img src={baseToken.iconUrl} />
                </div>
              ) : null}
              {sharesToken && isShareTokenDepositsEnabled ? (
                <div
                  className="daisy-avatar daisy-tooltip daisy-tooltip-bottom w-12 scale-75 overflow-visible sm:scale-100"
                  data-tip={sharesToken.symbol}
                >
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
            <YieldSourceMarketsTableMobile yieldSource={yieldSource.id} />
          </div>
        ) : (
          <YieldSourceMarketsTableDesktop yieldSource={yieldSource.id} />
        )}{" "}
      </div>
    </Well>
  );
}
