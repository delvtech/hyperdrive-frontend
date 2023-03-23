import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ReactElement, useState } from "react";
import { formatUnits, parseEther, parseUnits } from "ethers/lib/utils.js";
import { BigNumber } from "ethers";
import { useUserAccountData } from "src/ui/loans/hooks/useUserAccountData";
import { useAccount, useToken } from "wagmi";
import { useAaveOracleAssetPrice } from "src/ui/oracles/useAaveOracleAssetPrice";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { HyperdriveGoerliAddresses } from "@hyperdrive/core";
import { LoanCard } from "src/ui/loans/LoanCard/LoanCard";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MintButton } from "src/ui/faucet/MintButton";

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
    BigNumber | undefined
  >();
  // TODO: previewSupplyBalance should also be used to calculate the preview
  // loan to value
  const previewSupplyBalance = collateralAmountInput?.gt(0)
    ? calculateBaseValueOfCurrentCollateralAndNewAmount(
        userAccountData?.totalCollateralBase,
        collateralAmountInput,
        collateralMetadata?.decimals,
        collateralPrice,
      )
    : undefined;

  // The debt amount state management follows the same pattern as the
  // collateralAmount. Whenever the BorrowDebtForm calls it's onChange prop, the
  // debt amount value updates and a new "preview" amount for loan-to-value can
  // be calculated and passed to the StatsBar.
  const [debtAmountInput, setDebtAmountInput] = useState<
    BigNumber | undefined
  >();
  const valueToShort = calculateValueToShort(
    debtAmountInput,
    debtTokenMetadata?.decimals,
  );

  return (
    <div className="col-span-2 grid">
      <div className="flex justify-between gap-2 p-4">
        <h4 className="font-bold text-white">Fixed Borrow Demo</h4>
        <div className="flex gap-2">
          <MintButton
            tokenAddress={SparkGoerliAddresses.wstETH_token}
            amount={parseEther("100")}
          />
          <MintButton
            tokenAddress={SparkGoerliAddresses.DAI_token}
            amount={parseEther("10000")}
          />
        </div>
        <ConnectButton showBalance={false} />
      </div>
      <div className="flex min-h-[75vh] w-full flex-col items-center justify-center py-[10vh] px-[4vw]">
        <div className="max-w-4xl">
          <LoanCard />
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
