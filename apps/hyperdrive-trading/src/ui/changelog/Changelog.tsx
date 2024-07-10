import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useNavigate, useSearch } from "@tanstack/react-router";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement } from "react";
import { makeAddressUrl } from "src/blockexplorer/makeAddressUrl";
import { SupportedChainId } from "src/chains/supportedChains";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { Tabs } from "src/ui/base/components/Tabs/Tabs";
import { formatAddress } from "src/ui/base/formatting/formatAddress";
import { useReadRegistry } from "src/ui/registry/hooks/useReadRegistry";
import { Address } from "viem";
import { useChainId, usePublicClient } from "wagmi";

export function Changelog(): ReactElement {
  const navigate = useNavigate();
  const { tab = "pools", version } = useSearch({ from: "/changelog" });

  return (
    <div className="flex justify-center">
      <div className="mx-[4vw] max-w-screen-2xl">
        {/* Header */}
        <div className="mb-12 max-w-3xl text-center lg:text-left">
          <h1 className="gradient-text mb-4 text-h2 font-bold">Changelog</h1>
          <p className="text-neutral-content">
            Find the latest addresses and versions of the Hyperdrive smart
            contracts.
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
              content: (
                <>
                  <h1>Factories</h1>
                </>
              ),
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

type Pool = {
  address: Address;
  name: string;
  version: string;
  isPaused: boolean;
  factoryAddress: Address;
  deployerCoordinatorAddress: Address;
  baseToken: Address;
  vaultToken: Address;
};

const poolsColHelper = createColumnHelper<Pool>();

const poolsColumns = [
  poolsColHelper.accessor((row) => row.name, {
    id: "name",
    header: "Name",
  }),
  poolsColHelper.accessor((row) => row.address, {
    header: "Pool Address",
    cell: ({ getValue }) => <AddressCell address={getValue()} />,
  }),
  poolsColHelper.accessor((row) => row.version, {
    header: "Version",
  }),
  poolsColHelper.accessor((row) => row.isPaused, {
    header: "Paused",
  }),
  poolsColHelper.accessor((row) => row.factoryAddress, {
    header: "Factory",
    cell: ({ getValue }) => <AddressCell address={getValue()} />,
  }),
  poolsColHelper.accessor((row) => row.deployerCoordinatorAddress, {
    header: "Deployer Coordinator",
    cell: ({ getValue }) => <AddressCell address={getValue()} />,
  }),
  poolsColHelper.accessor((row) => row.baseToken, {
    header: "Base Token",
    cell: ({ getValue }) => <AddressCell address={getValue()} />,
  }),
  poolsColHelper.accessor((row) => row.vaultToken, {
    header: "Vault Token",
    cell: ({ getValue }) => <AddressCell address={getValue()} />,
  }),
];

function PoolsTable(): ReactElement {
  const { data = [], isFetching } = useRegistryPoolsQuery();
  const tableInstance = useReactTable({
    columns: poolsColumns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full overflow-x-auto">
      <table className="daisy-table daisy-table-zebra daisy-table-lg h-fit">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className={classNames(
                    "sticky top-0 z-10 h-10 rounded-box text-sm",
                    {
                      "min-w-52": header.id === "name",
                    },
                  )}
                  key={header.id}
                >
                  <div
                    className="font-normal text-neutral-content"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          className={classNames({
            "relative h-52": !tableInstance.getFilteredRowModel().rows.length,
          })}
        >
          {isFetching ? (
            <TableSkeleton numColumns={poolsColumns.length} numRows={5} />
          ) : (
            tableInstance.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className="h-20">
                  <>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      );
                    })}
                  </>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

function AddressCell({ address }: { address: Address }) {
  const chainId = useChainId() as SupportedChainId;
  return (
    <a
      href={makeAddressUrl(address, chainId)}
      target="_blank"
      rel="noreferrer"
      className="daisy-link-hover daisy-link"
    >
      {formatAddress(address)}
    </a>
  );
}

function useRegistryPoolsQuery(): UseQueryResult<Pool[], any> {
  const chainId = useChainId();
  const publicClient = usePublicClient();
  const registry = useReadRegistry();
  const queryEnabled = !!registry && !!publicClient;

  return useQuery({
    queryKey: ["registryPools", registry?.address, chainId],
    enabled: queryEnabled,
    placeholderData: [],
    queryFn: queryEnabled
      ? async () => {
          const pools = await registry.getInstances();
          const metas = await registry.getInstanceInfos(
            pools.map((pool) => pool.address),
          );

          return Promise.all(
            pools.map(async (pool, i): Promise<Pool> => {
              const { factory, name, version } = metas[i];
              const baseToken = await pool.getBaseToken();
              const vaultToken = await pool.getSharesToken();
              const marketState = await pool.getMarketState();
              const [deployerCoordinator] =
                await factory.getDeployerCoordinatorAddresses({
                  instances: [pool.address],
                });

              return {
                address: pool.address,
                name: name,
                version: version,
                baseToken: baseToken.address,
                vaultToken: vaultToken.address,
                deployerCoordinatorAddress: deployerCoordinator,
                factoryAddress: factory.address,
                isPaused: marketState.isPaused,
                // TODO: When we're ready to sunset pools, we'll need to
                // implement a data schema that can be used to determine this.
                // status: "active",
              };
            }),
          );
        }
      : undefined,
  });
}
