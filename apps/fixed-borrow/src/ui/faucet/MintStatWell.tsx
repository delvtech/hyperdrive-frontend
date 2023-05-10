import { SparkGoerliAddresses, FaucetABI } from "@hyperdrive/spark";
import { BigNumber } from "ethers";
import { ReactElement } from "react";
import { StatWell } from "src/ui/base/StatWell/StatWell";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  Address,
} from "wagmi";

export function MintStatWell({
  tokenAddress,
  amount,
  label,
  stat,
}: {
  tokenAddress: Address;
  amount: bigint;
  label: string;
  stat: string;
}): ReactElement {
  const { address: account } = useAccount();
  const { config: mintConfig } = usePrepareContractWrite({
    address: SparkGoerliAddresses.faucet,
    abi: FaucetABI,
    functionName: "mint",
    args: [tokenAddress, account as Address, BigNumber.from(amount)],
  });
  const { write: mintTokens } = useContractWrite(mintConfig);
  return (
    <StatWell
      label={label}
      stat={stat}
      onClick={mintTokens ? () => mintTokens() : undefined}
    />
  );
}
