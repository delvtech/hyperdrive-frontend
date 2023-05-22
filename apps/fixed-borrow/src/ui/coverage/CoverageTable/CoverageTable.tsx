import { ReactElement, ReactNode } from "react";
import { Address, useAccount, useToken } from "wagmi";
import { SortableGridTable } from "src/ui/base/tables/SortableGridTable";
import { formatBigInt } from "src/base/bigint/formatBigInt";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { AssetIcon } from "src/ui/token/AssetIcon";
import { DebtDetailsSection } from "./DebtDetailsSection";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useUserCurrentDebt } from "src/ui/loans/hooks/useUserCurrentDebt";
import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { useAaveOracleAssetPrice } from "src/ui/oracles/useAaveOracleAssetPrice";
import { NETWORK_BASE_TOKEN_DECIMALS } from "src/pools/networkBaseToken";
import { useTotalCoverage } from "src/ui/coverage/hooks/useTotalFixedRateCoverage";

export function CoverageTable(): ReactElement {
  const { address: account } = useAccount();
  const { currentDebt } = useUserCurrentDebt(
    account,
    SparkGoerliAddresses.DAI_token,
  );

  const { data: price } = useAaveOracleAssetPrice(
    SparkGoerliAddresses.DAI_token,
  );

  const valueOfDebtLabel =
    currentDebt !== undefined && price !== undefined
      ? formatDebtValueLabel(currentDebt, 18, price)
      : undefined;

  const { totalCoverage } = useTotalCoverage();

  return (
    <SortableGridTable
      headingRowClassName="grid-cols-[180px_150px_200px__64px] gap-4"
      bodyRowClassName="group grid-cols-[180px_150px_200px_64px] gap-4 h-20"
      emptyTableElement={<span className="text-white">No borrows found</span>}
      cols={[
        {
          cell: <span className="text-secondaryText">Asset</span>,
        },
        {
          cell: (
            <span
              className="text-secondaryText"
              title="The total amount of the asset you are borrowing"
            >
              Total Debt
            </span>
          ),
        },
        {
          cell: (
            <span
              className="text-secondaryText"
              title="The portion of your total debt that is covered by fixed rate interest"
            >
              Fixed Rate Coverage
            </span>
          ),
        },
        {
          // Empty cell for arrow icon
          cell: <span className="text-secondaryText" />,
        },
      ]}
      rows={
        currentDebt
          ? [
              {
                detailsElement: <DebtDetailsSection />,
                cells: [
                  <BorrowedAssetCell
                    key="asset"
                    borrowedAssetAddress={SparkGoerliAddresses.DAI_token}
                  />,
                  <AmountCell
                    key="totalDebt"
                    amount={currentDebt}
                    secondaryText={valueOfDebtLabel}
                    tokenAddress={SparkGoerliAddresses.DAI_token}
                  />,
                  <AmountCell
                    key="fixedRateDebt"
                    amount={totalCoverage?.amount || 0n}
                    secondaryText={`${totalCoverage?.rate || 0 * 100}% APR`}
                    tokenAddress={SparkGoerliAddresses.DAI_token}
                  />,
                  <ExpandIconCell key="expand" />,
                ],
              },
            ]
          : []
      }
    />
  );
}

function formatDebtValueLabel(
  currentDebt: bigint,
  debtTokenDecimals: number,
  price: bigint,
) {
  const valueOfDebt =
    +formatBigInt(currentDebt, debtTokenDecimals) *
    +formatBigInt(price, NETWORK_BASE_TOKEN_DECIMALS);

  return `$${formatBalance(valueOfDebt)}`;
}

function ExpandIconCell(): ReactElement {
  return (
    <div className="flex h-full shrink-0 items-center justify-center">
      <div>
        <ChevronDownIcon
          width={24}
          className="text-secondaryText transition duration-500 ui-open:rotate-180"
        />
      </div>
    </div>
  );
}

function BorrowedAssetCell({
  borrowedAssetAddress,
}: {
  borrowedAssetAddress: Address;
}): ReactElement {
  const { data: tokenMetadata } = useToken({ address: borrowedAssetAddress });
  const { data: price } = useAaveOracleAssetPrice(
    SparkGoerliAddresses.DAI_token,
  );

  return (
    <div className="flex items-center gap-2">
      <AssetIcon size="lg" address={borrowedAssetAddress} />
      <div className="flex flex-col ">
        <span className="inline-flex items-center gap-1 text-h6 text-white">
          {tokenMetadata?.symbol}
        </span>
        <span className="leading-sm text-secondaryText">
          {price
            ? `$${formatBigInt(price, NETWORK_BASE_TOKEN_DECIMALS)}`
            : null}
        </span>
      </div>
    </div>
  );
}

function AmountCell({
  amount,
  tokenAddress,
  secondaryText,
}: {
  amount: bigint;
  tokenAddress: Address;
  secondaryText: ReactNode;
}): ReactElement {
  const { data: tokenMetadata } = useToken({ address: tokenAddress });
  const amountLabel = formatBalance(
    formatBigInt(amount, tokenMetadata?.decimals),
  );
  return (
    <div className="flex flex-col">
      <span className="inline-flex items-center gap-1 text-h6 text-white">
        {amountLabel} {tokenMetadata?.symbol}
      </span>
      <span className="flex leading-sm text-secondaryText">
        {secondaryText}
      </span>
    </div>
  );
}
