import {
  AppConfig,
  getBaseToken,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { OpenShort } from "@delvtech/hyperdrive-js";
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
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Pagination } from "src/ui/base/components/Pagination";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { StatusCell } from "src/ui/hyperdrive/longs/StatusCell";
import { MaturesOnCell } from "src/ui/hyperdrive/MaturesOnCell/MaturesOnCell";
import { CloseShortModalButton } from "src/ui/hyperdrive/shorts/CloseShortModalButton/CloseShortModalButton";
import { PositionTableHeading } from "src/ui/portfolio/PositionTableHeading";
import { CurrentShortsValueCell } from "src/ui/portfolio/shorts/OpenShortsTable/CurrentShortsValueCell";
import { ManageShortButton } from "src/ui/portfolio/shorts/OpenShortsTable/ManageShortButton";
import { ShortRateAndSizeCell } from "src/ui/portfolio/shorts/OpenShortsTable/ShortRateAndSizeCell";
import { TotalOpenShortsValue } from "src/ui/portfolio/shorts/OpenShortsTable/TotalOpenShortsValue";
import { usePortfolioShortsDataFromHyperdrives } from "src/ui/portfolio/shorts/usePortfolioShortsData";
import { Address } from "viem";

export function OpenShortsTableDesktop({
  hyperdrives,
  account,
}: {
  hyperdrives: HyperdriveConfig[];
  account: Address | undefined;
}): ReactElement | null {
  const appConfig = useAppConfigForConnectedChain();
  const { openShortPositions, openShortPositionsStatus } =
    usePortfolioShortsDataFromHyperdrives({ hyperdrives, account });
  const openShortPositionsExist =
    openShortPositions && openShortPositions.length > 0;
  const columns = getColumns({ account, hyperdrives, appConfig });
  const tableInstance = useReactTable({
    columns,
    data: openShortPositions || [],
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
          text="Connect your wallet to view your Shorts"
          action={<ConnectWalletButton />}
        />
      </div>
    );
  }

  if (!openShortPositionsExist) {
    return null;
  }

  if (openShortPositionsStatus === "loading") {
    return <TableSkeleton numColumns={columns.length} numRows={5} />;
  }

  return (
    <div className="flex flex-col gap-6">
      <PositionTableHeading
        // We only need the first hyperdrive to get the name and yield source metadata
        hyperdrive={hyperdrives[0]}
        rightElement={
          <TotalOpenShortsValue
            account={account}
            hyperdrives={hyperdrives}
            openShorts={openShortPositions}
          />
        }
        hyperdriveName={
          // This regex removes the term (eg: "30d") from the hyperdrive
          // name since it's already shown in the table.
          // https://regex101.com/r/f4A3th/1
          hyperdrives[0].name.replace(/\d{1,3}d/, "")
        }
      />
      <div className="daisy-card overflow-x-clip rounded-box bg-gray-750 pt-3">
        {/* Modal needs to be rendered outside of the table so that dialog can be used. Otherwise react throws a dom nesting error */}
        {tableInstance.getRowModel().rows.map((row) => {
          const modalId = `${row.original.assetId}`;
          return (
            <CloseShortModalButton
              key={modalId}
              account={account}
              hyperdrive={row.original.hyperdrive}
              modalId={modalId}
              short={row.original}
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
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
    </div>
  );
}

const columnHelper = createColumnHelper<
  OpenShort & { hyperdrive: HyperdriveConfig }
>();

function getColumns({
  account,
  hyperdrives,
  appConfig,
}: {
  account: Address | undefined;
  hyperdrives: HyperdriveConfig[];
  appConfig: AppConfig;
}) {
  const baseToken = getBaseToken({
    hyperdriveChainId: hyperdrives[0].chainId,
    hyperdriveAddress: hyperdrives[0].address,
    appConfig,
  });
  return [
    columnHelper.accessor("maturity", {
      id: "maturationDate",
      header: `Maturity Date`,
      cell: ({ row, getValue }) => {
        return (
          <MaturesOnCell
            hyperdrive={row.original.hyperdrive}
            maturity={getValue()}
          />
        );
      },
    }),
    columnHelper.accessor("bondAmount", {
      id: "rateShorted/size",
      header: `Rate Shorted / Size`,
      cell: ({ row }) => (
        <ShortRateAndSizeCell
          hyperdrive={row.original.hyperdrive}
          short={row.original}
        />
      ),
    }),
    columnHelper.accessor("checkpointTime", {
      id: "value/cost",
      header: `Value / Cost (${baseToken.symbol})`,
      cell: ({ row }) => {
        return (
          <div>
            <CurrentShortsValueCell
              hyperdrive={row.original.hyperdrive}
              openShort={row.original}
            />
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
      id: "status",
      header: `Status`,
      cell: ({ row }) => {
        return (
          <StatusCell
            chainId={row.original.hyperdrive.chainId}
            maturity={row.original.maturity}
          />
        );
      },
    }),
    columnHelper.display({
      id: "go-to-market",
      cell: ({ row }) => {
        return (
          <ManageShortButton
            account={account}
            hyperdrive={row.original.hyperdrive}
            assetId={row.original.assetId}
          />
        );
      },
    }),
  ];
}
