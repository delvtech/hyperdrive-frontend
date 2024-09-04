import { findHyperdriveConfig } from "@hyperdrive/appconfig";
import { useParams } from "@tanstack/react-router";
import { ReactElement } from "react";
import { Helmet } from "react-helmet";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { MarketDetailsBody } from "src/ui/markets/MarketDetailsBody/MarketDetailsBody";
import { PoolDetails } from "src/ui/markets/PoolDetails/PoolDetails";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { Address } from "viem";

export function Market(): ReactElement {
  const { address, chainId } = useParams({ from: MARKET_DETAILS_ROUTE });
  const appConfig = useAppConfig();
  const { isFlagEnabled: isPoolDetailsV2 } = useFeatureFlag("pool-details-v2");

  const hyperdrive = findHyperdriveConfig({
    hyperdriveChainId: Number(chainId),
    hyperdrives: appConfig.hyperdrives,
    hyperdriveAddress: address as Address,
  });

  return (
    <div className="flex justify-center px-4 py-8">
      <Helmet>
        <title>
          {hyperdrive ? `${hyperdrive?.name} - Hyperdrive` : "Pool not found"}
        </title>
      </Helmet>

      {isPoolDetailsV2 ? (
        <PoolDetails hyperdrive={hyperdrive} />
      ) : (
        <MarketDetailsBody hyperdrive={hyperdrive} />
      )}
    </div>
  );
}
