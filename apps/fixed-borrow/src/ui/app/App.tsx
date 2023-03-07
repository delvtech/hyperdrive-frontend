import { SparkGoerliAddresses } from "@hyperdrive/spark";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import classNames from "classnames";
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

type TermDuration = "90_DAYS" | "180_DAYS" | "270_DAYS";

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
          <div className="flex w-full flex-col gap-4">
            <div className="daisy-form-control">
              <label className="daisy-label">
                <span className="daisy-label-text">Hyperdrive Short</span>
                <span className="daisy-label-text">
                  Existing shorts: (
                  <button className="daisy-link">
                    {/* TODO: Make a modal open up on click to show your shorts */}
                    5
                  </button>
                  )
                </span>
              </label>
              <label className="daisy-input-group">
                <span className="shrink-0">You Pay</span>
                <input
                  type="text"
                  disabled
                  className="daisy-input-bordered daisy-input w-full"
                />
                <span>DAI</span>
              </label>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDuration("90_DAYS")}
                className={classNames("daisy-btn ", {
                  "daisy-btn-outline daisy-btn-active":
                    duration && duration === "90_DAYS",
                })}
              >
                3 months
              </button>
              <button
                onClick={() => setDuration("180_DAYS")}
                className={classNames("daisy-btn", {
                  "daisy-btn-outline daisy-btn-active":
                    duration && duration === "180_DAYS",
                })}
              >
                6 months
              </button>
              <button
                onClick={() => setDuration("270_DAYS")}
                className={classNames("daisy-btn", {
                  "daisy-btn-outline daisy-btn-active":
                    duration && duration === "270_DAYS",
                })}
              >
                9 months
              </button>
            </div>
          </div>
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
