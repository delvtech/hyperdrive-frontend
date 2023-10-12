/* eslint-disable react/jsx-key */
import { OpenShort } from "@hyperdrive/sdk";
import {
  Row,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as dnum from "dnum";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { parseUnits } from "src/base/parseUnits";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import {
  getProfitLossText,
  getStyleClassForProfitLoss,
} from "src/ui/hyperdrive/shorts/CloseShortForm/getProfitLossText";
import { CloseShortModalButton } from "src/ui/hyperdrive/shorts/CloseShortModalButton/CloseShortModalButton";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { useAccount } from "wagmi";
interface OpenOrdersTableProps {
  hyperdrive: Hyperdrive;
  shorts: OpenShort[];
}

const columnHelper = createColumnHelper<OpenShort>();
const columns = (hyperdrive: Hyperdrive) => [
  columnHelper.accessor("bondAmount", {
    header: `Size (hy${hyperdrive.baseToken.symbol})`,
    cell: (bondAmount) => {
      const bondAmountValue = bondAmount.getValue();
      return dnum.format([bondAmountValue, hyperdrive.baseToken.decimals], {
        digits: 2,
      });
    },
  }),
  columnHelper.accessor("hyperdriveAddress", {
    header: "Current Value",
    cell: ({ row }) => {
      return <CurrentValueCell hyperdrive={hyperdrive} row={row} />;
    },
  }),
  columnHelper.accessor("baseAmountPaid", {
    header: `Amount Paid`,
    cell: (baseAmountPaid) => {
      const amountPaid = baseAmountPaid.getValue();
      return dnum.format([amountPaid, hyperdrive.baseToken.decimals], {
        digits: 4,
      });
    },
  }),
  columnHelper.accessor("assetId", {
    header: "Current Price",
    cell: ({ row }) => {
      return <CurrentPriceCell row={row} hyperdrive={hyperdrive} />;
    },
  }),
];

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
    minBaseAmountOut: parseUnits("0", 18),
    destination: account,
  });
  const value =
    baseAmountOut &&
    dnum.format([row.original.bondAmount - baseAmountOut, 18], {
      digits: 2,
    });

  const profitLossClass = baseAmountOut
    ? getStyleClassForProfitLoss(baseAmountOut, row.original.baseAmountPaid)
    : "";

  return (
    <div>
      <span>{value?.toString()}</span>
      <span className={`ml-2 ${profitLossClass}`}>
        {baseAmountOut && row.original.bondAmount !== 0n
          ? `(${getProfitLossText({
              baseAmountOut,
              amountInput: row.original.baseAmountPaid,
              baseDecimals: hyperdrive.baseToken.decimals,
              baseSymbol: hyperdrive.baseToken.symbol,
              showPercentage: false,
            })})`
          : ""}
      </span>
    </div>
  );
}
function CurrentPriceCell({
  row,
  hyperdrive,
}: {
  row: Row<OpenShort>;
  hyperdrive: Hyperdrive;
}) {
  const { longPrice } = useCurrentLongPrice(hyperdrive);
  return (
    <span>
      {longPrice &&
        `${formatBalance({
          balance: longPrice?.price,
          decimals: hyperdrive.baseToken.decimals,
          places: 3,
        })} ${hyperdrive.baseToken.symbol}`}
    </span>
  );
}

export function OpenShortsTable({
  hyperdrive,
  shorts,
}: OpenOrdersTableProps): ReactElement {
  const tableInstance = useReactTable({
    columns: columns(hyperdrive),
    data: shorts,
    getCoreRowModel: getCoreRowModel(),
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
      <table className="daisy-table mt-5">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="text-lg font-thin text-neutral-content"
                  key={header.id}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
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
                className="h-16 cursor-pointer grid-cols-4 items-center text-sm text-base-content even:bg-secondary/5 md:text-h6"
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
          })}
        </tbody>
      </table>
    </div>
  );
}
