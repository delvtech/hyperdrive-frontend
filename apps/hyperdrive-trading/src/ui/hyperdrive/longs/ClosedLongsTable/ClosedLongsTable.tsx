import { ClosedLong } from "@delvtech/hyperdrive-viem";
import {
  AppConfig,
  EmptyExtensions,
  HyperdriveConfig,
  TokenConfig,
  findBaseToken,
} from "@hyperdrive/appconfig";
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
import { useClosedLongs } from "src/ui/hyperdrive/longs/hooks/useClosedLongs";
import { useAccount } from "wagmi";

interface ClosedLongsTableProps {
  hyperdrive: HyperdriveConfig;
}

const columnHelper = createColumnHelper<ClosedLong>();
function formatClosedLongMobileColumnData(
  closedLong: ClosedLong,
  hyperdrive: HyperdriveConfig,
  baseToken: TokenConfig<EmptyExtensions>,
) {
  return [
    {
      name: "Matures on",
      value: (
        <span>
          {new Date(Number(closedLong.maturity * 1000n)).toLocaleDateString()}
        </span>
      ),
    },
    {
      name: `Size (hy${baseToken.symbol})`,
      value: (
        <span>
          {formatBalance({
            balance: closedLong.bondAmount,
            decimals: baseToken.decimals,
            places: 2,
          })}
        </span>
      ),
    },
    {
      name: `Value received (${baseToken.symbol})`,
      value: (
        <BaseAmountReceivedCell
          hyperdrive={hyperdrive}
          closedLong={closedLong}
        />
      ),
    },
    {
      name: "Closed on",
      value: (
        <span>
          {new Date(
            Number(closedLong.closedTimestamp * 1000n),
          ).toLocaleDateString()}
        </span>
      ),
    },
  ];
}

function getMobileColumns(hyperdrive: HyperdriveConfig, appConfig: AppConfig) {
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  return [
    columnHelper.display({
      id: "ColumnNames",
      cell: ({ row }) => {
        const data = formatClosedLongMobileColumnData(
          row.original,
          hyperdrive,
          baseToken,
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
        const data = formatClosedLongMobileColumnData(
          row.original,
          hyperdrive,
          baseToken,
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
    columnHelper.display({
      id: "size",
      header: `Size (hy${baseToken.symbol})`,
      cell: ({ row }) => {
        return (
          <span>
            {formatBalance({
              balance: row.original.bondAmount,
              decimals: baseToken.decimals,
              places: 2,
            })}
          </span>
        );
      },
    }),
    columnHelper.display({
      id: "baseReceived",
      header: `Value received (${baseToken.symbol})`,
      cell: ({ row }) => {
        return (
          <BaseAmountReceivedCell
            hyperdrive={hyperdrive}
            closedLong={row.original}
          />
        );
      },
    }),
    columnHelper.accessor("closedTimestamp", {
      header: `Closed on`,
      cell: ({ row }) => {
        return new Date(
          Number(row.original.closedTimestamp * 1000n),
        ).toLocaleDateString();
      },
    }),
  ];
}
export function ClosedLongsTable({
  hyperdrive,
}: ClosedLongsTableProps): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const { closedLongs, closedLongsStatus } = useClosedLongs({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const tableInstance = useReactTable({
    columns: isTailwindSmallScreen
      ? getMobileColumns(hyperdrive, appConfig)
      : getColumns(hyperdrive, appConfig),
    data: [...(closedLongs || [])].reverse(), // show most recently closed first, TODO: refactor to interactive column sorting
    getCoreRowModel: getCoreRowModel(),
  });

  if (!account) {
    return (
      <div className="my-28">
        <NonIdealState
          heading="No wallet connected"
          text="Connect your wallet to view your Longs."
          action={<ConnectWalletButton />}
        />
      </div>
    );
  }

  if (closedLongsStatus === "loading") {
    return <LoadingState />;
  }
  if (!closedLongs?.length && closedLongsStatus === "success") {
    return (
      <div className="my-28">
        <NonIdealState
          heading="You have no closed Long positions"
          text="Close a Long, switch wallets, or view your open long positions"
        />
      </div>
    );
  }

  return (
    <div className="max-h-96 overflow-y-auto md:w-[750px]">
      <table className="daisy-table daisy-table-zebra daisy-table-lg">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="sticky font-normal text-neutral-content"
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
              <tr key={row.id} className="h-24 items-center">
                <>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td className="align-top italic" key={cell.id}>
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

function BaseAmountReceivedCell({
  closedLong,
  hyperdrive,
}: {
  closedLong: ClosedLong;
  hyperdrive: HyperdriveConfig;
}) {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const currentValueLabel = formatBalance({
    balance: closedLong.baseAmount,
    decimals: baseToken.decimals,
    places: 4,
  });

  return (
    <div className="flex flex-col items-center gap-1 lg:flex-row">
      <span className="font-bold">{currentValueLabel?.toString()}</span>
    </div>
  );
}
