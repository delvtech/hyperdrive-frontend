import { calculateValueFromPrice } from "@delvtech/hyperdrive-viem";
import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import * as dnum from "dnum";
import { MouseEvent, ReactElement } from "react";
import toast from "react-hot-toast";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import CustomToastMessage from "src/ui/base/components/Toaster/CustomToastMessage";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useActiveItem } from "src/ui/base/hooks/useActiveItem";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
import { useRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/useRemoveLiquidity";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { TokenChoices } from "src/ui/token/TokenChoices";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
interface RemoveLiquidityFormProps {
  hyperdrive: HyperdriveConfig;
  lpShares: bigint;
  onRemoveLiquidity?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function RemoveLiquidityForm({
  hyperdrive,
  lpShares,
  onRemoveLiquidity,
}: RemoveLiquidityFormProps): ReactElement {
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
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });

  const { address: account } = useAccount();

  // Let users type in an amount of base to withdraw
  const {
    amount,
    amountAsBigInt: desiredBaseOut,
    setAmount,
  } = useNumericInput({
    decimals: baseToken.decimals,
  });

  // Then calculate the lpSharesIn required to remove that amount of base
  const lpSharesIn = calculateRequiredLpSharesIn(
    desiredBaseOut,
    poolInfo?.lpSharePrice,
  );

  // Then we preview that trade to show users the split between the actual base
  // and withdrawal shares they'll receive
  const {
    proceeds: actualValueOut,
    previewRemoveLiquidityStatus,
    withdrawalShares,
  } = usePreviewRemoveLiquidity({
    destination: account,
    lpSharesIn: lpSharesIn,
    hyperdriveAddress: hyperdrive.address,
    minOutputPerShare: 1n,
    asBase: activeWithdrawToken.address === baseToken.address,
  });

  const { removeLiquidity, removeLiquidityStatus } = useRemoveLiquidity({
    hyperdriveAddress: hyperdrive.address,
    lpSharesIn: lpSharesIn,
    minOutputPerShare: 1n,
    destination: account,
    enabled: previewRemoveLiquidityStatus === "success",
    onExecuted: (hash) => {
      setAmount("");
      toast.success(
        <CustomToastMessage
          message="Liquidity removed"
          // TODO: Update link to point to correct block explorer.
          link={`https://etherscan.com/tx/${hash}`}
        />,
      );
    },
  });

  // to format the withdrawal shares out in terms of base, we need to multiply
  // them by the lpSharePrice
  const formattedWithdrawalSharesOut = withdrawalShares
    ? formatBalance({
        balance: calculateValueFromPrice({
          amount: withdrawalShares,
          unitPrice: poolInfo?.lpSharePrice || 0n,
          decimals: baseToken.decimals,
        }),
        decimals: baseToken.decimals,
        places: 8,
      })
    : null;

  const currentLpValue = calculateValueFromPrice({
    amount: lpShares,
    unitPrice: poolInfo?.lpSharePrice || 0n,
    decimals: baseToken.decimals,
  });

  return (
    <TransactionView
      heading="Remove Liquidity"
      tokenInput={
        <TokenInput
          name={baseToken.name}
          token={baseToken.symbol}
          value={amount ?? ""}
          maxValue={formatUnits(currentLpValue, baseToken.decimals)}
          stat={
            lpShares && !!poolInfo
              ? `Current liquidity: ${formatBalance({
                  balance: currentLpValue,
                  decimals: baseToken.decimals,
                  places: 2,
                })} ${baseToken.symbol}`
              : undefined
          }
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      setting={
        <TokenChoices
          label="Choose withdrawal asset"
          tokens={[
            {
              tokenConfig: baseToken,
              disabled:
                !hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled,
            },
            {
              tokenConfig: sharesToken,
            },
          ]}
          selectedTokenAddress={activeWithdrawToken.address}
          onTokenChange={(tokenAddress) => setActiveWithdrawToken(tokenAddress)}
        />
      }
      transactionPreview={
        <>
          <LabelValue
            label="You receive"
            value={`${
              actualValueOut
                ? `${formatBalance({
                    balance: actualValueOut,
                    decimals: activeWithdrawToken.decimals,
                    places: 8,
                  })}`
                : "0"
            } ${activeWithdrawToken.symbol}`}
          />
          <LabelValue
            label="Queued for delayed withdrawal"
            value={`${formattedWithdrawalSharesOut || 0} ${baseToken.symbol}`}
          />
        </>
      }
      disclaimer={
        <p className="text-center text-sm text-neutral-content">
          You can withdraw liquidity at any time. The utilized portion may be
          queued for delayed withdrawal.
        </p>
      }
      actionButton={
        account ? (
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            disabled={!removeLiquidity || removeLiquidityStatus === "loading"}
            onClick={(e) => {
              removeLiquidity?.();
              onRemoveLiquidity?.(e);
            }}
          >
            Remove liquidity
          </button>
        ) : (
          <ConnectButton />
        )
      }
    />
  );
}

function calculateRequiredLpSharesIn(
  desiredBaseOut: bigint | undefined,
  lpSharePrice: bigint | undefined,
): bigint {
  return !desiredBaseOut
    ? 0n
    : dnum.div([desiredBaseOut, 18], [lpSharePrice || 1n, 18])[0];
}
