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
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement } from "react";
import { parseUnits } from "src/base/parseUnits";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { MaturesOnCell } from "src/ui/hyperdrive/MaturesOnCell/MaturesOnCell";
import { useAccruedYield } from "src/ui/hyperdrive/hooks/useAccruedYield";
import { getProfitLossText } from "src/ui/hyperdrive/shorts/CloseShortForm/getProfitLossText";
import { CloseShortModalButton } from "src/ui/hyperdrive/shorts/CloseShortModalButton/CloseShortModalButton";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { useAccount } from "wagmi";

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
      name: "Matures on",
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
      name: `Amount paid`,
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
      name: `Current value`,
      value: <CurrentValueCell hyperdrive={hyperdrive} openShort={openShort} />,
    },
  ];
}

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
  });

  return (
    <div className="max-h-96 overflow-y-auto">
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
    </div>
  );
}

function AccruedYieldCell({
  openShort,
  hyperdrive,
}: {
  openShort: OpenShort;
  hyperdrive: HyperdriveConfig;
}) {
  const { bondAmount, checkpointId } = openShort;
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const { accruedYield } = useAccruedYield({
    hyperdrive,
    bondAmount,
    checkpointId,
  });

  return (
    <div className="flex flex-col gap-1">
      <span>
        {formatBalance({
          balance: accruedYield || 0n,
          decimals: baseToken.decimals,
          places: 3,
        })}
      </span>
    </div>
  );
}

function CurrentValueCell({
  openShort,
  hyperdrive,
}: {
  openShort: OpenShort;
  hyperdrive: HyperdriveConfig;
}) {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const { address: account } = useAccount();
  const { amountOut } = usePreviewCloseShort({
    hyperdriveAddress: openShort.hyperdriveAddress,
    maturityTime: openShort.maturity,
    shortAmountIn: openShort.bondAmount,
    minAmountOut: parseUnits("0", baseToken.decimals),
    destination: account,
  });
  const currentValue =
    amountOut &&
    formatBalance({
      balance: amountOut,
      decimals: baseToken.decimals,
      places: 3,
    });

  const isPositiveChangeInValue =
    amountOut && amountOut > openShort.baseAmountPaid;

  return (
    <div className="daisy-stat p-0">
      <span className="daisy-stat-value text-md font-bold">
        {currentValue?.toString()}
      </span>
      {amountOut && openShort.bondAmount !== 0n ? (
        <div
          data-tip={"Profit/Loss since open"}
          className={classNames(
            "daisy-stat-desc daisy-tooltip mt-1 flex text-xs",
            { "text-success": isPositiveChangeInValue },
            { "text-error": !isPositiveChangeInValue },
          )}
        >
          {getProfitLossText({
            baseAmountOut: amountOut,
            amountInput: openShort.baseAmountPaid,
            baseDecimals: baseToken.decimals,
            baseSymbol: baseToken.symbol,
            showPercentage: false,
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
