import { fixed } from "@delvtech/fixed-point-wasm";
import {
  getBaseToken,
  getToken,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { adjustAmountByPercentage, OpenShort } from "@delvtech/hyperdrive-js";
import { MouseEvent, ReactElement } from "react";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { PrimaryStat } from "src/ui/base/components/PrimaryStat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useActiveItem } from "src/ui/base/hooks/useActiveItem";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { SwitchNetworksButton } from "src/ui/chains/SwitchChainButton/SwitchChainButton";
import { InvalidTransactionButton } from "src/ui/hyperdrive/InvalidTransactionButton";
import { StatusCell } from "src/ui/hyperdrive/longs/StatusCell";
import { useCloseShort } from "src/ui/hyperdrive/shorts/hooks/useCloseShort";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
import { TokenInput } from "src/ui/token/TokenInput";
import { TokenChoice, TokenPicker } from "src/ui/token/TokenPicker";
import { formatUnits, parseUnits } from "viem";
import { useAccount, useChainId } from "wagmi";

interface CloseShortFormProps {
  hyperdrive: HyperdriveConfig;
  // TODO: Refactor this to only need the positionSize and maturity time
  short: OpenShort;
  onCloseShort?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function CloseShortForm({
  hyperdrive,
  short,
}: CloseShortFormProps): ReactElement {
  const { address: account } = useAccount();
  const connectedChainId = useChainId();
  const defaultItems = [];
  const appConfig = useAppConfigForConnectedChain();
  const baseToken = getBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    defaultItems.push(baseToken);
  }
  const sharesToken = getToken({
    chainId: hyperdrive.chainId,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
    appConfig,
  });
  if (sharesToken && hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled) {
    defaultItems.push(sharesToken);
  }

  const { balance: baseTokenBalance } = useTokenBalance({
    account,
    tokenAddress: baseToken.address,
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

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: hyperdrive.decimals,
  });

  const { fiatPrice: activeWithdrawTokenPrice } = useTokenFiatPrice({
    tokenAddress: activeWithdrawToken.address,
    chainId: activeWithdrawToken.chainId,
  });

  // You can't close an amount that's larger than the position size
  const isAmountLargerThanPositionSize = !!(
    amountAsBigInt && amountAsBigInt > short.bondAmount
  );
  const { amountOut, flatPlusCurveFee, previewCloseShortStatus } =
    usePreviewCloseShort({
      chainId: hyperdrive.chainId,
      hyperdriveAddress: hyperdrive.address,
      maturityTime: short.maturity,
      shortAmountIn: amountAsBigInt,
      asBase: activeWithdrawToken.address === hyperdrive.poolConfig.baseToken,
      enabled: !isAmountLargerThanPositionSize,
    });

  const minAmountOutAfterSlippage =
    amountOut &&
    adjustAmountByPercentage({
      amount: amountOut,
      percentage: parseUnits("1", activeWithdrawToken.decimals),
      decimals: activeWithdrawToken.decimals,
      direction: "down",
    });

  const { closeShort, closeShortStatus } = useCloseShort({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    maturityTime: short.maturity,
    bondAmountIn: amountAsBigInt,
    minAmountOut: minAmountOutAfterSlippage,
    destination: account,
    enabled:
      previewCloseShortStatus === "success" && !isAmountLargerThanPositionSize,
    asBase:
      hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
      activeWithdrawToken.address === hyperdrive.poolConfig.baseToken,
    onSubmitted: () => {
      (window as any)[`${short.assetId}`]?.close();
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

  if (sharesToken && hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled) {
    withdrawTokenChoices.push({
      tokenConfig: sharesToken,
    });
  }

  // Plausible event props
  const formName = "Close Short";
  const chainId = hyperdrive.chainId;
  const poolAddress = hyperdrive.address;

  return (
    <TransactionView
      tokenInput={
        <div className="flex flex-col gap-3">
          <TokenInput
            name={baseToken.symbol}
            inputLabel="Amount to redeem"
            token={`hy${baseToken.symbol}`}
            value={amount ?? ""}
            maxValue={
              short ? formatUnits(short.bondAmount, hyperdrive.decimals) : ""
            }
            onChange={(newAmount) => {
              window.plausible("formChange", {
                props: {
                  inputName: "amount",
                  inputValue: newAmount,
                  formName,
                  chainId,
                  poolAddress,
                  connectedWallet: account,
                },
              });
              setAmount(newAmount);
            }}
            bottomRightElement={
              <div className="flex flex-col text-xs text-neutral-content">
                {short
                  ? `Balance: ${formatBalance({
                      balance: short.bondAmount,
                      decimals: hyperdrive.decimals,
                      places: baseToken?.places,
                    })}`
                  : undefined}
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
                      connectedWallet: account,
                    },
                  });
                  setActiveWithdrawToken(tokenAddress);
                }}
              />
            }
            value={
              amountOut ? fixed(amountOut, hyperdrive.decimals).toString() : "0"
            }
            disabled
            bottomLeftElement={
              // Defillama fetches the token price via {chain}:{tokenAddress}. Since the token address differs on testnet, price display is disabled there.
              !isTestnetChain(hyperdrive.chainId) ? (
                <label className="text-sm text-neutral-content">
                  {`$${formatBalance({
                    balance:
                      activeWithdrawTokenPrice && amountOut
                        ? fixed(
                            amountOut ?? 0n,
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
      }
      primaryStats={
        <div className="flex flex-row justify-between px-4 py-8">
          <PrimaryStat
            label="Time remaining"
            value={
              <StatusCell
                chainId={hyperdrive.chainId}
                maturity={short.maturity}
                statusCellClassName="mb-0 text-h3 w-full text-gray-50 font-bold"
                showLeftSuffix={false}
              />
            }
          />
          <div className="daisy-divider daisy-divider-horizontal mx-0" />
          <PrimaryStat
            label="Pool fee"
            value={
              <div className="text-h3 font-bold">
                {flatPlusCurveFee
                  ? `${formatBalance({
                      balance: flatPlusCurveFee,
                      decimals: hyperdrive.decimals,
                      // The default places value is not always precise enough to show the correct number of decimal places for positions that haven't matured.
                      places: 6,
                    })}`
                  : "0"}{" "}
              </div>
            }
            valueUnit={activeWithdrawToken.symbol}
            valueContainerClassName="flex flex-row gap-2 items-end"
          />
        </div>
      }
      actionButton={(() => {
        if (!account) {
          return <ConnectWalletButton wide />;
        }
        if (connectedChainId !== hyperdrive.chainId) {
          return (
            <SwitchNetworksButton
              targetChainId={hyperdrive.chainId}
              targetChainName={appConfig.chains[hyperdrive.chainId].name}
            />
          );
        }
        if (!!amountAsBigInt && isAmountLargerThanPositionSize) {
          return (
            <InvalidTransactionButton wide>
              Insufficient balance
            </InvalidTransactionButton>
          );
        }
        if (closeShortStatus === "loading") {
          return <LoadingButton label="Closing Short" variant="primary" />;
        }
        return (
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            disabled={!closeShort || isAmountLargerThanPositionSize}
            onClick={(e) => {
              // prevent closing the modal until the user approves the transaction
              e.preventDefault();
              closeShort?.();
            }}
          >
            Close Short
          </button>
        );
      })()}
    />
  );
}
