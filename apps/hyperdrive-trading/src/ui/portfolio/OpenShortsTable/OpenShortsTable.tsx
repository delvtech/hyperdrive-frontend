/* eslint-disable react/jsx-key */
import { OpenShort } from "@hyperdrive/sdk";
import { useQuery } from "@tanstack/react-query";
import {
  Row,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { makeQueryKey } from "src/base/makeQueryKey";
import { parseUnits } from "src/base/parseUnits";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import {
  getProfitLossText,
  getStyleClassForProfitLoss,
} from "src/ui/hyperdrive/shorts/CloseShortForm/getProfitLossText";
import { CloseShortModalButton } from "src/ui/hyperdrive/shorts/CloseShortModalButton/CloseShortModalButton";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { useVaultRate } from "src/ui/vaults/useVaultRate";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";

const columnHelper = createColumnHelper<OpenShort>();
const columns = (hyperdrive: Hyperdrive) => [
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
  columnHelper.display({
    header: `Current Value`,
    cell: ({ row }) => {
      return <CurrentValueCell hyperdrive={hyperdrive} row={row} />;
    },
  }),
  columnHelper.accessor("baseAmountPaid", {
    header: `Amount Paid`,
    cell: (baseAmountPaid) => {
      const amountPaid = baseAmountPaid.getValue();
      return formatBalance({
        balance: amountPaid,
        decimals: hyperdrive.baseToken.decimals,
      });
    },
  }),
  columnHelper.display({
    header: "Implied Yield",
    cell: ({ row }) => {
      return <ImpliedYieldCell hyperdrive={hyperdrive} row={row} />;
    },
  }),
];

function ImpliedYieldCell({
  row,
  hyperdrive,
}: {
  row: Row<OpenShort>;
  hyperdrive: Hyperdrive;
}) {
  const { address: account } = useAccount();
  // TODO: temporary for now until this available via addresses.json
  const { vaultRate } = useVaultRate({
    vaultAddress: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  });
  const { baseAmountOut } = usePreviewCloseShort({
    hyperdriveAddress: row.original.hyperdriveAddress,
    maturityTime: row.original.maturity,
    shortAmountIn: row.original.bondAmount,
    minBaseAmountOut: parseUnits("0", hyperdrive.baseToken.decimals),
    destination: account,
  });
  // const fixedRate = formatBalance({
  //   balance: row.original.baseAmountPaid,
  //   decimals: hyperdrive.baseToken.decimals,
  //   places: 6,
  // });
  const fixedRate = calculateFixedRateAtTimeOfShort(
    row.original.baseAmountPaid,
    row.original.bondAmount,
    hyperdrive,
  );
  console.log("fixedRate", fixedRate);
  const variableRate = +formatUnits(vaultRate?.vaultRate || 0n, 18);
  console.log("variableRate", variableRate);
  const impliedYield = variableRate
    ? ((variableRate - fixedRate) / fixedRate) * 100
    : // ? formatRate((variableRate - fixedRate) / fixedRate)
      undefined;

  return <span>{impliedYield?.toString()}%</span>;
}

function calculateFixedRateAtTimeOfShort(
  basePaid: bigint,
  bondsShorted: bigint,
  hyperdrive: Hyperdrive,
): number {
  console.log("basePaid", basePaid);
  console.log("bondsShorted", bondsShorted);
  // Example: 0.05 / 1 = fixed apr was 5% at time of short
  const fixedRate = Number(basePaid) / Number(bondsShorted);
  // const fixedRate = divideBigInt(
  //   parseUnits(basePaid.toString()),
  //   bondsShorted,
  //   hyperdrive.baseToken.decimals,
  // );
  // Example usage with a dynamic term length of 7 days:
  const basePaid2 = 0.05; // Replace with your actual values
  const bondsReceived = 1; // Replace with your actual values
  const termLengthInDayz = 365; // Replace with your actual term length
  const annualizedAPR = calculateAnnualizedAPR(
    basePaid2,
    bondsReceived,
    termLengthInDayz,
  );
  console.log(`Annualized APR: ${annualizedAPR}`);
  // (fixedRate * 365) / termLengthDays
  const termLengthInDays = convertMillisecondsToDays(hyperdrive.termLengthMS);
  return (fixedRate * 365) / termLengthInDays;
}

function calculateAnnualizedAPR(
  basePaid: number,
  bondsReceived: number,
  termLengthInDays: number,
): number {
  const dailyInterest =
    Math.pow(1 - basePaid / bondsReceived, 1 / termLengthInDays) - 1;
  const annualizedAPR = Math.pow(1 + dailyInterest, 365) - 1;
  return annualizedAPR;
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
      balance: row.original.bondAmount - baseAmountOut,
      decimals: hyperdrive.baseToken.decimals,
    });
  const profitLossClass = baseAmountOut
    ? getStyleClassForProfitLoss(baseAmountOut, row.original.baseAmountPaid)
    : "";

  return (
    <div>
      <span>{currentValue?.toString()}</span>
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

export function OpenShortsTable({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  const { address: account } = useAccount();
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: shorts } = useQuery({
    queryKey: makeQueryKey("shortPositions", { account }),
    queryFn: queryEnabled
      ? () => readHyperdrive?.getOpenShorts({ account })
      : undefined,
    enabled: queryEnabled,
  });
  const tableInstance = useReactTable({
    columns: columns(hyperdrive),
    data: shorts || [],
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
                <th className="text-lg font-thin" key={header.id}>
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
                className="daisy-hover h-16 cursor-pointer grid-cols-4 items-center text-sm text-base-content even:bg-secondary/5 md:text-h6"
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
