import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import * as dnum from "dnum";
import { ReactElement } from "react";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useActiveItem } from "src/ui/base/hooks/useActiveItem";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { useRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useRedeemWithdrawalShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { WithdrawTokenPicker } from "src/ui/hyperdrive/WithdrawTokenPicker";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
interface RedeemWithdrawalSharesFormProps {
  hyperdrive: HyperdriveConfig;
}

export function RedeemWithdrawalSharesForm({
  hyperdrive,
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

  const { address: account } = useAccount();

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

  // where the user types in an amount of base or shares to redeem
  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: activeWithdrawToken.decimals,
  });

  // The max button is wired up to this
  const { withdrawalShares } = useWithdrawalShares({
    account,
    hyperdriveAddress: hyperdrive.address,
  });
  const {
    withdrawalSharesRedeemed: maxWithdrawalSharesRedeemable,
    baseProceeds: maxRedeemableBaseProceeds,
    sharesProceeds: maxRedeemableSharesProceeds,
  } = usePreviewRedeemWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    withdrawalSharesIn: withdrawalShares,
    minOutputPerShare: 0n,
    destination: account,
  });

  // Whatever amount of base or shares they type in, we convert it to withdrawal
  // shares, since that's what the smart contract method requires
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const isBaseTokenWithdrawal =
    activeWithdrawToken.address === baseToken.address;
  const convertedAmountToWithdrawalShares = convertAmountToWithdrawalShares({
    maxRedeemableBaseProceeds,
    decimals: activeWithdrawToken.decimals,
    maxWithdrawalSharesRedeemable: maxWithdrawalSharesRedeemable,
    amount: amountAsBigInt,
    asBase: isBaseTokenWithdrawal,
    vaultSharePrice: poolInfo?.vaultSharePrice,
  });

  const { baseProceeds, sharesProceeds, previewRedeemWithdrawalSharesStatus } =
    usePreviewRedeemWithdrawalShares({
      hyperdriveAddress: hyperdrive.address,
      withdrawalSharesIn: convertedAmountToWithdrawalShares,
      minOutputPerShare: 0n,
      destination: account,
    });

  const { redeemWithdrawalShares, redeemWithdrawalSharesStatus } =
    useRedeemWithdrawalShares({
      hyperdriveAddress: hyperdrive.address,
      withdrawalSharesIn: convertedAmountToWithdrawalShares,
      minOutputPerShare: 0n,
      destination: account,
      asBase:
        hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
        isBaseTokenWithdrawal,
      enabled: previewRedeemWithdrawalSharesStatus === "success",
    });

  return (
    <TransactionView
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
            balance: isBaseTokenWithdrawal
              ? maxRedeemableBaseProceeds || 0n
              : maxRedeemableSharesProceeds || 0n,
            decimals: activeWithdrawToken.decimals,
            places: activeWithdrawToken.places,
          })} ${activeWithdrawToken.symbol}`}
          maxValue={formatUnits(
            isBaseTokenWithdrawal
              ? maxRedeemableBaseProceeds || 0n
              : maxRedeemableSharesProceeds || 0n,
            activeWithdrawToken.decimals,
          )}
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      transactionPreview={
        <div className="flex flex-col gap-3 px-2 pb-2">
          <LabelValue
            label="You receive"
            value={
              <p className="font-bold">
                {baseProceeds && sharesProceeds
                  ? `${formatBalance({
                      balance: isBaseTokenWithdrawal
                        ? baseProceeds
                        : sharesProceeds,
                      decimals: activeWithdrawToken.decimals,
                      places: activeWithdrawToken.places,
                    })} ${activeWithdrawToken.symbol}`
                  : ""}
              </p>
            }
          />
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
            onClick={() => {
              redeemWithdrawalShares?.();
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

function convertAmountToWithdrawalShares({
  maxRedeemableBaseProceeds,
  decimals,
  maxWithdrawalSharesRedeemable,
  amount,
  vaultSharePrice,
  asBase,
}: {
  maxRedeemableBaseProceeds: bigint | undefined;
  decimals: number;
  maxWithdrawalSharesRedeemable: bigint | undefined;
  amount: bigint | undefined;
  vaultSharePrice: bigint | undefined;
  asBase: boolean | undefined;
}) {
  if (
    !maxRedeemableBaseProceeds ||
    !maxWithdrawalSharesRedeemable ||
    !amount ||
    !vaultSharePrice
  ) {
    return;
  }
  // 1 withdrawal share is worth 2 base
  const unitPriceOfRedeemedWithdrawalShare = dnum.divide(
    [maxRedeemableBaseProceeds, decimals],
    [maxWithdrawalSharesRedeemable, decimals],
  )[0];

  // convert amount to base if it's not in base
  const finalAmount = asBase
    ? amount
    : convertSharesToBase({ sharesAmount: amount, vaultSharePrice, decimals });

  // Therefore, user would be redeeming 5 withdrawal shares
  const convertedAmountToWithdrawalShares = dnum.divide(
    [finalAmount, decimals],
    [unitPriceOfRedeemedWithdrawalShare, decimals],
  )[0];

  return convertedAmountToWithdrawalShares;
}
