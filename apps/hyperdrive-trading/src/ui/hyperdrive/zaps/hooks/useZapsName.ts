import { QueryStatus } from "@tanstack/react-query";

import { appConfig, HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { useReadContract } from "wagmi";
interface UseZapsOptions {
  hyperdrive: HyperdriveConfig;
}

export function useZapsName({ hyperdrive }: UseZapsOptions): {
  zaps: any | undefined;
  zapsStatus: QueryStatus;
} {
  const zapsAddress = appConfig.zaps[hyperdrive.chainId];
  const queryEnabled = !!zapsAddress;

  const { data, status } = useReadContract({
    abi: [
      {
        type: "function",
        name: "name",
        inputs: [],
        outputs: [{ name: "", type: "string" }],
      },
    ],
    functionName: "name",
    address: zapsAddress?.address,
    args: [],
    query: {
      enabled: queryEnabled,
    },
  });

  return { zaps: data, zapsStatus: status };
}
