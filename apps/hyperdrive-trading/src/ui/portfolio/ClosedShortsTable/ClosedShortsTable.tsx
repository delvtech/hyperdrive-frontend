import { WalletIcon } from "@heroicons/react/24/outline";
import {
  AppConfig,
  HyperdriveConfig,
  findBaseToken,
} from "@hyperdrive/appconfig";
import { ClosedShort } from "@hyperdrive/sdk";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
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
  appConfig: AppConfig,
) {
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  return [
    {
      name: "Matures on",
      value: new Date(
        Number(closedShort.maturity * 1000n),
      ).toLocaleDateString(),
    },
    {
      name: `Size (${baseToken.symbol})`,
      value: formatBalance({
        balance: closedShort.bondAmount,
        decimals: baseToken.decimals,
        places: 2,
      }),
    },
    {
      name: `Amount received (${baseToken.symbol})`,
      value: formatBalance({
        balance: closedShort.baseAmountReceived,
        decimals: baseToken.decimals,
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

function getMobileColumns(hyperdrive: HyperdriveConfig, appConfig: AppConfig) {
  return [
    columnHelper.display({
      id: "ColumnNames",
      cell: ({ row }) => {
        const data = formatClosedShortMobileColumnData(
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
        const data = formatClosedShortMobileColumnData(
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

function getColumns(hyperdrive: HyperdriveConfig, appConfig: AppConfig) {
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });

  return [
    columnHelper.display({
      header: `Matures on`,
      cell: ({ row }) => {
        const maturity = new Date(Number(row.original.maturity * 1000n));
        return <span>{maturity.toLocaleDateString()}</span>;
      },
    }),
    columnHelper.accessor("bondAmount", {
      header: `Size (hy${baseToken.symbol})`,
      cell: (bondAmount) => {
        const bondAmountValue = bondAmount.getValue();
        return formatBalance({
          balance: bondAmountValue,
          decimals: baseToken.decimals,
        });
      },
    }),
    columnHelper.accessor("baseAmountReceived", {
      header: `Amount received (${baseToken.symbol})`,
      cell: (baseAmountReceived) => {
        const amountReceived = baseAmountReceived.getValue();
        return (
          <span className="font-bold">
            {formatBalance({
              balance: amountReceived,
              decimals: baseToken.decimals,
              places: 4,
            })}
          </span>
        );
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
}

export function ClosedShortsTable({
  hyperdrive,
}: ClosedShortsTableProps): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const { closedShorts, closedShortsStatus } = useClosedShorts({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const tableInstance = useReactTable({
    columns: isTailwindSmallScreen
      ? getMobileColumns(hyperdrive, appConfig)
      : getColumns(hyperdrive, appConfig),
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

  if (closedShortsStatus === "loading") {
    return <LoadingState />;
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
          {tableInstance.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className="h-24 grid-cols-4 items-center">
                <>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td className="align-top" key={cell.id}>
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
      {!closedShorts?.length ? <NonIdealState /> : null}
    </div>
  );
}
