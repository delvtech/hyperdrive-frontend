import { getHyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { useParams } from "@tanstack/react-router";
import { ReactElement } from "react";
import { Helmet } from "react-helmet";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { PoolDetails } from "src/ui/markets/PoolDetails";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { Address } from "viem";

export function Market(): ReactElement {
  const { address, chainId } = useParams({ from: MARKET_DETAILS_ROUTE });
  const appConfig = useAppConfigForConnectedChain();
  const hyperdrive = getHyperdriveConfig({
    hyperdriveChainId: Number(chainId),
    hyperdriveAddress: address as Address,
    appConfig,
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
