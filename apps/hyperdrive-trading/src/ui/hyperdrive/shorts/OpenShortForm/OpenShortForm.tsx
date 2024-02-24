import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import toast from "react-hot-toast";
import { MAX_UINT256 } from "src/base/constants";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { convertBaseToShares } from "src/hyperdrive/convertBaseToShares";
import { ETH_MAGIC_NUMBER } from "src/token/ETH_MAGIC_NUMBER";
import { getHasEnoughAllowance } from "src/token/getHasEnoughAllowance";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import CustomToastMessage from "src/ui/base/components/Toaster/CustomToastMessage";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useOpenShort } from "src/ui/hyperdrive/shorts/hooks/useOpenShort";
import { usePreviewOpenShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewOpenShort";
import { OpenShortPreview } from "src/ui/hyperdrive/shorts/OpenShortPreview/OpenShortPreview";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import ApproveTokenButton from "src/ui/token/ApproveTokenButton";
import { useActiveToken } from "src/ui/token/hooks/useActiveToken";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { TokenChoices } from "src/ui/token/TokenChoices";
import { TokenInput } from "src/ui/token/TokenInput";
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
  const { poolInfo } = usePoolInfo(hyperdrive.address);
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });

  const { activeToken, activeTokenBalance, setActiveToken } = useActiveToken({
    account,
    defaultActiveToken: baseToken.address,
    tokens: [baseToken, sharesToken],
  });

  // All tokens besides ETH require an allowance to spend it on hyperdrive
  const requiresAllowance = activeToken.address !== ETH_MAGIC_NUMBER;
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

  // preview calc will always say how much base is required to open the position,
  // however users can open the position using either base or shares
  const { baseAmountIn, status: openShortPreviewStatus } = usePreviewOpenShort({
    hyperdriveAddress: hyperdrive.address,
    amountOfBondsToShort: amountOfBondsToShortAsBigInt,
  });
  // If they're choosing to deposit shares, we need to convert the deposit
  // amount into shares
  let depositAmount = baseAmountIn;
  if (activeToken.address === sharesToken.address) {
    depositAmount = convertBaseToShares({
      decimals: sharesToken.decimals,
      vaultSharePrice: poolInfo?.vaultSharePrice,
      baseAmount: baseAmountIn,
    });
  }

  const hasEnoughBalance = getHasEnoughBalance({
    amount: depositAmount,
    balance: activeTokenBalance?.value,
  });

  const hasEnoughAllowance = getHasEnoughAllowance({
    allowance: activeTokenAllowance,
    amount: depositAmount,
    requiresAllowance,
  });

  const { openShort, openShortSubmittedStatus } = useOpenShort({
    hyperdriveAddress: hyperdrive.address,
    amountBondShorts: amountOfBondsToShortAsBigInt,
    minSharePrice: poolInfo?.vaultSharePrice,
    // TODO: handle slippage
    maxBaseAmountIn: MAX_UINT256,
    destination: account,
    enabled: openShortPreviewStatus === "success" && hasEnoughAllowance,
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
            },
            {
              tokenConfig: sharesToken,
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
          costBasis={depositAmount || 0n}
          shortSize={amountOfBondsToShortAsBigInt}
        />
      }
      disclaimer={
        depositAmount ? (
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
                  balance: depositAmount || 0n,
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
              deposited into <strong>{sharesToken.extensions.shortName}</strong>{" "}
              for{" "}
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
        ) : null
      }
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
              amountAsBigInt={depositAmount}
              amount={formatUnits(baseAmountIn || 0n, activeToken.decimals)}
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
