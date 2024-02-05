import { IERC4626HyperdriveRead } from "@hyperdrive/artifacts/dist/IERC4626HyperdriveRead";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { getErc4626HyperdriveSharesToken } from "src/hyperdrives/erc4626/getErc4626HyperdriveSharesToken";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import { TokenConfig } from "src/tokens/TokenConfig";
import { getTokenConfig } from "src/tokens/getTokenConfig";
import {
  YieldSourceExtensions,
  YieldSourceTokenConfig,
} from "src/yieldSources/YieldSourceTokenConfig";
import { Address, PublicClient } from "viem";

export async function getErc4626Hyperdrive({
  publicClient,
  hyperdriveAddress,
  sharesTokenExtensions,
}: {
  publicClient: PublicClient;
  hyperdriveAddress: Address;
  sharesTokenExtensions: YieldSourceExtensions;
}): Promise<{
  sharesToken: YieldSourceTokenConfig;
  baseToken: TokenConfig;
  hyperdriveConfig: HyperdriveConfig;
}> {
  const sharesToken = await getErc4626HyperdriveSharesToken({
    publicClient,
    hyperdriveAddress: hyperdriveAddress,
    extensions: sharesTokenExtensions,
  });

  const poolConfig = await publicClient.readContract({
    address: hyperdriveAddress,
    abi: IERC4626HyperdriveRead.abi,
    functionName: "getPoolConfig",
  });

  const baseToken = await getTokenConfig({
    address: poolConfig.baseToken,
    publicClient,
    extensions: {},
    tags: [],
  });

  const hyperdriveConfig: HyperdriveConfig = {
    address: hyperdriveAddress,
    name: formatHyperdriveName({
      baseTokenSymbol: baseToken.symbol,
      termLengthMS: Number(poolConfig.positionDuration) * 1000,
      yieldSourceShortName: sharesToken.extensions.shortName,
    }),
    baseToken: baseToken.address,
    sharesToken: sharesToken.address,
    withdrawOptions: {
      isBaseTokenWithdrawalEnabled: true,
    },
    poolConfig,
  };

  return { sharesToken, baseToken, hyperdriveConfig: hyperdriveConfig };
}
