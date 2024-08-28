import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { HyperdriveConfig, findBaseToken } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { getAnalyticsUrl } from "src/ui/analytics/getAnalyticsUrl";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { PriceBadges } from "src/ui/markets/MarketDetailsBody/PriceBadges";

export function MarketHeader({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const sharesToken = appConfig.tokens.find(
    (token) => token.address === hyperdrive.poolConfig.vaultSharesToken,
  );
  const analyticsUrl = getAnalyticsUrl({
    chainId: hyperdrive.chainId,
    hyperdrive: hyperdrive.address,
  });

  return (
    <div className="my-2 flex items-center gap-2 md:my-0">
      <div className="flex w-full flex-col items-start gap-1">
        <h1 className="gradient-text items-center md:my-0">
          <div className="daisy-avatar-group mr-1 inline -space-x-6 rtl:space-x-reverse">
            {hyperdrive.depositOptions.isBaseTokenDepositEnabled ||
            hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled ? (
              <div className="daisy-avatar">
                <div className="w-12">
                  <img src={baseToken.iconUrl} />
                </div>
              </div>
            ) : null}
            {sharesToken ? (
              <div className="daisy-avatar">
                <div className="w-12">
                  <img src={sharesToken.iconUrl} />
                </div>
              </div>
            ) : null}
          </div>
          {hyperdrive.name}
        </h1>{" "}
        <div className="flex w-full flex-wrap items-center gap-8">
          <PriceBadges hyperdrive={hyperdrive} />
          <div className="flex shrink-0 gap-4">
            {analyticsUrl ? (
              <a
                href={analyticsUrl}
                className="daisy-btn daisy-btn-sm flex items-center gap-2 rounded-full text-accent"
                target="_blank"
                rel="noreferrer"
              >
                Analytics Dashboard
                <ArrowTopRightOnSquareIcon className="-mt-0.5 inline h-4" />
              </a>
            ) : undefined}
          </div>
        </div>
      </div>
    </div>
  );
}
