import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import {
  AppConfig,
  EmptyExtensions,
  HyperdriveConfig,
  TokenConfig,
  findBaseToken,
} from "@hyperdrive/appconfig";
import {
  Long,
  calculateFixedRateFromOpenLong,
  calculateMatureLongYieldAfterFees,
} from "@hyperdrive/sdk";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import classNames from "classnames";
import { ReactElement } from "react";
import { formatRate } from "src/base/formatRate";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { CloseLongModalButton } from "src/ui/hyperdrive/longs/CloseLongModalButton/CloseLongModalButton";
import { useOpenLongs } from "src/ui/hyperdrive/longs/hooks/useOpenLongs";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import { MaturesOnCell } from "src/ui/portfolio/MaturesOnCell/MaturesOnCell";
import { parseUnits } from "viem";
import { useAccount } from "wagmi";

export function OpenLongsTableMobile({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const { openLongs, openLongsStatus } = useOpenLongs({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const tableInstance = useReactTable({
    columns: getMobileColumns({ hyperdrive, appConfig }),
    data: openLongs || [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
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
    return <LoadingState />;
  }
  if (!openLongs?.length && openLongsStatus === "success") {
    return (
      <div className="my-28">
        <NonIdealState
          heading="You have no open Long positions"
          text="Open a Long, switch wallets, or view your closed long positions"
        />
      </div>
    );
  }

  return (
    <div className="max-h-96 overflow-y-auto overflow-x-clip">
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
const columnHelper = createColumnHelper<Long>();

function formatOpenLongMobileColumnData(
  row: Long,
  hyperdrive: HyperdriveConfig,
  baseToken: TokenConfig<EmptyExtensions>,
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
            places: 2,
          })}
        </span>
      ),
    },
    {
      name: `Paid (${baseToken.symbol})`,
      value: formatBalance({
        balance: row.baseAmountPaid,
        decimals: baseToken.decimals,
        places: 2,
      }),
    },
    {
      name: "Fixed rate (APR)",
      value: <FixedRateCell hyperdrive={hyperdrive} row={row} />,
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
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
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

function CurrentValueCell({
  row,
  hyperdrive,
}: {
  row: Long;
  hyperdrive: HyperdriveConfig;
}) {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  // TODO: This needs to be converted to baseAmount if called w/ asBase set to false
  const { amountOut: baseAmountOut, previewCloseLongStatus } =
    usePreviewCloseLong({
      hyperdriveAddress: hyperdrive.address,
      maturityTime: row.maturity,
      bondAmountIn: row.bondAmount,
      minOutput: parseUnits("0", baseToken.decimals),
      destination: account,
      asBase: baseToken.address !== ETH_MAGIC_NUMBER,
    });

  const currentValue =
    baseAmountOut &&
    formatBalance({
      balance: baseAmountOut,
      decimals: baseToken.decimals,
      places: 2,
    });

  const isPositiveChangeInValue =
    baseAmountOut && baseAmountOut > row.baseAmountPaid;
  if (previewCloseLongStatus === "error") {
    return <div>Insufficient Liquidity</div>;
  }
  return (
    <div className="daisy-stat flex flex-row p-0 xl:flex-col">
      <span className="daisy-stat-value text-md font-bold">
        {currentValue?.toString()}
      </span>
      <div
        data-tip={"Profit/Loss since open"}
        className={classNames(
          "daisy-stat-desc daisy-tooltip mt-1 inline-flex text-xs",
          { "text-success": isPositiveChangeInValue },
          { "text-error": !isPositiveChangeInValue },
        )}
      >
        <span>{isPositiveChangeInValue ? "+" : ""}</span>
        {baseAmountOut
          ? `${formatBalance({
              balance: baseAmountOut - row.baseAmountPaid,
              decimals: baseToken.decimals,
              places: 4,
            })} ${baseToken.symbol}`
          : undefined}
      </div>
    </div>
  );
}

function FixedRateCell({
  row,
  hyperdrive,
}: {
  row: Long;
  hyperdrive: HyperdriveConfig;
}) {
  const appConfig = useAppConfig();
  const { poolConfig, baseToken: baseTokenAddress } = hyperdrive;
  const baseToken = findBaseToken({
    baseTokenAddress,
    tokens: appConfig.tokens,
  });
  const { baseAmountPaid, bondAmount } = row;
  const fixedRate = calculateFixedRateFromOpenLong({
    baseAmount: baseAmountPaid,
    bondAmount,
    positionDuration: poolConfig?.positionDuration || 0n,
    decimals: baseToken.decimals,
  });

  const yieldAfterFlatFee = calculateMatureLongYieldAfterFees({
    flatFee: poolConfig?.fees.flat || 0n,
    bondAmount,
    baseAmountPaid,
    decimals: baseToken.decimals,
  });

  return (
    <div className="daisy-stat flex flex-row p-0">
      <span className="daisy-stat-value text-md font-bold">
        {formatRate(fixedRate)}%
      </span>
      <div
        data-tip={"Yield after fees if held to maturity"}
        className={
          "daisy-stat-desc daisy-tooltip mt-1 inline-flex text-xs text-success"
        }
      >
        <span>{"+"}</span>
        {formatBalance({
          balance: yieldAfterFlatFee,
          decimals: baseToken.decimals,
          places: 4,
        })}{" "}
        {baseToken.symbol}
      </div>
    </div>
  );
}
