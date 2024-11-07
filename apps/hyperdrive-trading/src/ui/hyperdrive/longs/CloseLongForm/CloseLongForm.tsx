import { fixed } from "@delvtech/fixed-point-wasm";
import {
  appConfig,
  findBaseToken,
  findToken,
  HyperdriveConfig,
  TokenConfig,
} from "@delvtech/hyperdrive-appconfig";
import { adjustAmountByPercentage, Long } from "@delvtech/hyperdrive-js-core";
import { MouseEvent, ReactElement } from "react";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { PrimaryStat } from "src/ui/base/components/PrimaryStat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useActiveItem } from "src/ui/base/hooks/useActiveItem";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { ConnectWalletButton } from "src/ui/compliance/ConnectWallet";
import { useCloseLong } from "src/ui/hyperdrive/longs/hooks/useCloseLong";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import { StatusCell } from "src/ui/hyperdrive/longs/OpenLongsTable/StatusCell";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
import { TokenInput } from "src/ui/token/TokenInput";
import { TokenChoice, TokenPicker } from "src/ui/token/TokenPicker";
import { formatUnits, parseUnits } from "viem";
import { useAccount } from "wagmi";

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
  const { address: account } = useAccount();

  const defaultItems: TokenConfig[] = [];
  const baseToken = findBaseToken({
    hyperdriveAddress: hyperdrive.address,
    hyperdriveChainId: hyperdrive.chainId,
    appConfig,
  });
  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    defaultItems.push(baseToken);
  }

  const sharesToken = findToken({
    chainId: hyperdrive.chainId,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
    tokens: appConfig.tokens,
  });
  if (hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled) {
    // Safe to cast: sharesToken must be defined if its enabled for withdrawal
    defaultItems.push(sharesToken!);
  }

  const { balance: baseTokenBalance } = useTokenBalance({
    account,
    tokenAddress: hyperdrive.poolConfig.baseToken,
    decimals: hyperdrive.decimals,
  });

  const {
    activeItem: activeWithdrawToken,
    setActiveItemId: setActiveWithdrawToken,
  } = useActiveItem({
    items: defaultItems,
    idField: "address",
    defaultActiveItemId: hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
      ? hyperdrive.poolConfig.baseToken
      : hyperdrive.poolConfig.vaultSharesToken,
  });

  const { fiatPrice: activeWithdrawTokenPrice } = useTokenFiatPrice({
    tokenAddress: activeWithdrawToken.address,
    chainId: activeWithdrawToken.chainId,
  });

  const {
    amount: bondAmount,
    amountAsBigInt: bondAmountAsBigInt,
    setAmount,
  } = useNumericInput({
    decimals: hyperdrive.decimals,
  });

  // Preview the amount of base or shares they get back from closing their long.
  const {
    amountOut: withdrawAmount,
    flatPlusCurveFee,
    previewCloseLongStatus,
    previewCloseLongError,
  } = usePreviewCloseLong({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    maturityTime: long.maturity,
    bondAmountIn: bondAmountAsBigInt,
    asBase: activeWithdrawToken.address === hyperdrive.poolConfig.baseToken,
  });

  const minAmountOutAfterSlippage =
    withdrawAmount &&
    adjustAmountByPercentage({
      amount: withdrawAmount,
      percentage: parseUnits("1", activeWithdrawToken.decimals),
      decimals: activeWithdrawToken.decimals,
      direction: "down",
    });

  const { closeLong, closeLongStatus } = useCloseLong({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    maturityTime: long.maturity,
    bondAmountIn: bondAmountAsBigInt,
    minAmountOut: minAmountOutAfterSlippage,
    destination: account,
    asBase: activeWithdrawToken.address === hyperdrive.poolConfig.baseToken,
    enabled: previewCloseLongStatus === "success",
    onSubmitted: () => {
      (
        document.getElementById(`${long.assetId}`) as HTMLDialogElement
      )?.close();
    },
    onExecuted: () => {
      setAmount("");
    },
  });

  const withdrawTokenChoices: TokenChoice[] = [];
  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    withdrawTokenChoices.push({
      tokenConfig: baseToken,
      tokenBalance: baseTokenBalance?.value,
    });
  }

  if (hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled) {
    withdrawTokenChoices.push({
      // Safe to cast: sharesToken must be defined if its enabled for withdrawal
      tokenConfig: sharesToken!,
    });
  }
  // You can't close an amount that's larger than the position size
  const isAmountLargerThanPositionSize = !!(
    bondAmountAsBigInt && bondAmountAsBigInt > long.bondAmount
  );

  // Plausible event props
  const formName = "Close Long";
  const chainId = hyperdrive.chainId;
  const poolAddress = hyperdrive.address;

  return (
    <TransactionView
      tokenInput={
        baseToken ? (
          <div className="flex flex-col gap-3">
            <TokenInput
              name={baseToken.symbol}
              inputLabel="Amount to redeem"
              token={`hy${baseToken.symbol}`}
              value={bondAmount ?? ""}
              maxValue={
                long ? formatUnits(long.bondAmount, hyperdrive.decimals) : ""
              }
              onChange={(newAmount) => {
                window.plausible("formChange", {
                  props: {
                    inputName: "amount",
                    inputValue: newAmount,
                    formName,
                    chainId,
                    poolAddress,
                  },
                });
                setAmount(newAmount);
              }}
              bottomRightElement={
                <div className="flex flex-col gap-1 text-xs text-neutral-content">
                  {`Balance: ${formatBalance({
                    balance: long.bondAmount,
                    decimals: hyperdrive.decimals,
                    places: baseToken.places,
                  })}`}
                </div>
              }
            />
            <TokenInput
              name={baseToken.symbol}
              inputLabel="You receive"
              token={
                <TokenPicker
                  tokens={withdrawTokenChoices}
                  activeTokenAddress={activeWithdrawToken.address}
                  onChange={(tokenAddress) => {
                    window.plausible("formChange", {
                      props: {
                        inputName: "token",
                        inputValue: tokenAddress,
                        formName,
                        chainId,
                        poolAddress,
                      },
                    });
                    setActiveWithdrawToken(tokenAddress);
                  }}
                />
              }
              value={
                withdrawAmount
                  ? fixed(withdrawAmount, hyperdrive.decimals).toString()
                  : "0"
              }
              disabled
              bottomLeftElement={
                // Defillama fetches the token price via {chain}:{tokenAddress}. Since the token address differs on testnet, price display is disabled there.
                !isTestnetChain(hyperdrive.chainId) ? (
                  <label className="text-sm text-neutral-content">
                    {`$${formatBalance({
                      balance:
                        activeWithdrawTokenPrice && bondAmountAsBigInt
                          ? fixed(
                              bondAmountAsBigInt,
                              activeWithdrawToken.decimals,
                            ).mul(
                              activeWithdrawTokenPrice,
                              activeWithdrawToken.decimals,
                            ).bigint
                          : 0n,
                      decimals: activeWithdrawToken.decimals,
                      places: 2,
                    })}`}
                  </label>
                ) : null
              }
            />
          </div>
        ) : null
      }
      primaryStats={
        <div className="flex flex-row justify-between px-4 py-8">
          <PrimaryStat
            label="Time remaining"
            value={
              <StatusCell
                chainId={hyperdrive.chainId}
                maturity={long.maturity}
                statusCellClassName="mb-0 text-h3 w-full text-gray-50 font-bold"
                showLeftSuffix={false}
              />
            }
          />
          <div className="daisy-divider daisy-divider-horizontal mx-0" />
          <PrimaryStat
            label="Pool fee"
            value={
              <span className="text-h3 font-bold">
                {flatPlusCurveFee
                  ? `${formatBalance({
                      balance: flatPlusCurveFee,
                      decimals: 18,
                      // The default places value is not always precise enough to show the correct number of decimal places for positions that haven't matured.
                      places: 4,
                    })}`
                  : "0"}
              </span>
            }
            valueUnit={activeWithdrawToken.symbol}
            valueContainerClassName="flex flex-row gap-2 items-end"
          />
        </div>
      }
      disclaimer={(() => {
        if (!!bondAmountAsBigInt && isAmountLargerThanPositionSize) {
          return (
            <div className="text-center text-error">Insufficient balance</div>
          );
        }
        if (previewCloseLongError) {
          return (
            <div className="text-center text-error">
              Your position cannot be fully closed at this time. Please try
              again with a smaller amount.
            </div>
          );
        }
      })()}
      actionButton={(() => {
        if (!account) {
          return <ConnectWalletButton />;
        }
        if (closeLongStatus === "loading") {
          return <LoadingButton label="Closing Long" variant="primary" />;
        }
        return (
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            disabled={!closeLong || isAmountLargerThanPositionSize}
            onClick={(e) => {
              closeLong?.();
              onCloseLong?.(e);
            }}
          >
            <span>Close Long</span>
          </button>
        );
      })()}
    />
  );
}
