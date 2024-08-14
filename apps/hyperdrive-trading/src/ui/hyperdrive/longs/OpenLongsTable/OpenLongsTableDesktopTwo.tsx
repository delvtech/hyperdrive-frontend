import { calculateAprFromPrice, Long } from "@delvtech/hyperdrive-viem";
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
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
import { CalendarLinkMenu } from "src/ui/base/components/CalendarLinkMenu";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Pagination } from "src/ui/base/components/Pagination";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { MaturesOnCellTwo } from "src/ui/hyperdrive/MaturesOnCell/MaturesOnCell";
import { PositionActionsMenu } from "src/ui/hyperdrive/PositionActionsMenu";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { CloseLongModalButton } from "src/ui/hyperdrive/longs/CloseLongModalButton/CloseLongModalButton";
import { OpenLongModalButton } from "src/ui/hyperdrive/longs/OpenLongModalButton/OpenLongModalButton";
import { CurrentValueCellTwo } from "src/ui/hyperdrive/longs/OpenLongsTable/CurrentValueCell";
import { useOpenLongs } from "src/ui/hyperdrive/longs/hooks/useOpenLongs";
import { usePortfolioLongsData } from "src/ui/portfolio/usePortfolioLongsData";
import { useAccount } from "wagmi";

export function OpenLongsContainer(): ReactElement {
  const { openLongPositions, openLongPositionsStatus } =
    usePortfolioLongsData();
  const appConfig = useAppConfig();
  return (
    <div className="mt-10 flex flex-col gap-10">
      {appConfig.hyperdrives.map((hyperdrive) => {
        const baseToken = appConfig.tokens.find(
          (token) => token.address === hyperdrive.baseToken,
        );
        const sharesToken = appConfig.tokens.find(
          (token) => token.address === hyperdrive.sharesToken,
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
      <table className="daisy-table daisy-table-zebra daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="sticky z-10 text-sm font-normal text-neutral-content/70"
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
          {tableInstance.getRowModel().rows.map((row, index) => {
            const isLastRow =
              index === tableInstance.getRowModel().rows.length - 1;
            return (
              <tr
                key={row.id}
                className="daisy-hover h-24 cursor-pointer items-center border-none transition duration-300 ease-in-out"
                onClick={() => {
                  const modalId = `${row.original.assetId}`;
                  (window as any)[modalId].showModal();
                }}
              >
                {row.getVisibleCells().map((cell, cellIndex) => (
                  <td
                    className={classNames(
                      "align-top text-xs md:text-md",
                      // This rounds the edges of the first and last cell on the bottom row to match the rounding of the tabs component. Border radius can't be applied to <tr />
                      {
                        "rounded-bl-box": isLastRow && cellIndex === 0,
                        "rounded-br-box":
                          isLastRow &&
                          cellIndex === row.getVisibleCells().length - 1,
                      },
                    )}
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
    baseTokenAddress: hyperdrive.baseToken,
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
    // columnHelper.accessor("bondAmount", {
    //   id: "size",
    //   header: `Size (hy${baseToken.symbol})`,
    //   cell: ({ row }) => {
    //     return (
    //       <span className="flex w-20 justify-end">
    //         {formatBalance({
    //           balance: row.original.bondAmount,
    //           decimals: baseToken.decimals,
    //           places: baseToken.places,
    //         })}
    //       </span>
    //     );
    //   },
    // }),
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
    // columnHelper.accessor("baseAmountPaid", {
    //   id: "valuePaid",
    //   header: `Cost (${baseToken.symbol})`,
    //   cell: (baseAmountPaid) => {
    //     const amountPaid = baseAmountPaid.getValue();
    //     return (
    //       <span className="flex w-16 justify-end">
    //         {formatBalance({
    //           balance: amountPaid,
    //           decimals: baseToken.decimals,
    //           places: baseToken.places,
    //         })}
    //       </span>
    //     );
    //   },
    // }),
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
        return <div className="text-accent">Completed</div>;
      },
    }),
    columnHelper.display({
      header: "",
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
              Close Long
            </button>
            <div className="daisy-dropdown daisy-dropdown-end daisy-dropdown-bottom">
              <div
                tabIndex={0}
                role="button"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="daisy-btn daisy-btn-ghost daisy-btn-sm rotate-90 hover:bg-transparent"
              >
                <EllipsisVerticalIcon className="h-5" />
              </div>
              <ul
                tabIndex={0}
                className="daisy-menu daisy-dropdown-content z-10 w-52 rounded-lg bg-base-100 p-4 shadow"
              >
                <CalendarLinkMenu
                  date={maturityDate}
                  title={`Hyperdrive - Long position has matured`}
                  description={`Your Long position has matured on Hyperdrive and you may choose to close it. Visit https://hyperdrive.trade/market/${hyperdrive.address} to review your position`}
                />
                <PositionActionsMenu position={row.original} />
              </ul>
            </div>
          </div>
        );
      },
    }),
  ];
}
