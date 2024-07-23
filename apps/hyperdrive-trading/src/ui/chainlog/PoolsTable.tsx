import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement } from "react";
import { makeQueryKey } from "src/base/makeQueryKey";
import { Status, decodeInstanceData } from "src/registry/data";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { AddressCell } from "src/ui/chainlog/AddressCell";
import { PausedCell } from "src/ui/chainlog/PausedCell";
import { StatusCell } from "src/ui/chainlog/StatusCell";
import { useReadRegistry } from "src/ui/registry/hooks/useReadRegistry";
import { Address } from "viem";
import { useChainId } from "wagmi";

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
        to={`/market/$address`}
        params={{ address: row.original.address }}
      >
        {getValue()}
      </Link>
    ),
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
    cell: ({ getValue }) => <PausedCell isPaused={getValue()} />,
  }),
  poolColHelper.accessor((row) => row.status, {
    header: "Status",
    cell: ({ getValue }) => <StatusCell status={getValue()} />,
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

interface Pool {
  name: string;
  address: Address;
  version: string;
  isPaused: boolean;
  status: Status;
  factoryAddress: Address;
  deployerCoordinatorAddress: Address;
  baseToken: Address;
  vaultToken: Address;
}

function usePoolsQuery(): UseQueryResult<Pool[], any> {
  const chainId = useChainId();
  const registry = useReadRegistry();
  const queryEnabled = !!registry;

  return useQuery({
    queryKey: makeQueryKey("chainlog", {
      tab: "pools",
      registry: registry?.address,
      chainId,
    }),
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
              const { data, factory, name, version } = metas[i];
              const baseToken = await pool.getBaseToken();
              const vaultToken = await pool.getSharesToken();
              const { isPaused } = await pool.getMarketState();
              const { status } = decodeInstanceData(data);
              const [deployerCoordinatorAddress] =
                await factory.getDeployerCoordinatorAddresses({
                  instances: [pool.address],
                });

              return {
                name,
                address: pool.address,
                version,
                isPaused,
                status,
                factoryAddress: factory.address,
                deployerCoordinatorAddress,
                baseToken: baseToken.address,
                vaultToken: vaultToken.address,
              };
            }),
          );
        }
      : undefined,
  });
}
