/* eslint-disable react/jsx-key */
import {
  ChevronDownIcon,
  ChevronUpIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { OpenShort } from "@hyperdrive/sdk";
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
import { HyperdriveConfigOld } from "src/hyperdrive/HyperdriveConfigOld";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import LoadingState from "src/ui/base/components/LoadingState";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useAccruedYield } from "src/ui/hyperdrive/hooks/useAccruedYield";
import { getProfitLossText } from "src/ui/hyperdrive/shorts/CloseShortForm/getProfitLossText";
import { CloseShortModalButton } from "src/ui/hyperdrive/shorts/CloseShortModalButton/CloseShortModalButton";
import { useOpenShorts } from "src/ui/hyperdrive/shorts/hooks/useOpenShorts";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { MaturesOnCell } from "src/ui/portfolio/MaturesOnCell/MaturesOnCell";
import { useAccount } from "wagmi";

function formatOpenShortMobileColumnData(
  openShort: OpenShort,
  hyperdrive: HyperdriveConfigOld,
) {
  return [
    {
      name: "Matures on",
      value: <MaturesOnCell maturity={openShort.maturity} />,
    },
    {
      name: `Size (${hyperdrive.baseToken.symbol})`,
      value: formatBalance({
        balance: openShort.bondAmount,
        decimals: hyperdrive.baseToken.decimals,
        places: 6,
      }),
    },
    {
      name: `Amount paid`,
      value: formatBalance({
        balance: openShort.baseAmountPaid,
        decimals: hyperdrive.baseToken.decimals,
        places: 6,
      }),
    },
    {
      name: `Yield (${hyperdrive.baseToken.symbol})`,
      value: <AccruedYieldCell hyperdrive={hyperdrive} openShort={openShort} />,
    },
    {
      name: `Current value`,
      value: <CurrentValueCell hyperdrive={hyperdrive} openShort={openShort} />,
    },
  ];
}

function getMobileColumns(hyperdrive: HyperdriveConfigOld) {
  return [
    columnHelper.display({
      id: "ColumnNames",
      cell: ({ row }) => {
        const data = formatOpenShortMobileColumnData(row.original, hyperdrive);
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
        const data = formatOpenShortMobileColumnData(row.original, hyperdrive);
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

const columnHelper = createColumnHelper<OpenShort>();
function getColumns(hyperdrive: HyperdriveConfigOld) {
  return [
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
          places: 3,
        });
      },
    }),
    columnHelper.display({
      header: `Yield earned (${hyperdrive.baseToken.symbol})`,
      cell: ({ row }) => {
        return (
          <AccruedYieldCell hyperdrive={hyperdrive} openShort={row.original} />
        );
      },
    }),
    columnHelper.display({
      header: `Current value (${hyperdrive.baseToken.symbol})`,
      cell: ({ row }) => {
        return (
          <CurrentValueCell hyperdrive={hyperdrive} openShort={row.original} />
        );
      },
    }),
  ];
}

function AccruedYieldCell({
  openShort,
  hyperdrive,
}: {
  openShort: OpenShort;
  hyperdrive: HyperdriveConfigOld;
}) {
  const { bondAmount, checkpointId } = openShort;
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
  hyperdrive: HyperdriveConfigOld;
}) {
  const { address: account } = useAccount();
  const { baseAmountOut } = usePreviewCloseShort({
    hyperdriveAddress: openShort.hyperdriveAddress,
    maturityTime: openShort.maturity,
    shortAmountIn: openShort.bondAmount,
    minBaseAmountOut: parseUnits("0", hyperdrive.baseToken.decimals),
    destination: account,
  });
  const currentValue =
    baseAmountOut &&
    formatBalance({
      balance: baseAmountOut,
      decimals: hyperdrive.baseToken.decimals,
      places: 3,
    });

  const isPositiveChangeInValue =
    baseAmountOut && baseAmountOut > openShort.baseAmountPaid;

  return (
    <div className="daisy-stat p-0">
      <span className="daisy-stat-value text-md font-bold">
        {currentValue?.toString()}
      </span>
      {baseAmountOut && openShort.bondAmount !== 0n ? (
        <div
          data-tip={"Profit/Loss since open"}
          className={classNames(
            "daisy-stat-desc daisy-tooltip mt-1 flex text-xs",
            { "text-success": isPositiveChangeInValue },
            { "text-error": !isPositiveChangeInValue },
          )}
        >
          {getProfitLossText({
            baseAmountOut,
            amountInput: openShort.baseAmountPaid,
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
  hyperdrive: HyperdriveConfigOld;
}): ReactElement {
  const { address: account } = useAccount();

  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const { openShorts, openShortsStatus } = useOpenShorts({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const tableInstance = useReactTable({
    columns: isTailwindSmallScreen
      ? getMobileColumns(hyperdrive)
      : getColumns(hyperdrive),
    data: openShorts || [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
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
  if (openShortsStatus === "loading") {
    return <LoadingState />;
  }
  if (!openShorts?.length && openShortsStatus === "success") {
    return (
      <div className="my-28">
        <NonIdealState
          heading="You have no open Short positions"
          text="Open a Short, switch wallets, or view your closed short positions"
        />
      </div>
    );
  }

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
