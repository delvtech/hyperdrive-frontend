/* eslint-disable react/jsx-key */
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { OpenShort } from "@hyperdrive/sdk";
import { useQuery } from "@tanstack/react-query";
import {
  Row,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { makeQueryKey } from "src/base/makeQueryKey";
import { parseUnits } from "src/base/parseUnits";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useAccruedYield } from "src/ui/hyperdrive/hooks/useAccruedYield";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { getProfitLossText } from "src/ui/hyperdrive/shorts/CloseShortForm/getProfitLossText";
import { CloseShortModalButton } from "src/ui/hyperdrive/shorts/CloseShortModalButton/CloseShortModalButton";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { MaturesOnCell } from "src/ui/portfolio/MaturesOnCell/MaturesOnCell";
import { useAccount } from "wagmi";

const columnHelper = createColumnHelper<OpenShort>();
const getColumns = (hyperdrive: Hyperdrive) => [
  columnHelper.display({
    header: `ID`,
    cell: ({ row }) => <span>{Number(row.original.maturity)}</span>,
  }),
  columnHelper.accessor("assetId", {
    id: "maturationDate",
    header: `Matures on`,
    cell: ({ row }) => {
      return <MaturesOnCell maturity={row.original.maturity} />;
    },
  }),
  columnHelper.accessor("bondAmount", {
    header: `Size (hy${hyperdrive.baseToken.symbol})`,
    cell: (bondAmount) => {
      const bondAmountValue = bondAmount.getValue();
      return formatBalance({
        balance: bondAmountValue,
        decimals: hyperdrive.baseToken.decimals,
        places: 6,
      });
    },
  }),
  columnHelper.accessor("baseAmountPaid", {
    header: `Amount paid`,
    cell: (baseAmountPaid) => {
      const amountPaid = baseAmountPaid.getValue();
      return formatBalance({
        balance: amountPaid,
        decimals: hyperdrive.baseToken.decimals,
        places: 6,
      });
    },
  }),
  columnHelper.display({
    header: `Yield earned (${hyperdrive.baseToken.symbol})`,
    cell: ({ row }) => {
      return <AccruedYieldCell hyperdrive={hyperdrive} row={row} />;
    },
  }),
  columnHelper.display({
    header: `Current value (${hyperdrive.baseToken.symbol})`,
    cell: ({ row }) => {
      return <CurrentValueCell hyperdrive={hyperdrive} row={row} />;
    },
  }),
];

function AccruedYieldCell({
  row,
  hyperdrive,
}: {
  row: Row<OpenShort>;
  hyperdrive: Hyperdrive;
}) {
  const { bondAmount, checkpointId } = row.original;
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
          decimals: hyperdrive.baseToken.decimals,
          places: 6,
        })}
      </span>
    </div>
  );
}

function CurrentValueCell({
  row,
  hyperdrive,
}: {
  row: Row<OpenShort>;
  hyperdrive: Hyperdrive;
}) {
  const { address: account } = useAccount();
  const { baseAmountOut } = usePreviewCloseShort({
    hyperdriveAddress: row.original.hyperdriveAddress,
    maturityTime: row.original.maturity,
    shortAmountIn: row.original.bondAmount,
    minBaseAmountOut: parseUnits("0", hyperdrive.baseToken.decimals),
    destination: account,
  });
  const currentValue =
    baseAmountOut &&
    formatBalance({
      balance: baseAmountOut,
      decimals: hyperdrive.baseToken.decimals,
      places: 6,
    });

  const isPositiveChangeInValue =
    baseAmountOut && baseAmountOut > row.original.baseAmountPaid;

  return (
    <div className="flex flex-col gap-1">
      <span className="ml-1 font-bold">{currentValue?.toString()}</span>
      {baseAmountOut && row.original.bondAmount !== 0n ? (
        <div
          data-tip={"Profit/Loss since open"}
          className={classNames(
            "daisy-badge daisy-badge-md daisy-tooltip inline-flex",
            { "text-success": isPositiveChangeInValue },
            { "text-error": !isPositiveChangeInValue },
          )}
        >
          {getProfitLossText({
            baseAmountOut,
            amountInput: row.original.baseAmountPaid,
            baseDecimals: hyperdrive.baseToken.decimals,
            baseSymbol: hyperdrive.baseToken.symbol,
            showPercentage: false,
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export function OpenShortsTable({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const { address: account } = useAccount();
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: shorts, isLoading } = useQuery({
    queryKey: makeQueryKey("shortPositions", { account }),
    queryFn: queryEnabled
      ? () => readHyperdrive?.getOpenShorts({ account })
      : undefined,
    enabled: queryEnabled,
  });
  const tableInstance = useReactTable({
    columns: getColumns(hyperdrive),
    data: shorts || [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="max-h-96 overflow-y-scroll">
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
      <table className="daisy-table-zebra daisy-table daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="sticky top-0 z-10 bg-base-100" key={header.id}>
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
          {isLoading ? (
            <TableSkeleton numColumns={6} />
          ) : (
            tableInstance.getRowModel().rows.map((row) => {
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
                        <td key={cell.id}>
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
            })
          )}
        </tbody>
      </table>
      {!shorts?.length && !isLoading ? <NonIdealState /> : null}
    </div>
  );
}
