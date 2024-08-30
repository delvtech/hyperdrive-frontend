import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { ReactElement } from "react";
import { makeAddressUrl } from "src/blockexplorer/makeAddressUrl";
import { SupportedChainId } from "src/chains/supportedChains";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Tabs } from "src/ui/base/components/Tabs/Tabs";
import { PoolsTable } from "src/ui/chainlog/PoolsTable";
import { useChainId } from "wagmi";
import { FactoriesTable } from "./FactoriesTable";

export function Chainlog(): ReactElement {
  const navigate = useNavigate();
  const chainId = useChainId();
  const { registries } = useAppConfig();
  const registryAddress = registries[chainId];
  const { tab = "pools", version } = useSearch({ from: "/chainlog" });

  return (
    <div className="flex w-full justify-center">
      <div className="mx-[4vw] w-full">
        {/* Header */}
        <div className="mb-12 max-w-4xl text-center lg:text-left">
          <h1 className="gradient-text mb-4 text-h2 font-bold">Chainlog</h1>
          <p className="text-neutral-content">
            Find the latest information on pools and factories from the{" "}
            <a
              href={makeAddressUrl(
                registryAddress,
                chainId as SupportedChainId,
              )}
              target="_blank"
              rel="noreferrer"
              className="daisy-link-hover daisy-link inline-flex items-center gap-1"
            >
              Hyperdrive Registry.
              <ArrowTopRightOnSquareIcon className="size-4" />
            </a>
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
                  search: () => ({ tab: "pools", version }),
                });
              },
            },
            {
              content: <FactoriesTable />,
              id: "factories",
              label: "Factories",
              onClick: () => {
                navigate({
                  search: () => ({ tab: "factories", version }),
                });
              },
            },
          ]}
        />
      </div>
    </div>
  );
}
