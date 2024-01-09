/* eslint-disable react/jsx-key */
import {
  ChevronDownIcon,
  ChevronUpIcon,
  SparklesIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { OpenShort } from "@hyperdrive/sdk";
import { useQuery } from "@tanstack/react-query";
import {
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
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { NonIdealState } from "src/ui/base/components/NonIdealState";
import { TableSkeleton } from "src/ui/base/components/TableSkeleton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useAccruedYield } from "src/ui/hyperdrive/hooks/useAccruedYield";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { getProfitLossText } from "src/ui/hyperdrive/shorts/CloseShortForm/getProfitLossText";
import { CloseShortModalButton } from "src/ui/hyperdrive/shorts/CloseShortModalButton/CloseShortModalButton";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { MaturesOnCell } from "src/ui/portfolio/MaturesOnCell/MaturesOnCell";
import { useAccount } from "wagmi";

const formatOpenShortMobileColumnData = (
  openShort: OpenShort,
  hyperdrive: Hyperdrive,
) => [
  {
    name: "Matures on",
    value: <MaturesOnCell maturity={openShort.maturity} />,
  },
  {
    name: `Size (hy${hyperdrive.baseToken.symbol})`,
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

function getMobileColumns(hyperdrive: Hyperdrive) {
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
const getColumns = (hyperdrive: Hyperdrive) => [
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

function AccruedYieldCell({
  openShort,
  hyperdrive,
}: {
  openShort: OpenShort;
  hyperdrive: Hyperdrive;
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
          places: 6,
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
  hyperdrive: Hyperdrive;
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
      places: 6,
    });

  const isPositiveChangeInValue =
    baseAmountOut && baseAmountOut > openShort.baseAmountPaid;

  return (
    <div className="flex flex-row gap-1 sm:flex-col">
      <span className="ml-1 font-bold">{currentValue?.toString()}</span>
      {baseAmountOut && openShort.bondAmount !== 0n ? (
        <div
          data-tip={"Profit/Loss since open"}
          className={classNames(
            "daisy-badge daisy-badge-md daisy-tooltip inline-flex text-xs",
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
  hyperdrive: Hyperdrive;
}): ReactElement {
  const { address: account } = useAccount();

  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive && !!account;
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const { data: shorts, isLoading } = useQuery({
    queryKey: makeQueryKey("shortPositions", { account }),
    queryFn: queryEnabled
      ? () => readHyperdrive?.getOpenShorts({ account })
      : undefined,
    enabled: queryEnabled,
  });
  const tableInstance = useReactTable({
    columns: isTailwindSmallScreen
      ? getMobileColumns(hyperdrive)
      : getColumns(hyperdrive),
    data: shorts || [],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  if (!account) {
    return (
      <NonIdealState
        heading="No wallet connected"
        text="Connect your wallet to view your Shorts."
        icon={<WalletIcon height="64" />}
        action={<ConnectWalletButton />}
      />
    );
  }

  if (!shorts?.length) {
    return (
      <NonIdealState
        heading="You have no open Short positions"
        text="Open a Short, switch wallets, or view Closed positions instead"
        icon={<SparklesIcon height="64" />}
      />
    );
  }

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
            })
          )}
        </tbody>
      </table>
      {!shorts?.length && !isLoading ? <NonIdealState /> : null}
    </div>
  );
}
