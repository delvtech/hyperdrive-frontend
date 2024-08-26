import { Long } from "@delvtech/hyperdrive-viem";
import {
  AppConfig,
  HyperdriveConfig,
  TokenConfig,
  findToken,
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
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { Pagination } from "src/ui/base/components/Pagination";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { MaturesOnCell } from "src/ui/hyperdrive/MaturesOnCell/MaturesOnCell";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { CloseLongModalButton } from "src/ui/hyperdrive/longs/CloseLongModalButton/CloseLongModalButton";
import { OpenLongModalButton } from "src/ui/hyperdrive/longs/OpenLongModalButton/OpenLongModalButton";
import { CurrentValueCell } from "src/ui/hyperdrive/longs/OpenLongsTable/CurrentValueCell";
import { FixedRateCell } from "src/ui/hyperdrive/longs/OpenLongsTable/FixedRateCell";
import { useOpenLongs } from "src/ui/hyperdrive/longs/hooks/useOpenLongs";
import { useAccount } from "wagmi";

export function OpenLongsTableMobile({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const { marketState } = useMarketState(hyperdrive.address);
  const appConfig = useAppConfig();
  const { openLongs, openLongsStatus } = useOpenLongs({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const tableInstance = useReactTable({
    columns: getMobileColumns({ hyperdrive, appConfig }),
    data: openLongs || [],
    initialState: {
      sorting: [
        {
          id: "ColumnValues",
          desc: true,
        },
      ],
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
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
  if (openLongsStatus === "loading") {
    return (
      <LoadingState
        heading="Loading your Longs..."
        text="Searching for Long events, calculating current value and PnL..."
      />
    );
  }
  if (!openLongs?.length && openLongsStatus === "success") {
    if (marketState?.isPaused) {
      return (
        <div className="my-28">
          <NonIdealState
            heading="Market Paused"
            text="This market is currently paused. You cannot open new positions but you may close existing ones."
          />
        </div>
      );
    }
    return (
      <div className="my-28">
        <NonIdealState
          heading="You have no open Long positions"
          text="Open a Long, switch wallets, or view your closed Long positions"
          action={
            <OpenLongModalButton modalId="open-long" hyperdrive={hyperdrive} />
          }
        />
      </div>
    );
  }

  return (
    <div>
      {/* Modal needs to be rendered outside of the table so that dialog can be used. Otherwise react throws a dom nesting error */}
      {tableInstance.getRowModel().rows.map((row) => {
        const modalId = `${row.original.assetId}`;
        return (
          <CloseLongModalButton
            key={modalId}
            hyperdrive={hyperdrive}
            modalId={modalId}
            long={row.original}
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
                className="daisy-hover h-24 cursor-pointer items-center transition duration-300 ease-in-out"
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
const columnHelper = createColumnHelper<Long>();

function formatOpenLongMobileColumnData(
  row: Long,
  hyperdrive: HyperdriveConfig,
  baseToken: TokenConfig,
) {
  return [
    {
      name: "Matures on",
      value: <MaturesOnCell maturity={row.maturity} />,
    },
    {
      name: `Size (hy${baseToken.symbol})`,
      value: (
        <span>
          {formatBalance({
            balance: row.bondAmount,
            decimals: baseToken.decimals,
            places: baseToken.places,
          })}
        </span>
      ),
    },
    {
      name: `Cost (${baseToken.symbol})`,
      value: formatBalance({
        balance: row.baseAmountPaid,
        decimals: baseToken.decimals,
        places: baseToken.places,
      }),
    },
    {
      name: "Fixed APR",
      value: (
        <FixedRateCell
          hyperdrive={hyperdrive}
          baseAmountPaid={row.baseAmountPaid}
          bondAmount={row.bondAmount}
        />
      ),
    },
    {
      name: `Current value`,
      value: <CurrentValueCell hyperdrive={hyperdrive} row={row} />,
    },
  ];
}

function getMobileColumns({
  hyperdrive,
  appConfig,
}: {
  hyperdrive: HyperdriveConfig;
  appConfig: AppConfig;
}) {
  const baseToken = findToken({
    baseTokenAddress: hyperdrive.poolConfig.baseToken,
    tokens: appConfig.tokens,
  });
  return [
    columnHelper.display({
      id: "ColumnNames",
      cell: ({ row }) => {
        const data = formatOpenLongMobileColumnData(
          row.original,
          hyperdrive,
          baseToken,
        );
        return (
          <ul className="flex flex-col items-start gap-1 text-neutral-content">
            {data.map((column) => (
              <li key={column.name}>{column.name}</li>
            ))}
          </ul>
        );
      },
    }),
    columnHelper.display({
      id: "ColumnValues",
      sortingFn: (rowA, rowB) => {
        return Number(rowA.original.maturity - rowB.original.maturity);
      },
      cell: ({ row }) => {
        const data = formatOpenLongMobileColumnData(
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
