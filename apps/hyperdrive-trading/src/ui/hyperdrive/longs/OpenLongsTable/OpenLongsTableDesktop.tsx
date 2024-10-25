import {
  AppConfig,
  appConfig,
  findBaseToken,
  findToken,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import {
  calculateAprFromPrice,
  OpenLongPositionReceived,
} from "@delvtech/hyperdrive-viem";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";
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
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Pagination } from "src/ui/base/components/Pagination";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { ConnectWalletButton } from "src/ui/compliance/ConnectWallet";
import { MaturesOnCellTwo } from "src/ui/hyperdrive/MaturesOnCell/MaturesOnCell";
import { CloseLongModalButton } from "src/ui/hyperdrive/longs/CloseLongModalButton/CloseLongModalButton";
import { CurrentValueCellTwo } from "src/ui/hyperdrive/longs/OpenLongsTable/CurrentValueCell";
import { StatusCell } from "src/ui/hyperdrive/longs/OpenLongsTable/StatusCell";
import { TotalOpenLongsValue } from "src/ui/hyperdrive/longs/OpenLongsTable/TotalOpenLongsValue";
import { usePortfolioLongsData } from "src/ui/portfolio/usePortfolioLongsData";
import { useAccount } from "wagmi";
import { ManageLongsButton } from "./ManageLongsButton";

