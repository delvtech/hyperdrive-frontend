import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import * as dnum from "dnum";
import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useActiveItem } from "src/ui/base/hooks/useActiveItem";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { useRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useRedeemWithdrawalShares";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { WithdrawTokenPicker } from "src/ui/hyperdrive/WithdrawTokenPicker";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
interface RedeemWithdrawalSharesFormProps {
  hyperdrive: HyperdriveConfig;
  withdrawalShares: bigint;
}

export function RedeemWithdrawalSharesForm({
  hyperdrive,
  withdrawalShares,
}: RedeemWithdrawalSharesFormProps): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });

  const {
    activeItem: activeWithdrawToken,
    setActiveItemId: setActiveWithdrawToken,
  } = useActiveItem({
    items: [baseToken, sharesToken],
    idField: "address",
    defaultActiveItemId: hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
      ? baseToken.address
      : sharesToken.address,
  });
  const { address: account } = useAccount();

  const {
    withdrawalSharesRedeemed: maxWithdrawalSharesRedeemable,
    proceeds: maxRedeemableProceeds,
  } = usePreviewRedeemWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    withdrawalSharesIn: withdrawalShares,
    minOutputPerShare: 0n,
    destination: account,
    asBase:
      hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
      activeWithdrawToken.address === baseToken.address,
  });

  // eg: user types in 10 base
  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: activeWithdrawToken.decimals,
  });

  const convertedAmountToWithdrawalShares = calculateWithdrawalSharesFromAmount(
    {
      maxRedeemableProceeds,
      decimals: activeWithdrawToken.decimals,
      maxWithdrawalSharesRedeemable: maxWithdrawalSharesRedeemable,
      amountAsBigInt,
    },
  );

  const { proceeds, previewRedeemWithdrawalSharesStatus } =
    usePreviewRedeemWithdrawalShares({
      hyperdriveAddress: hyperdrive.address,
      withdrawalSharesIn: convertedAmountToWithdrawalShares,
      minOutputPerShare: 0n,
      destination: account,
      asBase: activeWithdrawToken.address === baseToken.address,
    });

  const { redeemWithdrawalShares, redeemWithdrawalSharesStatus } =
    useRedeemWithdrawalShares({
      hyperdriveAddress: hyperdrive.address,
      withdrawalSharesIn: convertedAmountToWithdrawalShares,
      minOutputPerShare: 0n,
      destination: account,
      asBase:
        hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
        activeWithdrawToken.address === baseToken.address,
      enabled: previewRedeemWithdrawalSharesStatus === "success",
    });

  return (
    <TransactionView
      heading="Confirm Withdrawal"
      tokenInput={
        <TokenInput
          name="withdrawalShares"
          token={
            <WithdrawTokenPicker
              sharesToken={sharesToken}
              hyperdrive={hyperdrive}
              baseToken={baseToken}
              onChange={(tokenAddress) => {
                setActiveWithdrawToken(tokenAddress);
                setAmount("0");
              }}
              activeWithdrawToken={activeWithdrawToken}
            />
          }
          value={amount ?? ""}
          stat={`Withdrawable: ${formatBalance({
            balance: maxRedeemableProceeds || 0n,
            decimals: activeWithdrawToken.decimals,
            places: 4,
          })} ${activeWithdrawToken.symbol}`}
          maxValue={formatUnits(
            maxRedeemableProceeds || 0n,
            activeWithdrawToken.decimals,
          )}
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      transactionPreview={
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <p>You receive</p>
            <p className="font-bold">
              {proceeds
                ? `${formatBalance({
                    balance: proceeds,
                    decimals: activeWithdrawToken.decimals,
                    places: 8,
                  })} ${activeWithdrawToken.symbol}`
                : ""}
            </p>
          </div>
        </div>
      }
      actionButton={
        account ? (
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            disabled={
              !redeemWithdrawalShares ||
              redeemWithdrawalSharesStatus === "loading"
            }
            onClick={(e) => {
              redeemWithdrawalShares?.();
              setAmount("0");
            }}
          >
            Redeem withdrawal shares
          </button>
        ) : (
          <ConnectButton />
        )
      }
    />
  );
}

function calculateWithdrawalSharesFromAmount({
  maxRedeemableProceeds,
  decimals,
  maxWithdrawalSharesRedeemable,
  amountAsBigInt,
}: {
  maxRedeemableProceeds: bigint | undefined;
  decimals: number;
  maxWithdrawalSharesRedeemable: bigint | undefined;
  amountAsBigInt: bigint | undefined;
}) {
  if (
    !maxRedeemableProceeds ||
    !maxWithdrawalSharesRedeemable ||
    !amountAsBigInt
  ) {
    return;
  }
  // 1 withdrawal share is worth $2
  const unitPriceOfRedeemedWithdrawalShare = dnum.divide(
    [maxRedeemableProceeds, decimals],
    [maxWithdrawalSharesRedeemable, decimals],
  )[0];

  // Therefore, user would be redeeming 5 withdrawal shares
  const convertedAmountToWithdrawalShares = dnum.divide(
    [amountAsBigInt, decimals],
    [unitPriceOfRedeemedWithdrawalShare, decimals],
  )[0];

  return convertedAmountToWithdrawalShares;
}
