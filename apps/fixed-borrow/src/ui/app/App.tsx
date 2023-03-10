import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactElement, useState } from "react";
import { SupplyCollateralForm } from "src/ui/loans/SupplyCollateralForm";
import { BorrowDebtForm } from "src/ui/loans/BorrowDebtForm";
import { formatUnits, parseEther, parseUnits } from "ethers/lib/utils.js";
import { MintButton } from "src/ui/faucet/MintButton";
import { BigNumber } from "ethers";
import { useUserAccountData } from "src/ui/loans/hooks/useUserAccountData";
import { useAccount, useToken } from "wagmi";
import { useAaveOracleAssetPrice } from "src/ui/oracles/useAaveOracleAssetPrice";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { StatsBar } from "src/ui/app/StatsBar";
import { OpenShortForm } from "src/ui/shorts/OpenShortForm";
import { HyperdriveGoerliAddresses } from "@hyperdrive/core";

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

  // The collateral amount state lives here in the app, and is updated whenever
  // the SupplyCollateralForm calls it's onChange handler. This allows us to
  // calculate the correct "after" amount to pass to the StatsBar.
  const [collateralAmountInput, setCollateralAmountInput] = useState<
    BigNumber | undefined
  >();
  const previewCollateralBalance =
    calculateBaseValueOfCurrentCollateralAndNewAmount(
      userAccountData?.totalCollateralBase,
      collateralAmountInput,
      collateralMetadata?.decimals,
      collateralPrice,
    );

  // The debt amount state management follows the same pattern as the
  // collateralAmount. Whenever the BorrowDebtForm calls it's onChange handler,
  // the debt amount value updates and a new "after" amount can be calculated
  // and passed to the StatsBar.
  const [debtAmountInput, setDebtAmountInput] = useState<
    BigNumber | undefined
  >();
  const valueToShort = calculateValueToShort(
    debtAmountInput,
    debtTokenMetadata?.decimals,
  );

  return (
    <div className="space-y-14 p-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-bold">Fixed Borrow</h1>
        <h4 className="mb-3 text-xl">Built by Delve</h4>
        <div className="flex items-center justify-center gap-4">
          <MintButton tokenAddress={COLLATERAL} amount={parseEther("1000")} />
          <ConnectButton />
        </div>
      </div>

      <div className="flex h-full justify-center">
        <div className="flex flex-col items-center gap-12">
          <StatsBar
            previewCollateralBalance={
              collateralAmountInput?.gt(0)
                ? previewCollateralBalance
                : undefined
            }
          />
          {/* Collateral */}
          <SupplyCollateralForm
            collateralTokenAddress={COLLATERAL}
            collateralATokenAddress={COLLATERAL_A_TOKEN}
            onCollateralInputAmountChange={setCollateralAmountInput}
          />

          {/* Debt */}
          <BorrowDebtForm
            debtTokenAddress={DEBT_TOKEN}
            onDebtInputAmountChange={setDebtAmountInput}
          />

          {/* Hyperdrive Short */}
          <OpenShortForm
            hyperdrivePoolAddress={HyperdriveGoerliAddresses.makerDsrHyperdrive}
            debtTokenAddress={DEBT_TOKEN}
            debtToShort={valueToShort}
          />
        </div>
      </div>
    </div>
  );
}

function calculateBaseValueOfCurrentCollateralAndNewAmount(
  currentCollateralBase: BigNumber | undefined,
  newCollateralAmount: BigNumber | undefined,
  collateralDecimals: number | undefined,
  collateralPrice: BigNumber | undefined,
) {
  // you start with this much already as collateral
  const totalCollateralBaseValue = formatUnits(
    currentCollateralBase || BigNumber.from(0),
    8,
  );

  // Convert the new collateral amount to a value in base
  const newCollateralAmountBaseValue =
    +formatUnits(newCollateralAmount || BigNumber.from(0), collateralDecimals) *
    +formatUnits(collateralPrice || BigNumber.from(0), 8);

  // add the current base value and the new collateral's base value together
  const afterAmountCollateralValueBase = formatBalance(
    +totalCollateralBaseValue + newCollateralAmountBaseValue,
  );
  return afterAmountCollateralValueBase;
}
function calculateValueToShort(
  debtAmountInput: BigNumber | undefined,
  debtTokenDecimals: number | undefined,
) {
  if (!debtAmountInput) {
    return;
  }

  const valueToShortAsNumber =
    +formatUnits(debtAmountInput, debtTokenDecimals) * 1.25;

  return parseUnits(valueToShortAsNumber.toString(), debtTokenDecimals);
}
