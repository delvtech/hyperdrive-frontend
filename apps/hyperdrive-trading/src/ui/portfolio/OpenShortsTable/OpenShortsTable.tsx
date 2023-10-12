/* eslint-disable react/jsx-key */
import { XMarkIcon } from "@heroicons/react/24/outline";
import { OpenShort } from "@hyperdrive/sdk";
import {
  Row,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as dnum from "dnum";
import { ReactElement, useState } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { parseUnits } from "src/base/parseUnits";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { CloseShortForm } from "src/ui/hyperdrive/shorts/CloseShortForm/CloseShortForm";
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
  columnHelper.accessor("baseAmountPaid", {
    header: `Amount Paid`,
    cell: (baseAmountPaid) => {
      const amountPaid = baseAmountPaid.getValue();
      return dnum.format([amountPaid, hyperdrive.baseToken.decimals], {
        digits: 4,
      });
    },
  }),
  columnHelper.accessor("hyperdriveAddress", {
    header: "Current Value",
    cell: ({ row }) => {
      return <CurrentValueCell row={row} />;
    },
  }),
  columnHelper.accessor("openedTimestamp", {
    header: "Current Price",
    cell: ({ row }) => {
      return <CurrentPriceCell row={row} hyperdrive={hyperdrive} />;
    },
  }),
];

function CurrentValueCell({ row }: { row: Row<OpenShort> }) {
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

  return <span>{value?.toString()}</span>;
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
  const [activeShort, setActiveShort] = useState<Row<OpenShort> | undefined>(
    undefined,
  );

  function handleRowClick(row: Row<OpenShort>) {
    setActiveShort(row);
    (
      document.getElementById("openshort_modal") as HTMLDialogElement
    ).showModal();
  }

  function handleCloseModal() {
    (document.getElementById("openshort_modal") as HTMLDialogElement).close();
  }

  return (
    <>
      <div className="max-h-96 overflow-y-scroll">
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
            {tableInstance.getRowModel().rows.map((row) => (
              <tr
                className="h-16 cursor-pointer grid-cols-4 items-center text-sm text-base-content even:bg-secondary/5 md:text-h6"
                key={row.id}
                onClick={() => handleRowClick(row)}
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
            ))}
          </tbody>
        </table>
      </div>
      <dialog id={"openshort_modal"} className="modal">
        <div>
          <button
            className="daisy-btn-ghost daisy-btn-sm daisy-btn-circle daisy-btn absolute right-4 top-4"
            onClick={handleCloseModal}
          >
            <XMarkIcon
              className="w-6 text-white opacity-70 hover:opacity-100 focus:opacity-100"
              title="Close position"
            />
          </button>
          <h3 className="text-h6 font-thin text-base-content">
            Close position
          </h3>
          {activeShort && (
            <CloseShortForm
              hyperdrive={hyperdrive}
              short={activeShort?.original}
              onCloseShort={(e) => {
                // preventDefault since we don't want to close the modal while the
                // tx is temporarily pending the user's signature in their wallet.
                e.preventDefault();
              }}
            />
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleCloseModal}>close</button>
        </form>
      </dialog>
    </>
  );
}
