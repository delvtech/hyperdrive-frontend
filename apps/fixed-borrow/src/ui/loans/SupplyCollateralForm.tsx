import { SparkGoerliAddresses } from "@hyperdrive/spark";
import classNames from "classnames";
import { BigNumber } from "ethers";
import { formatUnits, parseUnits } from "ethers/lib/utils.js";
import { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/useNumericInput";
import { ApproveCollateralButton } from "src/ui/loans/ApproveCollateralButton";
import { useSupplyCollateral } from "src/ui/loans/hooks/useSupplyCollateral";
import { useAaveOracleAssetPrice } from "src/ui/oracles/useAaveOracleAssetPrice";
import { useSpenderAllowance } from "src/ui/token/useSpenderAllowance";
import { Address, useAccount, useBalance, useToken } from "wagmi";

interface SupplyCollateralFormProps {
  collateralTokenAddress: Address;
  collateralATokenAddress: Address;
  onCollateralInputAmountChange?: (newAmount: BigNumber) => void;
}

export function SupplyCollateralForm({
  collateralTokenAddress,
  collateralATokenAddress,
  onCollateralInputAmountChange,
}: SupplyCollateralFormProps): ReactElement {
  const { address: account } = useAccount();
  const { data: collateralTokenMetadata } = useToken({
    address: collateralTokenAddress,
  });
  const { data: accountCollateralBalance } = useBalance({
    token: collateralTokenAddress,
    address: account,
  });

  const { data: collateralPrice } = useAaveOracleAssetPrice(
    collateralTokenAddress,
  );

  // TODO: Get this from getUserReservesData
  const { data: aTokenBalance } = useBalance({
    token: collateralATokenAddress,
    address: account,
  });

  const {
    amount: collateralAmount,
    amountAsBigNumber: collateralAmountAsBigNumber,
    setAmount: setCollateralAmount,
  } = useNumericInput({ decimals: collateralTokenMetadata?.decimals });

  const afterAmount = collateralAmount
    ? aTokenBalance?.value.add(collateralAmountAsBigNumber)
    : undefined;
  const formattedAfterAmount = afterAmount
    ? formatBalance(formatUnits(afterAmount, collateralTokenMetadata?.decimals))
    : undefined;

  const { supply, status: supplyStatus } = useSupplyCollateral(
    collateralTokenAddress,
    collateralAmountAsBigNumber,
    account,
  );

  const { allowance } = useSpenderAllowance(
    collateralTokenAddress,
    SparkGoerliAddresses.pool,
  );
  const hasEnoughAllowance = allowance?.gte(collateralAmountAsBigNumber);
  const isSupplyButtonDisabled =
    !hasEnoughAllowance || !supply || supplyStatus === "loading";

  return (
    <div className="daisy-form-control w-full">
      <label className="daisy-label">
        <div className="daisy-label-text grid w-full grid-cols-2">
          <span className="self-end">Collateral</span>
          <div className="text-right">
            {accountCollateralBalance
              ? `Available to deposit: ${formatBalance(
                  accountCollateralBalance.formatted,
                  2,
                )} ${collateralTokenMetadata?.symbol}`
              : null}
          </div>
        </div>
      </label>

      <label className="daisy-input-group">
        <span>{collateralTokenMetadata?.symbol}</span>
        <input
          type="number"
          placeholder="Enter an amount to supply"
          className="daisy-input-bordered daisy-input w-full appearance-none text-primary focus:border-primary"
          onChange={(e) => {
            const valueAsBigNumber = parseUnits(
              e.target.value || "0",
              collateralTokenMetadata?.decimals,
            );
            onCollateralInputAmountChange?.(valueAsBigNumber);
            setCollateralAmount(e.target.value);
          }}
        />
      </label>
      <label className="daisy-label">
        <div className="daisy-label-text grid w-full grid-cols-2">
          <span className="self-start">
            {collateralPrice
              ? `1 ${collateralTokenMetadata?.symbol} = $${formatBalance(
                  formatUnits(collateralPrice, 8),
                  2,
                )}`
              : null}
          </span>
          <span className="text-right">
            <p>
              Currently supplied:{" "}
              {formatBalance(aTokenBalance?.formatted || "0")}{" "}
              {collateralTokenMetadata?.symbol}
            </p>
            {formattedAfterAmount && (
              <p className="daisy-label-text text-primary">
                After: {formattedAfterAmount} {collateralTokenMetadata?.symbol}
              </p>
            )}
          </span>
        </div>
      </label>
      {afterAmount ? (
        <div className="daisy-btn-group justify-end gap-4">
          {/* Approve button */}
          <ApproveCollateralButton
            collateralTokenAddress={collateralTokenAddress}
            amount={parseUnits("1000000", collateralTokenMetadata?.decimals)}
            spender={SparkGoerliAddresses.pool}
          />

          {/* Supply collateral button */}
          <button
            disabled={isSupplyButtonDisabled}
            className={classNames(
              "daisy-btn-outline daisy-btn daisy-btn-primary daisy-btn-wide",
              { "daisy-loading": supplyStatus === "loading" },
            )}
            onClick={() => supply?.()}
          >
            Supply {collateralTokenMetadata?.symbol}
          </button>
        </div>
      ) : null}
    </div>
  );
}
