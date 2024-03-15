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
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
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

const columnHelper = createColumnHelper<OpenShort>();
function getColumns(
  hyperdrive: HyperdriveConfig,
  baseToken: TokenConfig<EmptyExtensions>,
) {
  return [
    columnHelper.accessor("assetId", {
      id: "maturationDate",
      header: `Matures on`,
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
          places: 6,
        });
      },
    }),
    columnHelper.accessor("baseAmountPaid", {
      header: `Value paid (${baseToken.symbol})`,
      cell: (baseAmountPaid) => {
        const amountPaid = baseAmountPaid.getValue();
        return formatBalance({
          balance: amountPaid,
          decimals: baseToken.decimals,
          places: 3,
        });
      },
    }),
    columnHelper.display({
      header: `Yield earned (${baseToken.symbol})`,
      cell: ({ row }) => {
        return (
          <AccruedYieldCell hyperdrive={hyperdrive} openShort={row.original} />
        );
      },
    }),
    columnHelper.display({
      header: `Current value (${baseToken.symbol})`,
      cell: ({ row }) => {
        return (
          <CurrentValueCell hyperdrive={hyperdrive} openShort={row.original} />
        );
      },
    }),
  ];
}
