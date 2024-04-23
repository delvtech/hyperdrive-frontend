/* eslint-disable react/jsx-key */
import { OpenShort } from "@delvtech/hyperdrive-viem";
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
                  className="sticky z-10 text-sm font-normal text-gray-400"
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
          {tableInstance.getRowModel().rows.map((row) => {
            return (
              <tr
                key={row.id}
                className="daisy-hover h-24 cursor-pointer items-center transition duration-300 ease-in-out"
                onClick={() => {
                  const modalId = `${row.original.assetId}`;
                  (window as any)[modalId].showModal();
                }}
              >
                <>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        className="align-top text-xs md:text-md"
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
        return formatBalance({
          balance: bondAmountValue,
          decimals: baseToken.decimals,
          places: baseToken.places,
        });
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
            <span className="daisy-stat-value text-xs font-normal lg:text-md">
              {formatBalance({
                balance: amountPaid,
                decimals: baseToken.decimals,
                places: baseToken.places,
              })}
            </span>
            <div className={"daisy-stat-desc inline-flex text-xs lg:mt-1"}>
              <span>{formatRate(fixedRate)}% APR</span>
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
            <CalendarLinkMenu date={maturityDate} positionType={"Short"} />
          </div>
        );
      },
    }),
  ];
}
