import { ReadRegistry } from "@delvtech/hyperdrive-viem";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { getPublicClient } from "@wagmi/core";
import classNames from "classnames";
import { ReactElement } from "react";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { wagmiConfig } from "src/network/wagmiClient";
import { Status, decodeInstanceData } from "src/registry/data";
import { sdkCache } from "src/sdk/sdkCache";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { AddressCell } from "src/ui/chainlog/AddressCell";
import { ChainCell } from "src/ui/chainlog/ChainCell";
import { PausedCell } from "src/ui/chainlog/PausedCell";
import { StatusCell } from "src/ui/chainlog/StatusCell";
import { Address, PublicClient } from "viem";
import { usePublicClient } from "wagmi";

export function PoolsTable(): ReactElement {
  const { data = [], isFetching } = usePoolsQuery();
  const tableInstance = useReactTable({
    columns: poolCols,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full overflow-x-auto">
      {!isFetching && !data.length ? (
        <div className="px-10 py-20">
          <NonIdealState
            heading="No pools found"
            text="There are no pools registered on this chain."
          />
        </div>
      ) : (
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
              <TableSkeleton numColumns={poolCols.length} numRows={5} />
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
      )}
    </div>
  );
}

const poolColHelper = createColumnHelper<Pool>();

const poolCols = [
  poolColHelper.accessor((row) => row.name, {
    id: "name",
    header: "Name",
    cell: ({ getValue, row }) => (
      <Link
        className="daisy-link-hover daisy-link"
        to={`/market/$chainId/$address`}
        params={{
          address: row.original.address,
          chainId: row.original.chainId.toString(),
        }}
      >
        {getValue()}
      </Link>
    ),
  }),
  poolColHelper.accessor((row) => row.chainId, {
    id: "chain",
    header: "Chain",
    cell: ({ getValue }) => <ChainCell chainId={getValue()} />,
  }),
  poolColHelper.accessor((row) => row.address, {
    header: "Address",
    cell: ({ getValue, row }) => (
      <AddressCell address={getValue()} chainId={row.original.chainId} />
    ),
  }),
  poolColHelper.accessor((row) => row.version, {
    header: "Version",
  }),
  poolColHelper.accessor((row) => row.isPaused, {
    header: "Paused",
    cell: ({ getValue }) => <PausedCell isPaused={getValue()} />,
  }),
  poolColHelper.accessor((row) => row.status, {
    header: "Status",
    cell: ({ getValue }) => <StatusCell status={getValue()} />,
  }),
  poolColHelper.accessor((row) => row.factoryAddress, {
    header: "Factory",
    cell: ({ getValue, row }) => (
      <AddressCell address={getValue()} chainId={row.original.chainId} />
    ),
  }),
  poolColHelper.accessor((row) => row.deployerCoordinatorAddress, {
    header: "Deployer Coordinator",
    cell: ({ getValue, row }) => (
      <AddressCell address={getValue()} chainId={row.original.chainId} />
    ),
  }),
  poolColHelper.accessor((row) => row.baseToken, {
    header: "Base Token",
    cell: ({ getValue, row }) => (
      <AddressCell address={getValue()} chainId={row.original.chainId} />
    ),
  }),
  poolColHelper.accessor((row) => row.vaultToken, {
    header: "Vault Token",
    cell: ({ getValue, row }) => (
      <AddressCell address={getValue()} chainId={row.original.chainId} />
    ),
  }),
];

interface Pool {
  name: string;
  address: Address;
  chainId: number;
  version: string;
  isPaused: boolean;
  status: Status;
  factoryAddress: Address;
  deployerCoordinatorAddress: Address;
  baseToken: Address;
  vaultToken: Address;
}

function usePoolsQuery(): UseQueryResult<Pool[], any> {
  const appConfig = useAppConfig();
  const publicClient = usePublicClient();
  const queryEnabled = !!publicClient;

  return useQuery({
    queryKey: makeQueryKey("chainlog", { tab: "pools" }),
    placeholderData: [],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          // registries and clients for each chain
          const chains: Map<
            number,
            {
              registry: ReadRegistry;
              publicClient: PublicClient;
            }
          > = new Map();

          for (const [chainIdString, address] of Object.entries(
            appConfig.registries,
          )) {
            const chainId = +chainIdString;

            // TODO: Cleanup type casting
            const publicClient = getPublicClient(wagmiConfig as any, {
              chainId,
            }) as PublicClient;

            chains.set(chainId, {
              publicClient,
              registry: new ReadRegistry({
                address,
                publicClient,
                cache: sdkCache,
                namespace: chainIdString,
              }),
            });
          }

          return Promise.all(
            appConfig.hyperdrives.map(async (hyperdrive): Promise<Pool> => {
              const { registry, publicClient } =
                chains.get(hyperdrive.chainId) || {};

              // Return available static data if no registry is found
              if (!registry || !publicClient) {
                console.error(
                  `No registry found for chainId ${hyperdrive.chainId}`,
                );
                return {
                  name: hyperdrive.name,
                  address: hyperdrive.address,
                  chainId: hyperdrive.chainId,
                  version: hyperdrive.version,
                  isPaused: false,
                  status: "active",
                  factoryAddress: "0x",
                  deployerCoordinatorAddress: "0x",
                  baseToken: hyperdrive.poolConfig.baseToken,
                  vaultToken: hyperdrive.poolConfig.vaultSharesToken,
                };
              }

              const { data, factory, name, version } =
                await registry.getInstanceInfo(hyperdrive.address);
              const readHyperdrive = await getReadHyperdrive({
                appConfig,
                hyperdriveAddress: hyperdrive.address,
                publicClient,
              });

              const { baseToken, vaultSharesToken: vaultToken } =
                await readHyperdrive.getPoolConfig();

              const { isPaused } = await readHyperdrive.getMarketState();
              const { status } = decodeInstanceData(data);
              const [deployerCoordinatorAddress] =
                await factory.getDeployerCoordinatorAddresses({
                  instances: [hyperdrive.address],
                });
              // console.log(
              //   "deployerCoordinatorAddress",
              //   deployerCoordinatorAddress,
              // );

              const result = {
                name,
                address: hyperdrive.address,
                chainId: hyperdrive.chainId,
                version,
                isPaused,
                status,
                factoryAddress: factory.address,
                deployerCoordinatorAddress,
                baseToken,
                vaultToken,
              };

              return result;
            }),
          );
        }
      : undefined,
  });
}
