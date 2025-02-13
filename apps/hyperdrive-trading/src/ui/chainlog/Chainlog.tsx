import { makeAddressUrl } from "@delvtech/hyperdrive-appconfig";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { ReactElement } from "react";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { Tabs } from "src/ui/base/components/Tabs/Tabs";
import { PoolsTable } from "src/ui/chainlog/PoolsTable";
import { CHAINLOG_ROUTE } from "src/ui/chainlog/routes";
import { useChainId } from "wagmi";
import { FactoriesTable } from "./FactoriesTable";

export function Chainlog(): ReactElement {
  const navigate = useNavigate();
  const chainId = useChainId();
  const appConfig = useAppConfigForConnectedChain();
  const registryAddress = appConfig.registries[chainId];
  const { tab = "pools", version } = useSearch({ from: CHAINLOG_ROUTE });

  return (
    <div className="flex w-full justify-center">
      <div className="mx-[4vw] w-full">
        {/* Header */}
        <div className="mb-12 max-w-4xl text-center lg:text-left">
          <h1 className="gradient-text mb-4 text-h2 font-bold">Chainlog</h1>
          <p className="text-neutral-content">
            Find the latest information on pools and factories from the{" "}
            {/* TODO: Remove this link and add a registries tab since there's at least one for each chain. */}
            <ExternalLink
              href={makeAddressUrl(registryAddress, appConfig.chains[chainId])}
              newTab
              rel="noreferrer"
              className="daisy-link-hover daisy-link inline-flex items-center gap-1"
            >
              Hyperdrive Registry.
              <ArrowTopRightOnSquareIcon className="size-4" />
            </ExternalLink>
          </p>
        </div>

        {/* Changelog Tabs */}
        <Tabs
          activeTabId={tab}
          tabs={[
            {
              content: <PoolsTable />,
              id: "pools",
              label: "Pools",
              onClick: () => {
                navigate({
                  to: CHAINLOG_ROUTE,
                  search: { tab: "pools", version },
                });
              },
            },
            {
              content: <FactoriesTable />,
              id: "factories",
              label: "Factories",
              onClick: () => {
                navigate({
                  to: CHAINLOG_ROUTE,
                  search: { tab: "factories", version },
                });
              },
            },
          ]}
        />
      </div>
    </div>
  );
}
