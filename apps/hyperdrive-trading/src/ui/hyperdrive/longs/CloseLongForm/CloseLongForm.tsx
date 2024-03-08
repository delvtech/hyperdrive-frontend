import { adjustAmountByPercentage, Long } from "@delvtech/hyperdrive-viem";
import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import toast from "react-hot-toast";
import { makeTransactionURL } from "src/blockexplorer/makeTransactionUrl";
import { SupportedChainId } from "src/chains/supportedChains";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import CustomToastMessage from "src/ui/base/components/Toaster/CustomToastMessage";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useActiveItem } from "src/ui/base/hooks/useActiveItem";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useCloseLong } from "src/ui/hyperdrive/longs/hooks/useCloseLong";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { TokenChoices } from "src/ui/token/TokenChoices";
import { TokenInput } from "src/ui/token/TokenInput";
import { useConvertStethSharesToStethTokens } from "src/ui/vaults/steth/useConvertStethSharesToStethTokens";
import { getIsSteth } from "src/vaults/isSteth";
import { formatUnits, parseUnits } from "viem";
import { useAccount, useChainId } from "wagmi";

interface CloseLongFormProps {
  hyperdrive: HyperdriveConfig;
  long: Long;
  onCloseLong?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function CloseLongForm({
  hyperdrive,
  long,
  onCloseLong,
}: CloseLongFormProps): ReactElement {
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
  const chainId = useChainId() as SupportedChainId;

  const {
    amount: bondAmount,
    amountAsBigInt: bondAmountAsBigInt,
    setAmount,
  } = useNumericInput({
    decimals: hyperdrive.decimals,
  });

  // Preview the amount of base or shares they get back from closing their long.
  const { amountOut: withdrawAmount, previewCloseLongStatus } =
    usePreviewCloseLong({
      hyperdriveAddress: hyperdrive.address,
      maturityTime: long.maturity,
      bondAmountIn: bondAmountAsBigInt,
      minOutput: parseUnits("0", baseToken.decimals),
      destination: account,
      asBase: activeWithdrawToken.address === baseToken.address,
    });

  // If user is withdrawing steth, the withdrawAmount will be in steth shares,
  // which must be converted into steth tokens for display purposes
  const isActiveWithdrawTokenSteth = getIsSteth(activeWithdrawToken);
  const { stethTokenAmount: stethTokenAmountOut } =
    useConvertStethSharesToStethTokens({
      lidoAddress: sharesToken.address,
      stethShares: withdrawAmount,
      enabled: isActiveWithdrawTokenSteth,
    });
  const stethOrWithdrawTokenAmount = isActiveWithdrawTokenSteth
    ? stethTokenAmountOut
    : withdrawAmount;

  const minAmountOutAfterSlippage =
    withdrawAmount &&
    adjustAmountByPercentage({
      amount: withdrawAmount,
      percentage: 1n,
      decimals: activeWithdrawToken.decimals,
      direction: "down",
    });

  const { closeLong, isPendingWalletAction } = useCloseLong({
    hyperdriveAddress: hyperdrive.address,
    maturityTime: long.maturity,
    bondAmountIn: bondAmountAsBigInt,
    minAmountOut: minAmountOutAfterSlippage,
    destination: account,
    asBase: activeWithdrawToken.address === baseToken.address,
    enabled: previewCloseLongStatus === "success",
    onExecuted: (hash) => {
      setAmount("");
      toast.success(
        <CustomToastMessage
          message="Long closed"
          link={makeTransactionURL(hash, chainId)}
        />,
      );
    },
  });

  return (
    <TransactionView
      disclaimer={
        <>
          <p className="text-center text-sm text-neutral-content">
            Note: 1 hy{baseToken.symbol} is always worth 1 {baseToken.symbol} at
            maturity, however its value may fluctuate before maturity based on
            market activity.
          </p>
          {previewCloseLongStatus === "error" ? (
            <p className="text-center text-error">
              Insufficient liquidity: There is not enough liquidity in the pool
              to close your long position at this time. You may either add more
              funds to the pool or wait for the liquidity to improve.
            </p>
          ) : null}
        </>
      }
      heading="Close long"
      tokenInput={
        <TokenInput
          name={baseToken.symbol}
          token={`hy${baseToken.symbol}`}
          value={bondAmount ?? ""}
          maxValue={
            long ? formatUnits(long.bondAmount, hyperdrive.decimals) : ""
          }
          stat={`Balance: ${formatBalance({
            balance: long.bondAmount,
            decimals: hyperdrive.decimals,
            places: 4,
          })}`}
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
        <LabelValue
          label="You receive"
          value={
            <p className="font-bold">
              {stethOrWithdrawTokenAmount
                ? `${formatBalance({
                    balance: stethOrWithdrawTokenAmount,
                    decimals: baseToken.decimals,
                    places: 8,
                  })}`
                : "0"}{" "}
              {activeWithdrawToken.symbol}
            </p>
          }
        />
      }
      actionButton={
        account ? (
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            disabled={!closeLong || isPendingWalletAction}
            onClick={(e) => {
              closeLong?.();
              onCloseLong?.(e);
            }}
          >
            <span>Close position</span>
          </button>
        ) : (
          <ConnectButton />
        )
      }
    />
  );
}
