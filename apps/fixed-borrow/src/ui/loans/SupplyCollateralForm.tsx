import {
  AaveOracleABI,
  DSTokenABI,
  SparkGoerliAddresses,
} from "@hyperdrive/spark";
import classNames from "classnames";
import { BigNumber } from "ethers";
import { formatUnits, parseUnits } from "ethers/lib/utils.js";
import { ReactElement, useState } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useSupplyCollateral } from "src/ui/loans/hooks/useSupplyCollateral";
import { useTokenApproval } from "src/ui/token/useTokenApproval";
import { useAccount, useBalance, useContractRead } from "wagmi";

export function SupplyCollateralForm(): ReactElement {
  const { address: account } = useAccount();
  const { data: assetBalance } = useBalance({
    token: SparkGoerliAddresses.USDC_token,
    address: account,
  });

  const { data: assetPrice } = useContractRead({
    abi: AaveOracleABI,
    address: SparkGoerliAddresses.aaveOracle,
    functionName: "getAssetPrice",
    args: [SparkGoerliAddresses.USDC_token],
  });

  const { data: aTokenBalance } = useBalance({
    token: SparkGoerliAddresses.USDC_aToken,
    address: account,
  });
  const { approve } = useTokenApproval({
    tokenAddress: SparkGoerliAddresses.USDC_token,
    spender: SparkGoerliAddresses.pool,
    amount: parseUnits("1000000", 8),
  });
  const [inputAmount, setInputAmount] = useState<string | undefined>();
  const inputAmountAsBigNumber = parseUnits(inputAmount || "0", 8);

  const { supply, status: supplyStatus } = useSupplyCollateral(
    SparkGoerliAddresses.USDC_token,
    inputAmountAsBigNumber,
    account,
  );

  const { data: allowance } = useContractRead({
    abi: DSTokenABI, // USDC is a DSToken on goerli, see: https://github.com/dapphub/ds-token
    address: SparkGoerliAddresses.USDC_token,
    functionName: "allowance",
    enabled: !!account,
    args: [account as `0x${string}`, SparkGoerliAddresses.pool],
  });
  const hasEnoughAllowance = allowance?.gte(inputAmountAsBigNumber);

  const afterAmount = inputAmount
    ? aTokenBalance?.value.add(inputAmountAsBigNumber)
    : undefined;
  const formattedAfterAmount = afterAmount
    ? formatBalance(formatUnits(afterAmount, 8))
    : undefined;

  const isSupplyButtonDisabled =
    !hasEnoughAllowance || !supply || supplyStatus === "loading";

  return (
    <div className="daisy-form-control w-full">
      <label className="daisy-label">
        <span className="daisy-label-text">
          {afterAmount ? "" : "Collateral"}
        </span>
        <span className="daisy-label-text">
          Currently supplied:{" "}
          {formatBalance(
            formatUnits(aTokenBalance?.value || BigNumber.from(0), 8),
          )}{" "}
          USDC
        </span>
      </label>

      <label className="daisy-label -mt-4">
        <span className="daisy-label-text">
          {!afterAmount ? "" : "Collateral"}
        </span>
        {formattedAfterAmount && (
          <span className="daisy-label-text text-primary">
            After: {formattedAfterAmount} USDC
          </span>
        )}
      </label>

      <label className="daisy-input-group">
        <span>USDC</span>
        <input
          type="number"
          placeholder="Enter an amount to deposit as collateral"
          className="daisy-input-bordered daisy-input w-full text-primary"
          onChange={(e) => {
            setInputAmount(e.target.value);
          }}
        />
      </label>
      <label className="daisy-label">
        <span className="daisy-label-text">
          {assetPrice
            ? `Current price: 1 USDC = $${formatBalance(
                formatUnits(assetPrice, 8),
                2,
              )}`
            : null}
        </span>
        <span className="daisy-label-text">
          {assetBalance
            ? `Available to deposit: ${formatBalance(
                formatUnits(assetBalance.value, 8),
                2,
              )} USDC`
            : null}
        </span>
      </label>
      {afterAmount ? (
        <div className="daisy-btn-group justify-end">
          {/* Approve button */}
          {!hasEnoughAllowance ? (
            <button
              disabled={!approve}
              className="daisy-btn-outline daisy-btn daisy-btn-wide"
              onClick={() => approve?.()}
            >
              Approve
            </button>
          ) : null}

          {/* Supply collateral button */}
          <button
            disabled={isSupplyButtonDisabled}
            className={classNames(
              "daisy-btn-outline daisy-btn daisy-btn-primary daisy-btn-wide",
              { "daisy-loading": supplyStatus === "loading" },
            )}
            onClick={() => supply?.()}
          >
            Supply collateral
          </button>
        </div>
      ) : null}
    </div>
  );
}
