import {
  AppConfig,
  appConfig,
  getBaseToken,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import {
  calculateAprFromPrice,
  OpenLongPositionReceived,
} from "@delvtech/hyperdrive-js";
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
import { ReactElement, useMemo } from "react";
import { formatRate } from "src/base/formatRate";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Pagination } from "src/ui/base/components/Pagination";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { ConnectWalletButton } from "src/ui/compliance/ConnectWallet";
import { CloseLongModalButton } from "src/ui/hyperdrive/longs/CloseLongModalButton/CloseLongModalButton";
import { useTotalOpenLongsValueTwo } from "src/ui/hyperdrive/longs/hooks/useTotalOpenLongsValue";
import { StatusCell } from "src/ui/hyperdrive/longs/StatusCell";
import { MaturesOnCell } from "src/ui/hyperdrive/MaturesOnCell/MaturesOnCell";
import { TotalOpenLongsValue } from "src/ui/portfolio/longs/TotalOpenLongsValue/TotalOpenLongsValue";
import { usePortfolioLongsDataFromHyperdrives } from "src/ui/portfolio/longs/usePortfolioLongsData";
import { PositionTableHeading } from "src/ui/portfolio/PositionTableHeading";
import { useAccount } from "wagmi";
import { CurrentValueCell } from "./CurrentValueCell";
import { ManageLongsButton } from "./ManageLongsButton";
type FlattenedOpenLong = OpenLongPositionReceived & {
  hyperdrive: HyperdriveConfig;
};

export function OpenLongsTableDesktop({
  hyperdrives,
}: {
  hyperdrives: HyperdriveConfig[];
}): ReactElement | null {
  const { address: account } = useAccount();
  const { openLongPositions, openLongPositionsStatus } =
    usePortfolioLongsDataFromHyperdrives(hyperdrives);
  const openLongPositionsExist = openLongPositions?.some(
    (openLong) => openLong.openLongs.length > 0,
  );

  const flattenedOpenLongsData:
    | (OpenLongPositionReceived & { hyperdrive: HyperdriveConfig })[]
    | undefined = useMemo(() => {
    if (!openLongPositions) {
      return [];
    }
    return openLongPositions.flatMap(({ hyperdrive, openLongs }) =>
      openLongs.map((openLong) => ({
        ...openLong,
        hyperdrive,
      })),
    );
  }, [openLongPositions]);

  const { totalOpenLongsValue, isLoading } = useTotalOpenLongsValueTwo({
    account,
    longs: flattenedOpenLongsData,
    enabled: openLongPositionsStatus === "success",
  });

  console.log(totalOpenLongsValue, "totalOpenLongsValue");

  // console.log(openLongPositions, "openLongPositions");
  const columns = useMemo(() => {
    return getColumns({ hyperdrives, appConfig });
  }, [hyperdrives]);
  const tableInstance = useReactTable({
    columns: columns,
    data: flattenedOpenLongsData,
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

  if (openLongPositionsStatus === "loading") {
    return <TableSkeleton numColumns={columns.length} numRows={5} />;
  }

  if (!openLongPositionsExist) {
    return null;
  }

  return (
    <div className="daisy-card overflow-x-clip rounded-box bg-gray-750 pt-3">
      <PositionTableHeading
        // We only need the first hyperdrive to get the name and yield source metadata
        hyperdrive={hyperdrives[0]}
        rightElement={
          <TotalOpenLongsValue
            hyperdrives={hyperdrives}
            openLongs={flattenedOpenLongsData}
          />
        }
        hyperdriveName={
          // This regex removes the term (eg: "30d") from the hyperdrive
          // name since it's already shown in the table.
          // https://regex101.com/r/f4A3th/1
          hyperdrives[0].name.replace(/\d{1,3}d/, "")
        }
      />
      {/* Modal needs to be rendered outside of the table so that dialog can be used. Otherwise react throws a dom nesting error */}
      {tableInstance.getRowModel().rows.map(({ original }) => {
        const modalId = `${original.assetId}`;
        return (
          <CloseLongModalButton
            key={modalId}
            hyperdrive={original.hyperdrive}
            modalId={modalId}
            long={{
              assetId: original.assetId,
              baseAmountPaid: original.details?.baseAmountPaid || 0n,
              bondAmount: original.details?.bondAmount || 0n,
              maturity: original.maturity,
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

const columnHelper = createColumnHelper<
  OpenLongPositionReceived & { hyperdrive: HyperdriveConfig }
>();

function getColumns({
  hyperdrives,
  appConfig,
}: {
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
    columnHelper.accessor("details.bondAmount", {
      id: "fixedRate/size",
      header: `Fixed Rate / Size`,
      cell: ({ row, getValue }) => {
        const fixedRate = calculateAprFromPrice({
          baseAmount: row.original.details?.baseAmountPaid || 0n,
          bondAmount: getValue() || 0n,
          positionDuration:
            row.original.hyperdrive.poolConfig.positionDuration || 0n,
        });
        return (
          <div className="flex flex-col">
            <div>{formatRate({ rate: fixedRate })} APR</div>
            <span className="flex font-dmMono text-neutral-content">
              {formatBalance({
                balance: getValue() || 0n,
                decimals: baseToken.decimals,
                places: 2,
              })}{" "}
              {`hy${baseToken.symbol}`}
            </span>
          </div>
        );
      },
      sortingFn: (rowA, rowB) => {
        const aFixedRate = calculateAprFromPrice({
          baseAmount: rowA.original.details?.baseAmountPaid || 0n,
          bondAmount: rowA.original.details?.bondAmount || 0n,
          positionDuration:
            rowA.original.hyperdrive.poolConfig.positionDuration || 0n,
        });
        const bFixedRate = calculateAprFromPrice({
          baseAmount: rowB.original.details?.baseAmountPaid || 0n,
          bondAmount: rowB.original.details?.bondAmount || 0n,
          positionDuration:
            rowB.original.hyperdrive.poolConfig.positionDuration || 0n,
        });
        return Number(aFixedRate - bFixedRate);
      },
    }),
    columnHelper.accessor("details.baseAmountPaid", {
      id: "value/cost",
      header: `Value / Cost (${baseToken.symbol})`,
      cell: ({ row, getValue }) => {
        return (
          <div>
            <CurrentValueCell
              hyperdrive={row.original.hyperdrive}
              row={row.original}
            />
            <span className="flex font-dmMono text-neutral-content">
              {formatBalance({
                balance: getValue() || 0n,
                decimals: baseToken.decimals,
                places: baseToken.places,
              })}
            </span>
          </div>
        );
      },
    }),
    columnHelper.accessor("maturity", {
      id: "value",
      header: `Status`,
      cell: ({ row, getValue }) => {
        return (
          <StatusCell
            maturity={getValue()}
            chainId={row.original.hyperdrive.chainId}
          />
        );
      },
    }),
    columnHelper.accessor("assetId", {
      id: "go-to-market",
      cell: ({ row, getValue }) => {
        return (
          <ManageLongsButton
            assetId={getValue()}
            hyperdrive={row.original.hyperdrive}
            key={getValue()}
          />
        );
      },
    }),
  ];
}
