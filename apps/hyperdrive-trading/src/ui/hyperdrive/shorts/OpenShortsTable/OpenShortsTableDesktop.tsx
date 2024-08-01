/* eslint-disable react/jsx-key */
import { OpenShort } from "@delvtech/hyperdrive-viem";
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {
  EmptyExtensions,
  HyperdriveConfig,
  TokenConfig,
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
import { formatRate } from "src/base/formatRate";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { CalendarLinkMenu } from "src/ui/base/components/CalendarLinkMenu";
import { Pagination } from "src/ui/base/components/Pagination";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { MaturesOnCell } from "src/ui/hyperdrive/MaturesOnCell/MaturesOnCell";
import { PositionActionsMenu } from "src/ui/hyperdrive/PositionActionsMenu";
import { CloseShortModalButton } from "src/ui/hyperdrive/shorts/CloseShortModalButton/CloseShortModalButton";
import { AccruedYieldCell } from "src/ui/hyperdrive/shorts/OpenShortsTable/AccruedYieldCell";
import { CurrentValueCell } from "src/ui/hyperdrive/shorts/OpenShortsTable/CurrentValueCell";

export function OpenShortsTableDesktop({
  hyperdrive,
  openShorts,
}: {
  hyperdrive: HyperdriveConfig;
  openShorts: OpenShort[];
}): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });

  const tableInstance = useReactTable({
    columns: getColumns(hyperdrive, baseToken),
    data: openShorts || [],
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

  return (
    <>
      {/* Modal needs to be rendered outside of the table so that dialog can be used. Otherwise react throws a dom nesting error */}
      {tableInstance.getRowModel().rows.map((row) => {
        const modalId = `${row.original.assetId}`;
        return (
          <CloseShortModalButton
            key={modalId}
            hyperdrive={hyperdrive}
            modalId={modalId}
            short={row.original}
          />
        );
      })}
      <table className="daisy-table daisy-table-zebra daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="sticky z-10 text-sm font-normal text-neutral-content"
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
                <>
                  {row.getVisibleCells().map((cell, cellIndex) => {
                    return (
                      <td
                        className={classNames("align-top text-xs md:text-md", {
                          // This rounds the edges of the first and last cell on the bottom row to match the rounding of the tabs component. Border radius can't be applied to <tr />
                          "rounded-bl-box": isLastRow && cellIndex === 0,
                          "rounded-br-box":
                            isLastRow &&
                            cellIndex === row.getVisibleCells().length - 1,
                        })}
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    );
                  })}
                </>
              </tr>
            );
          })}
        </tbody>
      </table>
      {tableInstance.getFilteredRowModel().rows.length > 10 ? (
        <Pagination tableInstance={tableInstance} />
      ) : null}
    </>
  );
}

const columnHelper = createColumnHelper<OpenShort>();
function getColumns(
  hyperdrive: HyperdriveConfig,
  baseToken: TokenConfig<EmptyExtensions>,
) {
  return [
    columnHelper.accessor("assetId", {
      id: "maturationDate",
      header: `Matures On`,
      cell: ({ row }) => {
        return <MaturesOnCell maturity={row.original.maturity} />;
      },
    }),
    columnHelper.accessor("bondAmount", {
      header: `Size (hy${baseToken.symbol})`,
      cell: (bondAmount) => {
        const bondAmountValue = bondAmount.getValue();
        return (
          <span className="flex w-20 justify-end">
            {formatBalance({
              balance: bondAmountValue,
              decimals: baseToken.decimals,
              places: baseToken.places,
            })}
          </span>
        );
      },
    }),
    columnHelper.accessor("baseAmountPaid", {
      header: () => (
        <div
          className="daisy-tooltip daisy-tooltip-bottom before:text-wrap"
          data-tip="The amount paid to open the short, and the Fixed APR that was shorted"
        >
          Cost ({baseToken.symbol})
        </div>
      ),
      cell: (baseAmountPaid) => {
        const fixedRate = baseAmountPaid.row.original.fixedRatePaid;
        const amountPaid = baseAmountPaid.getValue();
        return (
          <div className="daisy-stat flex flex-row p-0 xl:flex-col">
            <span className="daisy-stat-value flex w-16 justify-end text-md font-normal">
              {formatBalance({
                balance: amountPaid,
                decimals: baseToken.decimals,
                places: baseToken.places,
              })}
            </span>
            <div
              className={classNames(
                "daisy-stat-desc mt-1 flex w-16 justify-end text-xs",
              )}
            >
              <span>{formatRate(fixedRate)} APR</span>
            </div>
          </div>
        );
      },
    }),
    columnHelper.display({
      header: `Yield Earned (${baseToken.symbol})`,
      cell: ({ row }) => {
        return (
          <AccruedYieldCell hyperdrive={hyperdrive} openShort={row.original} />
        );
      },
    }),
    columnHelper.display({
      header: `Current Value (${baseToken.symbol})`,
      cell: ({ row }) => {
        return (
          <CurrentValueCell hyperdrive={hyperdrive} openShort={row.original} />
        );
      },
    }),
    columnHelper.display({
      header: "",
      id: "go-to-market",
      cell: ({ row }) => {
        const maturityDateMS = row.original.maturity * 1000n;
        const maturityDate = new Date(Number(maturityDateMS));
        return (
          <div className="flex items-center">
            <button className="daisy-btn daisy-btn-ghost rounded-full bg-gray-600 hover:bg-gray-700">
              Close Short
            </button>
            <div className="daisy-dropdown daisy-dropdown-end daisy-dropdown-left absolute right-8 z-10">
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
                  title={`Hyperdrive - Short position has matured`}
                  description={`Your Short position has matured on Hyperdrive and you may choose to close it. Visit https://hyperdrive.trade/market/${hyperdrive.address} to review your position`}
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
