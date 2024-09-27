import { appConfig, findHyperdriveConfig } from "@hyperdrive/appconfig";
import { useParams } from "@tanstack/react-router";
import { ReactElement } from "react";
import { Helmet } from "react-helmet";
import { PoolDetails } from "src/ui/markets/PoolDetails";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { Address } from "viem";

export function Market(): ReactElement {
  const { address, chainId } = useParams({ from: MARKET_DETAILS_ROUTE });

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

      <PoolDetails hyperdrive={hyperdrive} />
    </div>
  );
}
