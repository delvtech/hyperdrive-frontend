import { findHyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { DAILY_AVERAGE_BLOCK_TOTAL } from "src/base/constants";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
import { useBlockNumber, useChainId } from "wagmi";

export function useLpApy(hyperdriveAddress: Address): {
  lpApy: number | undefined;
  lpApyStatus: "error" | "success" | "loading";
} {
  const chainId = useChainId();
  const { data: blockNumber } = useBlockNumber();
  const { poolInfo: currentPoolInfo } = usePoolInfo({ hyperdriveAddress });
  const appConfig = useAppConfig();
  const hyperdrive = findHyperdriveConfig({
    hyperdriveAddress,
    hyperdrives: appConfig.hyperdrives,
  });
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!blockNumber && !!currentPoolInfo;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("getLpApy", {
      chainId,
      blockNumber: blockNumber?.toString(),
      hyperdrive: hyperdriveAddress,
    }),
    queryFn: queryEnabled
      ? async () => {
          const numBlocksForHistoricalRate =
            DAILY_AVERAGE_BLOCK_TOTAL *
            BigInt(
              appConfig.yieldSources[hyperdrive.yieldSource]
                .historicalRatePeriod,
            );
          return readHyperdrive.getLpApy({
            fromBlock: [31337, 42069].includes(chainId)
              ? // local devnets don't have a lot of blocks, so start from the beginning
                1n
              : // Appconfig tells us how many days to look back for historical rates
                (blockNumber - numBlocksForHistoricalRate) / 12n,
          });
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    lpApy: data?.lpApy,
    lpApyStatus: status,
  };
}
