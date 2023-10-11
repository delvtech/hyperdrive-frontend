/* eslint-disable react/jsx-key */
import { OpenShort } from "@hyperdrive/sdk";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as dnum from "dnum";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { useAccount } from "wagmi";
interface OpenOrdersTableProps {
  hyperdrive: Hyperdrive;
  shorts: OpenShort[];
}

const columnHelper = createColumnHelper<OpenShort>();
const columns = (hyperdrive: Hyperdrive) => [
  columnHelper.accessor("bondAmount", {
    header: `Size (hy${hyperdrive.baseToken.symbol})`,
    cell: (bondAmount) => {
      const bondAmountValue = bondAmount.getValue();
      return dnum.format([bondAmountValue, hyperdrive.baseToken.decimals], {
        digits: 2,
      });
    },
  }),
  columnHelper.accessor("baseAmountPaid", {
    header: `Amount Paid`,
    cell: (baseAmountPaid) => {
      const amountPaid = baseAmountPaid.getValue();
      return dnum.format([amountPaid, hyperdrive.baseToken.decimals], {
        digits: 4,
      });
    },
  }),
];
export function OpenShortsTable({
  hyperdrive,
  shorts,
}: OpenOrdersTableProps): ReactElement {
  const { address: account } = useAccount();

  const tableInstance = useReactTable({
    columns: columns(hyperdrive),
    data: shorts,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(shorts, "shorts");

  return (
    <div className="max-h-96 overflow-y-scroll">
      <table className="daisy-table mt-5">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="text-lg font-thin text-neutral-content"
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((row) => (
            <tr
              className="h-16 grid-cols-4 items-center text-sm text-base-content even:bg-secondary/5 md:text-h6"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => {
                return (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
