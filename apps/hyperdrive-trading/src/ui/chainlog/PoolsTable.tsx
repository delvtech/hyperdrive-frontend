import { UseQueryResult, useQuery } from "@tanstack/react-query";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement } from "react";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { useReadRegistry } from "src/ui/registry/hooks/useReadRegistry";
import { Address } from "viem";
import { useChainId, usePublicClient } from "wagmi";
import { AddressCell } from "./AddressCell";

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
  }),
  poolColHelper.accessor((row) => row.address, {
    header: "Address",
    cell: ({ getValue }) => <AddressCell address={getValue()} />,
  }),
  poolColHelper.accessor((row) => row.version, {
    header: "Version",
  }),
  poolColHelper.accessor((row) => row.isPaused, {
    header: "Paused",
  }),
  poolColHelper.accessor((row) => row.factoryAddress, {
    header: "Factory",
    cell: ({ getValue }) => <AddressCell address={getValue()} />,
  }),
  poolColHelper.accessor((row) => row.deployerCoordinatorAddress, {
    header: "Deployer Coordinator",
    cell: ({ getValue }) => <AddressCell address={getValue()} />,
  }),
  poolColHelper.accessor((row) => row.baseToken, {
    header: "Base Token",
    cell: ({ getValue }) => <AddressCell address={getValue()} />,
  }),
  poolColHelper.accessor((row) => row.vaultToken, {
    header: "Vault Token",
    cell: ({ getValue }) => <AddressCell address={getValue()} />,
  }),
];

type Pool = {
  name: string;
  address: Address;
  version: string;
  isPaused: boolean;
  factoryAddress: Address;
  deployerCoordinatorAddress: Address;
  baseToken: Address;
  vaultToken: Address;
  // TODO: When we're ready to sunset pools, we'll need to implement a meta data
  // schema that can be used to determine status.
  // status: "active" | "sunset",
};

function usePoolsQuery(): UseQueryResult<Pool[], any> {
  const chainId = useChainId();
  const publicClient = usePublicClient();
  const registry = useReadRegistry();
  const queryEnabled = !!registry && !!publicClient;

  return useQuery({
    queryKey: ["chainlog", "pools", registry?.address, chainId],
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
                name: name,
                address: pool.address,
                version: version,
                isPaused: marketState.isPaused,
                factoryAddress: factory.address,
                deployerCoordinatorAddress: deployerCoordinator,
                baseToken: baseToken.address,
                vaultToken: vaultToken.address,
              };
            }),
          );
        }
      : undefined,
  });
}
