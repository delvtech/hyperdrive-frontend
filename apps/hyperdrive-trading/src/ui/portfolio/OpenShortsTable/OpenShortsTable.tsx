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
    header: "Accrued Yield",
    cell: ({ row }) => {
      return <AccruedYieldCell hyperdrive={hyperdrive} row={row} />;
    },
  }),
];

// ___Share price___
// Accrued yield = (valutPriceEnd - valutPriceStart) / valutPriceStart * size of position
/*
  Rate    StartPrice    EndPrice
  10%     1.00          1.10 (1.0*1.1)
  10%     1.10          1.21 (1.1*1.1)
  20%     2.00          2.40 (2.0*1.2)
  20%     2.20          2.64 (2.2*1.2)
*/

function AccruedYieldCell({
  row,
  hyperdrive,
}: {
  row: Row<OpenShort>;
  hyperdrive: Hyperdrive;
}) {
  // TODO: temporary for now until this available via addresses.json
  const { vaultRate } = useVaultRate({
    vaultAddress: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  });

  // // Current PoolInfo contains the current price of a vault share
  // const { poolInfo } = usePoolInfo(hyperdrive.address);

  // // Current PoolInfo contains price of a vault share when the short was opened
  // const { poolInfo: poolInfoAtOpen } = usePoolInfo(hyperdrive.address);

  // Accrued yield (in BASE) is:
  // (poolInfo?.sharePrice / poolInfoAtOpen?.sharePrice) * row.original.bondAmount

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

// // what you get at the end of 7 days
// funding_APY = some_compounding_to_365;

/*
displayed_APR = 0.0683;
p = 0.99869;
t = 7;
HPR = (1 - p) / p;
    = 0.0013117183510398956
calculated_APY = (1 + HPR) ** (365 / t) - 1;
               = 0.07074206109785264
// APR is your annualized return without compounding
calculated_APR = (HPR * 365) / t;
               = 0.06839674258993741
variable_APY = 0.05
// for 7 days
variable_HPR = (1 + variable_APY) ** (7 / 365) - 1
             = 0.000936139684073467
             (assumes original variable_APY compounds daily)
variable_APR = variable_HPR * 365 / 7
             = 0.04881299781240221
what_you_get = variable_HPR - HPR
            = 0.000936139684073467 - 0.0013117183510398956
            = -0.0003755786669664286
what_you_pay = 1-p
              = 1 - 0.99869
              = 0.00131
implied_yield = what_you_get / what_you_pay - 1
              = -0.0003755786669664286 / 0.00131 - 1
              = -1.286701272493457
              = -129%
              (fixed rate was higher than variable, negative makes sense)
another way to think of this is...
implied_leverage = 1/(1-p)
                 = 763.3587786259347
                 = very based
this means your return is
                = (variable - fixed) * implied_leverage
                = (variable_APR - APR) * implied_leverage
                = (0.04881299781240221 - 0.0683) * implied_leverage
                = -0.019487002187597788 * implied_leverage
                = -0.019487002187597788 * 763.3587786259347
              for a year:
                = -14.875574189005565
                = -1487.6% <- Annualized Return
              for 7 days:
                = -14.875574189005565 * 7 / 365
                = -0.2852849844466821
                = -28.53% <- Holding Period Return
                (We have APR-ized the variable APY so we can compare it to the fixed APR,
                and then applied the implied leverage to it)


=== continuous compounding ===
FV = future value
PV = present value
e^rt is the conversion between the two
FV = PV * e^rt
PV = FV / e^rt
 or PV = FV * e^(-rt)
*/

function calculateFixedRateAtTimeOfShort(
  basePaid: bigint,
  bondsShorted: bigint,
  hyperdrive: Hyperdrive,
): number {
  // Example: 0.05 / 1 = fixed apr was 5% at time of short
  const fixedRate = Number(basePaid) / Number(bondsShorted);
  // const fixedRate = divideBigInt(
  //   parseUnits(basePaid.toString()),
  //   bondsShorted,
  //   hyperdrive.baseToken.decimals,
  // );
  // Example usage with a dynamic term length of 7 days:
  const basePaid2 = 0.05; // Replace with your actual values
  const shortsReceived = 1; // Replace with your actual values
  const termLengthInDayz = 365; // Replace with your actual term length
  const annualizedAPR = calculateAnnualizedAPR(
    basePaid2,
    shortsReceived,
    termLengthInDayz,
  );
  console.log(`Annualized APR: ${annualizedAPR}`);
  // (fixedRate * 365) / termLengthDays
  const termLengthInDays = convertMillisecondsToDays(hyperdrive.termLengthMS);
  return (fixedRate * 365) / termLengthInDays;
}

function calculateAnnualizedAPR(
  basePaid: number, // 1 - p
  bondsShorted: number, // notional number of bonds, N
  termLengthInDays: number, // t
): number {
  // HPR = ( 1 - p ) / p
  const basePaidPerBondShorted = basePaid / bondsShorted;
  const price = 1 - basePaidPerBondShorted; // p
  const holdingPeriodReturn = (1 - price) / price; // r = 5%
  // before annualizing, we need to use (1+r) or else it doesn't work... 1^20=1... 0 ^ 20 = 0
  const annualizedPeriodReturn =
    (1 + holdingPeriodReturn) ** (365 / termLengthInDays) - 1;
  return annualizedPeriodReturn;
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
      balance: baseAmountOut,
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
