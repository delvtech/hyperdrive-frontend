import { UseQueryResult, useQuery } from "@tanstack/react-query";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement } from "react";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { useReadRegistry } from "src/ui/registry/hooks/useReadRegistry";
import { Address } from "viem";
import { useChainId, usePublicClient } from "wagmi";
import { AddressCell } from "./AddressCell";

export function FactoriesTable(): ReactElement {
  const { data = [], isFetching } = useFactoriesQuery();
  const tableInstance = useReactTable({
    columns: factoryCols,
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
    </div>
  );
}

const factoryColHelper = createColumnHelper<Factory>();

const factoryCols = [
  factoryColHelper.accessor((row) => row.name, {
    id: "name",
    header: "Name",
  }),
  factoryColHelper.accessor((row) => row.address, {
    header: "Address",
    cell: ({ getValue }) => <AddressCell address={getValue()} />,
  }),
  factoryColHelper.accessor((row) => row.version, {
    header: "Version",
  }),
];

type Factory = {
  name: string;
  address: Address;
  version: string;
  // TODO: When we're ready to sunset pools, we'll need to implement a meta data
  // schema that can be used to determine status.
  // status: "active" | "sunset",
};

function useFactoriesQuery(): UseQueryResult<Factory[], any> {
  const chainId = useChainId();
  const publicClient = usePublicClient();
  const registry = useReadRegistry();
  const queryEnabled = !!registry && !!publicClient;

  return useQuery({
    queryKey: ["chainlog", "factories", registry?.address, chainId],
    enabled: queryEnabled,
    placeholderData: [],
    queryFn: queryEnabled
      ? async () => {
          const factories = await registry.getFactories();
          const metas = await registry.getFactoryInfos(
            factories.map((factory) => factory.address),
          );

          return Promise.all(
            factories.map(async (factory, i): Promise<Factory> => {
              const { name, version } = metas[i];

              return {
                name: name,
                address: factory.address,
                version: version,
              };
            }),
          );
        }
      : undefined,
  });
}
