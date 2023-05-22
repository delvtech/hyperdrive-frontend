import { HyperdriveGoerliAddresses } from "@hyperdrive/core";
import { useShorts } from "src/ui/shorts/hooks/useShorts";
import { useAccount } from "wagmi";

interface TotalCoverage {
  amount: bigint;
  /**
   * The average combined fixed rate of all open coverage positions. This is
   * represented as number, eg: `0.0158` that you can multiply by 100 to create
   * a label, eg: "1.58% APR".
   */
  rate: number;
}

export function useTotalCoverage(): {
  totalCoverage: TotalCoverage | undefined;
  totalCoverageStatus: "error" | "success" | "loading";
} {
  const { address: account } = useAccount();
  const { shorts: totalCoverage, shortsStatus: totalCoverageStatus } =
    useShorts({
      account,
      hyperdriveMarket: HyperdriveGoerliAddresses.makerDsrHyperdrive,
      select: (shorts) => {
        if (!shorts.length) {
          return {
            amount: 0n,
            rate: 0,
          };
        }

        // TODO: Map shorts to the amount of coverage they provided and the rate
        // when they were opened.
        return {
          amount: 1n,
          rate: 0.0158,
        };
      },
    });

  return {
    totalCoverage,
    totalCoverageStatus,
  };
}
