import { ReadRegistry } from "@delvtech/hyperdrive-js";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
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
import { Status, getStatus } from "src/registry/data";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { AddressCell } from "src/ui/chainlog/AddressCell";
import { ChainCell } from "src/ui/chainlog/ChainCell";
import { StatusCell } from "src/ui/chainlog/StatusCell";
import { Address } from "viem";

export function FactoriesTable(): ReactElement {
  const { data = [], isFetching } = useFactoriesQuery();
  const tableInstance = useReactTable({
    columns: factoryCols,
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
            heading="No factories found"
            text="There are no factories registered on this chain."
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
              <TableSkeleton numColumns={factoryCols.length} numRows={5} />
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

const factoryColHelper = createColumnHelper<Factory>();

const factoryCols = [
  factoryColHelper.accessor((row) => row.name, {
    id: "name",
    header: "Name",
  }),
  factoryColHelper.accessor((row) => row.chainId, {
    id: "chain",
    header: "Chain",
    cell: ({ getValue }) => <ChainCell chainId={getValue()} />,
    sortingFn: "alphanumeric",
  }),
  factoryColHelper.accessor((row) => row.address, {
    header: "Address",
    cell: ({ getValue, row }) => (
      <AddressCell address={getValue()} chainId={row.original.chainId} />
    ),
  }),
  factoryColHelper.accessor((row) => row.version, {
    header: "Version",
  }),
  factoryColHelper.accessor((row) => row.status, {
    header: "Status",
    cell: ({ getValue }) => <StatusCell status={getValue()} />,
  }),
];

interface Factory {
  name: string;
  address: Address;
  chainId: number;
  version: string;
  status: Status;
}

function useFactoriesQuery(): UseQueryResult<Factory[]> {
  const connectedAppConfig = useAppConfigForConnectedChain();
  const chainIds = Object.keys(connectedAppConfig.registries).map(Number);

  return useQuery({
    queryKey: makeQueryKey2({
      namespace: "chainlog",
      queryId: "factories",
      params: {
        chainIds,
      },
    }),
    placeholderData: [],
    queryFn: async () => {
      const factories: Factory[] = [];

      await Promise.all(
        chainIds.map(async (chainId) => {
          const registry = new ReadRegistry({
            address: connectedAppConfig.registries[chainId],
            drift: getDrift({ chainId }),
          });

          const factoryAddresses = await registry.getFactoryAddresses();
          const metas = await registry.getFactoryInfos(factoryAddresses);

          for (const [i, { data, name, version }] of metas.entries()) {
            const status = getStatus(data);
            factories.push({
              name,
              address: factoryAddresses[i],
              chainId,
              version,
              status,
            });
          }
        }),
      );

      return factories;
    },
  });
}
