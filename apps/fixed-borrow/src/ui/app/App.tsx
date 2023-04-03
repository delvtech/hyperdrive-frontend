import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ReactElement, useState } from "react";
import { useUserAccountData } from "src/ui/loans/hooks/useUserAccountData";
import { useAccount, useToken } from "wagmi";
import { useAaveOracleAssetPrice } from "src/ui/oracles/useAaveOracleAssetPrice";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import {
  AaveFixedBorrowActionABI,
  HyperdriveGoerliAddresses,
} from "@hyperdrive/core";
import { LoanCard } from "src/ui/loans/LoanCard/LoanCard";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MintButton } from "src/ui/faucet/MintButton";
import { formatBigInt } from "src/base/bigint/formatBigInt";
import { parseBigInt } from "src/base/bigint/parseBigInt";
import { ClearAllowanceButton } from "src/ui/token/ClearAllowanceButton";

console.log(SparkGoerliAddresses);
console.log(HyperdriveGoerliAddresses);

const COLLATERAL = SparkGoerliAddresses.wstETH_token;
const COLLATERAL_A_TOKEN = SparkGoerliAddresses.wstETH_aToken;
const DEBT_TOKEN = SparkGoerliAddresses.DAI_token;

export default function App(): ReactElement {
  const { address: account } = useAccount();
  const { userAccountData } = useUserAccountData(account);
  const { data: collateralMetadata } = useToken({ address: COLLATERAL });
  const { data: collateralPrice } = useAaveOracleAssetPrice(COLLATERAL);
  const { data: debtTokenMetadata } = useToken({ address: DEBT_TOKEN });

  // The collateral amount input state lives here in the app, and is updated
  // whenever the SupplyCollateralForm calls it's onChange prop. Controlling
  // this here allows allows us to calculate the correct "preview" amount to
  // pass to the StatsBar.
  const [collateralAmountInput, setCollateralAmountInput] = useState<
    bigint | undefined
  >();

  // The debt amount state management follows the same pattern as the
  // collateralAmount. Whenever the BorrowDebtForm calls it's onChange prop, the
  // debt amount value updates and a new "preview" amount for loan-to-value can
  // be calculated and passed to the StatsBar.
  const [debtAmountInput, setDebtAmountInput] = useState<bigint | undefined>();

  return (
    <div className="col-span-2 grid">
      <div className="flex justify-between gap-2 p-4">
        <h4 className="font-bold text-white">Fixed Borrow Demo</h4>
        <div className="flex gap-2">
          <MintButton
            tokenAddress={SparkGoerliAddresses.wstETH_token}
            amount={parseBigInt("100", 18)}
          />
          <MintButton
            tokenAddress={SparkGoerliAddresses.DAI_token}
            amount={parseBigInt("10000", 18)}
          />
        </div>
        <ConnectButton showBalance={false} />
      </div>
      <div className="flex w-full justify-center gap-2">
        <ClearAllowanceButton
          tokenAddress={SparkGoerliAddresses.DAI_token}
          spender={HyperdriveGoerliAddresses.aaveFixedBorrowAction}
          spenderLabel="aaveFixedBorrowAction"
        />
        <ClearAllowanceButton
          tokenAddress={SparkGoerliAddresses.wstETH_token}
          spender={HyperdriveGoerliAddresses.aaveFixedBorrowAction}
          spenderLabel="aaveFixedBorrowAction"
        />
        <ClearAllowanceButton
          tokenAddress={SparkGoerliAddresses.wstETH_token}
          spender={SparkGoerliAddresses.pool}
          spenderLabel="sparkPool"
        />
        <ClearAllowanceButton
          tokenAddress={SparkGoerliAddresses.DAI_token}
          spender={SparkGoerliAddresses.pool}
          spenderLabel="sparkPool"
        />
      </div>
      <div className="flex min-h-[75vh] w-full flex-col items-center justify-center py-[10vh] px-[4vw]">
        <div className="max-w-4xl">
          <LoanCard
            supplyTokenAddress={COLLATERAL}
            borrowTokenAddress={DEBT_TOKEN}
          />
        </div>
      </div>
    </div>
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
