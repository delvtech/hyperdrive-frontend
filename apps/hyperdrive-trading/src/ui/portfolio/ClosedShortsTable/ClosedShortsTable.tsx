import { WalletIcon } from "@heroicons/react/24/outline";
import { ClosedShort } from "@hyperdrive/sdk";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ReactElement } from "react";
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useClosedShorts } from "src/ui/hyperdrive/shorts/hooks/useClosedShorts";
import { useAccount } from "wagmi";

interface ClosedShortsTableProps {
  hyperdrive: HyperdriveConfig;
}

function formatClosedShortMobileColumnData(
  closedShort: ClosedShort,
  hyperdrive: HyperdriveConfig,
) {
  return [
    {
      name: "Matures on",
      value: new Date(
        Number(closedShort.maturity * 1000n),
      ).toLocaleDateString(),
    },
    {
      name: `Size (${hyperdrive.baseToken.symbol})`,
      value: formatBalance({
        balance: closedShort.bondAmount,
        decimals: hyperdrive.baseToken.decimals,
        places: 2,
      }),
    },
    {
      name: `Amount received (${hyperdrive.baseToken.symbol})`,
      value: formatBalance({
        balance: closedShort.baseAmountReceived,
        decimals: hyperdrive.baseToken.decimals,
        places: 4,
      }),
    },
    {
      name: "Closed",
      value: new Date(
        Number(closedShort.closedTimestamp * 1000n),
      ).toLocaleDateString(),
    },
  ];
}

const columnHelper = createColumnHelper<ClosedShort>();

function getMobileColumns(hyperdrive: HyperdriveConfig) {
  return [
    columnHelper.display({
      id: "ColumnNames",
      cell: ({ row }) => {
        const data = formatClosedShortMobileColumnData(
          row.original,
          hyperdrive,
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
        const data = formatClosedShortMobileColumnData(
          row.original,
          hyperdrive,
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

const getColumns = (hyperdrive: HyperdriveConfig) => [
  columnHelper.display({
    header: `Matures on`,
    cell: ({ row }) => {
      const maturity = new Date(Number(row.original.maturity * 1000n));
      return <span>{maturity.toLocaleDateString()}</span>;
    },
  }),
  columnHelper.accessor("bondAmount", {
    header: `Size (hy${hyperdrive.baseToken.symbol})`,
    cell: (bondAmount) => {
      const bondAmountValue = bondAmount.getValue();
      return formatBalance({
        balance: bondAmountValue,
        decimals: hyperdrive.baseToken.decimals,
      });
    },
  }),
  columnHelper.accessor("baseAmountReceived", {
    header: `Amount received (${hyperdrive.baseToken.symbol})`,
    cell: (baseAmountReceived) => {
      const amountReceived = baseAmountReceived.getValue();
      return formatBalance({
        balance: amountReceived,
        decimals: hyperdrive.baseToken.decimals,
        places: 4,
      });
    },
  }),
  columnHelper.accessor("closedTimestamp", {
    header: `Closed`,
    cell: (closedTimestamp) => {
      return (
        <span>
          {new Date(
            Number(closedTimestamp.getValue() * 1000n),
          ).toLocaleDateString()}
        </span>
      );
    },
  }),
];

export function ClosedShortsTable({
  hyperdrive,
}: ClosedShortsTableProps): ReactElement {
  const { address: account } = useAccount();
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const { closedShorts, closedShortsStatus } = useClosedShorts({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const tableInstance = useReactTable({
    columns: isTailwindSmallScreen
      ? getMobileColumns(hyperdrive)
      : getColumns(hyperdrive),
    data: closedShorts || [],
    getCoreRowModel: getCoreRowModel(),
  });

  if (!account) {
    return (
      <div className="my-28">
        <NonIdealState
          heading="No wallet connected"
          text="Connect your wallet to view your Shorts."
          icon={<WalletIcon height="64" />}
          action={<ConnectWalletButton />}
        />
      </div>
    );
  }

  if (!closedShorts?.length && closedShortsStatus === "success") {
    return (
      <div className="my-28">
        <NonIdealState
          heading="You have no closed Short positions"
          text="Close a Short, switch wallets, or view your open short positions"
        />
      </div>
    );
  }
  return (
    <div className="max-h-96 overflow-y-scroll">
      <table className="daisy-table daisy-table-zebra daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="sticky font-normal text-gray-400"
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
          {closedShortsStatus === "loading" ? (
            <TableSkeleton numColumns={5} />
          ) : (
            tableInstance.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className="h-24 grid-cols-4 items-center">
                  <>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td className="align-top text-lg" key={cell.id}>
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
      {!closedShorts?.length ? <NonIdealState /> : null}
    </div>
  );
}
