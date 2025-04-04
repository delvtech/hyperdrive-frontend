import {
  AppConfig,
  getAddLiquidityRewardConfigs,
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
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { LpCurrentValueCell } from "src/ui/portfolio/lp/LpAndWithdrawalSharesTable/LpCurrentValueCell";
import { ManageLpAndWithdrawalSharesButton } from "src/ui/portfolio/lp/LpAndWithdrawalSharesTable/ManageLpAndWithdrawalSharesButton";
import { SizeAndPoolShareCell } from "src/ui/portfolio/lp/LpAndWithdrawalSharesTable/SizeAndPoolShareCell";
import { TotalLpValue } from "src/ui/portfolio/lp/LpAndWithdrawalSharesTable/TotalLpValue";
import { WithdrawalQueueCell } from "src/ui/portfolio/lp/LpAndWithdrawalSharesTable/WithdrawalQueueCell";
import { usePortfolioLpDataFromHyperdrives } from "src/ui/portfolio/lp/usePortfolioLpData";
import { PositionTableHeading } from "src/ui/portfolio/PositionTableHeading";
import { PoolHasRewardsBanner } from "src/ui/portfolio/rewards/PoolHasRewardsBanner";
import { Address } from "viem";

export function OpenLpTableDesktop({
  hyperdrives,
  account,
}: {
  hyperdrives: HyperdriveConfig[];
  account: Address | undefined;
}): ReactElement | null {
  const { openLpPositions } = usePortfolioLpDataFromHyperdrives({
    hyperdrives,
    account,
  });
  const appConfig = useAppConfigForConnectedChain();
  const columns = useMemo(
    () => getColumns({ account, hyperdrives, appConfig }),
    [hyperdrives, account],
  );

  const tableData = useMemo(
    () =>
      (openLpPositions ?? []).filter(
        (position) => position.lpShares > 0n || position.withdrawalShares > 0n,
      ),
    [openLpPositions],
  );

  const tableInstance = useReactTable({
    columns,
    data: tableData,
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

  // Check if there is no data after filtering
  if (tableData.length === 0) {
    return null;
  }

  const poolHasRewards = hyperdrives.some((hyperdrive) => {
    const rewardConfigs = getAddLiquidityRewardConfigs({
      appConfig,
      chainId: hyperdrive.chainId,
      hyperdriveAddress: hyperdrive.address,
    });
    return !!rewardConfigs?.length;
  });

  return (
    <div className="flex flex-col gap-6">
      <PositionTableHeading
        // We only need the first hyperdrive to get the name and yield source metadata
        hyperdrive={hyperdrives[0]}
        rightElement={
          <TotalLpValue
            account={account}
            hyperdrive={hyperdrives[0]}
            openLpPositions={openLpPositions}
          />
        }
        hyperdriveName={
          // This regex removes the term (eg: "30d") from the hyperdrive
          // name since it's already shown in the table.
          // https://regex101.com/r/f4A3th/1
          hyperdrives[0].name.replace(/\d{1,3}d/, "")
        }
      />
      {poolHasRewards ? <PoolHasRewardsBanner /> : null}
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
    </div>
  );
}

const columnHelper = createColumnHelper<{
  hyperdrive: HyperdriveConfig;
  lpShares: bigint;
  withdrawalShares: bigint;
}>();

function getColumns({
  hyperdrives,
  account,
  appConfig,
}: {
  hyperdrives: HyperdriveConfig[];
  account: Address | undefined;
  appConfig: AppConfig;
}) {
  const baseToken = getBaseToken({
    hyperdriveAddress: hyperdrives[0].address,
    hyperdriveChainId: hyperdrives[0].chainId,
    appConfig,
  });
  return [
    columnHelper.accessor("hyperdrive.poolConfig.positionDuration", {
      id: "maturationDate",
      header: `Term`,
      cell: ({ row }) => {
        return (
          <div>
            {convertMillisecondsToDays(
              Number(
                row.original.hyperdrive.poolConfig.positionDuration * 1000n,
              ),
            )}
            {"-"}Day
          </div>
        );
      },
    }),
    columnHelper.accessor("lpShares", {
      id: "size",
      header: `Size (${baseToken?.symbol}-LP)`,
      cell: ({ row }) => (
        <SizeAndPoolShareCell
          hyperdrive={row.original.hyperdrive}
          lpShares={row.original.lpShares}
        />
      ),
    }),
    columnHelper.accessor("lpShares", {
      id: "value",
      header: `Value (${baseToken?.symbol})`,
      cell: ({ row }) => (
        <LpCurrentValueCell
          account={account}
          hyperdrive={row.original.hyperdrive}
          lpShares={row.original.lpShares}
        />
      ),
    }),
    columnHelper.accessor("withdrawalShares", {
      id: "withdrawalQueue",
      header: `Withdrawal Queue`,
      cell: ({ row }) => (
        <WithdrawalQueueCell
          account={account}
          hyperdrive={row.original.hyperdrive}
        />
      ),
    }),
    columnHelper.display({
      id: "manage",
      cell: ({ row }) => (
        <ManageLpAndWithdrawalSharesButton
          account={account}
          hyperdrive={row.original.hyperdrive}
        />
      ),
    }),
  ];
}
