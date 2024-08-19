import { calculateAprFromPrice, Long } from "@delvtech/hyperdrive-viem";
import { Cog8ToothIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {
  AppConfig,
  findBaseToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
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
import { Pagination } from "src/ui/base/components/Pagination";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { MaturesOnCellTwo } from "src/ui/hyperdrive/MaturesOnCell/MaturesOnCell";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { CloseLongModalButton } from "src/ui/hyperdrive/longs/CloseLongModalButton/CloseLongModalButton";
import { OpenLongModalButton } from "src/ui/hyperdrive/longs/OpenLongModalButton/OpenLongModalButton";
import { CurrentValueCellTwo } from "src/ui/hyperdrive/longs/OpenLongsTable/CurrentValueCell";
import { useOpenLongs } from "src/ui/hyperdrive/longs/hooks/useOpenLongs";
import { usePortfolioLongsData } from "src/ui/portfolio/usePortfolioLongsData";
import { useAccount } from "wagmi";
import { StatusCell } from "./StatusCell";
import { TotalOpenLongsValue } from "./TotalOpenLongsValue";

export function OpenLongsContainer(): ReactElement {
  const { openLongPositions, openLongPositionsStatus } =
    usePortfolioLongsData();
  const appConfig = useAppConfig();

  return (
    <div className="mt-10 flex flex-col gap-10">
      {appConfig.hyperdrives.map((hyperdrive) => {
        const baseToken = appConfig.tokens.find(
          (token) => token.address === hyperdrive.poolConfig.baseToken,
        );
        const sharesToken = appConfig.tokens.find(
          (token) => token.address === hyperdrive.poolConfig.vaultSharesToken,
        );
        if (
          openLongPositionsStatus === "success" &&
          openLongPositions &&
          openLongPositions[hyperdrive.address].length === 0
        ) {
          return null;
        }
        return (
          <div className="flex flex-col gap-6" key={hyperdrive.address}>
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <div className="daisy-avatar-group inline-flex justify-center -space-x-6 overflow-visible rtl:space-x-reverse">
                  {baseToken &&
                  hyperdrive.depositOptions.isBaseTokenDepositEnabled ? (
                    <div
                      className="daisy-avatar daisy-tooltip daisy-tooltip-bottom w-12 scale-75 overflow-visible sm:scale-100"
                      data-tip={baseToken?.symbol}
                    >
                      <img src={baseToken?.iconUrl} />
                    </div>
                  ) : null}
                  {sharesToken &&
                  hyperdrive.depositOptions.isShareTokenDepositsEnabled ? (
                    <div
                      className="daisy-avatar daisy-tooltip daisy-tooltip-bottom w-12 scale-75 overflow-visible sm:scale-100"
                      data-tip={sharesToken.symbol}
                    >
                      <img src={sharesToken.iconUrl} />
                    </div>
                  ) : null}
                </div>
                <p className="text-h4">{hyperdrive.name}</p>
              </div>
              <TotalOpenLongsValue hyperdrive={hyperdrive} />
            </div>
            <OpenLongsTableDesktopTwo hyperdrive={hyperdrive} />
          </div>
        );
      })}
    </div>
  );
}

export function OpenLongsTableDesktopTwo({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const { marketState } = useMarketState(hyperdrive.address);
  const { openLongs, openLongsStatus } = useOpenLongs({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const tableInstance = useReactTable({
    columns: getColumns({ hyperdrive, appConfig }),
    data: openLongs || [],
    initialState: {
      sorting: [
        {
          id: "maturationDate",
          desc: true,
        },
      ],
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (!account) {
    return (
      <div className="my-28">
        <NonIdealState
          heading="No wallet connected"
          text="Connect your wallet to view your Longs"
          action={<ConnectWalletButton />}
        />
      </div>
    );
  }
  if (openLongsStatus === "loading") {
    return (
      <LoadingState
        heading="Loading your Longs..."
        text="Searching for Long events, calculating current value and PnL..."
      />
    );
  }

  if (!openLongs?.length && openLongsStatus === "success") {
    if (marketState?.isPaused) {
      return (
        <div className="my-28">
          <NonIdealState
            heading="Market Paused"
            text="This market is currently paused. You cannot open new positions but you may close existing ones."
          />
        </div>
      );
    }
    return (
      <div className="my-28">
        <NonIdealState
          heading="You have no open Long positions"
          text="Open a Long, switch wallets, or view your closed Long positions"
          action={
            <OpenLongModalButton modalId="open-long" hyperdrive={hyperdrive} />
          }
        />
      </div>
    );
  }

  return (
    <div className="overflow-x-clip rounded-box bg-[#152025]">
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
      <table className="daisy-table daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr className="border-b-0" key={headerGroup.id}>
              {headerGroup.headers.map((header, headerIndex) => (
                <th
                  key={header.id}
                  className={classNames(
                    "relative z-10 text-sm font-normal text-neutral-content/70",
                  )}
                >
                  <div
                    className={classNames({
                      "flex cursor-pointer select-none items-center gap-2":
                        header.column.getCanSort(),
                      "px-4": headerIndex === 0, // Add padding only to the first header cell
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
                  {/* Custom border with inset for the first and last header cells */}
                  <span
                    className={classNames(
                      "absolute bottom-0 border-b-[0.5px] border-neutral-content/20",
                      {
                        "left-6 right-0": headerIndex === 0, // Inset border only on the left side for the first header cell
                        "left-0 right-6":
                          headerIndex === headerGroup.headers.length - 1, // Inset border only on the right side for the last header cell
                        "left-0 right-0":
                          headerIndex !== 0 &&
                          headerIndex !== headerGroup.headers.length - 1, // Full-width border for other header cells
                      },
                    )}
                  />
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {tableInstance.getRowModel().rows.map((row, index) => {
            const isLastRow =
              index === tableInstance.getRowModel().rows.length - 1;
            return (
              <tr
                key={row.id}
                className={classNames(
                  "daisy-hover h-32 cursor-pointer transition duration-300 ease-in-out",
                  "!border-b-0", // Remove default bottom border for table rows
                )}
                onClick={() => {
                  const modalId = `${row.original.assetId}`;
                  (window as any)[modalId].showModal();
                }}
              >
                {row.getVisibleCells().map((cell, cellIndex) => (
                  <td
                    className={classNames(
                      "relative text-xs md:text-md", // Make the td relative for the pseudo-element
                      {
                        "px-10": cellIndex === 0, // Add padding only to the first cell
                        "rounded-b-none": isLastRow,
                        "rounded-bl-box": isLastRow && cellIndex === 0,
                        "rounded-br-box":
                          isLastRow &&
                          cellIndex === row.getVisibleCells().length - 1,
                      },
                    )}
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    {!isLastRow && (
                      <span
                        className={classNames(
                          "absolute bottom-0 border-b-[0.5px] border-neutral-content/20",
                          {
                            "left-6 right-0": cellIndex === 0, // Inset border only on the left side for the first cell
                            "left-0 right-6":
                              cellIndex === row.getVisibleCells().length - 1, // Inset border only on the right side for the last cell
                            "left-0 right-0":
                              cellIndex !== 0 &&
                              cellIndex !== row.getVisibleCells().length - 1, // Full width border for other cells
                          },
                        )}
                      />
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {tableInstance.getFilteredRowModel().rows.length > 10 ? (
        <Pagination tableInstance={tableInstance} />
      ) : null}
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
    baseTokenAddress: hyperdrive.poolConfig.baseToken,
    tokens: appConfig.tokens,
  });
  return [
    columnHelper.accessor("assetId", {
      id: "maturationDate",
      header: `Maturity Date`,
      cell: ({ row }) => {
        return (
          <MaturesOnCellTwo
            hyperdrive={hyperdrive}
            maturity={row.original.maturity}
          />
        );
      },
    }),
    columnHelper.accessor("bondAmount", {
      id: "fixedRate/size",
      header: `Fixed Rate / Size`,
      cell: ({ row }) => {
        const fixedRate = calculateAprFromPrice({
          baseAmount: row.original.baseAmountPaid,
          bondAmount: row.original.bondAmount,
          positionDuration: hyperdrive.poolConfig.positionDuration || 0n,
        });

        return (
          <div className="flex flex-col">
            <div>{formatRate(fixedRate)}</div>
            <span className="flex font-dmMono text-neutral-content">
              {formatBalance({
                balance: row.original.bondAmount,
                decimals: baseToken.decimals,
                places: 2,
              })}{" "}
              {`hy${baseToken.symbol}`}
            </span>
          </div>
        );
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
    columnHelper.accessor("baseAmountPaid", {
      id: "value/cost",
      header: `Value / Cost (${baseToken.symbol})`,
      cell: ({ row }) => {
        return (
          <div>
            <CurrentValueCellTwo hyperdrive={hyperdrive} row={row.original} />
            <span className="flex font-dmMono text-neutral-content">
              {formatBalance({
                balance: row.original.baseAmountPaid,
                decimals: baseToken.decimals,
                places: baseToken.places,
              })}
            </span>
          </div>
        );
      },
    }),
    columnHelper.display({
      id: "value",
      header: `Status`,
      cell: ({ row }) => {
        return <StatusCell maturity={row.original.maturity} />;
      },
    }),
    columnHelper.display({
      id: "go-to-market",
      cell: ({ row }) => {
        const maturityDateMS = row.original.maturity * 1000n;
        const maturityDate = new Date(Number(maturityDateMS));
        return (
          <div className="flex w-full items-center">
            <button
              className="daisy-btn daisy-btn-ghost rounded-full bg-gray-600 hover:bg-gray-700"
              onClick={() => {
                const modalId = `${row.original.assetId}`;
                (window as any)[modalId].showModal();
              }}
            >
              <Cog8ToothIcon className="h-5" />
              Manage
            </button>
          </div>
        );
      },
    }),
  ];
}
