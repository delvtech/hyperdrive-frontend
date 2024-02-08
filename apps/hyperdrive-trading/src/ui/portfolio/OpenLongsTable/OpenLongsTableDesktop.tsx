import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {
  AppConfig,
  HyperdriveConfig,
  findBaseToken,
} from "@hyperdrive/appconfig";
import {
  Long,
  calculateFixedRateFromOpenLong,
  calculateMatureLongYieldAfterFees,
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
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { CloseLongModalButton } from "src/ui/hyperdrive/longs/CloseLongModalButton/CloseLongModalButton";
import { useOpenLongs } from "src/ui/hyperdrive/longs/hooks/useOpenLongs";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import { MaturesOnCell } from "src/ui/portfolio/MaturesOnCell/MaturesOnCell";
import { parseUnits } from "viem";
import { useAccount } from "wagmi";

export function OpenLongsTableDesktop({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const { openLongs, openLongsStatus } = useOpenLongs({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const tableInstance = useReactTable({
    columns: getColumns({ hyperdrive, appConfig }),
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
  if (openLongsStatus === "loading") {
    return <LoadingState />;
  }
  if (!openLongs?.length && openLongsStatus === "success") {
    return (
      <div className="my-28">
        <NonIdealState
          heading="You have no open Long positions"
          text="Open a Long, switch wallets, or view your closed long positions"
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
          {tableInstance.getRowModel().rows.map((row) => {
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
                      <td
                        className="align-top text-xs md:text-md"
                        key={cell.id}
                      >
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
const columnHelper = createColumnHelper<Long>();

function getColumns({
  hyperdrive,
  appConfig,
}: {
  hyperdrive: HyperdriveConfig;
  appConfig: AppConfig;
}) {
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
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
      header: `Size (hy${baseToken.symbol})`,
      cell: ({ row }) => {
        return (
          <span>
            {formatBalance({
              balance: row.original.bondAmount,
              decimals: baseToken.decimals,
              places: 2,
            })}
          </span>
        );
      },
    }),
    columnHelper.accessor("baseAmountPaid", {
      id: "amountPaid",
      header: `Amount paid (${baseToken.symbol})`,
      cell: (baseAmountPaid) => {
        const amountPaid = baseAmountPaid.getValue();
        return formatBalance({
          balance: amountPaid,
          decimals: baseToken.decimals,
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
          days: convertMillisecondsToDays(
            Number(hyperdrive.poolConfig.positionDuration * 1000n),
          ),
        });
        const bFixedRate = calculateAnnualizedPercentageChange({
          amountBefore: rowB.original.baseAmountPaid,
          amountAfter: rowB.original.bondAmount,
          days: convertMillisecondsToDays(
            Number(hyperdrive.poolConfig.positionDuration * 1000n),
          ),
        });
        return aFixedRate - bFixedRate;
      },
    }),
    columnHelper.display({
      id: "value",
      header: `Current value (${baseToken.symbol})`,
      cell: ({ row }) => {
        return <CurrentValueCell hyperdrive={hyperdrive} row={row.original} />;
      },
    }),
  ];
}

function CurrentValueCell({
  row,
  hyperdrive,
}: {
  row: Long;
  hyperdrive: HyperdriveConfig;
}) {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const { baseAmountOut, previewCloseLongStatus } = usePreviewCloseLong({
    hyperdriveAddress: hyperdrive.address,
    maturityTime: row.maturity,
    bondAmountIn: row.bondAmount,
    minBaseAmountOut: parseUnits("0", baseToken.decimals),
    destination: account,
  });

  const currentValue =
    baseAmountOut &&
    formatBalance({
      balance: baseAmountOut,
      decimals: baseToken.decimals,
      places: 2,
    });

  const isPositiveChangeInValue =
    baseAmountOut && baseAmountOut > row.baseAmountPaid;
  if (previewCloseLongStatus === "error") {
    return <div>Insufficient Liquidity</div>;
  }
  return (
    <div className="daisy-stat flex flex-col p-0">
      <span className="daisy-stat-value text-md font-bold">
        {currentValue?.toString()}
      </span>
      <div
        data-tip={"Profit/Loss since open"}
        className={classNames(
          "daisy-stat-desc daisy-tooltip mt-1 inline-flex text-xs",
          { "text-success": isPositiveChangeInValue },
          { "text-error": !isPositiveChangeInValue },
        )}
      >
        <span>{isPositiveChangeInValue ? "+" : ""}</span>
        {baseAmountOut
          ? `${formatBalance({
              balance: baseAmountOut - row.baseAmountPaid,
              decimals: baseToken.decimals,
              places: 4,
            })} ${baseToken.symbol}`
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
  const appConfig = useAppConfig();
  const { poolConfig, baseToken: baseTokenAddress } = hyperdrive;
  const baseToken = findBaseToken({
    baseTokenAddress,
    tokens: appConfig.tokens,
  });
  const { baseAmountPaid, bondAmount } = row;
  const fixedRate = calculateFixedRateFromOpenLong({
    baseAmount: baseAmountPaid,
    bondAmount,
    positionDuration: poolConfig?.positionDuration || 0n,
    decimals: baseToken.decimals,
  });

  const yieldAfterFlatFee = calculateMatureLongYieldAfterFees({
    flatFee: poolConfig?.fees.flat || 0n,
    bondAmount,
    baseAmountPaid,
    decimals: baseToken.decimals,
  });

  return (
    <div className="daisy-stat flex flex-col p-0">
      <span className="daisy-stat-value text-md font-bold">
        {formatRate(fixedRate)}%
      </span>
      <div
        data-tip={"Yield after fees if held to maturity"}
        className={
          "daisy-stat-desc daisy-tooltip mt-1 inline-flex text-xs text-success"
        }
      >
        <span>{"+"}</span>
        {formatBalance({
          balance: yieldAfterFlatFee,
          decimals: baseToken.decimals,
          places: 4,
        })}{" "}
        {baseToken.symbol}
      </div>
    </div>
  );
}
