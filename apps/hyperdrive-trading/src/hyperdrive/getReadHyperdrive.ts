import {
  ReadHyperdrive,
  ReadMetaMorphoHyperdrive,
} from "@delvtech/hyperdrive-viem";
import { TokenConfig } from "@hyperdrive/appconfig";
import { sdkCache } from "src/sdk/sdkCache";
import { getIsMetaMorpho } from "src/vaults/isMetaMorpho";
import { getIsSteth } from "src/vaults/isSteth";
import { Address, PublicClient } from "viem";

export function getReadHyperdrive({
  hyperdriveAddress,
  publicClient,
  sharesToken,
}: {
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  sharesToken: TokenConfig<any>;
}): ReadHyperdrive {
  const isSteth = getIsSteth(sharesToken);
  // if (isSteth) {
  //   return new ReadStEthHyperdrive({
  //     address: hyperdriveAddress,
  //     publicClient,
  //     cache: sdkCache,
  //     namespace: publicClient.chain?.id.toString(),
  //   });
  // }

  const isMetaMorpho = getIsMetaMorpho(sharesToken);
  if (isMetaMorpho) {
    return new ReadMetaMorphoHyperdrive({
      address: hyperdriveAddress,
      publicClient,
      cache: sdkCache,
      namespace: publicClient.chain?.id.toString(),
    });
  }

  return new ReadHyperdrive({
    address: hyperdriveAddress,
    publicClient,
    cache: sdkCache,
    namespace: publicClient.chain?.id.toString(),
  });
}
