import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Long, calculateFixedRate } from "@hyperdrive/sdk";
import { useQuery } from "@tanstack/react-query";
import {
  Row,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { calculateAnnualizedPercentageChange } from "src/base/calculateAnnualizedPercentageChange";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { makeQueryKey } from "src/base/makeQueryKey";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolConfig } from "src/ui/hyperdrive/hooks/usePoolConfig";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { CloseLongModalButton } from "src/ui/hyperdrive/longs/CloseLongModalButton/CloseLongModalButton";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import { MaturesOnCell } from "src/ui/portfolio/MaturesOnCell/MaturesOnCell";
import { parseUnits } from "viem";
import { useAccount } from "wagmi";
interface OpenLongsTableProps {
  hyperdrive: Hyperdrive;
}

const columnHelper = createColumnHelper<Long>();

function getColumns({ hyperdrive }: { hyperdrive: Hyperdrive }) {
  return [
    columnHelper.display({
      header: `ID`,
      cell: ({ row }) => <span>{Number(row.original.maturity)}</span>,
    }),
    columnHelper.accessor("assetId", {
      id: "maturationDate",
      header: `Matures on`,
      cell: ({ row }) => {
        return <MaturesOnCell maturity={row.original.maturity} />;
      },
    }),
    columnHelper.accessor("bondAmount", {
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
    columnHelper.accessor("assetId", {
      id: "fixedRate",
      header: `Fixed rate (APR)`,
      cell: ({ row }) => {
        return <FixedRateCell hyperdrive={hyperdrive} row={row} />;
      },
      sortingFn: (rowA, rowB) => {
        const aFixedRate = calculateAnnualizedPercentageChange({
          amountBefore: rowA.original.baseAmountPaid,
          amountAfter: rowA.original.bondAmount,
          days: convertMillisecondsToDays(hyperdrive.termLengthMS),
        });
        const bFixedRate = calculateAnnualizedPercentageChange({
          amountBefore: rowB.original.baseAmountPaid,
          amountAfter: rowB.original.bondAmount,
          days: convertMillisecondsToDays(hyperdrive.termLengthMS),
        });
        return aFixedRate - bFixedRate;
      },
    }),
    columnHelper.display({
      id: "value",
      header: `Current value (${hyperdrive.baseToken.symbol})`,
      cell: ({ row }) => {
        return <CurrentValueCell hyperdrive={hyperdrive} row={row} />;
      },
    }),
  ];
}

function FixedRateCell({
  row,
  hyperdrive,
}: {
  row: Row<Long>;
  hyperdrive: Hyperdrive;
}) {
  const { poolConfig } = usePoolConfig(hyperdrive.address);
  const { baseAmountPaid, bondAmount } = row.original;

  const yieldAfterFlatFee = calculateFixedRate({
    flatFee: poolConfig?.fees.flat || 0n,
    bondAmount,
    baseAmountPaid,
    decimals: hyperdrive.baseToken.decimals,
  });

  return (
    <div className="flex flex-col gap-1">
      <span className="ml-2 font-bold">
        {calculateAnnualizedPercentageChange({
          amountBefore: row.original.baseAmountPaid,
          amountAfter: row.original.bondAmount,
          days: convertMillisecondsToDays(hyperdrive.termLengthMS),
        }).toFixed(2)}
        %
      </span>
      <div
        data-tip={"Yield after fees if held to maturity"}
        className={
          "daisy-badge daisy-badge-md daisy-tooltip inline-flex text-success"
        }
      >
        <span>{"+"}</span>
        {formatBalance({
          balance: yieldAfterFlatFee,
          decimals: hyperdrive.baseToken.decimals,
          places: 4,
        })}{" "}
        {hyperdrive.baseToken.symbol}
      </div>
    </div>
  );
}

export function OpenLongsTable({
  hyperdrive,
}: OpenLongsTableProps): ReactElement {
  const { address: account } = useAccount();

  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  // Get the current block and check it's timestamp agains the
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: longs } = useQuery({
    queryKey: makeQueryKey("longPositions", { account }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getOpenLongs({ account })
      : undefined,
    enabled: queryEnabled,
  });
  const tableInstance = useReactTable({
    columns: getColumns({ hyperdrive }),
    data: longs || [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
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
                <th className="sticky top-0 z-10 bg-base-100" key={header.id}>
                  <div
                    className={classNames({
                      "flex cursor-pointer select-none items-center gap-2":
                        header.column.getCanSort(),
                    })}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {{
                      asc: <ChevronUpIcon height={15} />,
                      desc: <ChevronDownIcon height={15} />,
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
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
                className="daisy-hover h-16 cursor-pointer items-center transition duration-300 ease-in-out"
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
      {!longs?.length ? <NonIdealState /> : null}
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
  const { baseAmountOut, previewCloseLongStatus } = usePreviewCloseLong({
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
  if (previewCloseLongStatus === "error") {
    return <div>Insufficient Liquidity</div>;
  }
  return (
    <div className="flex flex-col gap-1">
      <span className="ml-2 font-bold">{currentValue?.toString()}</span>
      <div
        data-tip={"Profit/Loss since open"}
        className={classNames(
          "daisy-badge daisy-badge-md daisy-tooltip inline-flex",
          { "text-success": isPositiveChangeInValue },
          { "text-error": !isPositiveChangeInValue },
        )}
      >
        <span>{isPositiveChangeInValue ? "+" : ""}</span>
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
