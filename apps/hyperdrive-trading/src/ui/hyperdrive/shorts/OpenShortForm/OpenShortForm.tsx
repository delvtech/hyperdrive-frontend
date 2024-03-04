import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import toast from "react-hot-toast";
import { MAX_UINT256 } from "src/base/constants";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { getIsValidTradeSize } from "src/hyperdrive/getIsValidTradeSize";
import { getHasEnoughAllowance } from "src/token/getHasEnoughAllowance";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import CustomToastMessage from "src/ui/base/components/Toaster/CustomToastMessage";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useMaxShort } from "src/ui/hyperdrive/shorts/hooks/useMaxShort";
import { useOpenShort } from "src/ui/hyperdrive/shorts/hooks/useOpenShort";
import { usePreviewOpenShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewOpenShort";
import { OpenShortPreview } from "src/ui/hyperdrive/shorts/OpenShortPreview/OpenShortPreview";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import ApproveTokenButton from "src/ui/token/ApproveTokenButton";
import { useActiveToken } from "src/ui/token/hooks/useActiveToken";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { TokenChoices } from "src/ui/token/TokenChoices";
import { TokenInput } from "src/ui/token/TokenInput";
import { useConvertStethSharesToStethTokens } from "src/ui/vaults/steth/useConvertStethSharesToStethTokens";
import { getIsSteth } from "src/vaults/isSteth";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
interface OpenShortPositionFormProps {
  hyperdrive: HyperdriveConfig;
}

export function OpenShortForm({
  hyperdrive,
}: OpenShortPositionFormProps): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });
  const isStethHyperdrive = getIsSteth(sharesToken);

  const { activeToken, activeTokenBalance, setActiveToken, isActiveTokenEth } =
    useActiveToken({
      account,
      defaultActiveToken: baseToken.address,
      tokens: [baseToken, sharesToken],
    });

  const baseTokenBalance = useTokenBalance({
    account,
    tokenAddress: baseToken.address,
    decimals: baseToken.decimals,
  });

  const sharesTokenBalance = useTokenBalance({
    account,
    tokenAddress: sharesToken.address,
    decimals: sharesToken.decimals,
  });

  // All tokens besides ETH require an allowance to spend it on hyperdrive
  const requiresAllowance = !isActiveTokenEth;
  const { tokenAllowance: activeTokenAllowance } = useTokenAllowance({
    account,
    enabled: requiresAllowance,
    spender: hyperdrive.address,
    tokenAddress: activeToken.address,
  });

  const {
    amount: amountOfBondsToShort,
    amountAsBigInt: amountOfBondsToShortAsBigInt,
    setAmount,
  } = useNumericInput({
    decimals: hyperdrive.decimals,
  });

  const {
    depositAmount,
    spotPriceAfterOpen,
    spotRateAfterOpen,
    status: openShortPreviewStatus,
  } = usePreviewOpenShort({
    hyperdriveAddress: hyperdrive.address,
    amountOfBondsToShort: amountOfBondsToShortAsBigInt,
    asBase: activeToken.address === baseToken.address,
  });

  // If depositing in shares, steth shares needs to be converted to steth tokens
  // to determine if the user has enough balance and to show a meaningful value
  // to the user
  const isActiveTokenSteth = getIsSteth(activeToken);
  const { stethTokenAmount: stethTokenDepositAmount } =
    useConvertStethSharesToStethTokens({
      stethShares: depositAmount,
      lidoAddress: activeToken.address,
      enabled: isActiveTokenSteth,
    });
  const stethOrDepositTokenAmount = isActiveTokenSteth
    ? stethTokenDepositAmount
    : depositAmount;

  const hasEnoughBalance = getHasEnoughBalance({
    amount: stethOrDepositTokenAmount,
    balance: activeTokenBalance?.value,
  });

  const hasEnoughAllowance = getHasEnoughAllowance({
    allowance: activeTokenAllowance,
    amount: stethOrDepositTokenAmount,
    requiresAllowance,
  });

  const { maxBondsOut } = useMaxShort({
    hyperdriveAddress: hyperdrive.address,
  });

  const hasEnoughLiquidity = getIsValidTradeSize({
    tradeAmount: amountOfBondsToShortAsBigInt,
    maxTradeSize: maxBondsOut,
  });

  const { openShort, openShortSubmittedStatus } = useOpenShort({
    hyperdriveAddress: hyperdrive.address,
    amountBondShorts: amountOfBondsToShortAsBigInt,
    minSharePrice: poolInfo?.vaultSharePrice,
    // TODO: handle slippage
    maxBaseAmountIn: MAX_UINT256,
    destination: account,
    enabled: openShortPreviewStatus === "success" && hasEnoughAllowance,
    asBase: activeToken.address === baseToken.address,
    // In a steth market where the user wants to deposit eth, we must pass the
    // eth amount required from the preview calculation
    ethValue:
      activeToken.address === baseToken.address && isStethHyperdrive
        ? depositAmount
        : undefined,

    onExecuted: (hash) => {
      setAmount("");
      toast.success(
        <CustomToastMessage
          message="Short opened"
          // TODO: Update link to point to correct block explorer.
          link={`https://etherscan.com/tx/${hash}`}
        />,
      );
    },
  });

  return (
    <TransactionView
      tokenInput={
        <TokenInput
          name={`${baseToken.symbol}-input`}
          token={`hy${baseToken.symbol}`}
          inputLabel="Amount to short"
          value={amountOfBondsToShort ?? ""}
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      setting={
        <TokenChoices
          label="Choose asset for short deposit"
          vertical
          tokens={[
            {
              tokenConfig: baseToken,
              tokenBalance: baseTokenBalance?.value,
            },
            {
              tokenConfig: sharesToken,
              tokenBalance: sharesTokenBalance?.value,
            },
          ]}
          selectedTokenAddress={activeToken.address}
          onTokenChange={(tokenAddress) => setActiveToken(tokenAddress)}
        />
      }
      transactionPreview={
        <OpenShortPreview
          hyperdrive={hyperdrive}
          tokenIn={activeToken}
          costBasis={stethOrDepositTokenAmount}
          shortSize={amountOfBondsToShortAsBigInt}
          spotRateAfterOpen={spotRateAfterOpen}
        />
      }
      disclaimer={(() => {
        if (stethOrDepositTokenAmount && !!amountOfBondsToShortAsBigInt) {
          return (
            <div className="flex flex-col gap-4">
              {!hasEnoughBalance ? (
                <p className="text-center text-sm text-error">
                  Insufficient balance
                </p>
              ) : null}
              <p className="text-center text-sm text-neutral-content">
                You pay{" "}
                <strong>
                  {formatBalance({
                    balance: stethOrDepositTokenAmount || 0n,
                    decimals: activeToken.decimals,
                    includeCommas: true,
                    places: 6,
                  })}{" "}
                  {activeToken.symbol}
                </strong>{" "}
                in exchange for the yield on{" "}
                <strong>
                  {amountOfBondsToShort} {baseToken.symbol}
                </strong>{" "}
                deposited into{" "}
                <strong>{sharesToken.extensions.shortName}</strong> for{" "}
                <strong>
                  {convertMillisecondsToDays(
                    Number(hyperdrive.poolConfig.positionDuration * 1000n),
                  )}{" "}
                  days.
                </strong>{" "}
              </p>
              <p className="text-center text-sm text-neutral-content">
                {hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
                  ? `When closing your Short position, you can choose to receive back either ${baseToken.symbol} or ${sharesToken.symbol}.`
                  : `When closing your Short position, you'll receive ${sharesToken.symbol}.`}
              </p>
            </div>
          );
        }
        if (!!amountOfBondsToShortAsBigInt && !hasEnoughLiquidity) {
          return (
            <p className="text-center text-sm text-error">
              Insufficient liquidity
            </p>
          );
        }
      })()}
      actionButton={(() => {
        if (!account) {
          return <ConnectWalletButton />;
        }

        if (!hasEnoughBalance) {
          return (
            <button
              disabled
              className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            >
              Open Short
            </button>
          );
        }

        if (!hasEnoughAllowance) {
          return (
            <ApproveTokenButton
              spender={hyperdrive.address}
              token={activeToken}
              tokenBalance={activeTokenBalance}
              amountAsBigInt={stethOrDepositTokenAmount}
              amount={formatUnits(
                stethOrDepositTokenAmount || 0n,
                activeToken.decimals,
              )}
            />
          );
        }
        return (
          <button
            disabled={!openShort || openShortSubmittedStatus === "loading"}
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            onClick={() => openShort?.()}
          >
            Open Short
          </button>
        );
      })()}
    />
  );
}
