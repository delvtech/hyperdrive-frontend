import { IHyperdrive } from "@hyperdrive/artifacts/dist/IHyperdrive";
import { HyperdriveConfig } from "src/appconfig/types";
import { Address, PublicClient } from "viem";
import { erc20ABI } from "wagmi";

export async function getHyperdriveConfig(
  hyperdriveAddress: Address,
  publicClient: PublicClient,
): Promise<HyperdriveConfig> {
  // Time in seconds
  const { positionDuration, baseToken } = await publicClient.readContract({
    abi: IHyperdrive.abi,
    functionName: "getPoolConfig",
    address: hyperdriveAddress,
  });

  return {
    address: hyperdriveAddress,
    termLengthMS: Number(positionDuration) * 1000,
    name: "Mock Yield Source",
    yieldSource: "Mock Yield Source",
    baseToken: {
      address: baseToken,
      decimals: 18, // No need to fetch this, we know it's 18
      name: await publicClient.readContract({
        address: baseToken,
        abi: erc20ABI,
        functionName: "name",
      }),

      symbol: await publicClient.readContract({
        address: baseToken,
        abi: erc20ABI,
        functionName: "symbol",
      }),
      iconUrl:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmMGM3NzAiIHN0cm9rZS13aWR0aD0iMS43MTQyODU3MTQyODU3MTQyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN3aXRjaC1jYW1lcmEiPjxwYXRoIGQ9Ik0xMSAxOUg0YTIgMiAwIDAgMS0yLTJWN2EyIDIgMCAwIDEgMi0yaDUiLz48cGF0aCBkPSJNMTMgNWg3YTIgMiAwIDAgMSAyIDJ2MTBhMiAyIDAgMCAxLTIgMmgtNSIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiLz48cGF0aCBkPSJtMTggMjItMy0zIDMtMyIvPjxwYXRoIGQ9Im02IDIgMyAzLTMgMyIvPjwvc3ZnPg==",
    },
  };
}
