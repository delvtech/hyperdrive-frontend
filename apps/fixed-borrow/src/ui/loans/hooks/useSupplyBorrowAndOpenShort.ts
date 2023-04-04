import {
  AaveFixedBorrowActionABI,
  HyperdriveGoerliAddresses,
} from "@hyperdrive/core";
import { BigNumber } from "ethers";
import { useContractWrite, usePrepareContractWrite } from "wagmi";

interface UseSupplyBorrowAndOpenShortOptions {
  collateralToken: `0x${string}` | undefined;
  supplyAmount: bigint | undefined;
  borrowAmount: bigint | undefined;
  bondAmount: bigint | undefined;
  maxDeposit: bigint | undefined;
}

export function useSupplyBorrowAndOpenShort({
  collateralToken,
  supplyAmount,
  borrowAmount,
  bondAmount,
  maxDeposit,
}: UseSupplyBorrowAndOpenShortOptions): {
  supplyBorrowAndOpenShort: (() => void) | undefined;
  status: "error" | "success" | "loading" | "idle";
} {
  const enabled = !!collateralToken && !!bondAmount && !!maxDeposit;

  const { config } = usePrepareContractWrite({
    address: HyperdriveGoerliAddresses.aaveFixedBorrowAction,
    abi: AaveFixedBorrowActionABI,
    functionName: "supplyBorrowAndOpenShort",
    enabled,
    args: enabled
      ? [
          collateralToken,
          // It's okay to borrow, but not supply, or vice versa. Default to 0 if
          // the value isn't given.
          BigNumber.from(supplyAmount || "0"),
          BigNumber.from(borrowAmount || "0"),
          BigNumber.from(bondAmount),
          BigNumber.from(maxDeposit),
        ]
      : undefined,
    overrides: {
      gasLimit: BigNumber.from(2_000_000),
    },
  });
  const { write: supplyBorrowAndOpenShort, status } = useContractWrite(config);

  return { supplyBorrowAndOpenShort, status };
}
