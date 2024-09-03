import { AppConfig, HyperdriveConfig } from "@hyperdrive/appconfig";
import { Link } from "@tanstack/react-router";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement, useMemo } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { usePortfolioLpData } from "src/ui/portfolio/usePortfolioLpData";
import { useAccount } from "wagmi";
import { LpCurrentValueCell } from "./LpCurrentValueCell";
import { ManageLpAndWithdrawalSharesButton } from "./ManageLpAndWithdrawalSharesButton";
import { SizeAndPoolShareCell } from "./SizeAndPoolShareCell";
import { WithdrawalQueueCell } from "./WithdrawalQueueCell";

export function LpAndWithdrawalSharesContainer(): ReactElement {
  const { openLpPositions, openLpPositionStatus } = usePortfolioLpData();
  const appConfig = useAppConfig();

  if (openLpPositionStatus === "loading") {
    return (
      <div className="my-28 flex h-full w-[1036px] flex-col">
        <LoadingState
          heading="Loading your LP Positions..."
          text="Searching for LP events, calculating current value and PnL..."
        />
      </div>
    );
  }
  if (openLpPositionStatus === "error") {
    return (
      <div className="my-28 flex h-full w-[1036px] flex-col">
        <NonIdealState
          heading="Error loading your LP Positions"
          text="Please refresh the page and try again."
        />
      </div>
    );
  }

  if (
    openLpPositions &&
    !Object.values(openLpPositions).some(
      (position) => position.lpShares > 0n || position.withdrawalShares > 0n,
    )
  ) {
    return (
      <div className="my-28 flex h-full w-[1036px] flex-col">
        <NonIdealState
          heading="No LP Positions"
          text="You don't have any LP positions."
          action={
            <Link to="/">
              <button className="daisy-btn daisy-btn-primary">
                View Pools
              </button>
            </Link>
          }
        />
      </div>
    );
  }

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
        // openLpPosition needs to have at least one of lpShares or withdrawalShares to be non-zero.
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

  const columns = useMemo(
    () => getColumns({ hyperdrive, appConfig }),
    [hyperdrive, appConfig],
  );
  const data = useMemo(() => [openLpPosition], [openLpPosition]);
  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  if (!account) {
    return (
      <div className="my-28">
        <NonIdealState
          heading="No wallet connected"
          text="Connect your wallet to view your LP Positions"
          action={<ConnectWalletButton />}
        />
      </div>
    );
  }
  if (openLpPositionStatus === "loading" || !openLpPosition) {
    return (
      <div className="my-28">
        <LoadingState
          heading="Loading your LP Positions..."
          text="Searching for LP events, calculating current value and PnL..."
        />
      </div>
    );
  }

  return (
    <div className="daisy-card overflow-x-clip rounded-box bg-gray-750 pt-3">
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
                      "px-4": headerIndex === 0,
                      // Right align the headers in the Size, Value, and Withdrawal Queue columns
                      "flex justify-end": [1, 2, 3].includes(headerIndex),
                    })}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
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
          {tableInstance.getRowModel().rows.map((row, index) => (
            <tr
              key={row.id}
              className={classNames(
                "daisy-hover h-32 cursor-pointer font-dmMono transition duration-300 ease-in-out",
                "!border-b-0",
              )}
            >
              {row.getVisibleCells().map((cell, cellIndex) => (
                <td
                  key={cell.id}
                  className={classNames("text-xs md:text-md", {
                    "px-10 pb-10": cellIndex === 0, // Add padding only to the first cell to align with header and the top row data of the next column over
                    "rounded-b-none":
                      index === tableInstance.getRowModel().rows.length - 1,
                    "rounded-bl-box":
                      index === tableInstance.getRowModel().rows.length - 1 &&
                      cellIndex === 0,
                    "rounded-br-box":
                      index === tableInstance.getRowModel().rows.length - 1 &&
                      cellIndex === row.getVisibleCells().length - 1,
                    // Right align the values in the Size, Value, and Withdrawal Queue columns
                    "text-end":
                      [1, 2, 3].includes(cellIndex) && cellIndex !== 0,
                  })}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  {index !== tableInstance.getRowModel().rows.length - 1 && (
                    <span
                      className={classNames(
                        "absolute bottom-0 left-0 right-0 scale-y-50 transform border-b border-neutral-content/20",
                        {
                          "left-6 right-0": cellIndex === 0,
                          "left-0 right-6":
                            cellIndex === row.getVisibleCells().length - 1,
                          "left-0 right-0": ![
                            0,
                            row.getVisibleCells().length - 1,
                          ].includes(cellIndex),
                        },
                      )}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
  const baseToken = appConfig.tokens.find(
    (token) => token.address === hyperdrive.poolConfig.baseToken,
  );

  return [
    columnHelper.accessor("lpShares", {
      id: "maturationDate",
      header: `Term`,
      cell: () => (
        <div>
          {convertMillisecondsToDays(
            Number(hyperdrive.poolConfig.positionDuration * 1000n),
          )}
          {"-"}Day
        </div>
      ),
    }),
    columnHelper.accessor("lpShares", {
      id: "size",
      header: `Size (${baseToken?.symbol}-LP)`,
      cell: ({ row }) => (
        <SizeAndPoolShareCell
          hyperdrive={hyperdrive}
          lpShares={row.original.lpShares}
        />
      ),
    }),
    columnHelper.accessor("withdrawalShares", {
      id: "value",
      header: `Value (${baseToken?.symbol})`,
      cell: ({ row }) => (
        <LpCurrentValueCell
          hyperdrive={hyperdrive}
          lpShares={row.original.lpShares}
        />
      ),
    }),
    columnHelper.accessor("withdrawalShares", {
      id: "withdrawalQueue",
      header: `Withdrawal Queue`,
      cell: () => <WithdrawalQueueCell hyperdrive={hyperdrive} />,
    }),
    columnHelper.display({
      id: "manage",
      cell: () => <ManageLpAndWithdrawalSharesButton hyperdrive={hyperdrive} />,
    }),
  ];
}
