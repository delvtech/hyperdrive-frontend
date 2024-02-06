import { IERC4626HyperdriveRead } from "@hyperdrive/artifacts/IERC4626HyperdriveRead";
import { IHyperdrive } from "@hyperdrive/artifacts/IHyperdrive";
import { SupportedChainId } from "src/chains/supportedChains";
import { HyperdriveConfigOld } from "src/hyperdrive/HyperdriveConfigOld";
import { formatHyperdriveName } from "src/hyperdrive/formatHyperdriveName";
import { TokenConfigOld } from "src/token/TokenConfigOld";
import { getTokenIconUrl } from "src/token/tokenIconsUrlsOld";
import { yieldSourcesOld } from "src/yieldSources/yieldSources";
import { Address, PublicClient } from "viem";
import { erc20ABI } from "wagmi";

export async function getErc4626HyperdriveConfig({
  hyperdriveAddress,
  publicClient,
  yieldSource,
}: {
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  yieldSource: keyof typeof yieldSourcesOld;
}): Promise<HyperdriveConfigOld> {
  const { positionDuration, baseToken: baseTokenAddress } =
    await publicClient.readContract({
      abi: IHyperdrive.abi,
      functionName: "getPoolConfig",
      address: hyperdriveAddress,
    });

  const chainId = (await publicClient.getChainId()) as SupportedChainId;
  const baseToken: TokenConfigOld = {
    address: baseTokenAddress,
    decimals: await publicClient.readContract({
      address: baseTokenAddress,
      abi: erc20ABI,
      functionName: "decimals",
    }),
    name: await publicClient.readContract({
      address: baseTokenAddress,
      abi: erc20ABI,
      functionName: "name",
    }),

    symbol: await publicClient.readContract({
      address: baseTokenAddress,
      abi: erc20ABI,
      functionName: "symbol",
    }),

    iconUrl: getTokenIconUrl({ address: baseTokenAddress, chainId }),
  };

  const sharesToken: TokenConfigOld = await fetchSharesToken(
    publicClient,
    hyperdriveAddress,
  );

  const termLengthMS = Number(positionDuration) * 1000;
  const name = formatHyperdriveName({
    termLengthMS,
    baseTokenSymbol: baseToken.symbol,
    yieldSourceShortName: yieldSourcesOld[yieldSource].shortName,
  });

  return {
    address: hyperdriveAddress,
    termLengthMS,
    name,
    yieldSource,
    withdrawOptions: {
      // Base token withdrawals are enabled in a 4626 hyperdrive, because, for
      // example, sDAI can be converted back to DAI in a single transaction by
      // the DSR smart contract.
      isBaseTokenWithdrawalEnabled: true,
    },
    baseToken,
    sharesToken,
  };
}
async function fetchSharesToken(
  publicClient: PublicClient,
  hyperdriveAddress: Address,
) {
  const sharesTokenAddress = await publicClient.readContract({
    abi: IERC4626HyperdriveRead.abi,
    functionName: "vault",
    address: hyperdriveAddress,
  });
  const sharesToken: TokenConfigOld = {
    address: sharesTokenAddress,
    decimals: await publicClient.readContract({
      address: sharesTokenAddress,
      abi: erc20ABI,
      functionName: "decimals",
    }),
    name: await publicClient.readContract({
      address: sharesTokenAddress,
      abi: erc20ABI,
      functionName: "name",
    }),

    symbol: await publicClient.readContract({
      address: sharesTokenAddress,
      abi: erc20ABI,
      functionName: "symbol",
    }),
  };
  return sharesToken;
}
