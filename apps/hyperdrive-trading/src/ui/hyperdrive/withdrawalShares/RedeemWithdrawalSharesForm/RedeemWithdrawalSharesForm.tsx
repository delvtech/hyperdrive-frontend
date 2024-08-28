import { fixed } from "@delvtech/fixed-point-wasm";
import { adjustAmountByPercentage } from "@delvtech/hyperdrive-viem";
import {
  findBaseToken,
  findToken,
  HyperdriveConfig,
  TokenConfig,
} from "@hyperdrive/appconfig";
import { ConnectButton } from "@rainbow-me/rainbowkit";
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
import { TransactionViewOld } from "src/ui/hyperdrive/TransactionView";
import { WithdrawTokenPicker } from "src/ui/hyperdrive/WithdrawTokenPicker";
import { useSlippageSettings } from "src/ui/token/hooks/useSlippageSettings";
import { SlippageSettings } from "src/ui/token/SlippageSettings";
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
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const sharesToken = findToken({
    chainId: hyperdrive.chainId,
    tokens: appConfig.tokens,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
  });
  const items: TokenConfig[] = [baseToken];
  if (sharesToken) {
    items.push(sharesToken);
  }

  const { address: account } = useAccount();

  const {
    activeItem: activeWithdrawToken,
    setActiveItemId: setActiveWithdrawToken,
  } = useActiveItem({
    items,
    idField: "address",
    defaultActiveItemId: hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
      ? baseToken.address
      : hyperdrive.poolConfig.vaultSharesToken,
  });

  // where the user types in an amount of base or shares to redeem
  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: activeWithdrawToken.decimals,
  });
  const {
    setSlippage,
    slippage,
    slippageAsBigInt,
    activeOption: activeSlippageOption,
    setActiveOption: setActiveSlippageOption,
  } = useSlippageSettings({ decimals: activeWithdrawToken.decimals });

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
    maxWithdrawalSharesRedeemable,
    amount: amountAsBigInt,
    asBase: isBaseTokenWithdrawal,
    vaultSharePrice: poolInfo?.vaultSharePrice,
  });

  // if withdrawing in shares, we need to also convert the minLpSharePrice to be
  // priced in terms of shares
  const lpSharePrice = !isBaseTokenWithdrawal
    ? fixed(poolInfo?.lpSharePrice || 0n, baseToken.decimals).div(
        poolInfo?.vaultSharePrice || 0n,
        baseToken.decimals,
      ).bigint
    : poolInfo?.lpSharePrice || 0n;

  const minOutputPerShare = adjustAmountByPercentage({
    amount: lpSharePrice,
    percentage: slippageAsBigInt,
    decimals: activeWithdrawToken.decimals,
    direction: "down",
  });

  const { baseProceeds, sharesProceeds, previewRedeemWithdrawalSharesStatus } =
    usePreviewRedeemWithdrawalShares({
      hyperdriveAddress: hyperdrive.address,
      withdrawalSharesIn: convertedAmountToWithdrawalShares,
      minOutputPerShare,
      destination: account,
    });

  const { redeemWithdrawalShares, redeemWithdrawalSharesStatus } =
    useRedeemWithdrawalShares({
      hyperdriveAddress: hyperdrive.address,
      withdrawalSharesIn: convertedAmountToWithdrawalShares,
      minOutputPerShare,
      destination: account,
      asBase:
        hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
        isBaseTokenWithdrawal,
      enabled: previewRedeemWithdrawalSharesStatus === "success",
    });

  return (
    <TransactionViewOld
      tokenInput={
        <TokenInput
          name="withdrawalShares"
          token={
            sharesToken ? (
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
            ) : undefined
          }
          value={amount ?? ""}
          stat={
            <div className="flex flex-col gap-1 text-xs text-neutral-content">
              <span>
                {`Withdrawable: ${formatBalance({
                  balance: isBaseTokenWithdrawal
                    ? maxRedeemableBaseProceeds || 0n
                    : maxRedeemableSharesProceeds || 0n,
                  decimals: activeWithdrawToken.decimals,
                  places: activeWithdrawToken.places,
                })} ${activeWithdrawToken.symbol}`}
              </span>
              <span>{`Slippage: ${slippage || "0.5"}%`}</span>
            </div>
          }
          maxValue={formatUnits(
            isBaseTokenWithdrawal
              ? maxRedeemableBaseProceeds || 0n
              : maxRedeemableSharesProceeds || 0n,
            activeWithdrawToken.decimals,
          )}
          onChange={(newAmount) => setAmount(newAmount)}
          settings={
            <SlippageSettings
              onSlippageChange={setSlippage}
              slippage={slippage}
              activeOption={activeSlippageOption}
              onActiveOptionChange={setActiveSlippageOption}
              tooltip="Your transaction will revert if the price changes unfavorably by more than this percentage."
            />
          }
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
  const unitPriceOfRedeemedWithdrawalShare = fixed(
    maxRedeemableBaseProceeds,
    decimals,
  ).div(maxWithdrawalSharesRedeemable, decimals).bigint;

  // convert amount to base if it's not in base
  const finalAmount = asBase
    ? amount
    : convertSharesToBase({ sharesAmount: amount, vaultSharePrice, decimals });

  // Therefore, user would be redeeming 5 withdrawal shares
  const convertedAmountToWithdrawalShares = fixed(finalAmount, decimals).div(
    unitPriceOfRedeemedWithdrawalShare,
    decimals,
  ).bigint;

  return convertedAmountToWithdrawalShares;
}
