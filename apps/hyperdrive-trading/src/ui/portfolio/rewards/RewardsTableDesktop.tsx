import { AppConfig, getToken } from "@delvtech/hyperdrive-appconfig";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
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
import { Rewards } from "src/rewards/generated/RewardsClient";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { Pagination } from "src/ui/base/components/Pagination";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { Address } from "viem";

export function RewardsTableDesktop({
  account,
  rewards,
}: {
  account: Address;
  rewards: Rewards;
}): ReactElement {
  const appConfig = useAppConfigForConnectedChain();
  const tableInstance = useReactTable({
    columns: getColumns(appConfig),
    data: rewards || [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="daisy-card overflow-x-clip rounded-box bg-gray-750 pt-3">
      <table className="daisy-table daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr className="border-b-0" key={headerGroup.id}>
              {headerGroup.headers.map((header, headerIndex) => (
                <th
                  key={header.id}
                  className="relative z-10 text-sm font-normal text-neutral-content/70"
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

// TODO: Remove this type once the swagger is defined properly
type Reward = NonNullable<Rewards[number]>;
const columnHelper = createColumnHelper<Reward>();

function getColumns(appConfig: AppConfig) {
  return [
    columnHelper.display({
      id: "asset",
      header: "Asset",
      cell: ({ row }) => {
        const token = getToken({
          appConfig,
          chainId: row.original.chainId,
          tokenAddress: row.original.rewardTokenAddress,
        })!;
        return (
          <div className="flex items-center gap-2 font-inter">
            <img src={token.iconUrl} className="size-10" />
            {token.name}
          </div>
        );
      },
    }),
    columnHelper.display({
      id: "claimable",
      header: "Claimable",
      cell: ({ row }) => {
        const token = getToken({
          appConfig,
          chainId: row.original.chainId,
          tokenAddress: row.original.rewardTokenAddress,
        })!;
        return (
          <div className="flex flex-col">
            <span className="flex font-dmMono text-neutral-content">
              {formatBalance({
                balance: BigInt(row.original.claimable) || 0n,
                decimals: token.decimals,
                places: token.places,
              })}{" "}
              {token.symbol}
            </span>
          </div>
        );
      },
    }),
    columnHelper.display({
      id: "claim",
      cell: ({ row }) => {
        return (
          <button className="daisy-btn daisy-btn-ghost rounded-full bg-gray-600 font-inter hover:bg-gray-700">
            Claim Rewards
          </button>
        );
      },
    }),
  ];
}
