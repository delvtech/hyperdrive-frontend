/* eslint-disable react/jsx-key */
import { OpenShort } from "@delvtech/hyperdrive-viem";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
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
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Pagination } from "src/ui/base/components/Pagination";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { MaturesOnCell } from "src/ui/hyperdrive/MaturesOnCell/MaturesOnCell";
import { CloseShortModalButton } from "src/ui/hyperdrive/shorts/CloseShortModalButton/CloseShortModalButton";
import { AccruedYieldCell } from "src/ui/hyperdrive/shorts/OpenShortsTable/AccruedYieldCell";
import { CurrentValueCell } from "src/ui/hyperdrive/shorts/OpenShortsTable/CurrentValueCell";

export function OpenShortsTableMobile({
  hyperdrive,
  openShorts,
}: {
  hyperdrive: HyperdriveConfig;
  openShorts: OpenShort[];
}): ReactElement {
  const appConfig = useAppConfig();

  const tableInstance = useReactTable({
    columns: getMobileColumns(hyperdrive, appConfig),
    data: openShorts || [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="max-h-[512px] overflow-y-auto">
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
                  className="sticky z-10 font-normal text-gray-400"
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
    </div>
  );
}

const columnHelper = createColumnHelper<OpenShort>();
function getMobileColumns(hyperdrive: HyperdriveConfig, appConfig: AppConfig) {
  return [
    columnHelper.display({
      id: "ColumnNames",
      cell: ({ row }) => {
        const data = formatOpenShortMobileColumnData(
          row.original,
          hyperdrive,
          appConfig,
        );
        return (
          <ul className="flex flex-col items-start gap-1">
            {data.map((column) => (
              <li key={column.name}>{column.name}</li>
            ))}
          </ul>
        );
      },
    }),
    columnHelper.display({
      id: "ColumnValues",
      cell: ({ row }) => {
        const data = formatOpenShortMobileColumnData(
          row.original,
          hyperdrive,
          appConfig,
        );
        return (
          <ul className="flex flex-col items-start gap-1">
            {data.map((column) => (
              <li className="flex flex-row" key={column.name}>
                {column.value}
              </li>
            ))}
          </ul>
        );
      },
    }),
  ];
}

function formatOpenShortMobileColumnData(
  openShort: OpenShort,
  hyperdrive: HyperdriveConfig,
  appConfig: AppConfig,
) {
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  return [
    {
      name: "Matures On",
      value: <MaturesOnCell maturity={openShort.maturity} />,
    },
    {
      name: `Size (${baseToken.symbol})`,
      value: formatBalance({
        balance: openShort.bondAmount,
        decimals: baseToken.decimals,
        places: 6,
      }),
    },
    {
      name: `Value Paid (${baseToken.symbol})`,
      value: formatBalance({
        balance: openShort.baseAmountPaid,
        decimals: baseToken.decimals,
        places: 6,
      }),
    },
    {
      name: `Yield (${baseToken.symbol})`,
      value: <AccruedYieldCell hyperdrive={hyperdrive} openShort={openShort} />,
    },
    {
      name: `Current Value`,
      value: <CurrentValueCell hyperdrive={hyperdrive} openShort={openShort} />,
    },
  ];
}
