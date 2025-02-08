import { ReadRegistry } from "@delvtech/hyperdrive-js";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement } from "react";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { getDrift } from "src/network/drift";
import { getStatus, Status } from "src/registry/data";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { AddressCell } from "src/ui/chainlog/AddressCell";
import { ChainCell } from "src/ui/chainlog/ChainCell";
import { PausedCell } from "src/ui/chainlog/PausedCell";
import { StatusCell } from "src/ui/chainlog/StatusCell";
import { Address } from "viem";

export function PoolsTable(): ReactElement {
  const { data = [], isFetching } = usePoolsQuery();
  const tableInstance = useReactTable({
    columns: poolCols,
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      sorting: [
        {
          id: "chain",
          desc: false,
        },
      ],
    },
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
                {headerGroup.headers.map((header) => {
                  const sortDirection = header.column.getIsSorted();
                  return (
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
                        className={classNames(
                          "flex items-center gap-1 font-normal text-neutral-content",
                          {
                            "flex cursor-pointer select-none items-center gap-2":
                              header.column.getCanSort(),
                          },
                        )}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {sortDirection === "asc" && (
                          <ChevronUpIcon height={15} />
                        )}
                        {sortDirection === "desc" && (
                          <ChevronDownIcon height={15} />
                        )}
                      </div>
                    </th>
                  );
                })}
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
    sortingFn: "alphanumeric",
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

function usePoolsQuery(): UseQueryResult<Pool[]> {
  const connectedAppConfig = useAppConfigForConnectedChain();
  const chainIds = Object.keys(connectedAppConfig.registries).map(Number);

  return useQuery({
    queryKey: makeQueryKey2({
      namespace: "chainlog",
      queryId: "pools",
      params: {
        chainIds,
      },
    }),
    placeholderData: [],
    queryFn: async () =>
      // Wrapping these RPC requests in Promise.all and using `.then()` chaining
      // allows viem to batch requests via MultiCall3 and reduces the number of
      // requests by 80% and data transfer by 65%.
      Promise.all(
        chainIds.map(async (chainId) => {
          const registry = new ReadRegistry({
            address: connectedAppConfig.registries[chainId],
            drift: getDrift({ chainId }),
          });

          return registry.getInstances().then((instances) => {
            return Promise.all(
              instances.map((pool) => {
                return registry
                  .getInstanceInfo(pool.address)
                  .then(({ data, factory, name, version }) => {
                    const status = getStatus(data);

                    return Promise.all([
                      pool.getPoolConfig(),
                      pool.getMarketState(),
                      factory.getDeployerCoordinatorAddresses({
                        instances: [pool.address],
                      }),
                    ]).then(
                      ([
                        { baseToken, vaultSharesToken },
                        { isPaused },
                        [deployerCoordinatorAddress],
                      ]) => ({
                        name,
                        address: pool.address,
                        chainId,
                        version,
                        isPaused,
                        status,
                        factoryAddress: factory.address,
                        deployerCoordinatorAddress,
                        baseToken,
                        vaultToken: vaultSharesToken,
                      }),
                    );
                  });
              }),
            );
          });
        }),
      ).then((groupedPools) => groupedPools.flat()),
  });
}
