import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactElement, useState } from "react";
import { SupplyCollateralForm } from "src/ui/loans/SupplyCollateralForm";
import { BorrowDebtForm } from "src/ui/loans/BorrowDebtForm";
import { formatUnits, parseEther } from "ethers/lib/utils.js";
import { MintButton } from "src/ui/faucet/MintButton";
import { BigNumber } from "ethers";
import { useUserAccountData } from "src/ui/loans/hooks/useUserAccountData";
import { useAccount, useToken } from "wagmi";
import { useAaveOracleAssetPrice } from "src/ui/loans/hooks/useAaveOracleAssetPrice";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { StatsBar } from "src/ui/app/StatsBar";
import { OpenShortForm } from "src/ui/shorts/OpenShortForm";
import { TermDuration } from "src/ui/shorts/termDuration";

console.log(SparkGoerliAddresses);

const COLLATERAL = SparkGoerliAddresses.wstETH_token;
const COLLATERAL_A_TOKEN = SparkGoerliAddresses.wstETH_aToken;
const DEBT_TOKEN = SparkGoerliAddresses.DAI_token;

export default function App(): ReactElement {
  const [duration, setDuration] = useState<TermDuration | undefined>();
  const { address: account } = useAccount();
  const { userAccountData } = useUserAccountData(account);
  const { data: collateralMetadata } = useToken({ address: COLLATERAL });
  const { data: collateralPrice } = useAaveOracleAssetPrice(COLLATERAL);

  const [collateralAmountInput, setCollateralAmountInput] = useState<
    BigNumber | undefined
  >();

  const afterAmountCollateralValueBase = calculateCollateralBaseValue(
    userAccountData?.totalCollateralBase,
    collateralAmountInput,
    collateralMetadata?.decimals,
    collateralPrice,
  );

  return (
    <div className="space-y-14 p-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-bold">Fixed Borrow</h1>
        <h4 className="mb-3 text-xl">Built by Delve</h4>
        <ConnectButton />
        <div className="mt-8 flex items-center justify-center gap-4">
          <MintButton tokenAddress={COLLATERAL} amount={parseEther("1000")} />
        </div>
      </div>

      <div className="flex h-full justify-center">
        <div className="flex flex-col items-center gap-12">
          <StatsBar
            collateralAmountInput={collateralAmountInput}
            afterAmountCollateralValueBase={afterAmountCollateralValueBase}
          />
          {/* Collateral */}
          <SupplyCollateralForm
            collateralTokenAddress={COLLATERAL}
            collateralATokenAddress={COLLATERAL_A_TOKEN}
            onCollateralInputAmountChange={setCollateralAmountInput}
          />

          {/* Debt */}
          <BorrowDebtForm debtTokenAddress={DEBT_TOKEN} />

          {/* Hyperdrive Short */}
          <OpenShortForm duration={duration} setDuration={setDuration} />
        </div>
      </div>
    </div>
  );
}

function calculateCollateralBaseValue(
  totalCollateralBase: BigNumber | undefined,
  collateralAmountInput: BigNumber | undefined,
  collateralDecimals: number | undefined,
  collateralPrice: BigNumber | undefined,
) {
  const totalCollateralBaseValue = formatUnits(
    totalCollateralBase || BigNumber.from(0),
    8,
  );

  const newCollateralAmountBaseValue =
    +formatUnits(
      collateralAmountInput || BigNumber.from(0),
      collateralDecimals,
    ) * +formatUnits(collateralPrice || BigNumber.from(0), 8);

  const afterAmountCollateralValueBase = formatBalance(
    +totalCollateralBaseValue + newCollateralAmountBaseValue,
  );
  return afterAmountCollateralValueBase;
}
