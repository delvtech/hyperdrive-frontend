import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {
  calculateFixedRateFromOpenLong,
  calculateMatureLongYieldAfterFees,
  Long,
} from "@hyperdrive/sdk";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement } from "react";
import { calculateAnnualizedPercentageChange } from "src/base/calculateAnnualizedPercentageChange";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { formatRate } from "src/base/formatRate";
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { usePoolConfig } from "src/ui/hyperdrive/hooks/usePoolConfig";
import { CloseLongModalButton } from "src/ui/hyperdrive/longs/CloseLongModalButton/CloseLongModalButton";
import { useOpenLongs } from "src/ui/hyperdrive/longs/hooks/useOpenLongs";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import { MaturesOnCell } from "src/ui/portfolio/MaturesOnCell/MaturesOnCell";
import { parseUnits } from "viem";
import { useAccount } from "wagmi";
interface OpenLongsTableProps {
  hyperdrive: HyperdriveConfig;
}

const columnHelper = createColumnHelper<Long>();

function formatOpenLongMobileColumnData(
  row: Long,
  hyperdrive: HyperdriveConfig,
) {
  return [
    {
      name: "Matures on",
      value: <MaturesOnCell maturity={row.maturity} />,
    },
    {
      name: `Size (hy${hyperdrive.baseToken.symbol})`,
      value: (
        <span>
          {formatBalance({
            balance: row.bondAmount,
            decimals: hyperdrive.baseToken.decimals,
            places: 2,
          })}
        </span>
      ),
    },
    {
      name: `Paid (${hyperdrive.baseToken.symbol})`,
      value: formatBalance({
        balance: row.baseAmountPaid,
        decimals: hyperdrive.baseToken.decimals,
        places: 2,
      }),
    },
    {
      name: "Fixed rate (APR)",
      value: <FixedRateCell hyperdrive={hyperdrive} row={row} />,
    },
    {
      name: `Current value`,
      value: <CurrentValueCell hyperdrive={hyperdrive} row={row} />,
    },
  ];
}

function getColumns({ hyperdrive }: { hyperdrive: HyperdriveConfig }) {
  return [
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
        return <FixedRateCell hyperdrive={hyperdrive} row={row.original} />;
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
        return <CurrentValueCell hyperdrive={hyperdrive} row={row.original} />;
      },
    }),
  ];
}

function getMobileColumns({ hyperdrive }: { hyperdrive: HyperdriveConfig }) {
  return [
    columnHelper.display({
      id: "ColumnNames",
      cell: ({ row }) => {
        const data = formatOpenLongMobileColumnData(row.original, hyperdrive);
        return (
          <ul className="flex flex-col items-start gap-1 text-neutral-content">
            {data.map((column) => (
              <li key={column.name}>{column.name}</li>
            ))}
          </ul>
        );
      },
    }),
    columnHelper.display({
      id: "ColumnValues",
      cell: ({ row }) => {
        const data = formatOpenLongMobileColumnData(row.original, hyperdrive);
        return (
          <ul className="flex flex-col items-start gap-1">
            {data.map((column) => (
              <li className="flex flex-row" key={column.name}>
                {column.value}
              </li>
            ))}
          </ul>
        );
      },
    }),
  ];
}
export function OpenLongsTable({
  hyperdrive,
}: OpenLongsTableProps): ReactElement {
  const { address: account } = useAccount();
  const isSmallScreenView = useIsTailwindSmallScreen();
  const { openLongs, openLongsStatus } = useOpenLongs({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const tableInstance = useReactTable({
    columns: isSmallScreenView
      ? getMobileColumns({ hyperdrive })
      : getColumns({ hyperdrive }),
    data: openLongs || [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (!account) {
    return (
      <div className="my-28">
        <NonIdealState
          heading="No wallet connected"
          text="Connect your wallet to view your Longs."
          action={<ConnectWalletButton />}
        />
      </div>
    );
  }

  if (!openLongs?.length) {
    return (
      <div className="my-28">
        <NonIdealState
          heading="You have no open Long positions"
          text="Open a Long, switch wallets, or view Closed positions instead"
        />
      </div>
    );
  }

  return (
    <div className="max-h-96 overflow-y-auto overflow-x-clip">
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
      <table className="daisy-table daisy-table-zebra daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="sticky z-10 font-normal text-gray-400"
                  key={header.id}
                >
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
          {openLongsStatus === "loading" ? (
            <TableSkeleton numColumns={6} />
          ) : (
            tableInstance.getRowModel().rows.map((row) => {
              return (
                <tr
                  key={row.id}
                  className="daisy-hover h-24 cursor-pointer items-center transition duration-300 ease-in-out"
                  onClick={() => {
                    const modalId = `${row.original.assetId}`;
                    (window as any)[modalId].showModal();
                  }}
                >
                  <>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td className="align-top" key={cell.id}>
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

function CurrentValueCell({
  row,
  hyperdrive,
}: {
  row: Long;
  hyperdrive: HyperdriveConfig;
}) {
  const { address: account } = useAccount();
  const { baseAmountOut, previewCloseLongStatus } = usePreviewCloseLong({
    hyperdriveAddress: hyperdrive.address,
    maturityTime: row.maturity,
    bondAmountIn: row.bondAmount,
    minBaseAmountOut: parseUnits("0", hyperdrive.baseToken.decimals),
    destination: account,
  });

  const currentValue =
    baseAmountOut &&
    formatBalance({
      balance: baseAmountOut,
      decimals: hyperdrive.baseToken.decimals,
      places: 2,
    });

  const isPositiveChangeInValue =
    baseAmountOut && baseAmountOut > row.baseAmountPaid;
  if (previewCloseLongStatus === "error") {
    return <div>Insufficient Liquidity</div>;
  }
  return (
    <div className="flex items-center gap-1 lg:flex-col">
      <span className="font-bold lg:ml-2">{currentValue?.toString()}</span>
      <div
        data-tip={"Profit/Loss since open"}
        className={classNames(
          "daisy-badge daisy-badge-md daisy-tooltip inline-flex text-xs",
          { "text-success": isPositiveChangeInValue },
          { "text-error": !isPositiveChangeInValue },
        )}
      >
        <span>{isPositiveChangeInValue ? "+" : ""}</span>
        {baseAmountOut
          ? `${formatBalance({
              balance: baseAmountOut - row.baseAmountPaid,
              decimals: hyperdrive.baseToken.decimals,
              places: 4,
            })} ${hyperdrive.baseToken.symbol}`
          : undefined}
      </div>
    </div>
  );
}

function FixedRateCell({
  row,
  hyperdrive,
}: {
  row: Long;
  hyperdrive: HyperdriveConfig;
}) {
  const { poolConfig } = usePoolConfig(hyperdrive.address);
  const { baseAmountPaid, bondAmount } = row;
  const fixedRate = calculateFixedRateFromOpenLong({
    baseAmount: baseAmountPaid,
    bondAmount,
    positionDuration: poolConfig?.positionDuration || 0n,
    decimals: hyperdrive.baseToken.decimals,
  });

  const yieldAfterFlatFee = calculateMatureLongYieldAfterFees({
    flatFee: poolConfig?.fees.flat || 0n,
    bondAmount,
    baseAmountPaid,
    decimals: hyperdrive.baseToken.decimals,
  });

  return (
    <div className="flex items-center gap-1 lg:flex-col">
      <span className="font-bold lg:ml-2">{formatRate(fixedRate)}%</span>
      <div
        data-tip={"Yield after fees if held to maturity"}
        className={
          "daisy-badge daisy-badge-md daisy-tooltip inline-flex px-2 text-xs text-success"
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
