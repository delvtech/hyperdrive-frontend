import { adjustAmountByPercentage } from "@delvtech/hyperdrive-viem";
import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import { MouseEvent, ReactElement } from "react";
import { getIsValidTradeSize } from "src/hyperdrive/getIsValidTradeSize";
import { getHasEnoughAllowance } from "src/token/getHasEnoughAllowance";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useMaxLong } from "src/ui/hyperdrive/longs/hooks/useMaxLong";
import { useOpenLong } from "src/ui/hyperdrive/longs/hooks/useOpenLong";
import { usePreviewOpenLong } from "src/ui/hyperdrive/longs/hooks/usePreviewOpenLong";
import { OpenLongPreview } from "src/ui/hyperdrive/longs/OpenLongPreview/OpenLongPreview";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { ApproveTokenChoices } from "src/ui/token/ApproveTokenChoices";
import { useActiveToken } from "src/ui/token/hooks/useActiveToken";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { TokenInput } from "src/ui/token/TokenInput";
import { TokenPicker } from "src/ui/token/TokenPicker";
import { formatUnits } from "viem";
import { sepolia } from "viem/chains";
import { useAccount, useChainId } from "wagmi";
interface OpenLongFormProps {
  hyperdrive: HyperdriveConfig;
  onOpenLong?: (e: MouseEvent<HTMLButtonElement>) => void;
}
export function OpenLongForm({
  hyperdrive: hyperdrive,
  onOpenLong,
}: OpenLongFormProps): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const chainId = useChainId();
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });

  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });

  const { balance: baseTokenBalance } = useTokenBalance({
    account,
    tokenAddress: baseToken.address,
    decimals: baseToken.decimals,
  });

  const { balance: sharesTokenBalance } = useTokenBalance({
    account,
    tokenAddress: sharesToken.address,
    decimals: sharesToken.decimals,
  });
  const isLidoSepolia =
    chainId === sepolia.id &&
    hyperdrive.depositOptions.isBaseTokenDepositEnabled;

  const { activeToken, activeTokenBalance, setActiveToken, isActiveTokenEth } =
    useActiveToken({
      account,
      // TODO: Remove check for Sepolia chain after testnet period.
      defaultActiveToken: isLidoSepolia
        ? sharesToken.address
        : baseToken.address,
      // TODO: Remove check for Sepolia chain after testnet period.
      tokens: isLidoSepolia ? [sharesToken] : [baseToken, sharesToken],
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
    amount: depositAmount,
    amountAsBigInt: depositAmountAsBigInt,
    setAmount,
  } = useNumericInput({
    decimals: activeToken.decimals,
  });

  const hasEnoughAllowance = getHasEnoughAllowance({
    requiresAllowance,
    allowance: activeTokenAllowance,
    amount: depositAmountAsBigInt,
  });
  const hasEnoughBalance = getHasEnoughBalance({
    balance: activeTokenBalance?.value,
    amount: depositAmountAsBigInt,
  });

  const { maxBaseIn, maxSharesIn } = useMaxLong({
    hyperdriveAddress: hyperdrive.address,
  });
  const activeTokenMaxTradeSize =
    activeToken.address === baseToken.address ? maxBaseIn : maxSharesIn;

  const hasEnoughLiquidity = getIsValidTradeSize({
    tradeAmount: depositAmountAsBigInt,
    maxTradeSize: activeTokenMaxTradeSize,
  });

  const {
    bondsReceived,
    spotRateAfterOpen,
    curveFee,
    status: openLongPreviewStatus,
  } = usePreviewOpenLong({
    hyperdriveAddress: hyperdrive.address,
    amountIn: depositAmountAsBigInt,
    asBase: activeToken.address === baseToken.address,
  });

  const bondsReceivedAfterSlippage =
    bondsReceived &&
    adjustAmountByPercentage({
      amount: bondsReceived,
      percentage: 1n,
      decimals: activeToken.decimals,
      direction: "down",
    });

  const { openLong, openLongStatus } = useOpenLong({
    hyperdriveAddress: hyperdrive.address,
    asBase: activeToken.address === baseToken.address,
    amount: depositAmountAsBigInt,
    ethValue: isActiveTokenEth ? depositAmountAsBigInt : undefined,
    minBondsOut: bondsReceivedAfterSlippage,
    minSharePrice: poolInfo?.vaultSharePrice,
    destination: account,
    enabled: openLongPreviewStatus === "success" && hasEnoughAllowance,
    onSubmitted: () => {
      (window as any)["open-long"].close();
    },
    onExecuted: () => {
      setAmount("");
    },
  });

  // Max button is wired up to the user's balance, or the pool's max long.
  // Whichever is smallest.
  let maxButtonValue = "0";
  if (activeTokenBalance && activeTokenMaxTradeSize) {
    maxButtonValue = formatUnits(
      activeTokenBalance.value > activeTokenMaxTradeSize
        ? activeTokenMaxTradeSize
        : activeTokenBalance?.value,
      activeToken.decimals,
    );
  }

  return (
    <TransactionView
      tokenInput={
        <TokenInput
          name={activeToken.symbol}
          token={
            <TokenPicker
              // TODO: Remove check for Sepolia chain after testnet period.
              tokens={
                isLidoSepolia
                  ? [
                      {
                        tokenConfig: sharesToken,
                        tokenBalance: sharesTokenBalance?.value,
                      },
                    ]
                  : [
                      {
                        tokenConfig: baseToken,
                        tokenBalance: baseTokenBalance?.value,
                      },
                      {
                        tokenConfig: sharesToken,
                        tokenBalance: sharesTokenBalance?.value,
                      },
                    ]
              }
              activeTokenAddress={activeToken.address}
              onChange={(tokenAddress) => {
                setActiveToken(tokenAddress);
                setAmount("0");
              }}
              joined={true}
            />
          }
          value={depositAmount ?? ""}
          maxValue={maxButtonValue}
          inputLabel="Amount to spend"
          stat={
            activeTokenBalance
              ? `Balance: ${formatBalance({
                  balance: activeTokenBalance?.value,
                  decimals: activeToken.decimals,
                  places: 4,
                })} ${activeToken.symbol}`
              : undefined
          }
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      transactionPreview={
        <OpenLongPreview
          hyperdrive={hyperdrive}
          spotRateAfterOpen={spotRateAfterOpen}
          curveFee={curveFee}
          activeToken={activeToken}
          long={{
            bondAmount: bondsReceived || 0n,
            assetId: 0n,
            baseAmountPaid: depositAmountAsBigInt || 0n,
            maturity: BigInt(
              Math.round(
                (Date.now() +
                  Number(hyperdrive.poolConfig.positionDuration * 1000n)) /
                  1000,
              ),
            ),
          }}
        />
      }
      disclaimer={(() => {
        if (!!depositAmountAsBigInt && !hasEnoughBalance) {
          return (
            <p className="text-center text-sm text-error">
              Insufficient balance
            </p>
          );
        }
        if (!!depositAmountAsBigInt && !hasEnoughLiquidity) {
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

        if (!hasEnoughBalance || !hasEnoughLiquidity) {
          return (
            <button
              disabled
              className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            >
              Open Long
            </button>
          );
        }

        if (!hasEnoughAllowance) {
          return (
            <ApproveTokenChoices
              spender={hyperdrive.address}
              token={activeToken}
              amountAsBigInt={depositAmountAsBigInt}
              amount={depositAmount}
            />
          );
        }

        if (openLongStatus === "loading") {
          return <LoadingButton label="Opening Long" variant="primary" />;
        }

        return (
          <button
            disabled={!openLong}
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            onClick={(e) => {
              openLong?.();
              onOpenLong?.(e);
            }}
          >
            Open Long
          </button>
        );
      })()}
    />
  );
}
