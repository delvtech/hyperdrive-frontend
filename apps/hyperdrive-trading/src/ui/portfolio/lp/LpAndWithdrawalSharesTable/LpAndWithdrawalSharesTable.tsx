import {
  AppConfig,
  appConfig,
  getBaseToken,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement, useMemo } from "react";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { ConnectWalletButton } from "src/ui/compliance/ConnectWallet";
import { LpCurrentValueCell } from "src/ui/portfolio/lp/LpAndWithdrawalSharesTable/LpCurrentValueCell";
import { ManageLpAndWithdrawalSharesButton } from "src/ui/portfolio/lp/LpAndWithdrawalSharesTable/ManageLpAndWithdrawalSharesButton";
import { SizeAndPoolShareCell } from "src/ui/portfolio/lp/LpAndWithdrawalSharesTable/SizeAndPoolShareCell";
import { WithdrawalQueueCell } from "src/ui/portfolio/lp/LpAndWithdrawalSharesTable/WithdrawalQueueCell";
import { useAccount } from "wagmi";

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

  const columns = useMemo(
    () => getColumns({ hyperdrive, appConfig }),
    [hyperdrive],
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
              className={classNames("h-32 !border-b-0 font-dmMono")}
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
  const baseToken = getBaseToken({
    hyperdriveAddress: hyperdrive.address,
    hyperdriveChainId: hyperdrive.chainId,
    appConfig,
  });

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
    columnHelper.accessor("lpShares", {
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