export function OpenLongsContainer(): ReactElement {
  const { address: account } = useAccount();
  const { openLongPositions, openLongPositionsStatus } =
    usePortfolioLongsData();
  if (!account) {
    return (
      <div className="my-28 flex w-[1036px] flex-col gap-10">
        <NonIdealState
          heading="No wallet connected"
          action={<ConnectWalletButton />}
        />
      </div>
    );
  }

  if (openLongPositionsStatus === "loading") {
    return (
      <div className="flex w-[1036px] flex-col gap-10">
        <LoadingState
          heading="Loading your Longs..."
          text="Searching for Long events, calculating current value and PnL..."
        />
      </div>
    );
  }

  if (openLongPositions?.every((position) => position.openLongs.length === 0)) {
    return (
      <div className="my-28 flex w-[1036px] flex-col gap-10">
        <NonIdealState
          heading="No Longs found"
          text={
            <p className="max-w-xl">
              Visit the{" "}
              <a
                className="daisy-link"
                href="https://docs.hyperdrive.box/hyperdrive-overview/position-types/longs-fixed-rates"
                rel="noopener noreferrer"
                target="_blank"
              >
                documentation
              </a>{" "}
              or explore pools to open your first Long position.
            </p>
          }
          action={
            <Link className="daisy-btn daisy-btn-primary rounded-full" to="/">
              View Pools
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="mt-10 flex w-[1036px] flex-col gap-10">
      {appConfig.hyperdrives.map((hyperdrive) => {
        const openLongs = openLongPositions?.find(
          (position) =>
            position.hyperdrive.address === hyperdrive.address &&
            position.hyperdrive.chainId === hyperdrive.chainId
        )?.openLongs;
        const baseToken = findBaseToken({
          hyperdriveChainId: hyperdrive.chainId,
          hyperdriveAddress: hyperdrive.address,
          appConfig,
        });
        const sharesToken = findToken({
          chainId: hyperdrive.chainId,
          tokens: appConfig.tokens,
          tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
        });
        // Ensure this hyperdrive pool has open positions before rendering.
        if (openLongPositionsStatus === "success" && !openLongs?.length) {
          return null;
        }
        return (
          <div className="flex flex-col gap-6" key={hyperdrive.address}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 font-chakraPetch text-h4">
                <div className="daisy-avatar-group inline-flex justify-center -space-x-6 overflow-visible rtl:space-x-reverse">
                  {hyperdrive.depositOptions.isBaseTokenDepositEnabled ? (
                    <div
                      className="daisy-avatar daisy-tooltip daisy-tooltip-bottom w-12 scale-75 overflow-visible sm:scale-100"
                      data-tip={baseToken.symbol}
                    >
                      <img src={baseToken.iconUrl} className="rounded-full" />
                    </div>
                  ) : null}
                  {sharesToken &&
                  hyperdrive.depositOptions.isShareTokenDepositsEnabled ? (
                    <div
                      className="daisy-avatar daisy-tooltip daisy-tooltip-bottom w-12 scale-75 overflow-visible sm:scale-100"
                      data-tip={sharesToken.symbol}
                    >
                      <img src={sharesToken.iconUrl} className="rounded-full" />
                    </div>
                  ) : null}
                </div>
                <p className="text-h4">{hyperdrive.name}</p>
              </div>
              <TotalOpenLongsValue hyperdrive={hyperdrive} />
            </div>
            <OpenLongsTableDesktop
              hyperdrive={hyperdrive}
              openLongs={openLongs}
            />
          </div>
        );
      })}
    </div>
  );
}

export function OpenLongsTableDesktop({
  hyperdrive,
  openLongs,
}: {
  hyperdrive: HyperdriveConfig;
  openLongs: OpenLongPositionReceived[] | undefined;
}): ReactElement {
  const { address: account } = useAccount();

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

  return (
    <div className="daisy-card overflow-x-clip rounded-box bg-gray-750 pt-3">
      {/* Modal needs to be rendered outside of the table so that dialog can be used. Otherwise react throws a dom nesting error */}
      {tableInstance.getRowModel().rows.map((row) => {
        const modalId = `${row.original.assetId}`;
        return (
          <CloseLongModalButton
            key={modalId}
            hyperdrive={hyperdrive}
            modalId={modalId}
            long={{
              assetId: row.original.assetId,
              baseAmountPaid: row.original.details?.baseAmountPaid || 0n,
              bondAmount: row.original.details?.bondAmount || 0n,
              maturity: row.original.maturity,
            }}
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
                    "relative z-10 text-sm font-normal text-neutral-content/70"
                  )}
                >
                  <div
                    className={classNames({
                      "flex cursor-pointer select-none items-center gap-2":
                        header.column.getCanSort(),
                      "px-4": headerIndex === 0, // Add padding only to the first header cell. This is so that the headers line up vertically with the card title
                    })}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: <ChevronUpIcon height={15} />,
                      desc: <ChevronDownIcon height={15} />,
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                  {/* Custom border with inset for the first and last header cells */}
                  <span
                    className={classNames(
                      "absolute bottom-0 border-b border-neutral-content/20",
                      {
                        "left-6 right-0": headerIndex === 0, // Inset border only on the left side for the first header cell
                        "left-0 right-6":
                          headerIndex === headerGroup.headers.length - 1, // Inset border only on the right side for the last header cell
                        "left-0 right-0":
                          headerIndex !== 0 &&
                          headerIndex !== headerGroup.headers.length - 1, // Full-width border for other header cells
                      }
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
              <tr key={row.id} className="h-32 !border-b-0 font-dmMono">
                {row.getVisibleCells().map((cell, cellIndex) => (
                  <td
                    className={classNames(
                      "relative text-xs md:text-md", // Make the td relative for the pseudo-element
                      {
                        "px-10": cellIndex === 0, // Add padding only to the first cell. This is so that the data line up vertically with the header title
                        "rounded-b-none": isLastRow,
                        "rounded-bl-box": isLastRow && cellIndex === 0,
                        "rounded-br-box":
                          isLastRow &&
                          cellIndex === row.getVisibleCells().length - 1,
                      }
                    )}
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    {!isLastRow && (
                      <span
                        className={classNames(
                          // Most displays round half pixels to the nearest whole pixel. As a workaround, we can use a 1px border and scale it down so it appears as a 0.5px border.
                          "absolute bottom-0 left-0 right-0 scale-y-50 transform border-b border-neutral-content/20",
                          {
                            "left-6 right-0": cellIndex === 0, // Inset border only on the left side for the first cell
                            "left-0 right-6":
                              cellIndex === row.getVisibleCells().length - 1, // Inset border only on the right side for the last cell
                            "left-0 right-0":
                              cellIndex !== 0 &&
                              cellIndex !== row.getVisibleCells().length - 1, // Full width border for other cells
                          }
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

const columnHelper = createColumnHelper<OpenLongPositionReceived>();

function getColumns({
  hyperdrive,
  appConfig,
}: {
  hyperdrive: HyperdriveConfig;
  appConfig: AppConfig;
}) {
  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
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
    columnHelper.accessor("details.bondAmount", {
      id: "fixedRate/size",
      header: `Fixed Rate / Size`,
      cell: ({ row }) => {
        const fixedRate = calculateAprFromPrice({
          baseAmount: row.original.details?.baseAmountPaid || 0n,
          bondAmount: row.original.details?.bondAmount || 0n,
          positionDuration: hyperdrive.poolConfig.positionDuration || 0n,
        });

        return (
          <div className="flex flex-col">
            <div>{formatRate(fixedRate)} APR</div>
            <span className="flex font-dmMono text-neutral-content">
              {formatBalance({
                balance: row.original.details?.bondAmount || 0n,
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
          amountBefore: rowA.original.details?.baseAmountPaid || 0n,
          amountAfter: rowA.original.details?.bondAmount || 0n,
          days: convertMillisecondsToDays(
            Number(hyperdrive.poolConfig.positionDuration * 1000n)
          ),
        });
        const bFixedRate = calculateAnnualizedPercentageChange({
          amountBefore: rowB.original.details?.baseAmountPaid || 0n,
          amountAfter: rowB.original.details?.bondAmount || 0n,
          days: convertMillisecondsToDays(
            Number(hyperdrive.poolConfig.positionDuration * 1000n)
          ),
        });
        return aFixedRate - bFixedRate;
      },
    }),
    columnHelper.accessor("details.baseAmountPaid", {
      id: "value/cost",
      header: `Value / Cost (${baseToken.symbol})`,
      cell: ({ row }) => {
        return (
          <div>
            <CurrentValueCellTwo hyperdrive={hyperdrive} row={row.original} />
            <span className="flex font-dmMono text-neutral-content">
              {formatBalance({
                balance: row.original.details?.baseAmountPaid || 0n,
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
        return (
          <StatusCell
            maturity={row.original.maturity}
            chainId={hyperdrive.chainId}
          />
        );
      },
    }),
    columnHelper.display({
      id: "go-to-market",
      cell: ({ row }) => {
        return (
          <ManageLongsButton
            assetId={row.original.assetId}
            hyperdrive={hyperdrive}
            key={row.original.assetId}
          />
        );
      },
    }),
  ];
}
