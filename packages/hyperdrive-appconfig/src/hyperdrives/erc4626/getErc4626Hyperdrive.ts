import { IERC4626HyperdriveRead } from "@delvtech/hyperdrive-artifacts/IERC4626HyperdriveRead";
import { IHyperdrive } from "@delvtech/hyperdrive-artifacts/IHyperdrive";
import { HyperdriveConfig } from "src/hyperdrives/HyperdriveConfig";
import { getErc4626HyperdriveSharesToken } from "src/hyperdrives/erc4626/getErc4626HyperdriveSharesToken";
import { formatHyperdriveName } from "src/hyperdrives/formatHyperdriveName";
import {
  EmptyExtensions,
  TokenConfig,
  getTokenConfig,
} from "src/tokens/getTokenConfig";
import { YieldSourceExtensions } from "src/yieldSources/YieldSourceTokenConfig";
import { Address, PublicClient } from "viem";

export async function getErc4626Hyperdrive({
  publicClient,
  hyperdriveAddress,
  sharesTokenExtensions,
  baseTokenIconUrl,
  sharesTokenIconUrl,
}: {
  publicClient: PublicClient;
  hyperdriveAddress: Address;
  sharesTokenExtensions: YieldSourceExtensions;
  baseTokenIconUrl: string;
  sharesTokenIconUrl: string;
}): Promise<{
  sharesToken: TokenConfig<YieldSourceExtensions>;
  baseToken: TokenConfig<EmptyExtensions>;
  hyperdriveConfig: HyperdriveConfig;
}> {
  const poolConfig = await publicClient.readContract({
    address: hyperdriveAddress,
    abi: IHyperdrive.abi,
    functionName: "getPoolConfig",
  });

  const sharesToken = await getErc4626HyperdriveSharesToken({
    publicClient,
    sharesTokenAddress: poolConfig.vaultSharesToken,
    extensions: sharesTokenExtensions,
    iconUrl: sharesTokenIconUrl,
  });

  const baseToken = await getTokenConfig({
    address: poolConfig.baseToken,
    publicClient,
    extensions: {},
    tags: [],
    iconUrl: baseTokenIconUrl,
  });

  const hyperdriveName = formatHyperdriveName({
    baseTokenSymbol: baseToken.symbol,
    termLengthMS: Number(poolConfig.positionDuration) * 1000,
    yieldSourceShortName: sharesToken.extensions.shortName,
  });

  const hyperdriveConfig: HyperdriveConfig = {
    address: hyperdriveAddress,
    name: hyperdriveName,
    decimals: await publicClient.readContract({
      address: hyperdriveAddress,
      abi: IERC4626HyperdriveRead.abi,
      functionName: "decimals",
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
