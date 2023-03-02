import { AaveOracleABI, SparkGoerliAddresses } from "@hyperdrive/spark";
import { formatUnits, parseUnits } from "ethers/lib/utils.js";
import { ReactElement, useState } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useAccount, useBalance, useContractRead } from "wagmi";

export function CollateralFormControl(): ReactElement {
  const { address: account } = useAccount();
  const { data: assetBalance } = useBalance({
    token: SparkGoerliAddresses.USDC_token as `0x${string}`,
    address: account,
  });

  const { data: assetPrice } = useContractRead({
    abi: AaveOracleABI,
    address: SparkGoerliAddresses.aaveOracle as `0x${string}`,
    functionName: "getAssetPrice",
    args: [SparkGoerliAddresses.USDC_token as `0x${string}`],
  });

  const { data: aTokenBalance } = useBalance({
    token: SparkGoerliAddresses.USDC_aToken as `0x${string}`,
    address: account,
  });

  const [inputAmount, setInputAmount] = useState<string | undefined>();

  const afterAmount = inputAmount
    ? aTokenBalance?.value.add(parseUnits(inputAmount, 8))
    : undefined;
  const formattedAfterAmount = afterAmount
    ? formatBalance(formatUnits(afterAmount, 8))
    : undefined;

  return (
    <div className="daisy-form-control w-full">
      <label className="daisy-label">
        <span className="daisy-label-text">
          {afterAmount ? "" : "Collateral"}
        </span>
        <span className="daisy-label-text">
          Currently locked: {aTokenBalance?.formatted} USDC
        </span>
      </label>

      <label className="daisy-label -mt-4">
        <span className="daisy-label-text">
          {!afterAmount ? "" : "Collateral"}
        </span>
        {formattedAfterAmount && (
          <span className="daisy-label-text text-warning">
            After: {formattedAfterAmount} USDC
          </span>
        )}
      </label>

      <label className="daisy-input-group">
        <span>USDC</span>
        <input
          type="number"
          placeholder="Enter an amount to deposit as collateral"
          className="daisy-input-bordered daisy-input w-full text-warning"
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
            ? `Available to deposit: $${formatBalance(
                formatUnits(assetBalance.value, 8),
                2,
              )}`
            : null}
        </span>
      </label>
    </div>
  );
}
