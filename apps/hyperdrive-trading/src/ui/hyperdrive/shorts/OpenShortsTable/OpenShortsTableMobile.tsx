/* eslint-disable react/jsx-key */
import { OpenShort } from "@delvtech/hyperdrive-viem";
import { AppConfig, HyperdriveConfig, findToken } from "@hyperdrive/appconfig";
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
  const baseToken = findToken({
    tokenAddress: hyperdrive.poolConfig.baseToken,
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
        places: baseToken.places,
      }),
    },
    {
      name: `Cost (${baseToken.symbol})`,
      value: formatBalance({
        balance: openShort.baseAmountPaid,
        decimals: baseToken.decimals,
        places: baseToken.places,
      }),
    },
    {
      name: `Rate shorted`,
      value: `${formatRate(openShort.fixedRatePaid)} APR`,
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
