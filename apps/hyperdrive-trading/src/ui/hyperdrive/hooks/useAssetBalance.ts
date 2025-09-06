import { hyperdriveAbi } from "@delvtech/hyperdrive-js";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { useDrift } from "src/ui/drift/useDrift";
import { Address } from "viem";

export function useAssetBalance({
  account,
  assetId,
  hyperdriveAddress,
  chainId,
}: {
  account: Address | undefined;
  assetId: bigint;
  hyperdriveAddress: Address;
  chainId: number;
}): {
  assetBalance: bigint | undefined;
  assetBalanceStatus: QueryStatus;
} {
  const drift = useDrift({ chainId });
  const queryEnabled = !!account && !!drift;
  const { data, status } = useQuery({
    queryKey: makeQueryKey2({
      namespace: "hyperdrive",
      queryId: "assetBalance",
      params: {
        account,
        assetId,
        chainId,
        hyperdriveAddress,
      },
    }),
    queryFn: queryEnabled
      ? async () =>
          drift.read({
            address: hyperdriveAddress,
            abi: hyperdriveAbi,
            fn: "balanceOf",
            args: {
              owner: account,
              tokenId: assetId,
            },
          })
      : undefined,
    enabled: queryEnabled,
  });

  return {
    assetBalance: data,
    assetBalanceStatus: status,
  };
}
