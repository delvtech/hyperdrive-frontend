import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import { formatHyperdriveName } from "src/appconfig/hyperdrives/formatHyperdriveName";
import { HyperdriveConfig, Token } from "src/appconfig/types";
import { yieldSources } from "src/appconfig/yieldSources/yieldSources";
import { Address, PublicClient } from "viem";
import { erc20ABI } from "wagmi";

export async function getErc4626HyperdriveConfig({
  hyperdriveAddress,
  publicClient,
  yieldSource,
}: {
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  yieldSource: keyof typeof yieldSources;
}): Promise<HyperdriveConfig> {
  const { positionDuration, baseToken: baseTokenAddress } =
    await publicClient.readContract({
      abi: IHyperdrive.abi,
      functionName: "getPoolConfig",
      address: hyperdriveAddress,
    });

  const baseToken: Token = {
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

    // TODO: Don't hardcode this, it should be looked up in a object that maps
    // token addresses to icon urls
    iconUrl:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmMGM3NzAiIHN0cm9rZS13aWR0aD0iMS43MTQyODU3MTQyODU3MTQyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN3aXRjaC1jYW1lcmEiPjxwYXRoIGQ9Ik0xMSAxOUg0YTIgMiAwIDAgMS0yLTJWN2EyIDIgMCAwIDEgMi0yaDUiLz48cGF0aCBkPSJNMTMgNWg3YTIgMiAwIDAgMSAyIDJ2MTBhMiAyIDAgMCAxLTIgMmgtNSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiLz48cGF0aCBkPSJtMTggMjItMy0zIDMtMyIvPjxwYXRoIGQ9Im02IDIgMyAzLTMgMyIvPjwvc3ZnPg==",
  };

  // TODO: This should be specific to the yield source
  const sharesToken: Token = {
    name: "",
    symbol: "",
    decimals: 0,
    address: "0x",
  };

  const termLengthMS = Number(positionDuration) * 1000;
  const name = formatHyperdriveName({
    termLengthMS,
    baseTokenSymbol: baseToken.symbol,
    yieldSourceShortName: yieldSources[yieldSource].shortName,
  });

  return {
    address: hyperdriveAddress,
    termLengthMS,
    name,
    yieldSource,
    baseToken,
    sharesToken,
  };
}
