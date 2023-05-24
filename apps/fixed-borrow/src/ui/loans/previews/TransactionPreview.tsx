import { ReactElement } from "react";
import { Well } from "src/ui/base/Well/Well";
import { useAccount, Address, useToken } from "wagmi";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { InfoTooltip } from "src/ui/base/Tooltip/InfoTooltip";
import { parseBigInt } from "src/base/bigint/parseBigInt";
import { PreviewRow } from "src/ui/loans/previews/PreviewRow";
import { formatUnits } from "src/base/bigint/formatBigInt";
import { calculateValueToShort } from "src/shorts/calculateValueToShort";
import { useOpenShortPreview } from "src/ui/shorts/hooks/useOpenShortPreview";
import { HyperdriveGoerliAddresses } from "@hyperdrive/core";
import { useUserCurrentDebt } from "src/ui/loans/hooks/useUserCurrentDebt";

interface TransactionPreviewProps {
  supplyAmount: string | number | undefined;
  supplyTokenAddress: Address;
  borrowAmount: string | number | undefined;
  borrowTokenAddress: Address;
}

export function TransactionPreview({
  supplyAmount = 0,
  supplyTokenAddress,
  borrowAmount = 0,
  borrowTokenAddress,
}: TransactionPreviewProps): ReactElement {
  const { address: account } = useAccount();
  const { data: supplyTokenData } = useToken({ address: supplyTokenAddress });
  const { data: borrowTokenData } = useToken({ address: borrowTokenAddress });
  // const { userAccountData } = useUserAccountData(account);
  // const { userReservesData } = useUserReservesData(account)
  const { currentDebt } = useUserCurrentDebt(account, borrowTokenAddress);

  const borrowAmountBigInt =
    borrowTokenData &&
    parseBigInt(borrowAmount.toString(), borrowTokenData.decimals);

  const { formattedBorrowAmount } = getTotalBorrow(
    currentDebt,
    borrowAmountBigInt,
    borrowTokenData?.decimals,
  );

  const borrowBigInt =
    borrowTokenData &&
    parseBigInt(borrowAmount.toString(), borrowTokenData.decimals);

  const valueToShort = borrowBigInt
    ? calculateValueToShort(borrowBigInt, borrowTokenData.decimals)
    : undefined;

  const { openShortPreview } = useOpenShortPreview({
    hyperdrivePool: HyperdriveGoerliAddresses.makerDsrHyperdrive,
    bondAmount: valueToShort ? valueToShort.shortAmount : undefined,
    maxDeposit: valueToShort ? valueToShort.shortAmount : undefined,
    destination: account,
    asUnderlying: true,
  });

  return (
    <Well>
      <div className="space-y-4 leading-sm">
        <PreviewRow
          label="Supply amount"
          value={
            supplyTokenData
              ? `${formatBalance(supplyAmount, 3)} ${supplyTokenData.symbol}`
              : formatBalance(supplyAmount, 3)
          }
        />
        <PreviewRow
          label="Desired borrow amount"
          value={
            borrowTokenData
              ? `${formatBalance(borrowAmount, 3)} ${borrowTokenData.symbol}`
              : formatBalance(borrowAmount, 3)
          }
        />
        <PreviewRow
          label={
            <span className="flex gap-1">
              Rate lock-in cost
              <InfoTooltip content="The amount required to lock in the fixed rate via a Hyperdrive short." />
            </span>
          }
          value={
            openShortPreview && borrowTokenData
              ? `${formatUnits(openShortPreview, borrowTokenData.decimals)} ${
                  borrowTokenData.symbol
                }`
              : `0 ${borrowTokenData?.symbol}`
          }
        />
        <PreviewRow
          totalRow
          label="Total borrow amount"
          value={
            borrowTokenData
              ? `${formattedBorrowAmount} ${borrowTokenData.symbol}`
              : formattedBorrowAmount
          }
        />
        <PreviewRow
          totalRow
          label="You receive"
          value={
            <div className="text-right">
              <p>
                {borrowTokenData
                  ? `${formatBalance(borrowAmount)} ${borrowTokenData.symbol}`
                  : formatBalance(borrowAmount)}
              </p>
              <p>{`${formatBalance(
                valueToShort?.formattedShortAmount ?? 0,
              )} Short`}</p>
            </div>
          }
        />
      </div>
    </Well>
  );
}

function getTotalBorrow(
  currentDebt: bigint | undefined,
  borrowAmount: bigint | undefined,
  borrowTokenDecimals: number | undefined,
): { amount: bigint; formattedBorrowAmount: string } {
  if (!borrowAmount || !currentDebt || !borrowTokenDecimals) {
    return {
      amount: 0n,
      formattedBorrowAmount: "0",
    };
  }
  const amount = borrowAmount + currentDebt;
  return {
    amount: amount,
    formattedBorrowAmount: formatUnits(borrowAmount, borrowTokenDecimals),
  };
}
