import {
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
} from "@heroicons/react/16/solid";
import {
  AppConfig,
  HyperdriveConfig,
  findBaseToken,
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
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Pagination } from "src/ui/base/components/Pagination";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { usePortfolioLpData } from "src/ui/portfolio/usePortfolioLpData";
import { useAccount } from "wagmi";

export function LpAndWithdrawalSharesContainer(): ReactElement {
  const { openLpPositions, openLpPositionStatus } = usePortfolioLpData();
  const appConfig = useAppConfig();
  return (
    <div className="mt-10 flex w-[1036px] flex-col gap-10">
      {appConfig.hyperdrives.map((hyperdrive) => {
        const baseToken = appConfig.tokens.find(
          (token) => token.address === hyperdrive.poolConfig.baseToken,
        );
        const sharesToken = appConfig.tokens.find(
          (token) => token.address === hyperdrive.poolConfig.vaultSharesToken,
        );
        const openLpPosition = openLpPositions?.[hyperdrive.address] ?? {
          lpShares: 0n,
          withdrawalShares: 0n,
        };
        // Ensure this hyperdrive pool has open positions before rendering.
        if (
          openLpPositionStatus === "success" &&
          openLpPosition.lpShares === 0n &&
          openLpPosition.withdrawalShares === 0n
        ) {
          return null;
        }
        return (
          <div className="flex flex-col gap-6" key={hyperdrive.address}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 font-chakraPetch text-h4">
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
              {/* <TotalOpenLongsValue hyperdrive={hyperdrive} /> */}
            </div>
            <OpenLpTableDesktop
              hyperdrive={hyperdrive}
              openLpPosition={openLpPosition}
              openLpPositionStatus={openLpPositionStatus}
            />
          </div>
        );
      })}
    </div>
  );
}

export function OpenLpTableDesktop({
  hyperdrive,
  openLpPosition,
  openLpPositionStatus,
}: {
  hyperdrive: HyperdriveConfig;
  openLpPosition: { lpShares: bigint; withdrawalShares: bigint };
  openLpPositionStatus?: "loading" | "success" | "error";
}): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const { marketState } = useMarketState(hyperdrive.address);

  const tableInstance = useReactTable({
    columns: getColumns({ hyperdrive, appConfig }),

    data: [openLpPosition],
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
  if (openLpPositionStatus === "loading" || !openLpPosition) {
    return (
      <LoadingState
        heading="Loading your Longs..."
        text="Searching for Long events, calculating current value and PnL..."
      />
    );
  }

  return (
    <div className="daisy-card overflow-x-clip rounded-box bg-gray-750 pt-3">
      {/* Modal needs to be rendered outside of the table so that dialog can be used. Otherwise react throws a dom nesting error */}
      {/* {tableInstance.getRowModel().rows.map((row) => {
        const modalId = `withdrawalLpModal`;
        return (
          <Modal
            key={modalId}
            modalId="withdrawalLpModal"
            modalHeader={
              <ModalHeader heading="Remove Liquidity" subHeading={"TODO"} />
            }
            modalContent={
              <div>
                <RemoveLiquidityForm
                  hyperdrive={hyperdrive}
                  lpShares={openLpPosition.lpShares}
                />
              </div>
            }
          />
        );
      })} */}
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
                      "px-4": headerIndex === 0, // Add padding only to the first header cell. This is so that the headers line up vertically with the card title
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
                      "absolute bottom-0 border-b border-neutral-content/20",
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
                  "daisy-hover h-32 cursor-pointer font-dmMono transition duration-300 ease-in-out",
                  "!border-b-0", // Remove default bottom border for table rows
                )}
                // onClick={() => {
                //   const modalId = `${row.original.assetId}`;
                //   (
                //     document.getElementById(modalId) as HTMLDialogElement
                //   )?.showModal();
                // }}
              >
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
                      },
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

const columnHelper = createColumnHelper<{
  lpShares: bigint;
  withdrawalShares: bigint;
}>();

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
    columnHelper.accessor("lpShares", {
      id: "maturationDate",
      header: `Maturity Date`,
      cell: () => {
        return (
          <div>
            {convertMillisecondsToDays(
              Number(hyperdrive.poolConfig.positionDuration * 1000n),
            )}
            {"-"}
            Day
          </div>
        );
      },
    }),
    columnHelper.accessor("lpShares", {
      id: "fixedRate/size",
      header: `Fixed Rate / Size`,
      cell: ({ row }) => {
        return null;
        //   return (
        //     <div className="flex flex-col">
        //       <div>{formatRate(fixedRate)}</div>
        //       <span className="flex font-dmMono text-neutral-content">
        //         {formatBalance({
        //           balance: row.original.bondAmount,
        //           decimals: baseToken.decimals,
        //           places: 2,
        //         })}{" "}
        //         {`hy${baseToken.symbol}`}
        //       </span>
        //     </div>
        //   );
      },
    }),
    columnHelper.accessor("withdrawalShares", {
      id: "value/cost",
      header: `Value / Cost (${baseToken.symbol})`,
      cell: ({ row }) => {
        return null;
      },
    }),
    columnHelper.display({
      id: "value",
      header: `Status`,
      cell: ({ row }) => {
        return null;
      },
    }),
    columnHelper.display({
      id: "go-to-market",
      cell: ({ row }) => {
        return (
          <div className="flex w-full items-center font-inter">
            <button
              className="daisy-btn daisy-btn-ghost rounded-full bg-gray-600 hover:bg-gray-700"
              onClick={() => {
                (
                  document.getElementById(
                    "withdrawalLpModal",
                  ) as HTMLDialogElement
                )?.showModal();
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
