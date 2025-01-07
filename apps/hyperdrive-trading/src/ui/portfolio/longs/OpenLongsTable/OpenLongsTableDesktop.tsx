import {
  AppConfig,
  appConfig,
  getBaseToken,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { OpenLongPositionReceived } from "@delvtech/hyperdrive-js";
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
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Pagination } from "src/ui/base/components/Pagination";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { ConnectWalletButton } from "src/ui/compliance/ConnectWallet";
import { usePortfolioLongsDataFromHyperdrives } from "src/ui/portfolio/longs/usePortfolioLongsData";
import { useAccount } from "wagmi";

export function OpenLongsTableDesktop({
  hyperdrives,
}: {
  hyperdrives: HyperdriveConfig[];
}): ReactElement | null {
  const { address: account } = useAccount();
  const { openLongPositions, openLongPositionsStatus } =
    usePortfolioLongsDataFromHyperdrives(hyperdrives);
  // console.log(openLongPositions, "openLongPositions");
  const columns = useMemo(() => {
    return getColumns({ hyperdrives, appConfig });
  }, [hyperdrives]);
  const tableInstance = useReactTable({
    columns: columns,
    data: openLongPositions || [],
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

  if (openLongPositions?.length === 0) {
    return null;
  }

  return (
    <div className="daisy-card overflow-x-clip rounded-box bg-gray-750 pt-3">
      {/* Modal needs to be rendered outside of the table so that dialog can be used. Otherwise react throws a dom nesting error */}
      {/* {tableInstance.getRowModel().rows.map(({ getValue, original, id }) => {
        const value = getValue();
        console.log(id);
        // const modalId = `${original.}`;
        // return (
        //   <CloseLongModalButton
        //     key={modalId}
        //     hyperdrive={original.hyperdrive}
        //     modalId={modalId}
        //     long={{
        //       assetId: getValue(),
        //       baseAmountPaid: original.details?.baseAmountPaid || 0n,
        //       bondAmount: original.details?.bondAmount || 0n,
        //       maturity: original.maturity,
        //     }}
        //   />
        // );
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

const columnHelper = createColumnHelper<{
  hyperdrive: HyperdriveConfig;
  openLongs: OpenLongPositionReceived[];
}>();

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
    columnHelper.accessor("openLongs.assetId", {
      id: "maturationDate",
      header: `Maturity Date`,
      cell: ({ row, getValue }) => {
        const openLong = row.original.openLongs.find(
          (openLong) => openLong.assetId === getValue(),
        );
        console.log(row.original, "row.original");
        console.log(openLong, "openLong");
        return <h1>Hello</h1>;
        // return (
        //   <MaturesOnCell
        //     hyperdrive={row.original.hyperdrive}
        //     maturity={openLong?.maturity || 0n}
        //   />
        // );
      },
    }),
    // columnHelper.accessor("openLongs.details.assetId", {
    //   id: "fixedRate/size",
    //   header: `Fixed Rate / Size`,
    //   cell: ({ row, getValue }) => {
    //     const openLong = row.original.openLongs.find(
    //       (openLong) => openLong.assetId === getValue(),
    //     );
    //     const fixedRate = calculateAprFromPrice({
    //       baseAmount: openLong?.details?.baseAmountPaid || 0n,
    //       bondAmount: openLong?.details?.bondAmount || 0n,
    //       positionDuration:
    //         row.original.hyperdrive.poolConfig.positionDuration || 0n,
    //     });
    //     return <h1>Hello</h1>;
    //     return (
    //       <div className="flex flex-col">
    //         <div>{formatRate({ rate: fixedRate })} APR</div>
    //         <span className="flex font-dmMono text-neutral-content">
    //           {formatBalance({
    //             balance: openLong?.details?.bondAmount || 0n,
    //             decimals: baseToken.decimals,
    //             places: 2,
    //           })}{" "}
    //           {`hy${baseToken.symbol}`}
    //         </span>
    //       </div>
    //     );
    //   },
    // sortingFn: (rowA, rowB, {}) => {

    //   const aFixedRate = calculateAnnualizedPercentageChange({
    //     amountBefore: aOpenLong?.details?.baseAmountPaid || 0n,
    //     amountAfter: aOpenLong?.details?.bondAmount || 0n,
    //     days: convertMillisecondsToDays(
    //       Number(hyperdrive.poolConfig.positionDuration * 1000n),
    //     ),
    //   });
    //   const bFixedRate = calculateAnnualizedPercentageChange({
    //     amountBefore: rowB.original.details?.baseAmountPaid || 0n,
    //     amountAfter: rowB.original.details?.bondAmount || 0n,
    //     days: convertMillisecondsToDays(
    //       Number(hyperdrive.poolConfig.positionDuration * 1000n),
    //     ),
    //   });
    //   return aFixedRate - bFixedRate;
    // },
    // }),
    // columnHelper.accessor("openLongs.details.assetId", {
    //   id: "value/cost",
    //   header: `Value / Cost (${baseToken.symbol})`,
    //   cell: ({ row, getValue }) => {
    //     const openLong = row.original.openLongs.find(
    //       (openLong) => openLong.assetId === getValue(),
    //     );

    //     if (!openLong) {
    //       return <LoadingState />;
    //     }

    //     return (
    //       <div>
    //         <CurrentValueCell
    //           hyperdrive={row.original.hyperdrive}
    //           row={openLong}
    //         />
    //         <span className="flex font-dmMono text-neutral-content">
    //           {formatBalance({
    //             balance: openLong.details?.baseAmountPaid || 0n,
    //             decimals: baseToken.decimals,
    //             places: baseToken.places,
    //           })}
    //         </span>
    //       </div>
    //     );
    //   },
    // }),
    // columnHelper.accessor("openLongs.details.assetId", {
    //   id: "value",
    //   header: `Status`,
    //   cell: ({ row, getValue }) => {
    //     const openLong = row.original.openLongs.find(
    //       (openLong) => openLong.assetId === getValue(),
    //     );
    //     return (
    //       <StatusCell
    //         maturity={openLong?.maturity || 0n}
    //         chainId={row.original.hyperdrive.chainId}
    //       />
    //     );
    //   },
    // }),
    // columnHelper.accessor("openLongs.details.assetId", {
    //   id: "go-to-market",
    //   cell: ({ row, getValue }) => {
    //     return (
    //       <ManageLongsButton
    //         assetId={getValue()}
    //         hyperdrive={row.original.hyperdrive}
    //         key={getValue()}
    //       />
    //     );
    //   },
    // }),
  ];
}
