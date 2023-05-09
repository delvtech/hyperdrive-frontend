import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ReactElement } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { HyperdriveGoerliAddresses } from "@hyperdrive/core";
import { LoanCard } from "src/ui/graveyard/LoanCard/LoanCard";
import { formatBigInt } from "src/base/bigint/formatBigInt";

console.log(SparkGoerliAddresses);
console.log(HyperdriveGoerliAddresses);

const COLLATERAL = SparkGoerliAddresses.wstETH_token;
const DEBT_TOKEN = SparkGoerliAddresses.DAI_token;

export default function BorrowPage(): ReactElement {
  return (
    <LoanCard supplyTokenAddress={COLLATERAL} borrowTokenAddress={DEBT_TOKEN} />
  );
}

function calculateBaseValueOfCurrentCollateralAndNewAmount(
  currentCollateralBase: bigint | undefined,
  newCollateralAmount: bigint | undefined,
  collateralDecimals: number | undefined,
  collateralPrice: bigint | undefined,
) {
  // you start with this much already as collateral
  const totalCollateralBaseValue = formatBigInt(currentCollateralBase || 0n, 8);

  // Convert the new collateral amount to a value in base
  const newCollateralAmountBaseValue =
    +formatBigInt(newCollateralAmount || 0n, collateralDecimals) *
    +formatBigInt(collateralPrice || 0n, 8);

  // add the current base value and the new collateral's base value together
  const afterAmountCollateralValueBase = formatBalance(
    +totalCollateralBaseValue + newCollateralAmountBaseValue,
  );
  return afterAmountCollateralValueBase;
}
