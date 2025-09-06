import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
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
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled = !!account && !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey2({
      namespace: "hyperdrive",
      queryId: "assetBalance",
      params: {
        account,
        assetId,
        chainId,
        hyperdriveAddress: hyperdriveAddress,
      },
    }),
    queryFn: queryEnabled
      ? async () =>
          readHyperdrive.contract.read("balanceOf", {
            owner: account,
            tokenId: assetId,
          })
      : undefined,
    enabled: queryEnabled,
  });

  return {
    assetBalance: data,
    assetBalanceStatus: status,
  };
}
