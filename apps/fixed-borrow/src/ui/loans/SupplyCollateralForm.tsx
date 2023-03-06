import { AaveOracleABI, SparkGoerliAddresses } from "@hyperdrive/spark";
import classNames from "classnames";
import { formatUnits, parseUnits } from "ethers/lib/utils.js";
import { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/useNumericInput";
import { ApproveCollateralButton } from "src/ui/loans/ApproveCollateralButton";
import { useSupplyCollateral } from "src/ui/loans/hooks/useSupplyCollateral";
import { useSpenderAllowance } from "src/ui/token/useSpenderAllowance";
import { useAccount, useBalance, useContractRead, useToken } from "wagmi";

interface SupplyCollateralFormProps {
  collateralTokenAddress: `0x${string}`;
  collateralATokenAddress: `0x${string}`;
}

export function SupplyCollateralForm({
  collateralTokenAddress,
  collateralATokenAddress,
}: SupplyCollateralFormProps): ReactElement {
  const { address: account } = useAccount();
  const { data: collateralTokenMetadata } = useToken({
    address: collateralTokenAddress,
  });
  const { data: accountCollateralBalance } = useBalance({
    token: collateralTokenAddress,
    address: account,
  });

  const { data: collateralPrice } = useContractRead({
    abi: AaveOracleABI,
    address: SparkGoerliAddresses.aaveOracle,
    functionName: "getAssetPrice",
    args: [collateralTokenAddress],
  });

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
            setCollateralAmount(e.target.value);
          }}
        />
      </label>
      <label className="daisy-label mb-2">
        <span className="daisy-label-text">
          {collateralPrice
            ? `1 ${collateralTokenMetadata?.symbol} = $${formatBalance(
                formatUnits(collateralPrice, 8),
                2,
              )}`
            : null}
        </span>
        <span className="daisy-label-text">
          {accountCollateralBalance
            ? `Available to deposit: ${formatBalance(
                accountCollateralBalance.formatted,
                2,
              )} ${collateralTokenMetadata?.symbol}`
            : null}
        </span>
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
              "daisy-btn-outline daisy-btn-primary daisy-btn-wide daisy-btn",
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
