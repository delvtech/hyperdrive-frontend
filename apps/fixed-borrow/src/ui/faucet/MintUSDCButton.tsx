import { FaucetABI, SparkGoerliAddresses } from "@hyperdrive/spark";
import { parseUnits } from "ethers/lib/utils.js";
import { ReactElement } from "react";
import { DollarIcon } from "src/ui/base/DollarIcon";
import { usePrepareContractWrite, useContractWrite, useAccount } from "wagmi";

export function MintUSDCButton(): ReactElement {
  const { address: account } = useAccount();
  const { config: mintConfig } = usePrepareContractWrite({
    address: SparkGoerliAddresses.faucet as `0x${string}`,
    abi: FaucetABI,
    functionName: "mint",
    args: [
      SparkGoerliAddresses.USDC_token as `0x${string}`,
      account as `0x${string}`,
      parseUnits("500", 8), // doesn't matter, faucet always mints 500 USDC
    ],
  });
  const { write: mintTokens } = useContractWrite(mintConfig);
  return (
    <button
      className="daisy-btn-outline daisy-btn-success daisy-btn mt-4"
      disabled={!mintTokens}
      onClick={() => mintTokens?.()}
    >
      <DollarIcon />
      Mint 500 USDC
    </button>
  );
}
