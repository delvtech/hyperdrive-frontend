/* eslint-disable react/jsx-key */
import { Long } from "@hyperdrive/sdk";
import { useQuery } from "@tanstack/react-query";
import {
  Row,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { calculateAnnualizedPercentageChange } from "src/base/calculateAnnualizedPercentageChange";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { makeQueryKey } from "src/base/makeQueryKey";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { CloseLongModalButton } from "src/ui/hyperdrive/longs/CloseLongModalButton/CloseLongModalButton";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import { parseUnits } from "viem";
import { useAccount } from "wagmi";

interface OpenLongsTableProps {
  hyperdrive: Hyperdrive;
}

const columnHelper = createColumnHelper<Long>();

function getColumns(hyperdrive: Hyperdrive) {
  return [
    columnHelper.display({
      header: `ID`,
      cell: ({ row }) => <span>{Number(row.original.maturity)}</span>,
    }),
    columnHelper.display({
      header: `Matures on`,
      cell: ({ row }) => {
        const maturity = new Date(Number(row.original.maturity * 1000n));
        return <span>{maturity.toLocaleDateString()}</span>;
      },
    }),
    columnHelper.display({
      id: "size",
      header: `Size (hy${hyperdrive.baseToken.symbol})`,
      cell: ({ row }) => {
        return (
          <span>
            {formatBalance({
              balance: row.original.bondAmount,
              decimals: hyperdrive.baseToken.decimals,
              places: 2,
            })}
          </span>
        );
      },
    }),
    columnHelper.accessor("baseAmountPaid", {
      id: "amountPaid",
      header: `Amount paid (${hyperdrive.baseToken.symbol})`,
      cell: (baseAmountPaid) => {
        const amountPaid = baseAmountPaid.getValue();
        return formatBalance({
          balance: amountPaid,
          decimals: hyperdrive.baseToken.decimals,
          places: 2,
        });
      },
    }),
    columnHelper.display({
      id: "fixedRate",
      header: `Fixed rate (APR)`,
      cell: ({ row }) => {
        return `${calculateAnnualizedPercentageChange({
          amountBefore: row.original.baseAmountPaid,
          amountAfter: row.original.bondAmount,
          days: convertMillisecondsToDays(hyperdrive.termLengthMS),
        })}%`;
      },
    }),
    columnHelper.display({
      id: "value",
      header: `Market value (${hyperdrive.baseToken.symbol})`,
      cell: ({ row }) => {
        return <CurrentValueCell hyperdrive={hyperdrive} row={row} />;
      },
    }),
  ];
}
export function OpenLongsTable({
  hyperdrive,
}: OpenLongsTableProps): ReactElement {
  const { address: account } = useAccount();

  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: longs } = useQuery({
    queryKey: makeQueryKey("longPositions", { account }),
    queryFn: queryEnabled
      ? () => readHyperdrive?.getOpenLongs({ account })
      : undefined,
    enabled: queryEnabled,
  });
  const tableInstance = useReactTable({
    columns: getColumns(hyperdrive),
    data: longs || [],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-h-96 overflow-y-scroll">
      {/* Modal needs to be rendered outside of the table so that dialog can be used. Otherwise react throws a dom nesting error */}
      {tableInstance.getRowModel().rows.map((row) => {
        const modalId = `${row.original.assetId}`;
        return (
          <CloseLongModalButton
            key={modalId}
            hyperdrive={hyperdrive}
            modalId={modalId}
            long={row.original}
          />
        );
      })}
      <table className="daisy-table-zebra daisy-table daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
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
          {tableInstance.getRowModel().rows.map((row) => {
            return (
              <tr
                key={row.id}
                className="daisy-hover h-16 cursor-pointer grid-cols-4 items-center"
                onClick={() => {
                  const modalId = `${row.original.assetId}`;
                  (window as any)[modalId].showModal();
                }}
              >
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
          })}
        </tbody>
      </table>
    </div>
  );
}

function CurrentValueCell({
  row,
  hyperdrive,
}: {
  row: Row<Long>;
  hyperdrive: Hyperdrive;
}) {
  const { address: account } = useAccount();
  const { baseAmountOut } = usePreviewCloseLong({
    hyperdriveAddress: hyperdrive.address,
    maturityTime: row.original.maturity,
    bondAmountIn: row.original.bondAmount,
    minBaseAmountOut: parseUnits("0", hyperdrive.baseToken.decimals),
    destination: account,
  });
  const currentValue =
    baseAmountOut &&
    formatBalance({
      balance: baseAmountOut,
      decimals: hyperdrive.baseToken.decimals,
      places: 4,
    });

  const isPositiveChangeInValue =
    baseAmountOut && baseAmountOut > row.original.baseAmountPaid;

  return (
    <div className="flex items-center gap-1">
      <span className="font-bold">{currentValue?.toString()}</span>
      <div
        data-tip={"Profit/Loss since open"}
        className={classNames(
          "daisy-badge daisy-badge-md daisy-tooltip inline-flex",
          { "text-success": isPositiveChangeInValue },
          { "text-error": !isPositiveChangeInValue },
        )}
      >
        {isPositiveChangeInValue ? "+" : ""}
        {baseAmountOut
          ? `${formatBalance({
              balance: baseAmountOut - row.original.baseAmountPaid,
              decimals: hyperdrive.baseToken.decimals,
              places: 4,
            })} ${hyperdrive.baseToken.symbol}`
          : undefined}
      </div>
    </div>
  );
}
