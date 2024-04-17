import { adjustAmountByPercentage } from "@delvtech/hyperdrive-viem";
import {
  EmptyExtensions,
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
  TokenConfig,
} from "@hyperdrive/appconfig";
import * as dnum from "dnum";
import { MouseEvent, ReactElement } from "react";
import { calculateRatio } from "src/base/calculateRatio";
import { parseUnits } from "src/base/parseUnits";
import { getHasEnoughAllowance } from "src/token/getHasEnoughAllowance";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { AddLiquidityPreview } from "src/ui/hyperdrive/lp/AddLiquidityPreview/AddLiquidityPreview";
import { useAddLiquidity } from "src/ui/hyperdrive/lp/hooks/useAddLiquidity";
import { useLpShares } from "src/ui/hyperdrive/lp/hooks/useLpShares";
import { useLpSharesTotalSupply } from "src/ui/hyperdrive/lp/hooks/useLpSharesTotalSupply";
import { usePreviewAddLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewAddLiquidity";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { ApproveTokenChoices } from "src/ui/token/ApproveTokenChoices";
import { useActiveToken } from "src/ui/token/hooks/useActiveToken";
import { useSlippageSettings } from "src/ui/token/hooks/useSlippageSettings";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { SlippageSettings } from "src/ui/token/SlippageSettings";
import { TokenInput } from "src/ui/token/TokenInput";
import { TokenPicker } from "src/ui/token/TokenPicker";
import { useAccount } from "wagmi";

interface AddLiquidityFormProps {
  hyperdrive: HyperdriveConfig;
  onAddLiquidity?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function AddLiquidityForm({
  hyperdrive,
  onAddLiquidity,
}: AddLiquidityFormProps): ReactElement {
  const { address: account } = useAccount();
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const appConfig = useAppConfig();
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

  const baseTokenDepositEnabled =
    hyperdrive.depositOptions.isBaseTokenDepositEnabled;

  const { lpShares: lpSharesBalanceOf } = useLpShares({
    account,
    hyperdriveAddress: hyperdrive.address,
  });

  const { activeToken, activeTokenBalance, setActiveToken, isActiveTokenEth } =
    useActiveToken({
      account,
      defaultActiveToken: baseTokenDepositEnabled
        ? baseToken.address
        : sharesToken.address,
      tokens: baseTokenDepositEnabled
        ? [baseToken, sharesToken]
        : [sharesToken],
    });

  const {
    amount: depositAmount,
    amountAsBigInt: depositAmountAsBigInt,
    setAmount,
  } = useNumericInput({
    decimals: activeToken.decimals,
  });

  // All tokens besides ETH require an allowance to spend it on hyperdrive
  const requiresAllowance = !isActiveTokenEth;
  const { tokenAllowance: activeTokenAllowance } = useTokenAllowance({
    account,
    spender: hyperdrive.address,
    tokenAddress: activeToken.address,
    enabled: requiresAllowance,
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

  const { activeOption, setActiveOption, setSlippage, slippage } =
    useSlippageSettings({ decimals: activeToken.decimals });

  const minLpSharePriceAfterSlippage = adjustAmountByPercentage({
    amount: poolInfo?.lpSharePrice || 0n,
    percentage: slippage,
    decimals: activeToken.decimals,
    direction: "down",
  });

  const isBaseActiveToken = activeToken.address === baseToken.address;
  // Shared params with the preview and the write method
  const addLiquidityParams = {
    hyperdriveAddress: hyperdrive.address,
    contribution: depositAmountAsBigInt,
    minAPR: parseUnits("0", baseToken.decimals),
    maxAPR: parseUnits("999", baseToken.decimals),
    minLpSharePrice: minLpSharePriceAfterSlippage,
    asBase: isBaseActiveToken,
    destination: account,
    ethValue: isActiveTokenEth ? depositAmountAsBigInt : undefined,
    enabled: hasEnoughAllowance && hasEnoughBalance,
  };

  const { lpSharesOut, status: addLiquidityPreviewStatus } =
    usePreviewAddLiquidity(addLiquidityParams);

  const { lpSharesTotalSupply } = useLpSharesTotalSupply({
    hyperdriveAddress: hyperdrive.address,
  });
  const poolShareAfterDeposit = calculatePoolShareAfterDeposit(
    lpSharesBalanceOf,
    lpSharesOut,
    lpSharesTotalSupply,
    hyperdrive,
    baseToken,
  );

  const { addLiquidity, addLiquidityStatus } = useAddLiquidity({
    ...addLiquidityParams,
    enabled:
      addLiquidityParams.enabled && addLiquidityPreviewStatus === "success",
    onSubmitted: () => {
      (window as any)["add-lp"].close();
    },
    onExecuted: () => {
      setAmount("");
    },
  });

  return (
    <TransactionView
      tokenInput={
        <TokenInput
          settings={
            <SlippageSettings
              onSlippageChange={setSlippage}
              slippage={slippage}
              decimals={activeToken.decimals}
              activeOption={activeOption}
              onActiveOptionChange={setActiveOption}
            />
          }
          name={activeToken.symbol}
          token={
            <TokenPicker
              joined={true}
              tokens={
                baseTokenDepositEnabled
                  ? [
                      {
                        tokenConfig: baseToken,
                        tokenBalance: baseTokenBalance?.value,
                      },
                      {
                        tokenConfig: sharesToken,
                        tokenBalance: sharesTokenBalance?.value,
                      },
                    ]
                  : [
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
            />
          }
          value={depositAmount ?? ""}
          maxValue={activeTokenBalance?.formatted}
          inputLabel="Amount to deposit"
          stat={
            activeTokenBalance
              ? `Balance: ${formatBalance({
                  balance: activeTokenBalance?.value,
                  decimals: activeToken.decimals,
                  places: activeToken.places,
                })} ${activeToken.symbol}`
              : undefined
          }
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      transactionPreview={
        <AddLiquidityPreview
          hyperdrive={hyperdrive}
          lpSharesOut={lpSharesOut}
          depositAmount={depositAmountAsBigInt}
          depositTokenDecimals={activeToken.decimals}
          depositTokenPlaces={activeToken.places}
          depositTokenSymbol={activeToken.symbol}
          poolShareAfterDeposit={poolShareAfterDeposit}
        />
      }
      disclaimer={
        !!depositAmountAsBigInt && !hasEnoughBalance ? (
          <p className="text-center text-sm text-error">Insufficient balance</p>
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
              Add Liquidity
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

        if (addLiquidityStatus === "loading") {
          return <LoadingButton label="Adding liquidity" variant="primary" />;
        }

        return (
          <button
            disabled={!addLiquidity}
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            onClick={(e) => {
              addLiquidity?.();
              onAddLiquidity?.(e);
            }}
          >
            Add liquidity
          </button>
        );
      })()}
    />
  );
}
function calculatePoolShareAfterDeposit(
  lpSharesBalanceOf: bigint | undefined,
  lpSharesOut: bigint | undefined,
  lpSharesTotalSupply: bigint | undefined,
  hyperdrive: HyperdriveConfig,
  baseToken: TokenConfig<EmptyExtensions>,
) {
  if (!lpSharesOut || !lpSharesTotalSupply || lpSharesBalanceOf === undefined) {
    return;
  }

  const newTotalSupplyAfterOpen = dnum.add(
    [lpSharesOut, hyperdrive.decimals],
    [lpSharesTotalSupply, hyperdrive.decimals],
  )[0];

  return calculateRatio({
    a: dnum.add(
      [lpSharesBalanceOf, hyperdrive.decimals],
      [lpSharesOut, hyperdrive.decimals],
    )[0],
    b: newTotalSupplyAfterOpen,
    decimals: baseToken.decimals,
  });
}
